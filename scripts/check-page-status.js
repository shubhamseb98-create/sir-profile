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
    // Reload page to catch fresh compile
    await send('Page.reload');
    await new Promise(r => setTimeout(r, 2500));

    // Check for any runtime errors
    const err = await send('Runtime.evaluate', {
      expression: `(() => {
        const nextError = document.querySelector('nextjs-portal');
        const s = document.querySelector('#core-expertise');
        return {
          hasPortalError: !!nextError,
          portalText: nextError ? nextError.innerText : null,
          hasSection: !!s,
          secOffsetTop: s ? s.offsetTop : null,
          secHeight: s ? s.offsetHeight : null
        };
      })()`,
      returnByValue: true
    });
    console.log('Page status:', JSON.stringify(err, null, 2));

    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
