const http = require('http');
const fs = require('fs');

async function run() {
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
    await new Promise(r => setTimeout(r, 1500));

    const secTop = (await send('Runtime.evaluate', {
      expression: 'document.getElementById("transformations").offsetTop',
      returnByValue: true
    })).result.value;

    console.log('Mobile section top:', secTop);

    for (let offset = 0; offset <= 2000; offset += 150) {
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, ${secTop + offset});`
      });
      await new Promise(r => setTimeout(r, 40));
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const articles = Array.from(document.querySelectorAll("#transformations article"));
          return {
            offset: ${offset},
            c0: Math.round(articles[0].getBoundingClientRect().top),
            c1: Math.round(articles[1].getBoundingClientRect().top),
            c2: Math.round(articles[2].getBoundingClientRect().top),
            c2Bottom: Math.round(articles[2].getBoundingClientRect().bottom)
          };
        })()`,
        returnByValue: true
      });
      console.log(JSON.stringify(res.result.value));
    }

    // Capture mobile locked state
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${secTop + 1100});`
    });
    await new Promise(r => setTimeout(r, 150));
    const shotMobile = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/final_mobile_stack.png', Buffer.from(shotMobile.data, 'base64'));
    console.log('Saved final_mobile_stack.png');

    ws.close();
    process.exit(0);
  });
}
run();
