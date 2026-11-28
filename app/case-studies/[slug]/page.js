import { notFound } from "next/navigation";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import { caseStudies } from "@/data/caseStudies";
import { Check } from "lucide-react";

const CASE_HERO_IMAGES = {
  "karma-ayurveda-systems-expansion": "/images/transformations/karma-clinic-ops.jpg",
  "web-tycoons-agency-scale": "/images/transformations/webtycoons-studio.jpg",
  "happy-hospitality-club-community": "/images/transformations/hhc-hospitality-roundtable.jpg",
  "high-growth-d2c-roas-optimization": "/images/cards/roas-analytics-real.jpg",
  "national-manufacturing-google-visibility": "/images/cards/digital-growth-real.jpg",
  "wellness-franchise-expansion-blueprint": "/images/cards/franchise-expansion-real.jpg",
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    notFound();
  }

  const heroImage =
    CASE_HERO_IMAGES[study.slug] || "/images/transformations/karma-clinic-ops.jpg";

  return (
    <>
      <BreadcrumbHero
        eyebrow={study.category || "CASE STUDY & TRANSFORMATION"}
        title={study.title}
        description={study.summary}
        breadcrumbs={[
          { label: "Case Studies", href: "/case-studies" },
          { label: study.category },
        ]}
        imageSrc={heroImage}
      />

      {/* Executive Case Monograph: Challenge, Diagnosis & Intervention (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1040px] w-full mx-auto px-4 sm:px-6 md:px-8 space-y-10">
          {/* Challenge & Diagnosis Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="p-7 sm:p-8 bg-white">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#1D4ED8] font-bold block mb-2">
                01 • Challenge
              </span>
              <h2 className="text-xl sm:text-2xl font-normal text-slate-900 mb-3">
                Operational Friction &amp; Constraints
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="p-7 sm:p-8 bg-[#F8FAFC]">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#1D4ED8] font-bold block mb-2">
                02 • Strategic Diagnosis
              </span>
              <h2 className="text-xl sm:text-2xl font-normal text-slate-900 mb-3">
                Root Cause Identification
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {study.diagnosis}
              </p>
            </div>
          </div>

          {/* Strategy & Interventions */}
          <div className="p-7 sm:p-9 rounded-2xl bg-white border border-slate-200">
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#1D4ED8] font-bold block mb-2">
              03 • Strategic Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 mb-3">
              Intervention Strategy
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {study.strategy}
            </p>

            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xs uppercase tracking-[0.14em] text-slate-500 font-normal mb-4">
                Key Actions Executed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {study.actionsTaken.map((act) => (
                  <div key={act} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2.2} />
                    <span className="leading-snug">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Matrix & Executive Reflection (OBSIDIAN & ROYAL BLUE - 60px padding) */}
      <section className="py-[60px] bg-[#04040A] border-b border-white/10 relative overflow-hidden font-sans">
        <DarkSectionLining variant="blue" />

        <div className="max-w-[1040px] w-full mx-auto px-4 sm:px-6 md:px-8 space-y-8 relative z-10">
          {/* Verified Outcomes Matrix */}
          <div className="p-7 sm:p-9 rounded-2xl bg-[#090F1E] border border-white/12">
            <div className="pb-5 mb-6 border-b border-white/10">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#60A5FA] font-bold block mb-1">
                04 • Verified Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal text-white">
                Transformation Results
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {study.results.map((res) => (
                <div key={res.metric} className="py-4 md:py-0 md:px-6 first:pt-0 first:md:pl-0 last:pb-0 last:md:pr-0">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#93C5FD] font-bold block mb-1.5">
                    {res.metric}
                  </span>
                  <p className="text-sm font-medium text-white leading-snug">
                    {res.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Takeaway & Client Endorsement */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-6 p-7 rounded-2xl bg-[#090F1E] border border-white/12">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#60A5FA] font-bold block mb-2">
                05 • Executive Learning
              </span>
              <h3 className="text-xl font-normal text-white mb-3">
                Strategic Takeaway
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {study.learning}
              </p>
            </div>

            <div className="md:col-span-6 p-7 rounded-2xl bg-[#090F1E] border-l-2 border-l-[#60A5FA] border border-white/12 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#60A5FA] font-bold block mb-3">
                  Client Reflection
                </span>
                <p className="text-base sm:text-lg text-white leading-relaxed mb-5">
                  &ldquo;{study.clientQuote.text}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <strong className="text-sm text-white block">
                  {study.clientQuote.author}
                </strong>
                <span className="text-xs text-slate-400">
                  {study.clientQuote.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        light={true}
        title="Explore How This Applies to Your Business"
        description="Every enterprise has unique operational and conversion nuances. Request a confidential diagnostic session to discuss your current systems."
        primaryAction={{
          label: "Book Strategy Call",
          href: "/contact?type=case-study-discussion",
        }}
        secondaryAction={{
          label: "View All Case Studies",
          href: "/case-studies",
        }}
      />
    </>
  );
}
