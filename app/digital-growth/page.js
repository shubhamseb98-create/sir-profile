import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
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
  ArrowRight,
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
    "Healthcare & Clinical Wellness",
    "Hospitality, Resorts & Dining",
    "Industrial Manufacturing & B2B",
    "Higher Education & EdTech",
    "Luxury Real Estate & Infrastructure",
    "Consumer D2C & Lifestyle E-Commerce",
    "Travel, Tourism & Destination Services",
    "Professional Advisory & Legal Services",
  ];

  // Filter digital growth case studies
  const digitalCaseStudies = caseStudies.filter((c) =>
    ["Website & Google Visibility", "ROAS & Conversion Improvement", "Digital Growth & Lead Generation"].includes(
      c.category
    )
  );

  return (
    <>
      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-[0.24em] text-[#C6A15B] font-mono font-medium">
                FOUNDER & DIGITAL LEADER
              </span>
              <span className="text-white/20">â€¢</span>
              <span className="text-xs text-[#A9B0BE] font-mono">15+ Years Agency Heritage</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium text-[#F5F3EE] leading-[1.1] mb-6">
              Web Tycoons & Digital Growth Architecture
            </h1>

            <p className="text-base sm:text-lg text-[#A9B0BE] leading-relaxed mb-8">
              Founded by Dheeraj Aggarwal, Web Tycoons is a 15+ year digital marketing and web
              development agency that has delivered more than 3,700 websites and supported
              businesses across industries and geographies.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact?type=digital-growth" variant="primary" size="lg">
                Get a Digital Growth Audit
              </Button>
              <Button href="/contact?type=website" variant="secondary" size="lg">
                Discuss Your Website
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proof & Key Agency Metrics */}
      <section className="py-12 bg-[#0F1626] border-b border-white/08">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#151D30]/60 border border-white/06">
              <span className="font-editorial text-4xl font-semibold text-[#F5F3EE] block mb-1">
                15+
              </span>
              <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-mono">
                Years in Digital Business
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-[#151D30]/60 border border-white/06">
              <span className="font-editorial text-4xl font-semibold text-[#F5F3EE] block mb-1">
                3,700+
              </span>
              <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-mono">
                Websites Delivered
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-[#151D30]/60 border border-white/06">
              <span className="font-editorial text-4xl font-semibold text-[#F5F3EE] block mb-1">
                15+
              </span>
              <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-mono">
                Industry Verticals Served
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-[#151D30]/60 border border-white/06">
              <span className="font-editorial text-4xl font-semibold text-[#F5F3EE] block mb-1">
                Top 3
              </span>
              <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-mono">
                Google Rankings Focus
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Digital Agency Services */}
      <section className="py-24 md:py-32 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="01"
            eyebrow="AGENCY CAPABILITIES"
            title="Comprehensive Digital Solutions"
            description="Full-lifecycle digital services engineered to drive discoverability, conversion velocity, and repeat customer retention."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencyServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-6 rounded-2xl bg-[#0F1626] border border-white/08 hover:border-[#C6A15B]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/10 border border-[#C6A15B]/25 flex items-center justify-center text-[#C6A15B] mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>

                    <h3 className="font-editorial text-xl font-medium text-[#F5F3EE] mb-2 leading-snug group-hover:text-[#E2C98F] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#A9B0BE] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Dheeraj's Role & Industries Served */}
      <section className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Dheeraj's Executive Involvement */}
            <div className="lg:col-span-7">
              <SectionHeading
                number="02"
                eyebrow="EXECUTIVE GOVERNANCE"
                title="Dheeraj&apos;s Direct Role at Web Tycoons"
                description="Unlike traditional passive founders, Dheeraj directly architects client solutions and guides strategy for key accounts."
                className="mb-8"
              />

              <div className="space-y-3">
                {dheerajResponsibilities.map((resp) => (
                  <div
                    key={resp}
                    className="p-4 rounded-xl bg-[#151D30]/60 border border-white/06 flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#C6A15B]" />
                    </div>
                    <span className="text-sm text-[#F5F3EE] font-medium leading-relaxed">{resp}</span>
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
              />

              <div className="grid grid-cols-1 gap-2.5">
                {industriesServed.map((ind) => (
                  <div
                    key={ind}
                    className="p-3.5 rounded-xl bg-[#0A0F1A]/60 border border-white/06 flex items-center justify-between text-xs text-[#A9B0BE]"
                  >
                    <span className="text-[#F5F3EE] font-medium">{ind}</span>
                    <span className="text-[#C6A15B] font-mono text-[10px] uppercase">
                      Delivered
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Digital Case Studies */}
      <section className="py-24 md:py-32 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="04"
            eyebrow="DIGITAL PERFORMANCE"
            title="Featured Digital Case Studies"
            description="Explore how technical web engineering and high-intent Google search strategies created measurable business outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Page Closing CTA */}
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
      />
    </>
  );
}

