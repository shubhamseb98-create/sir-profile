import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import { digitalCaseStudies } from "@/data/caseStudies";
import { Check } from "lucide-react";

export const metadata = {
  title: "Digital Growth & Web Tycoons | Dheeraj Aggarwal",
  description:
    "Founded by Dheeraj Aggarwal, Web Tycoons is a 15+ year digital marketing and web development agency that has delivered more than 3,700 websites and supported businesses across industries and geographies.",
};

export default function DigitalGrowthPage() {
  const agencyServices = [
    {
      title: "Website Design & Engineering",
      desc: "High-performance bespoke corporate portals, responsive UI/UX, and clean web code engineered for search authority and high conversion.",
    },
    {
      title: "E-Commerce Architecture",
      desc: "Robust D2C and B2B online storefronts with frictionless checkout, inventory integrations, and payment gateway security.",
    },
    {
      title: "SEO & High-Intent Google Rankings",
      desc: "Technical SEO audits, keyword research, entity schema markup, and authoritative backlink profiles to dominate organic search.",
    },
    {
      title: "Google Ads & PPC Management",
      desc: "High-intent search, display, and YouTube ad campaigns optimized for qualified lead cost and bottom-line customer acquisition.",
    },
    {
      title: "Meta & Social Performance Ads",
      desc: "Direct-response ad creative testing, lookalike modeling, and multi-channel retargeting across Instagram and Facebook.",
    },
    {
      title: "Content, Graphics & Video Reels",
      desc: "Authority-building executive content, high-retention video reels, graphic storytelling, and podcast post-production.",
    },
    {
      title: "Analytics, Attribution & CRO",
      desc: "End-to-end event tracking, server-side GA4 setup, heatmaps, and landing page conversion rate optimization (CRO).",
    },
    {
      title: "Enterprise Hosting & Cloud Infrastructure",
      desc: "High-speed cloud server deployments, SSL certification, daily backups, DDoS protection, and continuous SLA uptime maintenance.",
    },
  ];

  const dheerajResponsibilities = [
    "Overarching commercial business and digital growth strategy",
    "Client consulting, technical solution architecture, and system scoping",
    "Digital campaign direction, creative angle selection, and brand positioning",
    "High-value client relationship management and promoter engagement",
    "Agency team mentorship, quality assurance reviews, and delivery oversight",
    "Performance, ROAS, and conversion funnel analytics governance",
    "New digital platform ideation and technology stack selection",
  ];

  const industriesServed = [
    "Ayurvedic & Healthcare Chains",
    "Luxury Hotels & Fine Dining",
    "Manufacturing & Heavy Engineering",
    "Real Estate Developers & Infra",
    "Higher Education & Institutes",
    "D2C Consumer Brands & Apparel",
    "B2B Logistics & Supply Chain",
    "Financial & Wealth Advisory",
  ];

  return (
    <>
      {/* 1. Architectural Midnight Navy Masthead */}
      <BreadcrumbHero
        eyebrow="DIGITAL GROWTH & AGENCY ECOSYSTEM"
        title="Web Tycoons: Engineered For Digital Market Dominance."
        description="Founded by Dheeraj Aggarwal, Web Tycoons is a 15+ year digital engineering and performance agency with 3,700+ web deliveries across industries."
        breadcrumbs={[{ label: "Digital Growth" }]}
        imageSrc="/images/transformations/webtycoons-studio.jpg"
      />

      {/* 2. Architectural Service Matrix (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="EXECUTION INFRASTRUCTURE"
            title="Web Tycoons Full-Stack Digital Capabilities"
            description="Complete web engineering, organic authority, and paid acquisition solutions executed under unified performance governance."
            light={true}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          {/* Clean Hairline Architectural Matrix (Zero neon icon-in-box grids) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
            {agencyServices.map((srv, idx) => (
              <div
                key={srv.title}
                className="p-6 border-r border-b border-slate-200 bg-white hover:bg-[#FAF9F6] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#9A6B0C] tracking-[0.14em] tabular-nums block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Founder Governance & Industries Directory (DARK MIDNIGHT NAVY - 60px padding) */}
      <section className="py-[60px] bg-[#060D1A] border-b border-white/10 relative overflow-hidden font-sans">
        <DarkSectionLining />

        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Dheeraj's Founder Role */}
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="FOUNDER LEADERSHIP"
                title="Direct Architectural Governance"
                description="Rather than delegating core strategy blindly, Dheeraj provides direct commercial oversight across high-priority digital roadmaps."
                light={false}
                compact={true}
                animate={false}
                className="!mb-6"
              />

              <ul className="border-t border-white/12 divide-y divide-white/10">
                {dheerajResponsibilities.map((item) => (
                  <li key={item} className="py-3.5 flex items-start gap-3 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" strokeWidth={2.2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Cross-Sector Directory Ledger */}
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="SECTOR FOOTPRINT"
                title="Industries Served"
                description="Delivering tailored digital infrastructure across capital-intensive B2B and high-velocity consumer verticals."
                light={false}
                compact={true}
                animate={false}
                className="!mb-6"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-white/12">
                {industriesServed.map((ind, idx) => (
                  <div
                    key={ind}
                    className="p-4 sm:p-5 border-r border-b border-white/12 bg-[#0B1528]/70 hover:bg-[#0B1528] transition-colors"
                  >
                    <span className="text-[11px] font-bold text-[#D4AF37] tabular-nums block mb-1">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-white leading-snug block">
                      {ind}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Digital Transformation Case Studies (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="MEASURED WORK"
            title="Digital & Commercial Outcomes"
            description="Selected platforms and growth systems engineered with unit economics and search authority at the core."
            light={true}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Page Closing CTA (LIGHT - 60px padding) */}
      <PageCTA
        title="Ready to Scale Your Digital Footprint?"
        description="Whether you require a ground-up web engineering overhaul or high-ROI acquisition campaigns, let's build your digital moat."
        primaryAction={{
          label: "Discuss Digital Strategy",
          href: "/contact?type=digital-growth",
        }}
        secondaryAction={{
          label: "Inquire for Website Engineering",
          href: "/contact?type=website",
        }}
        light={true}
      />
    </>
  );
}
