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
    const details = await send('Runtime.evaluate', {
      expression: `(() => {
        const deck = document.querySelector("#transformations .relative.flex");
        const cards = Array.from(deck.children);
        return {
          deckHeight: deck.offsetHeight,
          deckPaddingBottom: getComputedStyle(deck).paddingBottom,
          cards: cards.map(c => ({
            tag: c.tagName,
            class: c.className,
            offsetTop: c.offsetTop,
            offsetHeight: c.offsetHeight,
            marginTop: getComputedStyle(c).marginTop,
            marginBottom: getComputedStyle(c).marginBottom,
            top: getComputedStyle(c).top,
            position: getComputedStyle(c).position
          }))
        };
      })()`,
      returnByValue: true
    });
    console.log(JSON.stringify(details.result.value, null, 2));
    ws.close();
    process.exit(0);
  });
}
run();
