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
  const html = fs.readFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/skiper17_raw.html', 'utf8');
  
  // Find all chunks in html
  const regex = /"(\d+)":\s*"([a-f0-9]+)"/g;
  let m;
  const chunkMap = {};
  while ((m = regex.exec(html)) !== null) {
    chunkMap[m[1]] = m[2];
  }
  console.log('Chunk map keys:', Object.keys(chunkMap).slice(0, 20));

  // Also check all script tags or webpack chunk files
  const scriptRegex = /"([^"]*8373[^"]*)"|"([^"]*5219[^"]*)"/g;
  console.log('Direct matches:', html.match(scriptRegex));

  // Let's search inside all static chunks directory
  // In Next.js, chunks are often /_next/static/chunks/[id].[hash].js or /_next/static/chunks/[id]-[hash].js
  // Let's find webpack-*.js chunk and check chunk loading
  const wpChunkMatch = html.match(/src="(\/_next\/static\/chunks\/webpack-[^"]+)"/);
  if (wpChunkMatch) {
    const wpJs = await fetchPage('https://skiper-ui.com' + wpChunkMatch[1]);
    fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/webpack.js', wpJs);
    
    // Find how chunk 8373 and 5219 are resolved
    // In webpack: return __webpack_require__.p + "static/chunks/" + ({...}[chunkId]||chunkId) + "." + {...}[chunkId] + ".js"
    const m8373 = wpJs.match(/8373:"([a-f0-9]+)"/);
    const m5219 = wpJs.match(/5219:"([a-f0-9]+)"/);
    console.log('m8373:', m8373);
    console.log('m5219:', m5219);

    if (m8373) {
      const cUrl = `https://skiper-ui.com/_next/static/chunks/8373-${m8373[1]}.js`;
      console.log('Fetching 8373 from', cUrl);
      const code = await fetchPage(cUrl);
      fs.writeFileSync('C:/Users/ADMIN1/.gemini/antigravity-ide/brain/5604becb-4d2b-43d2-bb23-d886cfb41b9e/skiper17_component.js', code);
      console.log('Saved skiper17_component.js! Length:', code.length);
      console.log('Snippet:', code.slice(0, 3000));
    }
  }
}

main().catch(console.error);
