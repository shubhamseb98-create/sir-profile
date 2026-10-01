const http = require('http');
async function run() {
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
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await new Promise(r => setTimeout(r, 100));
    const r = await send('Runtime.evaluate', {
      expression: `(() => {
        const c0 = document.querySelectorAll("#transformations .sticky")[0];
        const c1 = document.querySelectorAll("#transformations .sticky")[1];
        const c2 = document.querySelectorAll("#transformations .sticky")[2];
        const deck = document.querySelector("#transformations .relative.flex");
        return {
          c0OffsetTop: c0.offsetTop,
          c1OffsetTop: c1.offsetTop,
          c2OffsetTop: c2.offsetTop,
          deckOffsetTop: deck.offsetTop,
          deckHeight: deck.offsetHeight
        };
      })()`,
      returnByValue: true
    });
    console.log(r.result.value);
    ws.close();
    process.exit(0);
  });
}
run();
