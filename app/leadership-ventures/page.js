import SectionHeading from "@/components/ui/SectionHeading";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import LeadershipRolesShowcase from "@/components/sections/LeadershipRolesShowcase";
import { leadershipRoles, futureVentures } from "@/data/roles";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Leadership & Ventures | Dheeraj Aggarwal",
  description:
    "Explore the ecosystem of ventures founded, co-directed and advised by Dheeraj Aggarwal: Web Tycoons, Happy Hospitality Club, Karma Ayurveda, and emerging MSME platforms.",
};

export default function LeadershipVenturesPage() {
  return (
    <>
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="PORTFOLIO & VENTURES"
        title="Founding, Advising & Directing High-Impact Ecosystems."
        description="A multi-sector commercial portfolio encompassing digital web engineering, healthcare strategy, executive hospitality networks, and MSME business communities."
        breadcrumbs={[{ label: "Leadership & Ventures" }]}
        imageSrc="/images/hero/hero-corporate-boardroom-clean.jpg"
      />

      {/* 2. Active Leadership Roles Directory (Interactive 100vh Showcase) */}
      <LeadershipRolesShowcase roles={leadershipRoles} />

      {/* 3. Future Ventures & Initiatives (DARK - 80px padding) */}
      <section id="future" className="min-h-screen flex flex-col justify-center py-[80px] bg-[#000000] border-b border-white/10 relative overflow-hidden">
        {/* Subtle balanced neon lime glow aura */}
        <div className="absolute top-1/3 -left-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="02"
            eyebrow="HORIZON 2026+"
            title="Future Ventures & Ecosystems"
            description="A structured, forward-looking portfolio of emerging initiatives, educational masterminds, and B2B platforms currently under active incubation."
            light={false}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureVentures.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl bg-[#0A0D14] border border-white/10 hover:border-[#CFFF04]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_0_30px_rgba(207,255,4,0.12)] hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Top glow beam */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CFFF04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#CFFF04] font-semibold">
                      {v.category}
                    </span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CFFF04] animate-pulse" />
                      <span>{v.status}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#CFFF04] transition-colors">
                    {v.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {v.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    href="/contact?type=future-venture"
                    className="text-xs uppercase tracking-wider text-[#CFFF04] font-mono font-bold flex items-center justify-between group-hover:text-[#E2FF6E] transition-colors"
                  >
                    <span>Express Collaborative Interest</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Page Closing CTA (LIGHT - 80px padding) */}
      <PageCTA
        title="Interested in a Strategic Partnership?"
        description="We actively explore synergistic collaborations with corporate boards, industry associations, and technology innovators."
        primaryAction={{
          label: "Discuss a Partnership",
          href: "/contact?type=collaboration",
        }}
        secondaryAction={{
          label: "Book Strategy Call",
          href: "/contact?type=strategy-call",
        }}
        light={true}
      />
    </>
  );
}
