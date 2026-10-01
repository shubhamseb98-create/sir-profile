const http = require('http');

async function main() {
  const json = await new Promise(resolve => {
    http.get('http://127.0.0.1:9222/json', res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });
  const page = json.find(t => t.url.includes('localhost:3000')) || json[0];
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise(resolve => {
    const curId = id++;
    const handler = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === curId) {
        ws.removeEventListener('message', handler);
        resolve(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  ws.addEventListener('open', async () => {
    const sTop = await send('Runtime.evaluate', {
      expression: 'document.querySelector("#transformations").offsetTop',
      returnByValue: true
    });
    const top = sTop.result.value;

    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${top + 1300}); window.dispatchEvent(new Event("scroll"));`
    });
    await new Promise(r => setTimeout(r, 100));

    const debug = await send('Runtime.evaluate', {
      expression: `(() => {
        const stickyDivs = Array.from(document.querySelectorAll('#transformations .sticky'));
        return stickyDivs.map((d, i) => {
          const rect = d.getBoundingClientRect();
          const art = d.querySelector('article');
          const artRect = art.getBoundingClientRect();
          const cs = window.getComputedStyle(d);
          const artCs = window.getComputedStyle(art);
          return {
            i,
            tag: d.tagName,
            styleTop: d.style.top,
            computedTop: cs.top,
            rectTop: Math.round(rect.top),
            rectBottom: Math.round(rect.bottom),
            artRectTop: Math.round(artRect.top),
            artTransform: art.style.transform,
            artComputedTransform: artCs.transform,
            offsetHeight: d.offsetHeight,
            offsetTop: d.offsetTop
          };
        });
      })()`,
      returnByValue: true
    });
    console.log(JSON.stringify(debug.result.value, null, 2));

    ws.close();
    process.exit(0);
  });
}
main();
