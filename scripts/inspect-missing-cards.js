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
      expression: 'document.querySelector("#core-expertise").offsetTop',
      returnByValue: true
    });
    const top = sTop.result.value;
    console.log('offsetTop:', top);

    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${top + 1200}); window.dispatchEvent(new Event("scroll"));` });
    await new Promise(r => setTimeout(r, 200));

    const info = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#core-expertise');
        const sticky = s.querySelector('.sticky');
        const track = s.querySelector('.sticky div.flex-1 > div');
        const cards = Array.from(track.children);
        return {
          windowScrollY: window.scrollY,
          sOffsetTop: s.offsetTop,
          sHeight: s.offsetHeight,
          sBounding: {
            top: s.getBoundingClientRect().top,
            bottom: s.getBoundingClientRect().bottom
          },
          stickyBounding: {
            top: sticky.getBoundingClientRect().top,
            bottom: sticky.getBoundingClientRect().bottom,
            height: sticky.offsetHeight
          },
          trackTransform: track.style.transform,
          card0Rect: cards[0].getBoundingClientRect(),
          card4Rect: cards[4].getBoundingClientRect(),
          card9Rect: cards[9].getBoundingClientRect()
        };
      })()`,
      returnByValue: true
    });
    console.log('Details at top+1200:', JSON.stringify(info.result.value, null, 2));

    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
