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
    await send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 641, deviceScaleFactor: 1, mobile: false });
    console.log('Reloading page ...');
    await send('Page.reload');
    await new Promise(r => setTimeout(r, 2500));

    const sTop = await send('Runtime.evaluate', {
      expression: 'document.querySelector("#transformations").offsetTop',
      returnByValue: true
    });
    const top = sTop.result.value;
    console.log('Top:', top);

    for (let offset of [0, 300, 600, 900, 1200, 1400, 1600, 1800, 2000, 2200]) {
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, ${top + offset}); window.dispatchEvent(new Event("scroll"));`
      });
      await new Promise(r => setTimeout(r, 100));
      const stackState = await send('Runtime.evaluate', {
        expression: `(() => {
          const cards = Array.from(document.querySelectorAll('#transformations article'));
          return cards.map((c, i) => {
            const r = c.getBoundingClientRect();
            return {
              i,
              top: Math.round(r.top),
              bottom: Math.round(r.bottom),
              h: c.offsetHeight
            };
          });
        })()`,
        returnByValue: true
      });
      console.log(`Scroll +${offset}:`, stackState.result.value);
    }

    await send('Emulation.clearDeviceMetricsOverride');
    ws.close();
    process.exit(0);
  });
}
main();
