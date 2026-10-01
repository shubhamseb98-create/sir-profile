const http = require('http');
const fs = require('fs');

async function main() {
  const json = await new Promise(r => http.get('http://127.0.0.1:9222/json', res => {
    let d = ''; res.on('data', c => d += c); res.on('end', () => r(JSON.parse(d)));
  }));
  const page = json.find(t => t.url.includes('localhost:3000'));
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise(res => {
    const curId = id++;
    const handler = (e) => {
      const data = JSON.parse(e.data);
      if (data.id === curId) { ws.removeEventListener('message', handler); res(data.result); }
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

    await send('Page.reload');
    await new Promise(r => setTimeout(r, 2000));

    const info = (await send('Runtime.evaluate', {
      expression: '(() => { const el = document.getElementById("transformations"); return { top: el.offsetTop, height: el.offsetHeight }; })()',
      returnByValue: true
    })).result.value;

    console.log('Mobile section info:', info);

    // Scroll to locked state on mobile
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${info.top + 700});` });
    await new Promise(r => setTimeout(r, 250));
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/mobile_stacked_v4.png', Buffer.from(shot.data, 'base64'));

    console.log('Mobile shot saved!');
    ws.close();
    process.exit(0);
  });
}
main();
