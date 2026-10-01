const http = require('http');
const fs = require('fs');
const path = require('path');

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

  const outDir = 'C:/Users/ADMIN1/.gemini/antigravity-ide/brain/1bf436c5-0a29-47bd-9988-d293d99bfdd4';

  ws.addEventListener('open', async () => {
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      mobile: true
    });

    const sec = await send('Runtime.evaluate', {
      expression: `document.getElementById('transformations').offsetTop`,
      returnByValue: true
    });
    const baseTop = sec.result.value;
    console.log('Transformations baseTop:', baseTop);

    const offsets = [
      { name: 'card1_stuck', scroll: baseTop + 150 },
      { name: 'card2_stacked', scroll: baseTop + 750 },
      { name: 'card3_stacked', scroll: baseTop + 1400 },
    ];

    for (const item of offsets) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${item.scroll})` });
      await new Promise(r => setTimeout(r, 400));
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(outDir, `mobile_stack_${item.name}.png`), Buffer.from(shot.data, 'base64'));
    }

    await send('Emulation.clearDeviceMetricsOverride');
    console.log('Mobile stack test screenshots done!');
    ws.close();
    process.exit(0);
  });
}
main();
