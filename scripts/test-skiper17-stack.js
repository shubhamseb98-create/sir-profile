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
    await new Promise(r => setTimeout(r, 2200));

    // Check for any errors
    const errors = await send('Runtime.evaluate', {
      expression: 'window.__errors || []',
      returnByValue: true
    });
    console.log('Errors:', errors);

    const info = (await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.getElementById("transformations");
        const parent = el.parentElement;
        const pinSpacer = el.closest(".pin-spacer") || el;
        return {
          top: pinSpacer.offsetTop,
          height: pinSpacer.offsetHeight,
          sectionH: el.offsetHeight,
          isPinned: !!el.closest(".pin-spacer")
        };
      })()`,
      returnByValue: true
    })).result.value;

    console.log('Section & Pin info:', info);

    const steps = [
      { name: 'skiper17_0_initial', scroll: info.top + 50 },
      { name: 'skiper17_1_card1_rot', scroll: info.top + 450 },
      { name: 'skiper17_2_card2_rot', scroll: info.top + 950 },
      { name: 'skiper17_3_locked', scroll: info.top + 1300 },
      { name: 'skiper17_4_next_section', scroll: info.top + info.height + 150 },
    ];

    for (const s of steps) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${s.scroll});` });
      await new Promise(r => setTimeout(r, 250));
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/${s.name}.png`, Buffer.from(shot.data, 'base64'));
      console.log('Captured', s.name, 'at scroll', s.scroll);
    }

    ws.close();
    process.exit(0);
  });
}
main();
