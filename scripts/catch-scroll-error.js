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
        resolve(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  ws.addEventListener('open', async () => {
    // Add error listener
    await send('Runtime.evaluate', {
      expression: `(() => {
        window.__ERRORS = [];
        window.addEventListener('error', e => window.__ERRORS.push({ message: e.message, filename: e.filename, lineno: e.lineno, error: String(e.error) }));
        window.addEventListener('unhandledrejection', e => window.__ERRORS.push({ reason: String(e.reason) }));
      })()`
    });

    // Scroll to 3400 then 3700 then 4000
    for (let sy of [3000, 3300, 3500, 3700, 4000]) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${sy})` });
      await new Promise(r => setTimeout(r, 200));
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const s = document.querySelector('#core-expertise');
          return {
            sy: window.scrollY,
            errors: window.__ERRORS,
            portalError: document.querySelector('nextjs-portal')?.shadowRoot?.innerText?.slice(0, 300)
          };
        })()`,
        returnByValue: true
      });
      console.log(`At ${sy}:`, JSON.stringify(res.result.value));
    }

    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
