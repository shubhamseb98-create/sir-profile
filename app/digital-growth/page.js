import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import { digitalCaseStudies } from "@/data/caseStudies";
import {
  Globe,
  ShoppingCart,
  Search,
  Target,
  Share2,
  Video,
  BarChart3,
  Server,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Digital Growth & Web Tycoons | Dheeraj Aggarwal",
  description:
    "Founded by Dheeraj Aggarwal, Web Tycoons is a 15+ year digital marketing and web development agency that has delivered more than 3,700 websites and supported businesses across industries and geographies.",
};

export default function DigitalGrowthPage() {
  const agencyServices = [
    {
      title: "Website Design & Engineering",
      icon: Globe,
      desc: "High-performance bespoke corporate portals, responsive UI/UX, and clean web code engineered for search authority and high conversion.",
    },
    {
      title: "E-Commerce Architecture",
      icon: ShoppingCart,
      desc: "Robust D2C and B2B online storefronts with frictionless checkout, inventory integrations, and payment gateway security.",
    },
    {
      title: "SEO & High-Intent Google Rankings",
      icon: Search,
      desc: "Technical SEO audits, keyword research, entity schema markup, and authoritative backlink profiles to dominate organic search.",
    },
    {
      title: "Google Ads & PPC Management",
      icon: Target,
      desc: "High-intent search, display, and YouTube ad campaigns optimized for qualified lead cost and bottom-line customer acquisition.",
    },
    {
      title: "Meta & Social Performance Ads",
      icon: Share2,
      desc: "Direct-response ad creative testing, lookalike modeling, and multi-channel retargeting across Instagram and Facebook.",
    },
    {
      title: "Content, Graphics & Video Reels",
      icon: Video,
      desc: "Authority-building executive content, high-retention video reels, graphic storytelling, and podcast post-production.",
    },
    {
      title: "Analytics, Attribution & CRO",
      icon: BarChart3,
      desc: "End-to-end event tracking, server-side GA4 setup, heatmaps, and landing page conversion rate optimization (CRO).",
    },
    {
      title: "Enterprise Hosting & Cloud Infrastructure",
      icon: Server,
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
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="DIGITAL GROWTH & AGENCY ECOSYSTEM"
        title="Web Tycoons: Engineered For Digital Market Dominance."
        description="For 15+ years, Web Tycoons has served as the digital engineering engine for high-growth enterprises—delivering 3,700+ websites, top Google rankings, and performance campaigns across India."
        breadcrumbs={[{ label: "Digital Growth" }]}
        imageSrc="/images/hero/hero-digital-network.jpg"
      />

      {/* 2. Digital Agency Services (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style balanced ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="01"
            eyebrow="AGENCY CAPABILITIES"
            title="Comprehensive Digital Solutions"
            description="Full-lifecycle digital services engineered to drive discoverability, conversion velocity, and repeat customer retention."
            light={true}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencyServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-black transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-md hover:shadow-xl"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 group-hover:border-black group-hover:bg-black group-hover:text-white flex items-center justify-center text-slate-900 mb-4 group-hover:scale-105 transition-all font-bold">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>

                    <h3 className="font-sans text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-black transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Dheeraj's Role & Industries Served (DARK - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#000000] border-b border-white/10 relative overflow-hidden">
        {/* Subtle balanced neon lime glow aura */}
        <div className="absolute top-1/3 -left-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Dheeraj's Executive Involvement */}
            <div className="lg:col-span-7">
              <SectionHeading
                number="02"
                eyebrow="EXECUTIVE GOVERNANCE"
                title="Dheeraj's Direct Role at Web Tycoons"
                description="Unlike traditional passive founders, Dheeraj directly architects client solutions and guides strategy for key accounts."
                className="mb-8"
                light={false}
              />

              <div className="space-y-3">
                {dheerajResponsibilities.map((resp) => (
                  <div
                    key={resp}
                    className="p-4 rounded-xl bg-[#0A0D14]/80 border border-white/10 flex items-start gap-3 hover:border-[#CFFF04]/40 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#CFFF04]/10 border border-[#CFFF04]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#CFFF04]" />
                    </div>
                    <span className="text-sm text-white font-medium leading-relaxed font-light">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Industries Served */}
            <div className="lg:col-span-5">
              <SectionHeading
                number="03"
                eyebrow="CROSS-SECTOR EXPERIENCE"
                title="Industries Served"
                description="Deep sector fluency cultivated across 3,700+ assignments."
                className="mb-8"
                light={false}
              />

              <div className="grid grid-cols-1 gap-2.5">
                {industriesServed.map((ind) => (
                  <div
                    key={ind}
                    className="p-3.5 rounded-xl bg-[#0A0D14]/80 border border-white/10 flex items-center justify-between text-xs text-slate-300 hover:border-[#CFFF04]/30 transition-colors"
                  >
                    <span className="text-white font-medium">{ind}</span>
                    <span className="text-[#CFFF04] font-mono text-[10px] uppercase font-bold">
                      Delivered
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Digital Case Studies (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style balanced ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="04"
            eyebrow="DIGITAL PERFORMANCE"
            title="Featured Digital Case Studies"
            description="Explore how technical web engineering and high-intent Google search strategies created measurable business outcomes."
            light={true}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Page Closing CTA (LIGHT - 80px padding) */}
      <PageCTA
        title="Ready to Improve Your Google Visibility & ROAS?"
        description="Request a complimentary 20-minute digital diagnostic to review your current website speed, Google ranking whitespace, and ad spend efficiency."
        primaryAction={{
          label: "Get Digital Growth Audit",
          href: "/contact?type=digital-growth",
        }}
        secondaryAction={{
          label: "Discuss Your Website",
          href: "/contact?type=website",
        }}
        light={true}
      />
    </>
  );
}
