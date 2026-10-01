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
    const sTop = await send('Runtime.evaluate', {
      expression: `document.querySelector('#core-expertise').offsetTop`,
      returnByValue: true
    });
    console.log('sTop:', sTop.result.value);

    // Let's inspect window.innerHeight, document height, etc.
    const pageInfo = await send('Runtime.evaluate', {
      expression: `(() => {
        return {
          windowHeight: window.innerHeight,
          scrollHeight: document.documentElement.scrollHeight,
          secOffsetTop: document.querySelector('#core-expertise').offsetTop,
          secHeight: document.querySelector('#core-expertise').offsetHeight,
          cardsCount: document.querySelectorAll('#core-expertise [class*="rounded-3xl"]').length
        };
      })()`,
      returnByValue: true
    });
    console.log('Page info:', pageInfo.result.value);

    for (let scrollY of [2710, 3200, 3700, 4200, 4700, 5200, 6000, 7000, 8000, 9000]) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${scrollY})` });
      await new Promise(r => setTimeout(r, 100));
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const s = document.querySelector('#core-expertise');
          const motionDiv = s.querySelector('.sticky div > div[style*="transform"]');
          const cards = s.querySelectorAll('[class*="rounded-2xl"], [class*="rounded-3xl"]');
          const activeText = s.querySelector('.sticky span.font-mono')?.textContent;
          return {
            scrollY: window.scrollY,
            transform: motionDiv ? motionDiv.style.transform : 'none',
            activeText,
            card0Left: cards[0] ? Math.round(cards[0].getBoundingClientRect().left) : null,
            card9Right: cards[cards.length - 1] ? Math.round(cards[cards.length - 1].getBoundingClientRect().right) : null,
            secRect: s.getBoundingClientRect()
          };
        })()`,
        returnByValue: true
      });
      console.log(`scrollY ${scrollY}:`, JSON.stringify(res.result.value));
    }

    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
