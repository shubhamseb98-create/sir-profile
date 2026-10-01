# Dheeraj Aggarwal — Personal Brand & Business Platform

An award-level, production-ready personal brand, executive consulting, and business ecosystem platform for **Dheeraj Aggarwal**: Business Consultant | Digital Expert | Growth Specialist | Speaker | Community Builder.

Built with **Next.js (App Router)**, **Tailwind CSS**, **GSAP**, **Framer Motion**, and **Lenis Smooth Scroll**. Designed with an executive **quiet luxury** aesthetic featuring deep navy (`#0A0F1A`), restrained gold accents (`#C6A15B`), warm ivory rhythmic sections (`#F4EFE6`), and editorial typography via Cormorant Garamond.

---

## 1. Quick Start

### Prerequisites
- Node.js 18.17+ or 20+ installed
- npm or pnpm

### Installation
```bash
# Clone the repository and navigate into directory
cd profile-next

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Linting
```bash
# Verify ESLint (100% clean, 0 warnings)
npm run lint

# Compile optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 2. Content Management (`/data`)

All copy and business data live in structured `/data/*.js` files so you can edit content without touching any UI code or JSX templates:

- **`data/site.js`**: Global site configuration, positioning lines, designation, contact numbers, email, WhatsApp link, social media handles, navigation menu items, and core metric counters.
- **`data/services.js`**: The 6 consulting practice domains, specific deliverables, target audience, and the 6 structured engagement models (Diagnostics, 90-Day Sprint, Mandate, Advisory, Offsite).
- **`data/roles.js`**: Leadership ventures directory (Web Tycoons, Karma Ayurveda, Happy Hospitality Club, BNI, Speaker & Mentor) and the incubation pipeline for Future Ventures.
- **`data/caseStudies.js`**: Complete case study narratives with Challenge → Strategy → Outcomes architecture and support for confidential clients (`anonymised: true`).
- **`data/posts.js`**: Executive insight articles, core questions, quick answers, framework steps, and SEO metadata.
- **`data/testimonials.js`**: Video testimonial metadata, embed URLs, and written client endorsements.
- **`data/speaking.js`**: 10 signature keynote topics, session delivery formats, target audiences, and representative stages.

---

## 3. Image & Logo Assets (`/public`)

Drop the client's authentic photographic and branding assets directly into these directories:

### Personal & Executive Photography
- **Directory**: `/public/images/dheeraj/`
- **Files**:
  - `portrait-hero.jpg` — Primary homepage executive portrait (Aspect 4:5, ~1200x1500px).
  - `portrait-about.jpg` — About page portrait.
  - `speaking-01.jpg` — Keynote stage presentation photography.
  - `bni-01.jpg` — Executive networking & chapter leadership moments.
  - `hhc-event-01.jpg` — Happy Hospitality Club leadership and soiree events.
- *Note*: If an image file is not yet uploaded, the platform automatically renders a luxury placeholder frame with a subtle gold monogram and aspect-ratio preservation without breaking layout.

### Supporting Photography
- **Directory**: `/public/images/supporting/`
- Real documentary-style photography covering clinical healthcare environments, modern architectural workspaces, hospitality suites, and keynote stages. Documented in `/docs/image-credits.md`.

### Institutional Logos
- **Directory**: `/public/logos/`
- Place approved SVGs or PNGs for Web Tycoons, Karma Ayurveda, Happy Hospitality Club, and BNI.

### Downloadable Profiles
- **Directory**: `/public/downloads/`
- `Dheeraj-Aggarwal-Professional-Profile.pdf`
- `Dheeraj-Aggarwal-Speaker-Profile.pdf`

---

## 4. Environment Variables (`.env.local`)

Copy `.env.example` to `.env.local` and configure your credentials:

```bash
cp .env.example .env.local
```

```env
# Contact Form Email Delivery (Resend API)
RESEND_API_KEY=re_your_api_key_here
CONTACT_RECIPIENT_EMAIL=contact@dheerajaggarwal.com

# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Canonical Domain URL
NEXT_PUBLIC_SITE_URL=https://dheerajaggarwal.com
```

---

## 5. Site Architecture & Routes

| Route | Description |
| :--- | :--- |
| `/` | **Home**: Hero, Credibility Marquee, Outcomes, Core Expertise, Pinned Roles, Case Studies, Why Work With Me (Ivory), Testimonials, Final CTA |
| `/about` | **About Dheeraj**: Executive story, animated scrub timeline, philosophy, capabilities, personal values, download profiles |
| `/consulting` | **Consulting**: Sticky left service index, 6 consulting pillars, 6 engagement models, strategy booking |
| `/digital-growth` | **Digital Growth & Web Tycoons**: 15+ year agency history, 3,700+ deliveries, services matrix, performance proof |
| `/leadership-ventures` | **Leadership & Ventures**: Active roles directory, ecosystem governance, future ventures |
| `/karma-ayurveda` | **Karma Ayurveda Advisory**: Executive advisory case study, 6 capability pillars, transformation snapshots, initiative roadmap |
| `/hhc` | **Happy Hospitality Club (HHC)**: Community overview, vendor tiers, event architecture, partnership pathways |
| `/speaking` | **Speaking & Workshops**: 10 signature topics, delivery formats, audiences, speaker kit download |
| `/case-studies` | **Case Studies**: Filterable listing with animated category chips, anonymised case support |
| `/case-studies/[slug]` | **Case Study Detail**: 9-part case study architecture (Challenge, Diagnosis, Strategy, Systems, Results, Quote) |
| `/insights` | **Insights**: Executive thought leadership articles with filterable content pillars |
| `/insights/[slug]` | **Article Detail**: Question H1, quick answer box, framework checklist, JSON-LD Schema |
| `/media` | **Media & Testimonials**: Video modal player, written endorsements, photo lightbox gallery, recognition wall |
| `/contact` | **Contact & Strategy Booking**: Category pill selector, validation, honeypot spam protection, Calendly integration |
| `/privacy-policy` | **Privacy Policy**: Executive confidentiality terms and client data protection |
| `/terms` | **Terms of Engagement**: Advisory scope, IP rights, and standard consultation terms |
| `/sitemap.xml` | Dynamic XML sitemap generator |
| `/robots.txt` | Automated search crawler directives |

---

## 6. Deployment on Vercel

The application is pre-optimized for **Vercel** with Next.js App Router:

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. In the Vercel dashboard, click **Add New Project** and select your repository.
3. Keep default settings (`Framework Preset: Next.js`, `Build Command: npm run build`, `Output Directory: .next`).
4. In **Environment Variables**, add:
   - `RESEND_API_KEY`
   - `CONTACT_RECIPIENT_EMAIL`
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_SITE_URL`
5. Click **Deploy**.
