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
    const parents = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#core-expertise');
        const sticky = s.querySelector('.sticky');
        const stickyStyle = window.getComputedStyle(sticky);

        const list = [];
        let curr = s;
        while (curr) {
          const style = window.getComputedStyle(curr);
          list.push({
            tag: curr.tagName,
            id: curr.id,
            className: curr.className,
            overflow: style.overflow,
            overflowX: style.overflowX,
            overflowY: style.overflowY,
            position: style.position,
            transform: style.transform,
            contain: style.contain
          });
          curr = curr.parentElement;
        }

        return {
          stickyPosition: stickyStyle.position,
          stickyTop: stickyStyle.top,
          parents: list
        };
      })()`,
      returnByValue: true
    });
    console.log('Sticky analysis:\n', JSON.stringify(parents.result.value, null, 2));
    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
