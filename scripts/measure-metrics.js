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

    // Scroll to fully locked state (step 3)
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${secTop + 750});` });
    await new Promise(r => setTimeout(r, 200));

    const metrics = (await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.getElementById("transformations");
        const sticky = sec.querySelector(".sticky");
        const header = sticky.querySelector("h2").parentElement.parentElement;
        const arena = sticky.querySelector(".flex-1");
        const cards = Array.from(arena.querySelectorAll("article"));
        const navbar = document.querySelector("header");

        const getR = el => {
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { top: Math.round(r.top), bottom: Math.round(r.bottom), height: Math.round(r.height), left: Math.round(r.left), width: Math.round(r.width) };
        };

        return {
          windowH: window.innerHeight,
          navbarRect: getR(navbar),
          headerRect: getR(header),
          arenaRect: getR(arena),
          cards: cards.map((c, i) => ({
            index: i,
            rect: getR(c),
            parentRect: getR(c.parentElement)
          }))
        };
      })()`,
      returnByValue: true
    })).result.value;

    console.log(JSON.stringify(metrics, null, 2));
    ws.close();
    process.exit(0);
  });
}
main();
