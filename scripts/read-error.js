const http = require('http');

async function main() {
  const json = await new Promise(resolve => {
    http.get('http://127.0.0.1:9222/json', res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });

  const page = json.find(t => t.id === 'D41592C0B3F442965CF5296189974B86');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise(resolve => {
    const curId = id++;
    const handler = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === curId) {
        ws.removeEventListener('message', handler);
        resolve(data);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  ws.addEventListener('open', async () => {
    const res = await send('Runtime.evaluate', {
      expression: `(() => {
        const portal = document.querySelector('nextjs-portal');
        if (!portal) return 'No portal found';
        const root = portal.shadowRoot || portal;
        return root.innerText || root.textContent;
      })()`,
      returnByValue: true
    });
    console.log('PORTAL ERROR:\n', res.result.result.value);
    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
