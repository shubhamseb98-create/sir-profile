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
        const card = document.querySelector('#transformations article');
        const grid = card.querySelector('.grid');
        const colContent = grid.children[1];
        const actionRow = colContent.querySelector('.border-t');
        
        return {
          cardClientHeight: card.clientHeight,
          gridClientHeight: grid.clientHeight,
          colContentClientHeight: colContent.clientHeight,
          colContentStyleHeight: window.getComputedStyle(colContent).height,
          actionRowOffsetTop: actionRow.offsetTop,
          actionRowClientHeight: actionRow.clientHeight,
          colContentChildren: Array.from(colContent.children).map(c => ({
            tag: c.tagName,
            cls: c.className,
            h: c.clientHeight
          }))
        };
      })()`,
      returnByValue: true
    })).result.value;

    console.log('ColContent detail:', detail);
    process.exit(0);
  });
}
main().catch(console.error);
