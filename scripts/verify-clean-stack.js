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
    await new Promise(r => setTimeout(r, 1500));

    const secTop = (await send('Runtime.evaluate', {
      expression: 'document.getElementById("transformations").offsetTop',
      returnByValue: true
    })).result.value;

    console.log('Section top:', secTop);

    // Scroll to locked state (~1500)
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${secTop + 1500});`
    });
    await new Promise(r => setTimeout(r, 150));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/verified_clean_stack.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved verified_clean_stack.png');

    const positions = await send('Runtime.evaluate', {
      expression: `(() => {
        const arts = Array.from(document.querySelectorAll("#transformations article"));
        return arts.map((a, i) => {
          const r = a.getBoundingClientRect();
          return { i, top: Math.round(r.top), bottom: Math.round(r.bottom), width: Math.round(r.width) };
        });
      })()`,
      returnByValue: true
    });
    console.log('Positions & widths:', JSON.stringify(positions.result.value, null, 2));

    ws.close();
    process.exit(0);
  });
}
main();
