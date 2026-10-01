const fs = require('fs');
const path = require('path');

const cardDir = path.join(__dirname, '../public/images/cards');
const logoDir = path.join(__dirname, '../public/logos');
fs.mkdirSync(cardDir, { recursive: true });
fs.mkdirSync(logoDir, { recursive: true });

function createHexBadgeSVG(title, subtitle, iconPath) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A0F1D" />
      <stop offset="50%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#1E293B" />
    </linearGradient>
    <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#1D4ED8" stop-opacity="0.2" />
    </linearGradient>
    <linearGradient id="glassBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#2563EB" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0.8" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="450" fill="url(#bgGrad)" />

  <!-- Ambient Light Orb -->
  <circle cx="400" cy="225" r="160" fill="#2563EB" opacity="0.25" filter="url(#glow)" />
  <circle cx="400" cy="225" r="90" fill="#38BDF8" opacity="0.2" filter="url(#glow)" />

  <!-- Subtle Circuit Lines -->
  <path d="M 150 225 L 300 225 M 500 225 L 650 225 M 400 75 L 400 135 M 400 315 L 400 375" stroke="#38BDF8" stroke-width="1.5" stroke-opacity="0.25" stroke-dasharray="4 4" />

  <!-- Outer Glass Hexagon -->
  <polygon points="400,95 510,160 510,290 400,355 290,290 290,160" fill="#0F172A" fill-opacity="0.6" stroke="url(#glassBorder)" stroke-width="3" filter="url(#glow)" />

  <!-- Inner Glass Hexagon Highlight -->
  <polygon points="400,115 490,170 490,280 400,335 310,280 310,170" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-opacity="0.4" />

  <!-- Center Icon Graphic -->
  <g transform="translate(400, 225) scale(1.6)" filter="url(#glow)">
    ${iconPath}
  </g>

  <!-- Title & Subtitle Badge -->
  <text x="400" y="390" text-anchor="middle" fill="#F8FAFC" font-family="'Poppins', sans-serif" font-size="14" font-weight="600" letter-spacing="3">${title.toUpperCase()}</text>
  <text x="400" y="415" text-anchor="middle" fill="#38BDF8" font-family="'Poppins', sans-serif" font-size="11" font-weight="500" letter-spacing="1.5">${subtitle.toUpperCase()}</text>
</svg>`;
}

// 1. Strategic Alliances: Handshake / Interlocking Rings
const alliancesIcon = `
  <circle cx="-12" cy="0" r="18" fill="none" stroke="#38BDF8" stroke-width="3" />
  <circle cx="12" cy="0" r="18" fill="none" stroke="#60A5FA" stroke-width="3" />
  <path d="M -8 -8 L 8 8 M -8 8 L 8 -8" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
`;
fs.writeFileSync(path.join(cardDir, 'strategic-alliances.svg'), createHexBadgeSVG('Strategic Alliances', 'Institutional Tie-ups', alliancesIcon));

// 2. Leadership Teams & Execution Discipline: Pedestal & Trophy / Crown
const leadershipIcon = `
  <polygon points="0,-22 8,-6 22,-12 14,14 -14,14 -22,-12 -8,-6" fill="none" stroke="#38BDF8" stroke-width="3" stroke-linejoin="round" />
  <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
`;
fs.writeFileSync(path.join(cardDir, 'leadership-teams.svg'), createHexBadgeSVG('Leadership Teams', 'Execution Discipline', leadershipIcon));

// 3. Web Tycoons: Browser / Tech Stack
const webTycoonsIcon = `
  <rect x="-24" y="-18" width="48" height="36" rx="4" fill="none" stroke="#38BDF8" stroke-width="3" />
  <line x1="-24" y1="-8" x2="24" y2="-8" stroke="#38BDF8" stroke-width="2" />
  <circle cx="-16" cy="-13" r="2" fill="#38BDF8" />
  <circle cx="-10" cy="-13" r="2" fill="#60A5FA" />
  <circle cx="-4" cy="-13" r="2" fill="#93C5FD" />
  <path d="M -10 6 L -4 0 L -10 -6 M 4 6 L 10 0 L 4 -6" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
`;
fs.writeFileSync(path.join(cardDir, 'web-tycoons.svg'), createHexBadgeSVG('Web Tycoons', '15+ Years Agency', webTycoonsIcon));

// 4. Karma Ayurveda: Botanical Leaf Shield
const karmaIcon = `
  <path d="M 0 -22 C 14 -10 18 10 0 22 C -18 10 -14 -10 0 -22 Z" fill="none" stroke="#38BDF8" stroke-width="3" />
  <path d="M 0 -22 L 0 22 M 0 -4 L 8 4 M 0 6 L -8 14" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" />
`;
fs.writeFileSync(path.join(cardDir, 'karma-ayurveda.svg'), createHexBadgeSVG('Karma Ayurveda', 'Healthcare Advisory', karmaIcon));

// 5. Happy Hospitality Club: Hotel & Hospitality Key / Bell
const hhcIcon = `
  <path d="M -18 12 L 18 12 M -12 12 C -12 2 12 2 12 12 M 0 -4 L 0 2 M -4 -4 L 4 -4" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" />
  <circle cx="0" cy="18" r="3" fill="#60A5FA" />
`;
fs.writeFileSync(path.join(cardDir, 'hhc-hospitality.svg'), createHexBadgeSVG('Happy Hospitality Club', 'Hospitality Network', hhcIcon));

// 6. BNI: Connected Nexus Star
const bniIcon = `
  <circle cx="0" cy="0" r="10" fill="none" stroke="#38BDF8" stroke-width="3" />
  <circle cx="-16" cy="-12" r="5" fill="#60A5FA" />
  <circle cx="16" cy="-12" r="5" fill="#60A5FA" />
  <circle cx="0" cy="18" r="5" fill="#60A5FA" />
  <line x1="-12" y1="-9" x2="-6" y2="-4" stroke="#93C5FD" stroke-width="2" />
  <line x1="12" y1="-9" x2="6" y2="-4" stroke="#93C5FD" stroke-width="2" />
  <line x1="0" y1="13" x2="0" y2="7" stroke="#93C5FD" stroke-width="2" />
`;
fs.writeFileSync(path.join(cardDir, 'bni-networking.svg'), createHexBadgeSVG('BNI Chapter', 'Referral Leadership', bniIcon));

// 7. Speaking & Mentor: Stage Microphone
const speakingIcon = `
  <rect x="-7" y="-18" width="14" height="24" rx="7" fill="none" stroke="#38BDF8" stroke-width="3" />
  <path d="M -13 -4 C -13 8 13 8 13 -4" fill="none" stroke="#60A5FA" stroke-width="2.5" stroke-linecap="round" />
  <line x1="0" y1="10" x2="0" y2="20" stroke="#38BDF8" stroke-width="3" />
  <line x1="-8" y1="20" x2="8" y2="20" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" />
`;
fs.writeFileSync(path.join(cardDir, 'speaking-mentor.svg'), createHexBadgeSVG('Keynote Speaker', 'MSME & Forums', speakingIcon));

// 8. Executive Brand Logo
const logoSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 64" width="100%" height="100%">
  <defs>
    <linearGradient id="logoBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
  </defs>
  <!-- Monogram Mark -->
  <g transform="translate(10, 8)">
    <rect width="48" height="48" rx="12" fill="#0F172A" stroke="url(#logoBlue)" stroke-width="2" />
    <path d="M 16 36 L 16 14 L 28 25 L 28 36 M 28 14 L 38 36" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <circle cx="28" cy="20" r="2.5" fill="#60A5FA" />
  </g>
  <!-- Text -->
  <text x="70" y="32" fill="#F8FAFC" font-family="'Poppins', sans-serif" font-size="20" font-weight="700" letter-spacing="-0.5">DHEERAJ AGGARWAL</text>
  <text x="71" y="48" fill="#38BDF8" font-family="'Poppins', sans-serif" font-size="9" font-weight="600" letter-spacing="2.5">BUSINESS CONSULTANT &amp; GROWTH</text>
</svg>`;
fs.writeFileSync(path.join(logoDir, 'dheeraj-aggarwal-logo.svg'), logoSVG);

console.log('All card images and logo generated successfully!');
