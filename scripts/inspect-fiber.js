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
    // In page, let's find the React fiber on #core-expertise and inspect its hooks
    const fiberInfo = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#core-expertise');
        const key = Object.keys(s).find(k => k.startsWith('__reactFiber'));
        let fiber = s[key];
        while (fiber && fiber.type?.name !== 'ExpertiseCards') {
          fiber = fiber.return;
        }
        return {
          found: !!fiber,
          type: fiber ? fiber.type.name : null
        };
      })()`,
      returnByValue: true
    });
    console.log('Fiber:', fiberInfo.result.value);

    // Let's inspect the cards inside #core-expertise
    const cardsInfo = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#core-expertise');
        const sticky = s.querySelector('.sticky');
        const track = s.querySelector('.sticky div.flex-1 > div');
        const cards = Array.from(track.children);
        return {
          stickyHeight: sticky.offsetHeight,
          stickyTop: sticky.offsetTop,
          trackScrollWidth: track.scrollWidth,
          cardsCount: cards.length,
          cardWidths: cards.map(c => c.offsetWidth)
        };
      })()`,
      returnByValue: true
    });
    console.log('Cards:', cardsInfo.result.value);

    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
