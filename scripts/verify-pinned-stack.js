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

    // 1. Initial state: Card 0 is in view
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + 100});` });
    await new Promise(r => setTimeout(r, 120));
    const shot0 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/pinned_card0.png', Buffer.from(shot0.data, 'base64'));

    // 2. Card 1 enters and stacks: offset ~700
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + 700});` });
    await new Promise(r => setTimeout(r, 120));
    const shot1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/pinned_card1_stacked.png', Buffer.from(shot1.data, 'base64'));

    // 3. Card 2 enters and stacks: offset ~1400
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + 1400});` });
    await new Promise(r => setTimeout(r, 120));
    const shot2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/pinned_all_stacked.png', Buffer.from(shot2.data, 'base64'));

    // 4. Check positions of cards at offset 1400
    const check = await send('Runtime.evaluate', {
      expression: `(() => {
        const arts = Array.from(document.querySelectorAll('#transformations article'));
        return arts.map((a, i) => {
          const r = a.getBoundingClientRect();
          return { i, top: Math.round(r.top), bottom: Math.round(r.bottom), height: Math.round(r.height) };
        });
      })()`,
      returnByValue: true
    });
    console.log('Cards at 1400:', JSON.stringify(check.result.value, null, 2));

    // 5. Exit transition: offset 1900
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + 1900});` });
    await new Promise(r => setTimeout(r, 120));
    const shotExit = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/pinned_exit.png', Buffer.from(shotExit.data, 'base64'));

    console.log('Screenshots saved!');
    ws.close();
    process.exit(0);
  });
}
main();
