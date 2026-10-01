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
    // Scroll to 0 first!
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
    await new Promise(r => setTimeout(r, 300));

    for (let sy of [0, 1000, 2000, 2710, 3000, 3500, 4000, 4500, 5000, 5200, 6000]) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${sy})` });
      await new Promise(r => setTimeout(r, 150));
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const s = document.querySelector('#core-expertise');
          const track = s.querySelector('.sticky div.flex-1 > div');
          const activeText = s.querySelector('.sticky span.font-mono')?.textContent;
          return {
            sy: window.scrollY,
            sTop: Math.round(s.getBoundingClientRect().top),
            sBottom: Math.round(s.getBoundingClientRect().bottom),
            activeText,
            transform: track ? track.style.transform : null
          };
        })()`,
        returnByValue: true
      });
      console.log(res.result.value);
    }

    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
