const http = require('http');

async function main() {
  const json = await new Promise(resolve => {
    http.get('http://127.0.0.1:9222/json', res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });

  const page = json.find(t => t.url.includes('localhost:3000'));
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
        const el = document.querySelector('#transformations .relative.flex');
        const s = document.querySelector('#transformations');
        return {
          sectionHeight: s ? s.offsetHeight : null,
          deckContainerHeight: el ? el.offsetHeight : null,
          deckContainerPB: el ? window.getComputedStyle(el).paddingBottom : null,
          deckContainerClass: el ? el.className : null
        };
      })()`,
      returnByValue: true
    });
    console.log(JSON.stringify(res.result.value, null, 2));
    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
