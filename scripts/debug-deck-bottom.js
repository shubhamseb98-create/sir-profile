const http = require('http');

async function main() {
  const json = await new Promise(resolve => {
    http.get('http://127.0.0.1:9222/json', res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });
  const page = json.find(t => t.url.includes('localhost:3000')) || json[0];
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
    const sTop = await send('Runtime.evaluate', {
      expression: 'document.querySelector("#transformations").offsetTop',
      returnByValue: true
    });
    const top = sTop.result.value;

    for (let offset of [1200, 1250, 1300, 1350, 1400]) {
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, ${top + offset}); window.dispatchEvent(new Event("scroll"));`
      });
      await new Promise(r => setTimeout(r, 50));
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const s = document.querySelector('#transformations');
          const deck = s.querySelector('.relative.flex');
          const cards = Array.from(s.querySelectorAll('article'));
          const r = deck.getBoundingClientRect();
          return {
            offset: ${offset},
            deckBottom: Math.round(r.bottom),
            deckTop: Math.round(r.top),
            card0Bottom: Math.round(cards[0].getBoundingClientRect().bottom),
            card0Top: Math.round(cards[0].getBoundingClientRect().top),
            card2Top: Math.round(cards[2].getBoundingClientRect().top)
          };
        })()`,
        returnByValue: true
      });
      console.log(res.result.value);
    }

    ws.close();
    process.exit(0);
  });
}
main();
