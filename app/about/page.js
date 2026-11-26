import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/sections/Timeline";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import { Check } from "lucide-react";

export const metadata = {
  title: "About Dheeraj Aggarwal | Business Consultant, Digital Expert & Growth Specialist",
  description:
    "Learn about Dheeraj Aggarwal: 15+ years of entrepreneurial experience, 3,700+ websites delivered, founder of Web Tycoons, and strategic advisor to high-growth organizations.",
};

export default function AboutPage() {
  const philosophies = [
    {
      title: "Clarity Before Marketing",
      desc: "Promoting an ill-defined offer burns capital. Strategic positioning and unit economics must always precede ad spend.",
    },
    {
      title: "Digital Growth Connects to Revenue",
      desc: "Impressions and follower counts are vanity metrics unless they directly translate into qualified sales calls and cash flow.",
    },
    {
      title: "Systems and SOPs Create Freedom",
      desc: "Founder brilliance is unscalable without documented standard operating procedures. Value lies in repeatable processes.",
    },
    {
      title: "High-Trust Communities Multiply Value",
      desc: "High-trust networks shorten sales cycles and multiply collaborative value. Genuine reciprocity builds enduring ecosystems.",
    },
    {
      title: "Execution Wins Over Ideas Alone",
      desc: "A brilliant slide deck without operational follow-through produces zero value. Disciplined weekly execution wins markets.",
    },
    {
      title: "Sustainable & Measurable Velocity",
      desc: "Growth that compromises unit margins or overextends operational capacity is fragile. We engineer durable commercial momentum.",
    },
  ];

  const capabilities = [
    "Strategic Diagnostics & Positioning",
    "High-Intent Digital Growth & SEO",
    "Sales Funnel Velocity & Conversion",
    "Enterprise CRM Architecture & SOPs",
    "Leadership Rhythms & Accountability",
    "Institutional Alliances & Networking",
    "Franchise Modeling & Pan-India Scale",
    "Executive Masterclasses & Keynotes",
  ];

  const values = [
    {
      title: "Integrity",
      tag: "Transparency",
      desc: "Absolute transparency with clients and partners. We never recommend campaigns a business does not genuinely need.",
    },
    {
      title: "Innovation",
      tag: "Advantage",
      desc: "Staying ahead of algorithmic and consumer shifts to uncover unfair commercial advantages for our clients.",
    },
    {
      title: "Impact",
      tag: "Bottom Line",
      desc: "Evaluating success by bottom-line results: reduced inquiry lag, improved ROAS, and increased profitability.",
    },
    {
      title: "Continuous Learning",
      tag: "Sector Mastery",
      desc: "Refining execution across varied sectors — from ayurvedic healthcare to luxury hospitality and manufacturing.",
    },
    {
      title: "Relationship Building",
      tag: "Trust Equity",
      desc: "Nurturing deep commercial bonds grounded in mutual respect, ethical conduct, and reciprocal value creation.",
    },
    {
      title: "Giving Back",
      tag: "Mentorship",
      desc: "Mentoring emerging MSME entrepreneurs, sharing practical operational playbooks, and cultivating business leaders.",
    },
  ];

  const statStrip = [
    { value: "15+ Yrs", label: "Entrepreneurial Leadership" },
    { value: "3,700+", label: "Digital Platforms Delivered" },
    { value: "50+ Stages", label: "Keynotes & Roundtables" },
    { value: "Pan-India", label: "Enterprise Advisory Reach" },
  ];

  return (
    <>
      {/* 1. Architectural Midnight Navy Masthead */}
      <BreadcrumbHero
        eyebrow="EXECUTIVE PROFILE"
        title="About Dheeraj Aggarwal"
        description="Business Consultant, Founder of Web Tycoons, and Strategic Growth Specialist advising leadership teams across India."
        breadcrumbs={[{ label: "About Dheeraj" }]}
      />

      {/* 2. Executive Bio & Clean Portrait Split (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] text-[#0F172A] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <SectionHeading
                eyebrow="ABOUT DHEERAJ AGGARWAL"
                title="Bridging Strategic Vision & Disciplined Execution."
                light={true}
                compact={true}
                animate={false}
                className="!mb-5 max-w-none"
              />

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Dheeraj Aggarwal is an entrepreneur, business consultant, digital strategist, and keynote speaker with over 15 years of ground-level experience helping businesses establish, market, systemise, and scale profitably.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                From delivering 3,700+ digital platforms at Web Tycoons and driving executive growth at Karma Ayurveda, to uniting hospitality leaders through Happy Hospitality Club, his approach centers on unit economics, automated workflows, and building enterprise value.
              </p>

              {/* Editorial Architectural Metric Ledger */}
              <div className="grid grid-cols-2 sm:grid-cols-4 border-y border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                {statStrip.map((stat) => (
                  <div key={stat.label} className="py-4 sm:px-4 first:sm:pl-0 last:sm:pr-0">
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight block">
                      {stat.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.1em] font-medium text-slate-500 mt-1 block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clean Uncluttered Editorial Portrait Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px] h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-200 bg-[#060D1A] shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
                <Image
                  src="/images/hero/ddab.png"
                  alt="Dheeraj Aggarwal - Business Consultant & Growth Specialist"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Chronological Leadership Journey (DARK MIDNIGHT NAVY - 60px padding) */}
      <section className="py-[60px] bg-[#060D1A] border-b border-white/10 relative overflow-hidden font-sans">
        <DarkSectionLining />

        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <SectionHeading
            eyebrow="EVOLUTION & MILESTONES"
            title="The Journey"
            description="From early web pioneering to executive advisory mandates and national community leadership across 15+ years."
            light={false}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          <Timeline light={false} />
        </div>
      </section>

      {/* 4. Professional Philosophy Ledger (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="GOVERNING PRINCIPLES"
            title="Professional Philosophy"
            description="Core tenets that guide every consulting assignment, performance audit, and institutional advisory mandate."
            light={true}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 border-t border-slate-200">
            {philosophies.map((item, idx) => (
              <div
                key={item.title}
                className="group py-6 border-b border-slate-200 flex items-start gap-5 transition-colors"
              >
                <span className="text-lg font-extrabold text-[#9A6B0C] tabular-nums shrink-0 pt-0.5">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#9A6B0C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Key Capabilities & Core Values (DARK MIDNIGHT NAVY - 60px padding) */}
      <section
        id="bni-leadership"
        className="py-[60px] bg-[#060D1A] border-b border-white/10 relative overflow-hidden font-sans"
      >
        <DarkSectionLining />

        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Key Capabilities Directory */}
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="CORE SKILLS"
                title="Key Capabilities"
                description="Cross-functional expertise refined across hundreds of client engagements."
                light={false}
                compact={true}
                animate={false}
                className="!mb-6"
              />

              <ul className="border-t border-white/12 divide-y divide-white/10">
                {capabilities.map((cap) => (
                  <li key={cap} className="py-3.5 flex items-center gap-3 text-sm text-slate-100 font-medium">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.2} />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Personal Values Editorial Grid */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="ETHICAL FOUNDATION"
                title="Personal Values"
                description="The internal compass that dictates how we work, advise, and partner."
                light={false}
                compact={true}
                animate={false}
                className="!mb-6"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v, idx) => (
                  <div
                    key={v.title}
                    className="p-5 sm:p-6 rounded-2xl bg-[#0B1528] border border-white/10 hover:border-[#D4AF37]/50 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#D4AF37]">
                        {v.tag}
                      </span>
                      <span className="text-xs font-bold text-slate-500 tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                      {v.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Page Closing CTA (LIGHT - 60px padding) */}
      <PageCTA
        title="Looking for a Strategic Advisory Partner?"
        description="Share your current business priorities, conversion challenges, or expansion plans for a confidential diagnostic session."
        primaryAction={{
          label: "Schedule a Consultation",
          href: "/contact?type=consulting",
        }}
        secondaryAction={{
          label: "View Consulting Mandates",
          href: "/consulting",
        }}
        light={true}
      />
    </>
  );
}
