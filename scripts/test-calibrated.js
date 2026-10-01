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

    // Test new layout live in DOM
    await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.getElementById("transformations");
        const container = sec.querySelector(".relative.w-full");
        container.style.height = "320vh";

        const wrappers = Array.from(container.children);
        wrappers.forEach((w, i) => {
          w.style.height = "85vh";
          const art = w.querySelector("article");
          art.style.marginTop = (32 + i * 36) + "px";
          // Subtle scale
          if (i === 0) {
            art.style.transform = "scale(0.96)";
            art.style.filter = "brightness(0.90)";
          } else if (i === 1) {
            art.style.transform = "scale(0.98)";
            art.style.filter = "brightness(0.95)";
          } else {
            art.style.transform = "scale(1)";
            art.style.filter = "brightness(1)";
          }
        });
      })()`
    });

    const secTop = (await send('Runtime.evaluate', {
      expression: 'document.getElementById("transformations").offsetTop',
      returnByValue: true
    })).result.value;

    console.log('Testing calibrated 320vh height:');
    for (let offset = 0; offset <= 3000; offset += 200) {
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, ${secTop + offset});`
      });
      await new Promise(r => setTimeout(r, 40));
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const arts = Array.from(document.querySelectorAll("#transformations article"));
          const whySec = document.querySelector("#transformations + section, section:nth-of-type(5)");
          const whyRect = whySec ? whySec.getBoundingClientRect() : null;
          return {
            offset: ${offset},
            c0: Math.round(arts[0].getBoundingClientRect().top),
            c1: Math.round(arts[1].getBoundingClientRect().top),
            c2: Math.round(arts[2].getBoundingClientRect().top),
            c2Bottom: Math.round(arts[2].getBoundingClientRect().bottom),
            whySecTop: whyRect ? Math.round(whyRect.top) : null
          };
        })()`,
        returnByValue: true
      });
      console.log(JSON.stringify(res.result.value));
    }

    // Capture screenshot at offset 1600 (locked state)
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${secTop + 1600});`
    });
    await new Promise(r => setTimeout(r, 100));
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/calibrated_stack_1600.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved calibrated_stack_1600.png');

    ws.close();
    process.exit(0);
  });
}
main();
