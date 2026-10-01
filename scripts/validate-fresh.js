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
      width: 1366,
      height: 641,
      deviceScaleFactor: 1,
      mobile: false
    });

    // Reload page to get fresh React build
    await send('Page.reload');
    await new Promise(r => setTimeout(r, 1500));

    const secTop = (await send('Runtime.evaluate', {
      expression: 'document.getElementById("transformations").offsetTop',
      returnByValue: true
    })).result.value;

    console.log('Fresh section top:', secTop);

    for (let offset = 0; offset <= 2600; offset += 200) {
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, ${secTop + offset});`
      });
      await new Promise(r => setTimeout(r, 50));
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

    // Capture screenshot at offset 1800 (locked state)
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${secTop + 1800});`
    });
    await new Promise(r => setTimeout(r, 150));
    const shotLocked = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/final_stack_locked.png', Buffer.from(shotLocked.data, 'base64'));
    console.log('Saved final_stack_locked.png');

    // Capture screenshot at offset 1100 (card 2 arriving)
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${secTop + 1100});`
    });
    await new Promise(r => setTimeout(r, 150));
    const shotCard2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/final_card2_stack.png', Buffer.from(shotCard2.data, 'base64'));
    console.log('Saved final_card2_stack.png');

    // Capture screenshot at offset 2400 (smooth exit transition)
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${secTop + 2400});`
    });
    await new Promise(r => setTimeout(r, 150));
    const shotExit = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/final_exit_transition.png', Buffer.from(shotExit.data, 'base64'));
    console.log('Saved final_exit_transition.png');

    ws.close();
    process.exit(0);
  });
}
run();
