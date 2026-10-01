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
    const viewports = [
      { name: 'iPhone SE (375px)', w: 375, h: 667, m: true },
      { name: 'iPad (768px)', w: 768, h: 1024, m: false },
      { name: 'Laptop (1366px)', w: 1366, h: 641, m: false },
      { name: 'Desktop (1440px)', w: 1440, h: 900, m: false }
    ];

    for (const vp of viewports) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.w,
        height: vp.h,
        deviceScaleFactor: vp.m ? 2 : 1,
        mobile: vp.m
      });
      await new Promise(r => setTimeout(r, 400));

      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const sec = document.getElementById('transformations');
          const cards = Array.from(sec.querySelectorAll('.sticky'));
          const achieve = document.getElementById('achieve-section');
          return {
            vp: '${vp.name}',
            achieveH: achieve.offsetHeight,
            transH: sec.offsetHeight,
            cards: cards.map((c, i) => {
              const r = c.getBoundingClientRect();
              return {
                i,
                h: Math.round(c.offsetHeight),
                topStyle: c.style.top,
                rectH: Math.round(r.height),
                marginB: window.getComputedStyle(c).marginBottom
              };
            })
          };
        })()`,
        returnByValue: true
      });
      console.log(JSON.stringify(res.result.value, null, 2));
    }

    await send('Emulation.clearDeviceMetricsOverride');
    ws.close();
    process.exit(0);
  });
}
main();
