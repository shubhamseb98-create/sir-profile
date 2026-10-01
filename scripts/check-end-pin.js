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
    for (let sy of [5000, 5146, 5200, 5300, 5400, 5787]) {
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, ${sy}); window.dispatchEvent(new Event('scroll'));`
      });
      await new Promise(r => setTimeout(r, 100));

      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const s = document.querySelector('#core-expertise');
          const r = s.getBoundingClientRect();
          const track = s.querySelector('.sticky div.flex-1 > div');
          const cards = Array.from(track.children);
          const range = r.height - window.innerHeight;
          const p = Math.max(0, Math.min(1, -r.top / range));
          return {
            sy: window.scrollY,
            sTop: r.top,
            sBottom: r.bottom,
            range,
            p,
            transform: track.style.transform,
            card9Left: Math.round(cards[9].getBoundingClientRect().left),
            card9Right: Math.round(cards[9].getBoundingClientRect().right),
            windowWidth: window.innerWidth
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
