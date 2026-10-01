const http = require('http');

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
    const err = await send('Runtime.evaluate', {
      expression: `(() => {
        const portal = document.querySelector('nextjs-portal');
        if (!portal || !portal.shadowRoot) return 'no portal';
        const dialog = portal.shadowRoot.querySelector('[role="dialog"]') || portal.shadowRoot.querySelector('.error-header') || portal.shadowRoot;
        return dialog.innerText;
      })()`,
      returnByValue: true
    });
    console.log('Next.js Dialog text:\n', err.result.value);
    ws.close();
    process.exit(0);
  });
}
main();
