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
    const secTop = (await send('Runtime.evaluate', {
      expression: 'document.getElementById("transformations").offsetTop',
      returnByValue: true
    })).result.value;

    for (let off = 1150; off <= 1350; off += 50) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + off});` });
      await new Promise(r => setTimeout(r, 60));
      const r = await send('Runtime.evaluate', {
        expression: `(() => {
          const c0 = document.querySelectorAll("#transformations .sticky")[0];
          const r0 = c0.getBoundingClientRect();
          const p = c0.parentElement;
          const pr = p.getBoundingClientRect();
          return {
            off: ${off},
            c0Top: Math.round(r0.top),
            c0Bottom: Math.round(r0.bottom),
            pTop: Math.round(pr.top),
            pBottom: Math.round(pr.bottom),
            pPaddingBottom: getComputedStyle(p).paddingBottom,
            c0StyleTop: c0.style.top
          };
        })()`,
        returnByValue: true
      });
      console.log(r.result.value);
    }
    ws.close();
    process.exit(0);
  });
}
run();
