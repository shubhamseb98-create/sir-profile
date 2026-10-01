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

    const secTop = (await send('Runtime.evaluate', {
      expression: 'document.getElementById("transformations").offsetTop',
      returnByValue: true
    })).result.value;

    console.log('Testing full scroll sequence with exit:');
    // Check offsets: 0, 400, 800, 1200, 1600, 2000, 2400
    for (let off = 0; off <= 2600; off += 400) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + off});` });
      await new Promise(r => setTimeout(r, 60));
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const arts = Array.from(document.querySelectorAll('#transformations article'));
          return {
            off: ${off},
            c0Top: Math.round(arts[0].getBoundingClientRect().top),
            c1Top: Math.round(arts[1].getBoundingClientRect().top),
            c2Top: Math.round(arts[2].getBoundingClientRect().top)
          };
        })()`,
        returnByValue: true
      });
      console.log(JSON.stringify(res.result.value));
    }

    ws.close();
    process.exit(0);
  });
}
main();
