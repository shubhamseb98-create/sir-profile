import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import {
  Users2,
  CalendarDays,
  Store,
  Handshake,
  Check,
  Sparkles,
  ArrowRight,
  Shield,
  Utensils,
  Hotel,
} from "lucide-react";

export const metadata = {
  title: "Happy Hospitality Club (HHC) | Dheeraj Aggarwal",
  description:
    "Happy Hospitality Club is a growing community of hospitality professionals, hoteliers, restaurateurs, vendors and industry leaders focused on meaningful networking, collaboration, learning and collective growth.",
};

export default function HHCPage() {
  const leadershipResponsibilities = [
    "Institutional strategy and national community growth planning",
    "Membership development, qualification, and executive engagement",
    "Vendor vertical structuring and commercial monetization models",
    "Curated event concepts, monthly calendars, and executive format design",
    "Strategic partnerships and hospitality industry collaborations",
    "Brand communication, executive positioning, and digital community reach",
    "Operational systems, membership SOPs, and governance documentation",
    "Leadership team structure, chapter coordination, and execution review",
  ];

  const communityPillars = [
    {
      title: "Executive Networking Meets",
      icon: Users2,
      desc: "Curated monthly gatherings connecting hoteliers, F&B owners, and executive chefs in high-trust peer environments.",
    },
    {
      title: "Star Vendor Category Exclusivity",
      icon: Store,
      desc: "Structured B2B access for vetted hospitality suppliers with category-limited representation to protect commercial ROI.",
    },
    {
      title: "High-Tea & Cocktail Roundtables",
      icon: CalendarDays,
      desc: "Exclusive leadership offsites and informal executive soirees designed for meaningful conversations without sales pitches.",
    },
    {
      title: "Hospitality Runs & Wellness Summits",
      icon: Sparkles,
      desc: "Industry-wide wellness runs, culinary showcases, and charity initiatives uniting the hospitality fraternity.",
    },
    {
      title: "Exhibition & Association Alliances",
      icon: Handshake,
      desc: "Institutional collaborations with national trade expos, culinary forums, and hotelier associations.",
    },
    {
      title: "Structured Commercial Introductions",
      icon: Shield,
      desc: "Direct, vetted introductions facilitating procurement negotiations and multi-property supplier agreements.",
    },
  ];

  const vendorTiers = [
    {
      tier: "Preferred Vendor Member",
      target: "Emerging Hospitality Suppliers",
      features: [
        "Directory listing in the verified HHC supplier registry",
        "Access to monthly general networking meets",
        "Networking with regional hoteliers and restaurateurs",
        "Category representation alongside peer suppliers",
      ],
      ctaLabel: "Apply for Preferred",
      href: "/contact?type=hhc-vendor-preferred",
    },
    {
      tier: "Star Partner (Category Exclusive)",
      target: "Established Enterprise Suppliers",
      featured: true,
      features: [
        "Strict category exclusivity (single partner per product category)",
        "VIP table access at all executive roundtables & high-teas",
        "Direct structured introductions to procurement heads",
        "Keynote speaking and panel discussion spotlight slots",
        "Featured brand showcase across all digital community channels",
      ],
      ctaLabel: "Apply for Star Partner",
      href: "/contact?type=hhc-vendor-star",
    },
  ];

  return (
    <>
      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#004671] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs uppercase tracking-[0.24em] text-[#C6A15B] font-mono font-medium">
                  CO-DIRECTOR & COMMUNITY CO-FOUNDER
                </span>
                <span className="text-white/20">â€¢</span>
                <span className="text-xs text-[#A9B0BE] font-mono">Hospitality Industry Network</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium text-[#F5F3EE] leading-[1.1] mb-6">
                Happy Hospitality Club (HHC)
              </h1>

              <p className="text-base sm:text-lg text-[#A9B0BE] leading-relaxed mb-8">
                Happy Hospitality Club is a growing community of hospitality professionals, hoteliers,
                restaurateurs, vendors and industry leaders focused on meaningful networking,
                collaboration, learning and collective growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact?type=hhc-join" variant="primary" size="lg">
                  Join HHC Community
                </Button>
                <Button href="#vendor-ecosystem" variant="secondary" size="lg" icon="right">
                  Explore Vendor Ecosystem
                </Button>
              </div>
            </div>

            {/* Clean Typographic Logo representation (Rule: Clean Serif Typography, never redraw) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[340px] p-8 rounded-2xl bg-[#0F1626] border border-white/12 shadow-2xl text-center">
                <span className="font-editorial text-6xl text-[#C6A15B] font-semibold tracking-wider block mb-2">
                  HHC
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#F5F3EE] block">
                  Happy Hospitality Club
                </span>
                <p className="text-xs text-[#A9B0BE] mt-3 leading-relaxed border-t border-white/06 pt-4">
                  Premier professional network uniting decision-makers across hospitality, resorts, and dining.
                </p>
                <div className="mt-4 pt-4 border-t border-white/06 flex justify-around text-xs text-[#A9B0BE]">
                  <div className="flex items-center gap-1.5">
                    <Hotel className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Hoteliers</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Restaurateurs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dheeraj's Strategic Role */}
      <section className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="01"
            eyebrow="LEADERSHIP & ARCHITECTURE"
            title="Dheeraj&apos;s Role as Co-Director"
            description="Guiding institutional strategy, ecosystem monetization, and governance rhythms to build India's premier hospitality community."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadershipResponsibilities.map((resp, idx) => (
              <div
                key={resp}
                className="p-6 rounded-2xl bg-[#151D30]/60 border border-white/06 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#C6A15B] font-semibold block mb-3">
                    Role Pillar 0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5F3EE] leading-relaxed">
                    {resp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Community Growth & Event Architecture */}
      <section className="py-24 md:py-32 bg-[#004671] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="02"
            eyebrow="ECOSYSTEM PLATFORMS"
            title="Events, Networking & Engagement"
            description="High-touch formats tailored to foster authentic trust between hotel operators, culinary creators, and verified vendors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-8 rounded-2xl bg-[#0F1626] border border-white/08 hover:border-[#C6A15B]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#C6A15B]/10 border border-[#C6A15B]/25 flex items-center justify-center text-[#C6A15B] mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>

                    <h3 className="font-editorial text-2xl font-medium text-[#F5F3EE] mb-3 leading-snug group-hover:text-[#E2C98F] transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs text-[#A9B0BE] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Vendor Ecosystem & Membership Tiers */}
      <section id="vendor-ecosystem" className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="03"
            eyebrow="COMMERCIAL ACCESS"
            title="Vendor Partnership Framework"
            description="Designed to deliver structured commercial access for vetted solution providers while safeguarding the trust of hotel owners and general managers."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {vendorTiers.map((tier) => (
              <div
                key={tier.tier}
                className={`p-8 sm:p-10 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  tier.featured
                    ? "bg-[#151D30] border-2 border-[#C6A15B] shadow-2xl"
                    : "bg-[#004671] border border-white/08"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B]">
                      {tier.target}
                    </span>
                    {tier.featured && (
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold bg-[#C6A15B] text-[#004671] px-2.5 py-0.5 rounded-full">
                        Exclusive Tier
                      </span>
                    )}
                  </div>

                  <h3 className="font-editorial text-3xl font-medium text-[#F5F3EE] mb-6">
                    {tier.tier}
                  </h3>

                  <div className="space-y-3 pt-4 border-t border-white/06 mb-8">
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-[#A9B0BE]">
                        <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                        <span className="text-[#F5F3EE]/90 leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  href={tier.href}
                  variant={tier.featured ? "primary" : "secondary"}
                  size="md"
                  className="w-full"
                >
                  {tier.ctaLabel}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page Closing CTA */}
      <PageCTA
        title="Explore Collaboration with Happy Hospitality Club"
        description="Connect with Dheeraj to discuss institutional chapter expansion, vendor partnerships, or keynote collaboration for hospitality conclaves."
        primaryAction={{
          label: "Partner With HHC",
          href: "/contact?type=hhc-partner",
        }}
        secondaryAction={{
          label: "Explore Vendor Membership",
          href: "#vendor-ecosystem",
        }}
      />
    </>
  );
}

