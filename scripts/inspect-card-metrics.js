const http = require('http');

async function main() {
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
    const info = (await send('Runtime.evaluate', {
      expression: `(() => {
        const card = document.querySelector('#transformations article');
        const rCard = card.getBoundingClientRect();
        const topBar = card.querySelector('.border-b');
        const rTopBar = topBar.getBoundingClientRect();
        const grid = card.querySelector('.grid');
        const rGrid = grid.getBoundingClientRect();
        const colImg = grid.children[0];
        const rColImg = colImg.getBoundingClientRect();
        const imgFrame = colImg.children[0];
        const rImgFrame = imgFrame.getBoundingClientRect();
        const colContent = grid.children[1];
        const rColContent = colContent.getBoundingClientRect();
        const actionRow = colContent.querySelector('.border-t');
        const rActionRow = actionRow.getBoundingClientRect();

        return {
          card: { top: rCard.top, bottom: rCard.bottom, height: rCard.height },
          cardPaddingBottom: window.getComputedStyle(card).paddingBottom,
          topBarBottom: rTopBar.bottom,
          grid: { top: rGrid.top, bottom: rGrid.bottom, height: rGrid.height },
          colImg: { top: rColImg.top, bottom: rColImg.bottom, height: rColImg.height },
          imgFrame: { top: rImgFrame.top, bottom: rImgFrame.bottom, height: rImgFrame.height },
          colContent: { top: rColContent.top, bottom: rColContent.bottom, height: rColContent.height },
          actionRow: { top: rActionRow.top, bottom: rActionRow.bottom }
        };
      })()`,
      returnByValue: true
    })).result.value;

    console.log('DOM metrics:', JSON.stringify(info, null, 2));
    process.exit(0);
  });
}
main().catch(console.error);
