import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/sections/Timeline";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import { Check, Shield, Lightbulb, Target, BookOpen, Users, HeartHandshake } from "lucide-react";

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
      icon: Shield,
      desc: "Absolute transparency with clients and partners. We never recommend campaigns a business does not genuinely need.",
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      desc: "Staying ahead of algorithmic and consumer shifts to uncover unfair commercial advantages for our clients.",
    },
    {
      title: "Impact",
      icon: Target,
      desc: "Evaluating success by bottom-line results: reduced inquiry lag, improved ROAS, and increased profitability.",
    },
    {
      title: "Continuous Learning",
      icon: BookOpen,
      desc: "Refining execution across varied sectors — from ayurvedic healthcare to luxury hospitality and manufacturing.",
    },
    {
      title: "Relationship Building",
      icon: Users,
      desc: "Nurturing deep commercial bonds grounded in mutual respect, ethical conduct, and reciprocal value creation.",
    },
    {
      title: "Giving Back",
      icon: HeartHandshake,
      desc: "Mentoring emerging MSME entrepreneurs, sharing practical operational playbooks, and cultivating business leaders.",
    },
  ];

  return (
    <>
      {/* 1. Sleek Compact Breadcrumb Header (DARK) */}
      <BreadcrumbHero
        eyebrow="EXECUTIVE PROFILE"
        title="About Dheeraj Aggarwal"
        description="Business Consultant, Founder of Web Tycoons, and Strategic Growth Specialist advising leadership teams across India."
        breadcrumbs={[{ label: "About Dheeraj" }]}
        imageSrc="/images/hero/hero-corporate-skyline.jpg"
      />

      {/* 2. Section 1: ABOUT US & EXECUTIVE BIO (LIGHT - 80px top & bottom padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style balanced ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Story & Executive Overview */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#0F172A] font-bold">
                  ABOUT DHEERAJ AGGARWAL
                </span>
              </div>

              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight tracking-tight mb-4 sm:mb-5">
                Bridging Strategic Vision & Disciplined Execution.
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Dheeraj Aggarwal is an entrepreneur, business consultant, digital strategist, and keynote speaker with over 15 years of ground-level experience helping businesses establish, market, systemise, and scale profitably.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                From delivering 3,700+ digital platforms at Web Tycoons and driving executive growth at Karma Ayurveda, to uniting hospitality leaders through Happy Hospitality Club, his approach centers on unit economics, automated workflows, and building enterprise value.
              </p>

              {/* Quick Stat Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-5 border-t border-slate-200">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                  <span className="text-xl sm:text-2xl font-bold text-[#0F172A] font-mono block">15+ Yrs</span>
                  <span className="text-xs text-slate-500 font-medium">Leadership</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                  <span className="text-xl sm:text-2xl font-bold text-[#0F172A] font-mono block">3,700+</span>
                  <span className="text-xs text-slate-500 font-medium">Deliveries</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                  <span className="text-xl sm:text-2xl font-bold text-[#0F172A] font-mono block">50+ Stages</span>
                  <span className="text-xs text-slate-500 font-medium">Keynotes</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                  <span className="text-xl sm:text-2xl font-bold text-[#0F172A] font-mono block">Pan-India</span>
                  <span className="text-xs text-slate-500 font-medium">Advisory</span>
                </div>
              </div>
            </div>

            {/* Right Column: Homepage Dheeraj Aggarwal Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] h-[380px] sm:h-[440px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-950 group">
                <Image
                  src="/images/hero/ddab.png"
                  alt="Dheeraj Aggarwal - Business Consultant & Growth Specialist"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Bottom Credential Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/15 text-white shadow-2xl">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-white">Dheeraj Aggarwal</h3>
                    <span className="text-[10px] font-mono text-white bg-black/95 px-2.5 py-0.5 rounded-full font-bold border border-white/20 shadow-sm">
                      15+ Yrs Experience
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-normal">Executive Advisor & Growth Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 2: THE JOURNEY / TIMELINE (DARK - 80px top & bottom padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#000000] border-b border-white/10 relative overflow-hidden">
        {/* Subtle balanced neon lime glow aura */}
        <div className="absolute top-1/3 -left-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="01"
            eyebrow="EVOLUTION & MILESTONES"
            title="The Journey"
            description="From early web pioneering to executive advisory mandates and national community leadership across 15+ years."
            align="center"
            light={false}
            className="mb-10 sm:mb-14"
          />

          <Timeline light={false} />
        </div>
      </section>

      {/* 4. Section 3: PROFESSIONAL PHILOSOPHY (LIGHT - 80px top & bottom padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Subtle balanced ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="02"
            eyebrow="GOVERNING PRINCIPLES"
            title="Professional Philosophy"
            description="Core tenets that guide every consulting assignment, performance audit, and institutional advisory mandate."
            light={true}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {philosophies.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-black transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-black/5"
              >
                <div>
                  <span className="font-mono text-xs text-white font-bold px-3 py-1 rounded-full bg-black border border-black block w-max mb-3.5 shadow-sm">
                    Principle 0{idx + 1}
                  </span>
                  <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section 4: KEY CAPABILITIES & CORE VALUES (DARK - 80px top & bottom padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#000000] border-b border-white/10 relative overflow-hidden">
        {/* Subtle balanced neon lime glow aura */}
        <div className="absolute top-1/3 -left-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/3 -right-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Key Capabilities */}
            <div className="lg:col-span-5">
              <SectionHeading
                number="03"
                eyebrow="CORE SKILLS"
                title="Key Capabilities"
                description="Cross-functional expertise refined across hundreds of client engagements."
                className="mb-6 sm:mb-8"
                light={false}
              />

              <div className="space-y-3">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="p-3 sm:p-3.5 rounded-xl bg-[#0A0D14]/90 border border-white/10 flex items-center gap-3 hover:border-[#CFFF04]/40 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#CFFF04]/10 border border-[#CFFF04]/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#CFFF04]" />
                    </div>
                    <span className="text-xs sm:text-sm text-white font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Personal Values */}
            <div className="lg:col-span-7">
              <SectionHeading
                number="04"
                eyebrow="ETHICAL FOUNDATION"
                title="Personal Values"
                description="The internal compass that dictates how we work, advise, and partner."
                className="mb-6 sm:mb-8"
                light={false}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.title}
                      className="p-5 sm:p-6 rounded-2xl bg-[#0A0D14]/90 border border-white/10 hover:border-[#CFFF04]/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(207,255,4,0.12)] group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#CFFF04]/10 border border-[#CFFF04]/40 flex items-center justify-center text-[#CFFF04] mb-3 shadow-[0_0_12px_rgba(207,255,4,0.2)] group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                      </div>
                      <h4 className="font-sans text-sm sm:text-base font-bold text-white group-hover:text-[#CFFF04] transition-colors mb-1.5">
                        {v.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-light">
                        {v.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Page Closing CTA (LIGHT - with homepage subtle glow) */}
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
