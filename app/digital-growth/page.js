import Image from "next/image";
import {
  Award,
  Building2,
  Compass,
  Factory,
  Globe2,
  GraduationCap,
  Handshake,
  HeartPulse,
  Layers,
  Lightbulb,
  LineChart,
  Plane,
  ShoppingCart,
  Target,
  Users,
  Utensils,
} from "lucide-react";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import SectionHeading from "@/components/ui/SectionHeading";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import Button from "@/components/ui/Button";
import DigitalServicesCarousel from "@/components/sections/DigitalServicesCarousel";
import DigitalCaseStudiesCarousel from "@/components/sections/DigitalCaseStudiesCarousel";
import PageCTA from "@/components/sections/PageCTA";
import { caseStudies } from "@/data/caseStudies";

export const metadata = {
  title: "Digital Growth & Web Tycoons | Dheeraj Aggarwal",
  description:
    "Founded by Dheeraj Aggarwal, Web Tycoons is a 15+ year digital marketing and web development agency that has delivered 3,700+ websites across healthcare, hospitality, education, manufacturing, travel, real estate, and e-commerce.",
};

const digitalServices = [
  {
    number: "01",
    title: "Website Design and Development",
    deliverable: "Bespoke UI/UX • Performance",
    description:
      "Custom corporate websites, brand flagships, and high-converting digital portals built for speed and authority.",
    image: "/images/transformations/webtycoons-studio.jpg",
    iconKey: "globe",
  },
  {
    number: "02",
    title: "E-Commerce Development",
    deliverable: "Storefronts • Checkout UX",
    description:
      "Scalable D2C and B2B online stores engineered with frictionless checkout flows, payment integrations, and cart recovery.",
    image: "/images/hero/hero-modern-office.jpg",
    iconKey: "ecommerce",
  },
  {
    number: "03",
    title: "SEO and Google Ranking",
    deliverable: "Technical SEO • Local Authority",
    description:
      "Structured search architecture, schema markup, and keyword roadmaps built to rank high-intent category searches on Google.",
    image: "/images/cards/digital-growth-real.jpg",
    iconKey: "search",
  },
  {
    number: "04",
    title: "Google Ads",
    deliverable: "Search • Shopping • Intent Capture",
    description:
      "Disciplined search campaigns and dedicated landing funnels capturing active demand while protecting CPA and margins.",
    image: "/images/cards/roas-analytics-real.jpg",
    iconKey: "google-ads",
  },
  {
    number: "05",
    title: "Meta Ads",
    deliverable: "Paid Social • Creative Testing",
    description:
      "Full-funnel Facebook and Instagram acquisition combining audience tiering, rapid hook testing, and strict ROAS discipline.",
    image: "/images/reels/reel-leads.jpg",
    iconKey: "meta-ads",
  },
  {
    number: "06",
    title: "LinkedIn Marketing",
    deliverable: "B2B Demand • Decision Makers",
    description:
      "Executive brand positioning, targeted B2B outreach, and sponsored LinkedIn pipelines tailored for enterprise buyers.",
    image: "/images/roles/bni-showcase.jpg",
    iconKey: "linkedin",
  },
  {
    number: "07",
    title: "Social Media Strategy and Execution",
    deliverable: "Calendars • Community Growth",
    description:
      "Consistent multi-platform brand storytelling, editorial calendars, and publishing rhythms that build long-term category recall.",
    image: "/images/inner/speaking-executive-workshop.jpg",
    iconKey: "social",
  },
  {
    number: "08",
    title: "Content, Graphics and Reels",
    deliverable: "Short Video • Brand Visuals",
    description:
      "High-retention short-form reels, commercial graphics, and persuasive copy assets engineered to stop feeds and convert.",
    image: "/images/supporting/testimonial-poster-1.jpg",
    iconKey: "content",
  },
  {
    number: "09",
    title: "Lead Generation and Performance Marketing",
    deliverable: "Funnels • CRM Integration",
    description:
      "End-to-end inquiry pipelines uniting landing pages, paid media, automated WhatsApp/CRM capture, and sales SLA tracking.",
    image: "/images/cards/crm-operations-real.jpg",
    iconKey: "lead-gen",
  },
  {
    number: "10",
    title: "Analytics and Conversion Tracking",
    deliverable: "GA4 • Server-Side Attribution",
    description:
      "Clean event tracking, server-side pixels, CRM conversion syncing, and revenue dashboards eliminating blind ad spend.",
    image: "/images/hero/hero-business-strategy.jpg",
    iconKey: "analytics",
  },
  {
    number: "11",
    title: "Domain, Hosting, SSL and Technology Support",
    deliverable: "Cloud Infrastructure • Security",
    description:
      "Dependable domain governance, managed cloud hosting, SSL hardening, uptime monitoring, and ongoing tech stewardship.",
    image: "/images/inner/about-sop-systems.jpg",
    iconKey: "hosting",
  },
];

