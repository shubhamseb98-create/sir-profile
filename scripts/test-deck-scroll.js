const http = require('http');
const fs = require('fs');

async function main() {
  const json = await new Promise(resolve => {
    http.get('http://127.0.0.1:9222/json', res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });
  const page = json.find(t => t.id === 'ADBCBD20C17FC98CF8674AA842AD7240');
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
    // Set to user's laptop resolution: 1366 x 641
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1366,
      height: 641,
      deviceScaleFactor: 1,
      mobile: false
    });

    const secTop = await send('Runtime.evaluate', {
      expression: `document.getElementById('transformations').offsetTop`,
      returnByValue: true
    });
    const startY = secTop.result.value;

    console.log('Section top:', startY);
    for (let offset = 0; offset <= 2000; offset += 300) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${startY + offset})` });
      await new Promise(r => setTimeout(r, 200));
      const cardInfo = await send('Runtime.evaluate', {
        expression: `(() => {
          const cards = Array.from(document.querySelectorAll('#transformations .sticky'));
          return cards.map((c, i) => {
            const r = c.getBoundingClientRect();
            return {
              i,
              top: Math.round(r.top),
              bottom: Math.round(r.bottom),
              h: Math.round(r.height),
              isStuck: Math.round(r.top) <= (parseInt(c.style.top) + 2)
            };
          });
        })()`,
        returnByValue: true
      });
      console.log(`Scroll +${offset}px:`, cardInfo.result.value);
    }

    await send('Emulation.clearDeviceMetricsOverride');
    ws.close();
    process.exit(0);
  });
}
main();
