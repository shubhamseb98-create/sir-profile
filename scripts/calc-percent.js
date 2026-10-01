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
    // Check track dimensions and calculate exact percent
    const dims = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#core-expertise');
        const track = s.querySelector('.sticky div.flex-1 > div');
        const cards = Array.from(track.children);
        const lastCard = cards[cards.length - 1];
        
        // Let's test what transform puts the last card perfectly inside the viewport
        const trackWidth = track.scrollWidth;
        const viewWidth = window.innerWidth;
        const requiredPx = trackWidth - viewWidth;
        const requiredPercent = (requiredPx / trackWidth) * 100;
        
        return {
          trackWidth,
          viewWidth,
          cardsCount: cards.length,
          lastCardWidth: lastCard.offsetWidth,
          requiredPx,
          requiredPercent: requiredPercent.toFixed(2) + '%'
        };
      })()`,
      returnByValue: true
    });
    console.log('Track dimensions:', dims.result.value);

    // Let's test on mobile too
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true
    });

    const mobileDims = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#core-expertise');
        const track = s.querySelector('.sticky div.flex-1 > div');
        const cards = Array.from(track.children);
        const lastCard = cards[cards.length - 1];
        const trackWidth = track.scrollWidth;
        const viewWidth = window.innerWidth;
        const requiredPx = trackWidth - viewWidth;
        const requiredPercent = (requiredPx / trackWidth) * 100;
        return {
          trackWidth,
          viewWidth,
          lastCardWidth: lastCard.offsetWidth,
          requiredPx,
          requiredPercent: requiredPercent.toFixed(2) + '%'
        };
      })()`,
      returnByValue: true
    });
    console.log('Mobile dimensions:', mobileDims.result.value);

    await send('Emulation.clearDeviceMetricsOverride');
    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
