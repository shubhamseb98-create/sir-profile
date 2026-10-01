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
      if (data.id === curId) {
        ws.removeEventListener('message', handler);
        res(data.result);
      }
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

    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${secTop + 1300});`
    });
    await new Promise(r => setTimeout(r, 100));

    const diag = await send('Runtime.evaluate', {
      expression: `(() => {
        const c0 = document.querySelectorAll("#transformations .sticky")[0];
        const c1 = document.querySelectorAll("#transformations .sticky")[1];
        const c2 = document.querySelectorAll("#transformations .sticky")[2];
        const deck = document.querySelector("#transformations .relative.flex");
        const sec = document.getElementById("transformations");

        return {
          windowScrollY: window.scrollY,
          c0: {
            top: c0.getBoundingClientRect().top,
            styleTop: c0.style.top,
            computedTop: getComputedStyle(c0).top,
            computedPosition: getComputedStyle(c0).position,
            offsetTop: c0.offsetTop,
            offsetHeight: c0.offsetHeight,
            offsetParent: c0.offsetParent ? c0.offsetParent.tagName + '.' + c0.offsetParent.className : null
          },
          c1: {
            top: c1.getBoundingClientRect().top,
            offsetTop: c1.offsetTop
          },
          c2: {
            top: c2.getBoundingClientRect().top,
            offsetTop: c2.offsetTop
          },
          deck: {
            top: deck.getBoundingClientRect().top,
            bottom: deck.getBoundingClientRect().bottom,
            height: deck.getBoundingClientRect().height,
            offsetTop: deck.offsetTop,
            offsetHeight: deck.offsetHeight
          },
          sec: {
            top: sec.getBoundingClientRect().top,
            bottom: sec.getBoundingClientRect().bottom,
            height: sec.getBoundingClientRect().height,
            offsetTop: sec.offsetTop
          }
        };
      })()`,
      returnByValue: true
    });

    console.log(JSON.stringify(diag.result.value, null, 2));
    ws.close();
    process.exit(0);
  });
}
run();