const dheerajRoles = [
  {
    num: "01",
    title: "Business and Growth Strategy",
    description:
      "Aligning digital investments directly with unit economics, category expansion goals, and commercial targets.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Client Consulting and Solution Architecture",
    description:
      "Diagnosing bottlenecks upfront and architecting the right web, CRM, and funnel stack before launch.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Digital Campaign Direction",
    description:
      "Setting channel priorities, budget pacing, creative angles, and search-to-social acquisition sequences.",
    icon: Target,
  },
  {
    num: "04",
    title: "Brand Positioning",
    description:
      "Crafting clear differentiation and trust signals so businesses win on authority rather than discounting.",
    icon: Award,
  },
  {
    num: "05",
    title: "High-Value Client Engagement",
    description:
      "Acting as the senior strategic counterparty for promoter-led brands, healthcare chains, and B2B groups.",
    icon: Handshake,
  },
  {
    num: "06",
    title: "Team Mentoring and Review",
    description:
      "Guiding senior designers, engineers, SEO specialists, and media buyers through structured quality reviews.",
    icon: Users,
  },
  {
    num: "07",
    title: "Performance, ROAS and Conversion Oversight",
    description:
      "Monitoring lead quality, CAC, landing conversion rates, and blended ROAS to eliminate silent budget leaks.",
    icon: LineChart,
  },
  {
    num: "08",
    title: "New Product and Platform Ideation",
    description:
      "Conceiving custom web portals, multi-city frameworks, and proprietary workflows tailored to unique models.",
    icon: Lightbulb,
  },
];

const proofMetrics = [
  {
    stat: "15+ Years",
    label: "In Digital Business",
    detail: "Continuous operations guiding brands across web, search, and paid acquisition.",
  },
  {
    stat: "3,700+",
    label: "Websites Delivered",
    detail: "Production websites, B2B catalogs, portals, and e-commerce builds launched at scale.",
  },
  {
    stat: "7 Core",
    label: "Industry Verticals",
    detail: "Depth across healthcare, hospitality, education, manufacturing, travel, real estate & D2C.",
  },
  {
    stat: "Search & ROI",
    label: "Google Visibility Focus",
    detail: "Result-driven digital strategies engineered for search authority and commercial return.",
  },
];

const industrySectors = [
  { name: "Healthcare", focus: "Multi-clinic portals & patient funnels", icon: HeartPulse },
  { name: "Hospitality", focus: "Direct bookings & venue branding", icon: Utensils },
  { name: "Education", focus: "Admissions portals & inquiry scale", icon: GraduationCap },
  { name: "Manufacturing", focus: "B2B SEO & technical RFQ catalogs", icon: Factory },
  { name: "Travel", focus: "Destination visibility & tour leads", icon: Plane },
  { name: "Real Estate", focus: "Project microsites & buyer capture", icon: Building2 },
  { name: "E-Commerce", focus: "Storefront UX & ROAS scaling", icon: ShoppingCart },
  { name: "Across Geographies", focus: "National & global brand delivery", icon: Globe2 },
];

const featuredDigitalSpecs = [
  {
    slug: "web-tycoons-agency-scale",
    shortTab: "Web Tycoons Scale",
    businessContext:
      "Independent digital engineering and marketing agency built by Dheeraj Aggarwal to support growth-focused businesses across 15+ years and geographies.",
    channelsUsed: [
      "Custom Web Engineering",
      "Technical SEO",
      "Conversion UX",
      "Managed Hosting",
    ],
    image: "/images/transformations/webtycoons-studio.jpg",
  },
  {
    slug: "high-growth-d2c-roas-optimization",
    shortTab: "D2C ROAS Lift",
    businessContext:
      "Mid-market consumer lifestyle brand scaling paid digital acquisition aggressively while facing rising customer acquisition costs.",
    channelsUsed: [
      "Meta Ads",
      "Google Search Ads",
      "CRO Landing Funnels",
      "WhatsApp Recovery",
    ],
    image: "/images/cards/roas-analytics-real.jpg",
  },
  {
    slug: "national-manufacturing-google-visibility",
    shortTab: "B2B Manufacturing",
    businessContext:
      "25-year industrial equipment manufacturer selling commercial machinery across Tier-1 industrial corridors.",
    channelsUsed: [
      "B2B Organic SEO",
      "Spec Catalog Web Portal",
      "Technical Schema",
      "CRM RFQ Routing",
    ],
    image: "/images/cards/digital-growth-real.jpg",
  },
];

