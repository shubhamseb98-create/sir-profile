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

    // Clean up previous test
    await send('Runtime.evaluate', {
      expression: `(() => {
        const deck = document.querySelector("#transformations .relative.flex");
        deck.style.paddingBottom = "0px";
        
        // Remove any old spacer
        const oldSpacer = document.getElementById("test-deck-spacer");
        if (oldSpacer) oldSpacer.remove();

        const cards = Array.from(deck.children);
        cards[0].style.marginBottom = "250px";
        cards[0].style.top = "72px";
        
        cards[1].style.marginBottom = "250px";
        cards[1].style.top = "114px";
        
        cards[2].style.marginBottom = "0px";
        cards[2].style.top = "156px";

        // Add 900px spacer div inside deck AFTER cards
        const spacer = document.createElement("div");
        spacer.id = "test-deck-spacer";
        spacer.style.height = "900px";
        spacer.style.width = "100%";
        deck.appendChild(spacer);
      })()`
    });

    const secTop = (await send('Runtime.evaluate', {
      expression: 'document.getElementById("transformations").offsetTop',
      returnByValue: true
    })).result.value;

    console.log('--- TESTING WITH CONTENT SPACER ---');
    for (let offset = 0; offset <= 3000; offset += 150) {
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
            c2: Math.round(cards[2].getBoundingClientRect().top),
            allThreeLocked: Math.round(cards[0].getBoundingClientRect().top) === 72 &&
                            Math.round(cards[1].getBoundingClientRect().top) === 114 &&
                            Math.round(cards[2].getBoundingClientRect().top) === 156
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
