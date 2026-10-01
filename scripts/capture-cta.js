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

    // Scroll to bottom to capture PageCTA
    const pageHeight = await send('Runtime.evaluate', {
      expression: 'document.body.scrollHeight',
      returnByValue: true
    });
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${pageHeight.result.value - 900})` });
    await new Promise(r => setTimeout(r, 600));
    const shotCTA = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${outDir}/pagecta_light_${Date.now()}.png`, Buffer.from(shotCTA.data, 'base64'));
    console.log('captured: pagecta');

    // Also capture why-work-with-me
    const wwmRes = await send('Runtime.evaluate', {
      expression: `(function() { const el = document.querySelector('[class*="EFF6FF"]') || document.querySelector('section.bg-\\\\[#EFF6FF\\\\]'); return el ? el.offsetTop : 0; })()`,
      returnByValue: true
    });

    await send('Emulation.clearDeviceMetricsOverride');
    ws.close();
    process.exit(0);
  });
}
main();