const featuredDigitalStudies = featuredDigitalSpecs
  .map((spec) => {
    const base = caseStudies.find((item) => item.slug === spec.slug);
    if (!base) return null;
    return { ...base, ...spec };
  })
  .filter(Boolean);

export default function DigitalGrowthPage() {
  return (
    <main className="font-sans">
      <BreadcrumbHero
        eyebrow="DIGITAL GROWTH & WEB TYCOONS"
        title="Websites, Google Visibility & Performance Scale."
        description="Connecting Web Tycoons’ 15+ year, 3,700+ website delivery engine directly with Dheeraj Aggarwal’s personal leadership in growth strategy, brand positioning, and ROI oversight."
        badge="15+ Years • 3,700+ Websites"
        breadcrumbs={[
          { label: "Consulting", href: "/consulting" },
          { label: "Digital Growth & Web Tycoons" },
        ]}
        imageSrc="/images/transformations/webtycoons-studio.jpg"
        className="!pt-24 !pb-8 md:!pt-28 md:!pb-10"
      />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: WEB TYCOONS OVERVIEW (Single-Screen Light Editorial)
         ═══════════════════════════════════════════════════════════ */}
      <section
        id="overview"
        className="py-[60px] bg-white text-[#0F172A] border-b border-slate-200"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-center">
            <div className="lg:col-span-6 space-y-3">
              <SectionHeading
                eyebrow="01 · WEB TYCOONS OVERVIEW"
                title="Web Tycoons & Founder Strategy"
                light={true}
                compact={true}
                animate={false}
                className="!mb-2.5 max-w-none"
              />

              <p className="text-[13px] sm:text-sm font-medium text-[#0F172A] leading-relaxed border-l-[3px] border-[#2563EB] pl-3.5 py-0.5">
                Founded by Dheeraj Aggarwal, Web Tycoons is a 15+ year digital marketing and web
                development agency that has delivered more than 3,700 websites and supported
                businesses across industries and geographies.
              </p>

              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Most founders face a costly gap: strategic consultants hand over decks without an
                engineering team to build them, while vendors run ads without commercial context.
                Web Tycoons bridges that divide under Dheeraj Aggarwal’s direct strategic
                leadership.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-0.5">
                <div className="rounded-xl bg-[#F8FAFC] border border-slate-200 p-2.5 sm:p-3">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tabular-nums">
                    15+ Years
                  </div>
                  <p className="text-[11px] font-medium text-slate-600">
                    Continuous agency operations
                  </p>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] border border-slate-200 p-2.5 sm:p-3">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#2563EB] tabular-nums">
                    3,700+
                  </div>
                  <p className="text-[11px] font-medium text-slate-600">
                    Websites & digital platforms built
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button href="#digital-services" variant="light-primary" size="sm" icon="right">
                  Explore All 11 Services
                </Button>
                <Button href="#dheeraj-role" variant="light-secondary" size="sm" icon="up-right">
                  Dheeraj’s Leadership Role
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#04040A] shadow-xl">
                <div className="relative h-[185px] sm:h-[210px] w-full">
                  <Image
                    src="/images/transformations/webtycoons-studio.jpg"
                    alt="Web Tycoons digital strategy and web engineering studio"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04040A] via-[#04040A]/30 to-transparent" />
                </div>

                <div className="p-3.5 sm:p-4 bg-[#090F1E] text-white flex items-center gap-3.5 border-t border-white/10">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#60A5FA]/60 bg-[#04040A] shrink-0">
                    <Image
                      src="/images/hero/ddab.png"
                      alt="Dheeraj Aggarwal — Founder of Web Tycoons"
                      fill
                      sizes="44px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-[#93C5FD] font-bold">
                      FOUNDER-LED DELIVERY
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Dheeraj Aggarwal × Web Tycoons
                    </p>
                    <p className="text-xs text-slate-300 leading-snug mt-0.5 line-clamp-1">
                      Personal brand advisory backed by dedicated engineering, SEO, and paid media teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: DIGITAL SERVICES CAROUSEL (11 Capabilities)
         ═══════════════════════════════════════════════════════════ */}
      <DigitalServicesCarousel services={digitalServices} />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: DHEERAJ'S ROLE (Single-Screen Obsidian & Blue Matrix)
         ═══════════════════════════════════════════════════════════ */}
      <section
        id="dheeraj-role"
        className="relative py-[60px] bg-[#04040A] text-white overflow-hidden border-b border-white/10"
      >
        <DarkSectionLining variant="blue" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5">
            <SectionHeading
              eyebrow="03 · DHEERAJ’S ROLE"
              title="Leadership Beyond Execution"
              description="Web Tycoons delivers daily execution while Dheeraj personally leads strategy, brand positioning, architecture, and conversion oversight."
              light={false}
              compact={true}
              animate={false}
              className="!mb-0 max-w-2xl"
            />

            <div className="flex items-center gap-3 self-start lg:self-auto shrink-0">
              <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#090F1E] border border-white/12">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#60A5FA]/60 shrink-0">
                  <Image
                    src="/images/hero/ddab.png"
                    alt="Dheeraj Aggarwal strategic leadership"
                    fill
                    sizes="28px"
                    className="object-cover object-top"
                  />
                </div>
                <span className="text-[11px] font-semibold text-slate-200">
                  Founder Accountability
                </span>
              </div>

              <Button href="/contact?type=digital-audit" variant="primary" size="sm">
                Work With Dheeraj Directly
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {dheerajRoles.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.num}
                  className="group rounded-xl bg-[#090F1E]/95 border border-white/10 hover:border-[#60A5FA]/55 p-3.5 sm:p-4 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#3B82F6]/15 border border-[#60A5FA]/35 text-[#93C5FD] shrink-0">
                        <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.14em] text-[#93C5FD]/80 tabular-nums">
                        {role.num}
                      </span>
                    </div>
                    <h3 className="text-sm font-normal text-white leading-snug group-hover:text-[#93C5FD] transition-colors">
                      {role.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-300 leading-snug line-clamp-3">
                    {role.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: PROOF & METRICS (Single-Screen White Showcase)
         ═══════════════════════════════════════════════════════════ */}
      <section
        id="proof-metrics"
        className="py-[60px] bg-white text-[#0F172A] border-b border-slate-200"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="04 · PROOF & METRICS"
            title="Proof & Tangible Evidence"
            description="Longevity, delivery volume across seven core sectors, and relentless focus on Google visibility and commercial ROI."
            light={true}
            compact={true}
            animate={false}
            className="!mb-4 max-w-3xl"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3.5">
            {proofMetrics.map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-[#F8FAFC] border border-slate-200 p-3 sm:p-3.5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight tabular-nums">
                    {item.stat}
                  </div>
                  <div className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#1D4ED8]">
                    {item.label}
                  </div>
                </div>
                <p className="mt-1.5 pt-1.5 border-t border-slate-200 text-[11.5px] text-slate-600 leading-snug line-clamp-2">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-4 relative min-h-[145px] bg-[#04040A]">
                <Image
                  src="/images/roles/web-tycoons-showcase.jpg"
                  alt="Web Tycoons multi-industry website and SEO portfolio showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04040A]/90 via-[#04040A]/35 to-transparent" />
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                  <span className="inline-block text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#DBEAFE] bg-[#04040A]/85 px-2.5 py-0.5 rounded-full border border-[#60A5FA]/45 mb-1">
                    INDUSTRY FOOTPRINT
                  </span>
                  <p className="text-xs font-bold leading-snug">
                    Google visibility & result-driven execution across 7 verticals.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 p-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {industrySectors.map((sector) => {
                    const Icon = sector.icon;
                    return (
                      <div
                        key={sector.name}
                        className="rounded-lg bg-white border border-slate-200 p-2.5 flex flex-col gap-1"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="w-6 h-6 rounded-md bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0">
                            <Icon className="w-3.5 h-3.5 text-[#1D4ED8]" strokeWidth={2} />
                          </span>
                          <h3 className="text-xs font-normal text-[#0F172A] truncate">
                            {sector.name}
                          </h3>
                        </div>
                        <p className="text-[10.5px] text-slate-600 leading-snug line-clamp-2">
                          {sector.focus}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: FEATURED DIGITAL CASE STUDIES CAROUSEL
         ═══════════════════════════════════════════════════════════ */}
      <DigitalCaseStudiesCarousel studies={featuredDigitalStudies} />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: CTA (Light Editorial Conversion Band)
         ═══════════════════════════════════════════════════════════ */}
      <PageCTA
        eyebrow="06 · START YOUR DIGITAL TRANSFORMATION"
        title="Ready to Build High-Trust Digital Growth?"
        description="Whether you want a deep audit of wasted ad spend, a custom website built by Web Tycoons, or stronger page-one Google visibility, choose your next conversation."
        primaryAction={{
          label: "Get a Digital Growth Audit",
          href: "/contact?type=digital-audit",
        }}
        secondaryAction={{
          label: "Discuss Your Website",
          href: "/contact?type=website",
        }}
        tertiaryAction={{
          label: "Improve Your Google Visibility",
          href: "/contact?type=seo-visibility",
        }}
        light={true}
      />
    </main>
  );
}
