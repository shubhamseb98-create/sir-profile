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
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });

    const sections = ['achieve-section', 'core-expertise', 'roles-ecosystems', 'transformations'];
    for (const secId of sections) {
      const top = await send('Runtime.evaluate', {
        expression: `document.getElementById('${secId}').offsetTop`,
        returnByValue: true
      });
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${top.result.value})` });
      await new Promise(r => setTimeout(r, 400));
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(outDir, `desktop_${secId}.png`), Buffer.from(shot.data, 'base64'));
    }

    await send('Emulation.clearDeviceMetricsOverride');
    console.log('Desktop screenshots captured!');
    ws.close();
    process.exit(0);
  });
}
main();
