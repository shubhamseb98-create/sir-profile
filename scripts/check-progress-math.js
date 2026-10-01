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
    for (let sy of [2710, 3000, 3300, 3500, 3800, 4200, 4800, 5200]) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${sy})` });
      await new Promise(r => setTimeout(r, 100));
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const s = document.querySelector('#core-expertise');
          const r = s.getBoundingClientRect();
          const track = s.querySelector('.sticky div.flex-1 > div');
          return {
            windowScrollY: window.scrollY,
            sTop: r.top,
            sBottom: r.bottom,
            sHeight: r.height,
            transform: track ? track.style.transform : null,
            // What is (start start to end end) progress?
            // start start: s.top === 0
            // end end: s.bottom === window.innerHeight
            // distance = s.height - window.innerHeight
            // scrolledIn = -s.top
            // expectedProgress = Math.max(0, Math.min(1, (-r.top) / (r.height - window.innerHeight)))
            expectedP: Math.max(0, Math.min(1, (-r.top) / (r.height - window.innerHeight)))
          };
        })()`,
        returnByValue: true
      });
      console.log(`Scroll ${sy}:`, JSON.stringify(res.result.value));
    }

    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
