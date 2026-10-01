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

    await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.getElementById("transformations");
        const container = sec.querySelector(".relative.w-full");
        container.style.height = "320vh";

        const wrappers = Array.from(container.children);
        wrappers.forEach((w, i) => {
          w.style.height = "75vh";
          const art = w.querySelector("article");
          art.style.marginTop = (68 + i * 40) + "px";
          // Perfectly aligned, no horizontal shrinking
          art.style.transform = "none";
          art.style.filter = "none";
          // Distinct rich elevation shadow
          art.style.boxShadow = "0 -4px 20px rgba(0,0,0,0.5), 0 20px 50px rgba(0,0,0,0.85)";
          art.style.backgroundColor = "#0F172A";
        });
      })()`
    });

    const secTop = (await send('Runtime.evaluate', {
      expression: 'document.getElementById("transformations").offsetTop',
      returnByValue: true
    })).result.value;

    // Scroll to locked state
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${secTop + 1450});`
    });
    await new Promise(r => setTimeout(r, 100));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/aligned_deck_shot.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved aligned_deck_shot.png');

    ws.close();
    process.exit(0);
  });
}
main();
