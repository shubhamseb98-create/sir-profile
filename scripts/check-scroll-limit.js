const http = require('http');

async function main() {
  const json = await new Promise(resolve => {
    http.get('http://127.0.0.1:9222/json', res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });

  const page = json.find(t => t.id === 'D41592C0B3F442965CF5296189974B86') || json[0];
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
    // When we do window.scrollTo(0, 4000), what is actual window.scrollY?
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 4000)' });
    await new Promise(r => setTimeout(r, 200));

    const check = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#core-expertise');
        const next = document.querySelector('#roles-ecosystems');
        return {
          windowScrollY: window.scrollY,
          maxDocumentScroll: document.documentElement.scrollHeight - window.innerHeight,
          secOffsetTop: s.offsetTop,
          secHeight: s.offsetHeight,
          secRect: s.getBoundingClientRect(),
          nextRect: next ? next.getBoundingClientRect() : null
        };
      })()`,
      returnByValue: true
    });
    console.log('Scroll to 4000 check:', check.result.value);

    // Let's test scroll to 5000
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 5000)' });
    await new Promise(r => setTimeout(r, 200));
    const check5 = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#core-expertise');
        return {
          windowScrollY: window.scrollY,
          secRect: s.getBoundingClientRect()
        };
      })()`,
      returnByValue: true
    });
    console.log('Scroll to 5000 check:', check5.result.value);

    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
