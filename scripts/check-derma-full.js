const http = require('http');

async function main() {
  const json = await new Promise(resolve => {
    http.get('http://127.0.0.1:9222/json', res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });

  const page = json.find(t => t.id === 'DF5247FF0EF6D7602570B0AE886A3337');
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
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
    await new Promise(r => setTimeout(r, 200));

    for (let sy of [0, 1000, 2000, 2381, 2700, 3000, 3400, 3791, 4200]) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${sy})` });
      await new Promise(r => setTimeout(r, 100));
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const s = document.querySelector('#suites');
          const track = s.querySelector('.will-change-transform');
          return {
            sy: window.scrollY,
            sTop: Math.round(s.getBoundingClientRect().top),
            transform: track ? track.style.transform : null
          };
        })()`,
        returnByValue: true
      });
      console.log('derma-gold:', res.result.value);
    }

    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
