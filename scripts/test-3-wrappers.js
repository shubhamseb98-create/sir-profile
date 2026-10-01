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

    // Test this architecture:
    // Create a container with height 400vh, and 3 wrappers of height 100vh each with sticky top-0
    await send('Runtime.evaluate', {
      expression: `(() => {
        const sec = document.getElementById("transformations");
        const deck = sec.querySelector(".relative.flex");
        // Clear spacer
        const sp = document.getElementById("test-deck-spacer");
        if (sp) sp.remove();

        // Let's restructure the deck into 3 wrappers
        const cards = Array.from(deck.querySelectorAll("article"));
        deck.innerHTML = "";
        deck.className = "relative";
        deck.style.paddingBottom = "0px";
        deck.style.height = "2400px"; // 4 * 600px

        cards.forEach((card, i) => {
          const wrapper = document.createElement("div");
          wrapper.className = "sticky top-0 w-full flex items-start justify-center";
          wrapper.style.height = "600px"; // 1 step
          wrapper.style.zIndex = i + 1;
          
          card.style.marginTop = (72 + i * 42) + "px";
          card.style.width = "100%";
          card.style.opacity = "1";
          card.style.backgroundColor = "#0F172A";
          
          wrapper.appendChild(card);
          deck.appendChild(wrapper);
        });
      })()`
    });

    const secTop = (await send('Runtime.evaluate', {
      expression: 'document.getElementById("transformations").offsetTop',
      returnByValue: true
    })).result.value;

    console.log('--- TESTING 3-WRAPPER SYNCHRONOUS DECK ---');
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
            delta01: Math.round(articles[1].getBoundingClientRect().top - articles[0].getBoundingClientRect().top),
            delta12: Math.round(articles[2].getBoundingClientRect().top - articles[1].getBoundingClientRect().top)
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
