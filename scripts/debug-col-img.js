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
    const detail = (await send('Runtime.evaluate', {
      expression: `(() => {
        const grid = document.querySelector('#transformations article .grid');
        const colImg = grid.children[0];
        const cs = window.getComputedStyle(colImg);
        const gcs = window.getComputedStyle(grid);
        return {
          gridAlignItems: gcs.alignItems,
          gridHeight: gcs.height,
          gridTemplateRows: gcs.gridTemplateRows,
          colAlignSelf: cs.alignSelf,
          colMarginTop: cs.marginTop,
          colHeight: cs.height,
          colTop: colImg.getBoundingClientRect().top,
          parentTop: grid.getBoundingClientRect().top
        };
      })()`,
      returnByValue: true
    })).result.value;

    console.log('Detail:', detail);
    process.exit(0);
  });
}
main().catch(console.error);
