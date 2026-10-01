import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import { leadershipRoles, futureVentures } from "@/data/roles";
import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

export const metadata = {
  title: "Leadership & Ventures | Dheeraj Aggarwal",
  description:
    "Explore the leadership ventures, institutional advisory mandates, and executive business ecosystems directed by Dheeraj Aggarwal.",
};

export default function LeadershipVenturesPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#004671] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.24em] text-[#C6A15B] font-mono font-medium block mb-4">
              ECOSYSTEMS & GOVERNANCE
            </span>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium text-[#F5F3EE] leading-[1.1] mb-6">
              Leadership, Ventures & Business Ecosystems
            </h1>

            <p className="text-base sm:text-lg text-[#A9B0BE] leading-relaxed mb-8">
              A portfolio of entrepreneurial organizations, advisory mandates, and high-trust business
              networks led by Dheeraj Aggarwal. Bridging enterprise digital solutions, healthcare
              advisory, and hospitality networks.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact?type=collaboration" variant="primary" size="lg">
                Propose a Venture Collaboration
              </Button>
              <Button href="#future" variant="secondary" size="lg" icon="right">
                Explore Future Initiatives
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Active Leadership Roles Directory */}
      <section className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="01"
            eyebrow="ACTIVE MANDATES"
            title="Current Leadership Positions"
            description="Clear executive roles spanning tech agency ownership, clinical healthcare advisory, and community co-direction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipRoles.map((role) => (
              <article
                key={role.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#151D30]/60 border border-white/08 hover:border-[#C6A15B]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] px-3 py-1 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/20">
                      {role.badge}
                    </span>
                    <span className="text-xs font-mono text-[#A9B0BE]/70">
                      {role.period}
                    </span>
                  </div>

                  <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-[#F5F3EE] group-hover:text-[#E2C98F] transition-colors mb-1">
                    {role.name}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-[#C6A15B] font-mono mb-4">
                    {role.title}
                  </p>

                  <p className="text-sm text-[#A9B0BE] leading-relaxed mb-6">
                    {role.summary}
                  </p>

                  <div className="space-y-2.5 mb-6 pt-4 border-t border-white/06">
                    <span className="text-[11px] uppercase tracking-wider font-mono text-[#F5F3EE] block mb-2">
                      Key Mandates & Focus:
                    </span>
                    {role.focusAreas.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-xs text-[#A9B0BE]">
                        <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                        <span className="text-[#F5F3EE]/90">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/08 flex items-center justify-between">
                  <span className="text-xs text-[#A9B0BE] italic">
                    {role.impactHighlight}
                  </span>

                  <Link
                    href={role.href}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#C6A15B] group-hover:text-[#E2C98F] transition-colors"
                  >
                    <span>View Role</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Future Ventures & Initiatives */}
      <section id="future" className="py-24 md:py-32 bg-[#004671] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="02"
            eyebrow="HORIZON 2026+"
            title="Future Ventures & Ecosystems"
            description="A structured, forward-looking portfolio of emerging initiatives, educational masterminds, and B2B platforms currently under active incubation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureVentures.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl bg-[#0F1626] border border-white/08 hover:border-[#C6A15B]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B]">
                      {v.category}
                    </span>
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/05 border border-white/10 text-[10px] text-[#A9B0BE]">
                      <Sparkles className="w-3 h-3 text-[#C6A15B]" />
                      <span>{v.status}</span>
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-[#F5F3EE] mb-3 leading-snug group-hover:text-[#E2C98F] transition-colors">
                    {v.title}
                  </h3>

                  <p className="text-sm text-[#A9B0BE] leading-relaxed">
                    {v.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/06">
                  <Link
                    href="/contact?type=future-venture"
                    className="text-xs uppercase tracking-wider text-[#C6A15B] font-mono flex items-center justify-between group-hover:text-[#E2C98F] transition-colors"
                  >
                    <span>Express Collaborative Interest</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page Closing CTA */}
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
      />
    </>
  );
}

