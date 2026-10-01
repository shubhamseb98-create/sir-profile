import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import SafeImage from "@/components/ui/SafeImage";
import Timeline from "@/components/sections/Timeline";
import PageCTA from "@/components/sections/PageCTA";
import { Download, Check, Shield, Lightbulb, Target, BookOpen, Users, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "About Dheeraj Aggarwal | Business Consultant, Digital Expert & Growth Specialist",
  description:
    "Learn about Dheeraj Aggarwal: 15+ years of entrepreneurial experience, 3,700+ websites delivered, founder of Web Tycoons, and strategic advisor to high-growth organizations.",
};

export default function AboutPage() {
  const philosophies = [
    {
      title: "Every business needs clarity before marketing",
      desc: "Promoting an ill-defined offer or poorly differentiated service burns capital. Strategic positioning and unit economics must always precede ad spend.",
    },
    {
      title: "Digital growth must connect with revenue and profitability",
      desc: "Impressions, follower counts, and website traffic are vanity metrics unless they directly translate into qualified sales calls and healthy cash flows.",
    },
    {
      title: "Systems and SOPs create consistency",
      desc: "Founder brilliance is unscalable without documented standard operating procedures. True enterprise value lies in processes that run without daily firefighting.",
    },
    {
      title: "Strong communities create opportunities",
      desc: "High-trust networks shorten sales cycles and multiply collaborative value. Structuring genuine reciprocity builds enduring business ecosystems.",
    },
    {
      title: "Execution is more important than ideas alone",
      desc: "A brilliant slide deck without operational follow-through produces zero enterprise value. Relentless weekly execution discipline wins market share.",
    },
    {
      title: "Business growth should be measurable and sustainable",
      desc: "Growth that compromises unit margins or overextends operational capacity is fragile. We engineer steady, profitable, and durable commercial momentum.",
    },
  ];

  const capabilities = [
    "Strategic Thinking & Business Diagnostics",
    "Brand Positioning & Value Proposition Architecture",
    "Digital Marketing & High-Intent Google Visibility",
    "Sales Funnel Velocity & Conversion Improvement",
    "Enterprise CRM Planning & Process Architecture",
    "Team Leadership, Rhythms & Accountability",
    "Institutional Partnerships & B2B Alliances",
    "Franchise Modeling & Regional Expansion",
    "Public Keynote Speaking & Executive Masterclasses",
    "Community Building & Vendor Ecosystem Monetization",
  ];

  const values = [
    {
      title: "Integrity",
      icon: Shield,
      desc: "Absolute transparency with clients, partners, and team members. We never recommend campaigns or systems a business does not genuinely require.",
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      desc: "Staying ahead of algorithmic, technological, and consumer shifts to uncover unfair commercial advantages for our clients.",
    },
    {
      title: "Impact",
      icon: Target,
      desc: "Evaluating success by tangible bottom-line results: reduced inquiry lag, improved ROAS, smoother branch rollouts, and increased profitability.",
    },
    {
      title: "Continuous Learning",
      icon: BookOpen,
      desc: "Continuous refinement through hands-on practice across varied sectorsâ€”from ayurvedic medicine and luxury hospitality to industrial manufacturing.",
    },
    {
      title: "Relationship Building",
      icon: Users,
      desc: "Nurturing deep, multi-year commercial bonds grounded in mutual respect, ethical conduct, and reciprocal value creation.",
    },
    {
      title: "Giving Back to Business Communities",
      icon: HeartHandshake,
      desc: "Mentoring emerging MSME entrepreneurs, sharing practical operational playbooks, and cultivating regional business leadership.",
    },
  ];

  return (
    <>
      {/* 1. Header / Intro Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.24em] text-[#C6A15B] font-mono font-medium block mb-4">
                THE FOUNDER & STRATEGIST
              </span>

              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-medium text-[#F5F3EE] leading-[1.12] mb-6">
                Bridging Strategic Vision & Disciplined Execution.
              </h1>

              <p className="text-base sm:text-lg text-[#A9B0BE] leading-relaxed mb-6 font-normal">
                Dheeraj Aggarwal is an entrepreneur, business consultant, digital expert, growth
                specialist, speaker and community builder with more than 15 years of experience
                helping businesses establish, market, systemise and scale.
              </p>

              <p className="text-sm text-[#A9B0BE]/80 leading-relaxed mb-8">
                From pioneering digital web platforms in 2008 and scaling Web Tycoons across 3,700+
                deliveries, to driving executive strategy at Karma Ayurveda and co-directing the Happy
                Hospitality Club, his work centers on a single truth: sustainable growth requires
                both commercial clarity and disciplined systems.
              </p>

              {/* Download Profile CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="/public/downloads/Dheeraj-Aggarwal-Professional-Profile.pdf"
                  variant="primary"
                  size="md"
                  icon="none"
                  download
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span>Download Professional Profile (PDF)</span>
                </Button>

                <Button
                  href="/public/downloads/Dheeraj-Aggarwal-Speaker-Profile.pdf"
                  variant="secondary"
                  size="md"
                  icon="none"
                  download
                >
                  <Download className="w-4 h-4 mr-2 text-[#C6A15B]" />
                  <span>Download Speaker Profile (PDF)</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] rounded-2xl overflow-hidden border border-white/12 shadow-2xl">
                <SafeImage
                  src="/images/dheeraj/portrait-about.jpg"
                  alt="Dheeraj Aggarwal - Professional Profile"
                  width={480}
                  height={600}
                  priority={true}
                  placeholderLabel="Executive Profile Portrait"
                  aspectRatio="aspect-[4/5]"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#0F1626] border-t border-white/08 text-center">
                  <span className="font-editorial text-lg text-[#F5F3EE] block">
                    Dheeraj Aggarwal
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-mono">
                    15+ Years Commercial Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Journey (Animated Timeline) */}
      <section className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="01"
            eyebrow="EVOLUTION & MILESTONES"
            title="The Journey"
            description="From early web pioneering to executive advisory mandates and national community leadership. A track record built over 15+ years of continuous market engagement."
            align="center"
          />

          <Timeline />
        </div>
      </section>

      {/* 3. Professional Philosophy */}
      <section className="py-24 md:py-32 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="02"
            eyebrow="GOVERNING PRINCIPLES"
            title="Professional Philosophy"
            description="Core tenets that guide every consulting assignment, performance audit, and institutional advisory mandate."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophies.map((item, idx) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-[#0F1626] border border-white/08 hover:border-[#C6A15B]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <span className="font-mono text-xs text-[#C6A15B] font-semibold px-2 py-0.5 rounded bg-[#C6A15B]/10 block w-max mb-4">
                    Principle 0{idx + 1}
                  </span>
                  <h3 className="font-editorial text-2xl font-medium text-[#F5F3EE] mb-3 leading-snug group-hover:text-[#E2C98F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A9B0BE] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Key Capabilities & Personal Values */}
      <section className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Key Capabilities */}
            <div className="lg:col-span-5">
              <SectionHeading
                number="03"
                eyebrow="CORE SKILLS"
                title="Key Capabilities"
                description="Cross-functional expertise refined across hundreds of client engagements."
                className="mb-8"
              />

              <div className="space-y-3">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="p-3.5 rounded-xl bg-[#151D30]/60 border border-white/06 flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#C6A15B]" />
                    </div>
                    <span className="text-sm text-[#F5F3EE] font-medium">{cap}</span>
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
                className="mb-8"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.title}
                      className="p-6 rounded-2xl bg-[#151D30]/40 border border-white/08 hover:border-[#C6A15B]/40 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/10 border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] mb-4">
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <h4 className="font-editorial text-xl font-medium text-[#F5F3EE] mb-2">
                        {v.title}
                      </h4>
                      <p className="text-xs text-[#A9B0BE] leading-relaxed">
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

      {/* Page Closing CTA */}
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
      />
    </>
  );
}

