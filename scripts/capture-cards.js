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

  const page = json.find(t => t.id === 'D41592C0B3F442965CF5296189974B86') || json[0];
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
      width: 1366,
      height: 641,
      deviceScaleFactor: 1,
      mobile: false
    });

    const sTop = await send('Runtime.evaluate', {
      expression: 'document.querySelector("#core-expertise").offsetTop',
      returnByValue: true
    });
    const top = sTop.result.value;

    // Shot 1: Card 1 (pct 0%)
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${top}); window.dispatchEvent(new Event("scroll"));` });
    await new Promise(r => setTimeout(r, 200));
    const shot1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/card1_view.png', Buffer.from(shot1.data, 'base64'));
    console.log('Saved card1_view.png');

    // Shot 2: Card 5 (pct 50%)
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${top + 1200}); window.dispatchEvent(new Event("scroll"));` });
    await new Promise(r => setTimeout(r, 200));
    const shot2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/card5_view.png', Buffer.from(shot2.data, 'base64'));
    console.log('Saved card5_view.png');

    // Shot 3: Card 10 (pct 100%)
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${top + 2436}); window.dispatchEvent(new Event("scroll"));` });
    await new Promise(r => setTimeout(r, 200));
    const shot3 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/card10_view.png', Buffer.from(shot3.data, 'base64'));
    console.log('Saved card10_view.png');

    await send('Emulation.clearDeviceMetricsOverride');
    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
