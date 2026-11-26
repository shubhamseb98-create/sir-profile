import SectionHeading from "@/components/ui/SectionHeading";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import { leadershipRoles, futureVentures } from "@/data/roles";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Leadership & Ventures | Dheeraj Aggarwal",
  description:
    "Explore the ecosystem of ventures founded, co-directed and advised by Dheeraj Aggarwal: Web Tycoons, Happy Hospitality Club, Karma Ayurveda, and emerging MSME platforms.",
};

export default function LeadershipVenturesPage() {
  return (
    <>
      {/* 1. Architectural Midnight Navy Masthead */}
      <BreadcrumbHero
        eyebrow="PORTFOLIO & VENTURES"
        title="Founding, Advising & Directing High-Impact Ecosystems."
        description="A multi-sector commercial portfolio encompassing digital web engineering, healthcare strategy, executive hospitality networks, and MSME business communities."
        breadcrumbs={[{ label: "Leadership & Ventures" }]}
        imageSrc="/images/transformations/webtycoons-studio.jpg"
      />

      {/* 2. Active Leadership Roles Directory */}
      <LeadershipRolesShowcaseWrapper />

      {/* 3. Future Ventures & Initiatives (DARK MIDNIGHT NAVY - 60px padding) */}
      <section
        id="future"
        className="py-[60px] bg-[#060D1A] border-b border-white/10 relative overflow-hidden font-sans"
      >
        <DarkSectionLining />

        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <SectionHeading
            eyebrow="HORIZON 2026+"
            title="Future Ventures & Ecosystems"
            description="A structured, forward-looking portfolio of emerging initiatives, educational masterminds, and B2B platforms currently under active incubation."
            light={false}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureVentures.map((v, idx) => (
              <div
                key={v.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#0B1528] border border-white/12 hover:border-[#D4AF37]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                    <span className="text-[11px] uppercase tracking-[0.14em] text-[#D4AF37] font-bold">
                      {v.category}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                      {v.status}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-slate-500 tabular-nums block mb-1">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2.5 leading-snug">
                    {v.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {v.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href="/contact?type=future-venture"
                    className="text-xs uppercase tracking-[0.12em] text-[#F5E2A3] font-semibold flex items-center justify-between hover:text-white transition-colors"
                  >
                    <span>Express Collaborative Interest</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Page Closing CTA (LIGHT - 60px padding) */}
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

import LeadershipRolesShowcase from "@/components/sections/LeadershipRolesShowcase";

function LeadershipRolesShowcaseWrapper() {
  return <LeadershipRolesShowcase roles={leadershipRoles} />;
}
