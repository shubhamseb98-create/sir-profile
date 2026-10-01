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
    await new Promise(r => setTimeout(r, 2000));

    const info = (await send('Runtime.evaluate', {
      expression: '(() => { const el = document.getElementById("transformations"); return { top: el.offsetTop, height: el.offsetHeight }; })()',
      returnByValue: true
    })).result.value;

    console.log('Transformations section:', info);

    const steps = [
      { name: 'step0_start', scroll: info.top },
      { name: 'step1_card1_in', scroll: info.top + 250 },
      { name: 'step2_card2_in', scroll: info.top + 550 },
      { name: 'step3_all_locked', scroll: info.top + 750 },
      { name: 'step4_unpin_start', scroll: info.top + info.height - 641 },
      { name: 'step5_unpinned_next', scroll: info.top + info.height - 641 + 250 },
    ];

    for (const s of steps) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${s.scroll});` });
      await new Promise(r => setTimeout(r, 200));
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/${s.name}.png`, Buffer.from(shot.data, 'base64'));
      console.log('Captured', s.name, 'at scroll', s.scroll);
    }

    ws.close();
    process.exit(0);
  });
}
main();
