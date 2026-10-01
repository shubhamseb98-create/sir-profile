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
      { name: 'iPhone SE (375px)', width: 375, height: 667, mobile: true },
      { name: 'iPhone 14 (390px)', width: 390, height: 844, mobile: true },
      { name: 'iPad (768px)', width: 768, height: 1024, mobile: false },
      { name: 'Laptop (1366px)', width: 1366, height: 641, mobile: false },
      { name: 'Desktop (1592px)', width: 1592, height: 1146, mobile: false }
    ];

    const auditResults = [];

    for (const vp of viewports) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: vp.mobile ? 2 : 1,
        mobile: vp.mobile
      });
      await new Promise(r => setTimeout(r, 400));

      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const w = window.innerWidth;
          const docW = document.documentElement.scrollWidth;
          const bodyW = document.body.scrollWidth;

          // Check if any element exceeds viewport width
          const overflowing = [];
          document.querySelectorAll('*').forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.right > w + 2 || r.left < -2) {
              // check if it's visible
              const cs = window.getComputedStyle(el);
              if (cs.display !== 'none' && cs.visibility !== 'hidden' && cs.opacity !== '0') {
                overflowing.push({
                  tag: el.tagName,
                  id: el.id,
                  cls: String(el.className).slice(0, 40),
                  left: Math.round(r.left),
                  right: Math.round(r.right),
                  width: Math.round(r.width)
                });
              }
            }
          });

          // Section heights and top positions
          const sections = Array.from(document.querySelectorAll('section')).map(s => ({
            id: s.id || s.className.slice(0, 25),
            height: Math.round(s.getBoundingClientRect().height)
          }));

          return {
            name: '${vp.name}',
            viewportWidth: w,
            docScrollWidth: docW,
            hasOverflow: docW > w,
            overflowingElementsCount: overflowing.length,
            overflowingSample: overflowing.slice(0, 5),
            sections
          };
        })()`,
        returnByValue: true
      });

      auditResults.push(res.result.value);
    }

    await send('Emulation.clearDeviceMetricsOverride');
    console.log(JSON.stringify(auditResults, null, 2));
    ws.close();
    process.exit(0);
  });
}
main();
