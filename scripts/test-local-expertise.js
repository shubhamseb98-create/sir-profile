const http = require('http');

async function main() {
  const json = await new Promise(resolve => {
    http.get('http://127.0.0.1:9222/json', res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });

  const page = json.find(t => t.id === 'D41592C0B3F442965CF5296189974B86') || json[0];
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise(resolve => {
    const curId = id++;
    const handler = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === curId) {
        ws.removeEventListener('message', handler);
        resolve(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  ws.addEventListener('open', async () => {
    const sInfo = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#core-expertise');
        return {
          offsetTop: s.offsetTop,
          offsetHeight: s.offsetHeight,
          windowHeight: window.innerHeight,
          windowWidth: window.innerWidth
        };
      })()`,
      returnByValue: true
    });
    const { offsetTop, offsetHeight, windowHeight } = sInfo.result.value;
    const pinnedDist = offsetHeight - windowHeight;
    console.log(`Testing scroll with dispatchEvent from ${offsetTop} to ${offsetTop + pinnedDist}`);

    for (let pct = 0; pct <= 100; pct += 10) {
      const sy = Math.round(offsetTop + (pct / 100) * pinnedDist);
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, ${sy}); window.dispatchEvent(new Event('scroll'));`
      });
      await new Promise(r => setTimeout(r, 100));

      const frame = await send('Runtime.evaluate', {
        expression: `(() => {
          const s = document.querySelector('#core-expertise');
          const track = s.querySelector('.sticky div.flex-1 > div');
          const cards = Array.from(track.children);
          const activeText = s.querySelector('.sticky span.font-mono')?.textContent;
          return {
            pct: ${pct} + '%',
            sy: window.scrollY,
            activeText,
            transform: track.style.transform,
            card0Left: Math.round(cards[0].getBoundingClientRect().left),
            card9Right: Math.round(cards[cards.length - 1].getBoundingClientRect().right),
            isCard9Visible: cards[cards.length - 1].getBoundingClientRect().left < window.innerWidth && cards[cards.length - 1].getBoundingClientRect().right > 0
          };
        })()`,
        returnByValue: true
      });
      console.log(frame.result.value);
    }

    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
