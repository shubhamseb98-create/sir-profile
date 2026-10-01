const http = require('http');

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

    // Reset styles on live page
    await send('Runtime.evaluate', {
      expression: `(() => {
        const deck = document.querySelector("#transformations .relative.flex");
        deck.style.paddingBottom = "0px";
        
        const cards = Array.from(deck.children);
        cards[0].style.marginBottom = "600px";
        cards[0].style.top = "70px";
        
        cards[1].style.marginBottom = "600px";
        cards[1].style.top = "110px";
        
        cards[2].style.marginBottom = "600px";
        cards[2].style.top = "150px";
      })()`
    });

    const secTop = (await send('Runtime.evaluate', {
      expression: 'document.getElementById("transformations").offsetTop',
      returnByValue: true
    })).result.value;

    console.log('--- TEST WITH 600px MARGINS ---');
    for (let offset = 0; offset <= 2600; offset += 200) {
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, ${secTop + offset});`
      });
      await new Promise(r => setTimeout(r, 50));
      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const cards = Array.from(document.querySelectorAll("#transformations .sticky"));
          return {
            offset: ${offset},
            c0: Math.round(cards[0].getBoundingClientRect().top),
            c1: Math.round(cards[1].getBoundingClientRect().top),
            c2: Math.round(cards[2].getBoundingClientRect().top)
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
run();
