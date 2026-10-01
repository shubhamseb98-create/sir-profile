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
    // Let's reload localhost:3000 at scroll 0
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
    await send('Page.reload');
    await new Promise(r => setTimeout(r, 2000));

    const initial = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#core-expertise');
        const track = s.querySelector('.sticky div.flex-1 > div');
        return {
          scrollY: window.scrollY,
          sTop: s.getBoundingClientRect().top,
          transform: track ? track.style.transform : null
        };
      })()`,
      returnByValue: true
    });
    console.log('After fresh reload at scroll 0:', initial.result.value);

    // Now let's scroll step by step by 200px
    for (let sy = 2500; sy <= 5500; sy += 300) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${sy})` });
      await new Promise(r => setTimeout(r, 100));
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const s = document.querySelector('#core-expertise');
          const track = s.querySelector('.sticky div.flex-1 > div');
          return {
            sy: window.scrollY,
            sTop: Math.round(s.getBoundingClientRect().top),
            transform: track ? track.style.transform : null
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
