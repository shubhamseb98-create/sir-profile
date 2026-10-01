const http = require('http');
const fs = require('fs');

async function main() {
  const json = await new Promise(r => http.get('http://127.0.0.1:9222/json', res => {
    let d = ''; res.on('data', c => d += c); res.on('end', () => r(JSON.parse(d)));
  }));
  const page = json.find(t => t.id === 'ADBCBD20C17FC98CF8674AA842AD7240');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise(resolve => {
    const curId = id++;
    const handler = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === curId) { ws.removeEventListener('message', handler); resolve(data.result); }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  const outDir = 'C:/Users/ADMIN1/.gemini/antigravity-ide/brain/1bf436c5-0a29-47bd-9988-d293d99bfdd4';

  ws.addEventListener('open', async () => {
    await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
    await new Promise(r => setTimeout(r, 800));

    const sections = [
      { id: 'about-us', name: 'about_light' },
      { id: 'achieve-section', name: 'outcomes_dark' },
      { id: 'core-expertise', name: 'expertise_light' },
      { id: 'roles-ecosystems', name: 'roles_dark' },
      { id: 'credibility-bar', name: 'trustbar_light' },
      { id: 'transformations', name: 'transformations_dark' },
      { id: 'transformations', name: 'transformations_dark2' }, // scroll a bit into it
    ];

    for (const sec of sections) {
      const topRes = await send('Runtime.evaluate', {
        expression: `(function() { const el = document.getElementById('${sec.id}'); return el ? el.offsetTop : 0; })()`,
        returnByValue: true
      });
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${Math.max(0, topRes.result.value - 40)})` });
      await new Promise(r => setTimeout(r, 500));
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      const outPath = `${outDir}/${sec.name}_${Date.now()}.png`;
      fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
      console.log('captured:', sec.name, '→', outPath);
    }

    await send('Emulation.clearDeviceMetricsOverride');
    ws.close();
    process.exit(0);
  });
}
main();
