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
    const secInfo = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#suites');
        const nextSec = s.nextElementSibling;
        return {
          suitesOffsetTop: s.offsetTop,
          suitesHeight: s.offsetHeight,
          nextSecId: nextSec ? nextSec.id : null,
          nextSecTop: nextSec ? nextSec.offsetTop : null
        };
      })()`,
      returnByValue: true
    });
    console.log('derma-gold section layout:', secInfo.result.value);

    // Let's scroll derma-gold from start of suites to the end of suites
    const { suitesOffsetTop, suitesHeight } = secInfo.result.value;
    const vh = 641;
    const scrollRange = suitesHeight - vh; // Exactly the distance it is pinned!
    console.log(`Scroll range pinned: 0 to ${scrollRange}`);

    for (let progress = 0; progress <= 1.0; progress += 0.2) {
      const sy = Math.round(suitesOffsetTop + progress * scrollRange);
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${sy})` });
      await new Promise(r => setTimeout(r, 100));
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const s = document.querySelector('#suites');
          const track = s.querySelector('.will-change-transform');
          const cards = track ? Array.from(track.children) : [];
          return {
            progress: ${progress.toFixed(2)},
            trackTransform: track ? track.style.transform : null,
            card0Left: cards[0] ? Math.round(cards[0].getBoundingClientRect().left) : null,
            lastCardRight: cards[cards.length - 1] ? Math.round(cards[cards.length - 1].getBoundingClientRect().right) : null,
            windowWidth: window.innerWidth
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

main().catch(console.error);
