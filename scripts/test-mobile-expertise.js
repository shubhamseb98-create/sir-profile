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
    // Set to iPhone 14 Pro: 390 x 844
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      mobile: true
    });

    // Trigger resize event
    await send('Runtime.evaluate', { expression: 'window.dispatchEvent(new Event("resize"));' });
    await new Promise(r => setTimeout(r, 200));

    const sInfo = await send('Runtime.evaluate', {
      expression: `(() => {
        const s = document.querySelector('#core-expertise');
        const track = s.querySelector('.sticky div.flex-1 > div');
        const cards = Array.from(track.children);
        return {
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          sOffsetTop: s.offsetTop,
          sHeight: s.offsetHeight,
          trackWidth: track.scrollWidth,
          card0Width: cards[0].offsetWidth,
          card9Width: cards[9].offsetWidth
        };
      })()`,
      returnByValue: true
    });
    console.log('Mobile info:', sInfo.result.value);

    const { sOffsetTop, sHeight, windowHeight } = sInfo.result.value;
    const range = sHeight - windowHeight;

    for (let pct of [0, 25, 50, 75, 100]) {
      const sy = Math.round(sOffsetTop + (pct / 100) * range);
      await send('Runtime.evaluate', {
        expression: `window.scrollTo(0, ${sy}); window.dispatchEvent(new Event('scroll'));`
      });
      await new Promise(r => setTimeout(r, 100));

      const f = await send('Runtime.evaluate', {
        expression: `(() => {
          const s = document.querySelector('#core-expertise');
          const track = s.querySelector('.sticky div.flex-1 > div');
          const cards = Array.from(track.children);
          const activeText = s.querySelector('.sticky span.font-mono')?.textContent;
          return {
            pct: ${pct} + '%',
            sy: window.scrollY,
            activeText,
            transform: track.style.transform,
            card0Left: Math.round(cards[0].getBoundingClientRect().left),
            card9Left: Math.round(cards[9].getBoundingClientRect().left),
            card9Right: Math.round(cards[9].getBoundingClientRect().right),
            isCard9InView: cards[9].getBoundingClientRect().left < window.innerWidth && cards[9].getBoundingClientRect().right > 0
          };
        })()`,
        returnByValue: true
      });
      console.log(f.result.value);
    }

    await send('Emulation.clearDeviceMetricsOverride');
    ws.close();
    process.exit(0);
  });
}

main().catch(console.error);
