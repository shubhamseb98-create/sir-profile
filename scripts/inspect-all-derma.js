const http = require('http');

async function main() {
  const json = await new Promise(resolve => {
    http.get('http://127.0.0.1:9222/json', res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });

  const page = json.find(t => t.url.includes('derma-gold'));
  if (!page) { console.log('Derma page not found'); return; }
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
    const sections = await send('Runtime.evaluate', {
      expression: `(() => {
        const secs = Array.from(document.querySelectorAll('section, [id]'));
        return secs.map(s => ({
          id: s.id,
          tag: s.tagName,
          className: s.className ? s.className.substring(0, 60) : '',
          height: s.offsetHeight,
          text: s.innerText ? s.innerText.substring(0, 50).replace(/\\n/g, ' ') : ''
        })).filter(s => s.height > 100);
      })()`,
      returnByValue: true
    });
    console.log('Derma Sections:', JSON.stringify(sections.result.value, null, 2));
    ws.close();
    process.exit(0);
  });
}
main();
