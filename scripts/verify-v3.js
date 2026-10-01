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
      width: 1366,
      height: 641,
      deviceScaleFactor: 1,
      mobile: false
    });

    await send('Page.reload');
    await new Promise(r => setTimeout(r, 1800));

    const secTop = (await send('Runtime.evaluate', {
      expression: 'document.getElementById("transformations").offsetTop',
      returnByValue: true
    })).result.value;

    console.log('Section top:', secTop);

    // 1. Initial State: Card 0
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + 50});` });
    await new Promise(r => setTimeout(r, 120));
    const s0 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/v3_card0.png', Buffer.from(s0.data, 'base64'));

    // 2. Card 1 Stacked: ~350px scroll
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + 350});` });
    await new Promise(r => setTimeout(r, 120));
    const s1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/v3_card1_stacked.png', Buffer.from(s1.data, 'base64'));

    // 3. Card 2 Stacked: ~750px scroll
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + 750});` });
    await new Promise(r => setTimeout(r, 120));
    const s2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/v3_all_stacked.png', Buffer.from(s2.data, 'base64'));

    // 4. Transition to next section: ~950px scroll (unpinning moment)
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + 950});` });
    await new Promise(r => setTimeout(r, 120));
    const sNext = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/v3_next_section.png', Buffer.from(sNext.data, 'base64'));

    console.log('All v3 verification shots saved!');
    ws.close();
    process.exit(0);
  });
}
main();
