const http = require('http');
const fs = require('fs');

async function main() {
  const json = await new Promise(r => http.get('http://127.0.0.1:9222/json', res => {
    let d = ''; res.on('data', c => d += c); res.on('end', () => r(JSON.parse(d)));
  }));
  const page = json.find(t => t.url.includes('localhost:3000'));
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise(res => {
    const curId = id++;
    const handler = (e) => {
      const data = JSON.parse(e.data);
      if (data.id === curId) { ws.removeEventListener('message', handler); res(data.result); }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  ws.addEventListener('open', async () => {
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1366,
      height: 641,
      deviceScaleFactor: 1,
      mobile: false
    });

    await send('Page.reload');
    await new Promise(r => setTimeout(r, 2200));

    const info = (await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.getElementById('transformations');
        return {
          top: el.offsetTop,
          h: el.offsetHeight,
          range: el.offsetHeight - window.innerHeight
        };
      })()`,
      returnByValue: true
    })).result.value;

    console.log('Transformations info:', info);

    // Test card 1, card 2 (which user showed in screenshot 1 and 2), and card 3
    const tests = [
      { name: 'test_card1', p: 0.05 },
      { name: 'test_card2', p: 0.48 },
      { name: 'test_card3', p: 0.92 }
    ];

    for (const t of tests) {
      const scrollY = Math.round(info.top + t.p * info.range);
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${scrollY})` });
      await new Promise(r => setTimeout(r, 200));

      const bounds = (await send('Runtime.evaluate', {
        expression: `(() => {
          const el = document.getElementById('transformations');
          const header = el.querySelector('h2');
          const accent = el.querySelector('.bg-gradient-to-r');
          const btn = el.querySelector('a[href="/case-studies"]');
          const activeCard = Array.from(el.querySelectorAll('article')).find(c => {
            const r = c.getBoundingClientRect();
            return r.top > 100 && r.bottom < 640;
          }) || el.querySelector('article');
          const img = activeCard?.querySelector('img');
          const footer = activeCard?.querySelector('.border-t');

          const hRect = header?.getBoundingClientRect();
          const accRect = accent?.getBoundingClientRect();
          const btnRect = btn?.getBoundingClientRect();
          const cardRect = activeCard?.getBoundingClientRect();
          const imgRect = img?.getBoundingClientRect();
          const footRect = footer?.getBoundingClientRect();

          return {
            headerBottom: Math.round(hRect?.bottom || 0),
            accentBottom: Math.round(accRect?.bottom || 0),
            btnBottom: Math.round(btnRect?.bottom || 0),
            cardTop: Math.round(cardRect?.top || 0),
            cardBottom: Math.round(cardRect?.bottom || 0),
            cardHeight: Math.round(cardRect?.height || 0),
            gapHeaderToCard: Math.round((cardRect?.top || 0) - Math.max(accRect?.bottom || 0, btnRect?.bottom || 0)),
            imgBottom: Math.round(imgRect?.bottom || 0),
            imgToCardBottomGap: Math.round((cardRect?.bottom || 0) - (imgRect?.bottom || 0)),
            footerBottom: Math.round(footRect?.bottom || 0),
            footerToCardBottomGap: Math.round((cardRect?.bottom || 0) - (footRect?.bottom || 0))
          };
        })()`,
        returnByValue: true
      })).result.value;

      console.log(`${t.name} bounds:`, bounds);

      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`scripts/${t.name}.png`, Buffer.from(shot.data, 'base64'));
    }

    process.exit(0);
  });
}
main().catch(console.error);
