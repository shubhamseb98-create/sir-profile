const https = require('https');
const fs = require('fs');

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const html = await fetchPage('https://skiper-ui.com/v1/skiper17');
  fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/skiper17_raw.html', html);
  
  // Extract script src
  const scriptRegex = /src="(\/_next\/static\/chunks\/[^"]+)"/g;
  let match;
  const chunkUrls = [];
  while ((match = scriptRegex.exec(html)) !== null) {
    chunkUrls.push(match[1]);
  }
  console.log('Found chunks:', chunkUrls.length);

  for (const chunk of chunkUrls) {
    const js = await fetchPage('https://skiper-ui.com' + chunk);
    if (js.includes('gsap') || js.includes('skiper17') || js.includes('rotate') && js.includes('card')) {
      console.log('Found relevant chunk:', chunk);
      fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/skiper17_chunk.js', js);
      
      // Let's search inside this js for component code
      const idx = js.indexOf('skiper17');
      if (idx !== -1) {
        console.log('Snippet around skiper17:', js.slice(Math.max(0, idx - 500), idx + 2000));
      }
    }
  }
}

main().catch(console.error);
