const http = require('http');

async function main() {
  const json = await new Promise(resolve => {
    http.get('http://127.0.0.1:9222/json', res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });

  const page = json.find(t => t.id === 'D41592C0B3F442965CF5296189974B86') || json[0];
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
    await send('Console.enable');
    await send('Runtime.enable');
    
    // Evaluate in page: check console logs or any errors
    const logs = await send('Runtime.evaluate', {
      expression: `(() => {
        return window.__ERRORS__ || 'no custom errors';
      })()`,
      returnByValue: true
    });
    console.log('Logs:', logs);

    // Let's inspect the actual card track element and its inline style!
    const trackInfo = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#core-expertise');
        // Let's find all motion divs in s
        const allDivs = Array.from(s.querySelectorAll('div'));
        return allDivs.map((d, i) => {
          if (d.style.transform || d.style.x) {
            return { i, class: d.className, transform: d.style.transform, x: d.style.x };
          }
          return null;
        }).filter(Boolean);
      })()`,
      returnByValue: true
    });
    console.log('Divs with transform or x:', trackInfo.result.value);

    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
