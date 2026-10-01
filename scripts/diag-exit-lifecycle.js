const http = require('http');

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
    const secTop = (await send('Runtime.evaluate', {
      expression: 'document.getElementById("transformations").offsetTop',
      returnByValue: true
    })).result.value;

    console.log('--- EXIT LIFECYCLE ---');
    for (let off of [1200, 1400, 1600, 1800, 2000, 2200]) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + off});` });
      await new Promise(r => setTimeout(r, 60));
      const r = await send('Runtime.evaluate', {
        expression: `(() => {
          const arts = Array.from(document.querySelectorAll('#transformations article'));
          return {
            off: ${off},
            c0Top: Math.round(arts[0].getBoundingClientRect().top),
            c2Top: Math.round(arts[2].getBoundingClientRect().top),
            c2Bottom: Math.round(arts[2].getBoundingClientRect().bottom)
          };
        })()`,
        returnByValue: true
      });
      console.log(JSON.stringify(r.result.value));
    }

    ws.close();
    process.exit(0);
  });
}
main();
