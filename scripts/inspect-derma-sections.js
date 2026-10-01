const http = require('http');

async function main() {
  const json = await new Promise(resolve => {
    http.get('http://127.0.0.1:9222/json', res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });

  const page = json.find(t => t.url.includes('derma-gold'));
  if (!page) { console.log('Derma page not found'); return; }
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
    const res = await send('Runtime.evaluate', {
      expression: `(() => {
        const els = Array.from(document.querySelectorAll('section'));
        return els.map((s, i) => ({
          i,
          id: s.id,
          h2: s.querySelector('h2')?.innerText,
          h3: s.querySelector('h3')?.innerText,
          height: s.offsetHeight
        }));
      })()`,
      returnByValue: true
    });
    console.log(res.result.value);
    ws.close();
    process.exit(0);
  });
}
main();
