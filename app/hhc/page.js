import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
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
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="CO-DIRECTOR & COMMUNITY CO-FOUNDER"
        title="Happy Hospitality Club (HHC)"
        description="Happy Hospitality Club is a growing community of hospitality professionals, hoteliers, restaurateurs, vendors and industry leaders focused on meaningful networking, collaboration, learning and collective growth."
        breadcrumbs={[
          { label: "Ventures", href: "/leadership-ventures" },
          { label: "Happy Hospitality Club" },
        ]}
        imageSrc="/images/hero/hero-executive-workplace.jpg"
      />

      {/* 2. Dheeraj's Strategic Role (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style balanced ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="01"
            eyebrow="LEADERSHIP & ARCHITECTURE"
            title="Dheeraj's Role as Co-Director"
            description="Guiding institutional strategy, ecosystem monetization, and governance rhythms to build India's premier hospitality community."
            light={true}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadershipResponsibilities.map((resp, idx) => (
              <div
                key={resp}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-black flex flex-col justify-between transition-all"
              >
                <div>
                  <span className="font-mono text-xs text-white font-bold px-3 py-1 rounded-full bg-black border border-black block w-max mb-3 shadow-sm">
                    Role Pillar 0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {resp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Community Platforms & Events (DARK - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#000000] border-b border-white/10 relative overflow-hidden">
        {/* Homepage style ambient glow */}
        <div className="absolute top-1/3 -left-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="02"
            eyebrow="ECOSYSTEM PLATFORMS"
            title="Events, Networking & Engagement"
            description="High-touch formats tailored to foster authentic trust between hotel operators, culinary creators, and verified vendors."
            light={false}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-8 rounded-2xl bg-[#0A0D14] border border-white/10 hover:border-[#CFFF04]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_0_25px_rgba(207,255,4,0.1)] hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#CFFF04]/10 border border-[#CFFF04]/25 flex items-center justify-center text-[#CFFF04] mb-6 group-hover:scale-110 transition-transform font-bold">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#CFFF04] transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Vendor Ecosystem & Membership Tiers (LIGHT - 80px padding) */}
      <section id="vendor-ecosystem" className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="03"
            eyebrow="COMMERCIAL ACCESS"
            title="Vendor Partnership Framework"
            description="Designed to deliver structured commercial access for vetted solution providers while safeguarding the trust of hotel owners and general managers."
            align="center"
            light={true}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {vendorTiers.map((tier) => (
              <div
                key={tier.tier}
                className={`p-8 sm:p-10 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  tier.featured
                    ? "bg-white border-2 border-black shadow-xl hover:shadow-2xl"
                    : "bg-white border border-slate-200 shadow-sm hover:border-black"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold">
                      {tier.target}
                    </span>
                    {tier.featured && (
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold bg-black text-white px-2.5 py-0.5 rounded-full shadow-sm">
                        Exclusive Tier
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                    {tier.tier}
                  </h3>

                  <div className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-black font-bold shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{feat}</span>
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

      {/* 5. Page Closing CTA (DARK - 100vh) */}
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
