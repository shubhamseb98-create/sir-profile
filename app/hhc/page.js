import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import { Check } from "lucide-react";

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
      image: "/images/inner/hhc-gala-networking.jpg",
      desc: "Curated monthly gatherings connecting hoteliers, F&B owners, and executive chefs in high-trust peer environments.",
    },
    {
      title: "Star Vendor Category Exclusivity",
      image: "/images/transformations/hhc-hospitality-roundtable.jpg",
      desc: "Structured B2B access for vetted hospitality suppliers with category-limited representation to protect commercial ROI.",
    },
    {
      title: "High-Tea & Cocktail Roundtables",
      image: "/images/roles/hhc-showcase.jpg",
      desc: "Exclusive leadership offsites and informal executive soirees designed for meaningful conversations without sales pitches.",
    },
    {
      title: "Hospitality Runs & Wellness Summits",
      image: "/images/hero/hero-business-strategy.jpg",
      desc: "Industry-wide wellness runs, culinary showcases, and charity initiatives uniting the hospitality fraternity.",
    },
    {
      title: "Exhibition & Association Alliances",
      image: "/images/roles/bni-showcase.jpg",
      desc: "Institutional collaborations with national trade expos, culinary forums, and hotelier associations.",
    },
    {
      title: "Structured Commercial Introductions",
      image: "/images/inner/about-values-integrity.jpg",
      desc: "Direct, vetted introductions facilitating procurement negotiations and multi-property supplier agreements.",
    },
  ];

  const vendorTiers = [
    {
      tier: "Preferred Vendor Member",
      target: "Emerging Hospitality Suppliers",
      image: "/images/hero/hero-panoramic-boardroom.jpg",
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
      image: "/images/inner/hhc-gala-networking.jpg",
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
      {/* 1. Architectural Midnight Navy Masthead */}
      <BreadcrumbHero
        eyebrow="CO-DIRECTOR & COMMUNITY CO-FOUNDER"
        title="Happy Hospitality Club (HHC)"
        description="Happy Hospitality Club is a growing community of hospitality professionals, hoteliers, restaurateurs, vendors and industry leaders focused on meaningful networking, collaboration, learning and collective growth."
        breadcrumbs={[
          { label: "Ventures", href: "/leadership-ventures" },
          { label: "Happy Hospitality Club" },
        ]}
        imageSrc="/images/transformations/hhc-hospitality-roundtable.jpg"
      />

      {/* 2. Co-Director Role & Real Roundtable Photography (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="COMMUNITY LEADERSHIP"
                title="Co-Directing India's Hospitality Network"
                description="Architecting commercial ecosystem structures, membership quality governance, and executive partnership protocols."
                light={true}
                compact={true}
                animate={false}
                className="!mb-6"
              />

              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
                <Image
                  src="/images/transformations/hhc-hospitality-roundtable.jpg"
                  alt="Happy Hospitality Club Executive Roundtable"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-[#1D4ED8] block mb-3">
                Co-Director Governance Charter
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-slate-200">
                {leadershipResponsibilities.map((duty, idx) => (
                  <div
                    key={duty}
                    className="p-5 border-r border-b border-slate-200 bg-white hover:bg-[#F8FAFC] transition-colors"
                  >
                    <span className="text-xs font-bold text-[#1D4ED8] tabular-nums block mb-1.5">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                      {duty}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Community Platforms & Format Matrix (OBSIDIAN & ROYAL BLUE - 60px padding) */}
      <section className="py-[60px] bg-[#04040A] border-b border-white/10 relative overflow-hidden font-sans">
        <DarkSectionLining variant="blue" />

        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <SectionHeading
            eyebrow="ECOSYSTEM ARCHITECTURE"
            title="Community Programs & Engagement Formats"
            description="High-trust gathering formats engineered to turn fragmented industry contacts into lasting commercial relationships."
            light={false}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {communityPillars.map((pillar, idx) => (
              <article
                key={pillar.title}
                className="group rounded-2xl overflow-hidden bg-[#090F1E] border border-white/12 hover:border-[#60A5FA]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#04040A] border-b border-white/10">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090F1E]/85 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="p-6 sm:p-7">
                    <span className="text-xs font-mono font-bold text-[#60A5FA] tabular-nums block mb-2">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-normal text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vendor Ecosystem & Membership Tiers (LIGHT - 60px padding) */}
      <section id="vendor-ecosystem" className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="COMMERCIAL ACCESS"
            title="Vendor Partnership Framework"
            description="Designed to deliver structured commercial access for vetted solution providers while safeguarding the trust of hotel owners and general managers."
            align="center"
            light={true}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {vendorTiers.map((tier) => (
              <div
                key={tier.tier}
                className={`group rounded-2xl overflow-hidden flex flex-col justify-between transition-colors ${
                  tier.featured
                    ? "bg-[#EFF6FF] border-2 border-[#3B82F6] shadow-[0_12px_32px_rgba(37,99,235,0.1)]"
                    : "bg-white border border-slate-200 shadow-sm hover:border-[#3B82F6]/45"
                }`}
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                    <Image
                      src={tier.image}
                      alt={tier.tier}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-7 sm:p-8 pb-0">
                    <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
                      <span className="text-[11px] uppercase tracking-[0.14em] text-[#1D4ED8] font-bold">
                        {tier.target}
                      </span>
                      {tier.featured && (
                        <span className="text-[10px] uppercase tracking-[0.14em] font-bold bg-[#04040A] text-[#93C5FD] px-3 py-0.5 rounded-full">
                          Exclusive Tier
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-normal text-slate-900 mb-5">
                      {tier.tier}
                    </h3>

                    <ul className="space-y-2.5 pt-4 border-t border-slate-200/80 mb-7">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                          <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2.2} />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-7 sm:px-8 pb-7 sm:pb-8">
                  <Button
                    href={tier.href}
                    variant={tier.featured ? "light-primary" : "light-secondary"}
                    size="md"
                    className="w-full"
                  >
                    {tier.ctaLabel}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Page Closing CTA (LIGHT - 60px padding) */}
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
        light={true}
      />
    </>
  );
}
