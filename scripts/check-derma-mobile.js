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
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      mobile: true
    });

    const res = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#suites');
        const track = s.querySelector('.will-change-transform');
        const cards = track ? Array.from(track.children) : [];
        return {
          trackScrollWidth: track.scrollWidth,
          cardsCount: cards.length,
          lastCardWidth: cards[4].offsetWidth,
          trackTransform: track.style.transform
        };
      })()`,
      returnByValue: true
    });
    console.log('derma-gold mobile:', res.result.value);

    // Now test scrolling to end on mobile
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 3700)' });
    await new Promise(r => setTimeout(r, 200));
    const endRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const track = document.querySelector('#suites .will-change-transform');
        const cards = track ? Array.from(track.children) : [];
        return {
          lastCardRect: cards[4].getBoundingClientRect(),
          trackTransform: track.style.transform
        };
      })()`,
      returnByValue: true
    });
    console.log('derma-gold mobile at end:', endRes.result.value);

    await send('Emulation.clearDeviceMetricsOverride');
    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
