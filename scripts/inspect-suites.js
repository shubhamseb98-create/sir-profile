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
    const res = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#suites');
        const key = Object.keys(s).find(k => k.startsWith('__reactFiber'));
        let curr = s[key];
        while (curr) {
          if (curr.type && typeof curr.type === 'function') {
            return curr.type.toString();
          }
          curr = curr.return;
        }
        return 'Not found';
      })()`,
      returnByValue: true
    });
    console.log('FULL COMPONENT CODE:\n', res.result.value);
    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
