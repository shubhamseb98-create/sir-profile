const http = require('http');

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
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      mobile: true
    });

    const info = await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.getElementById('transformations');
        const cards = Array.from(sec.querySelectorAll('.sticky'));
        return {
          secTop: sec.offsetTop,
          secHeight: sec.offsetHeight,
          cards: cards.map((c, i) => {
            const r = c.getBoundingClientRect();
            return {
              i,
              top: Math.round(r.top),
              bottom: Math.round(r.bottom),
              height: Math.round(r.height),
              offsetTop: c.offsetTop
            };
          })
        };
      })()`,
      returnByValue: true
    });

    console.log('Mobile Stack Initial Info:', JSON.stringify(info.result.value, null, 2));

    ws.close();
    process.exit(0);
  });
}
main();
