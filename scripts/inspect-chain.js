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

    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + 1300});` });
    await new Promise(r => setTimeout(r, 60));

    const res = await send('Runtime.evaluate', {
      expression: `(() => {
        const c0 = document.querySelectorAll("#transformations .sticky")[0];
        let el = c0;
        const chain = [];
        while (el && el !== document.body) {
          const r = el.getBoundingClientRect();
          const s = getComputedStyle(el);
          chain.push({
            tag: el.tagName,
            cls: el.className ? el.className.toString().substring(0, 50) : '',
            top: Math.round(r.top),
            bottom: Math.round(r.bottom),
            height: Math.round(r.height),
            overflow: s.overflow,
            overflowY: s.overflowY,
            position: s.position,
            transform: s.transform
          });
          el = el.parentElement;
        }
        return chain;
      })()`,
      returnByValue: true
    });
    console.log(JSON.stringify(res.result.value, null, 2));
    ws.close();
    process.exit(0);
  });
}
run();
