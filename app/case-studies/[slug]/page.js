import { notFound } from "next/navigation";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import { caseStudies } from "@/data/caseStudies";
import { ArrowLeft, Check, Quote, ShieldAlert, Award } from "lucide-react";

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

  const isAnonymised = study.anonymised;

  return (
    <>
      {/* 1. Header & Context */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#004671] border-b border-white/08 relative">
        <div className="max-w-[1040px] mx-auto px-6 sm:px-8">
          {/* Breadcrumb back */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-[#C6A15B] hover:text-[#E2C98F] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] px-3 py-1 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/20">
              {study.category}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs text-[#A9B0BE] font-mono">
              {study.sector}
            </span>
            {isAnonymised && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2C98F] px-2 py-0.5 rounded bg-white/05 border border-white/10">
                Client Anonymised for Confidentiality
              </span>
            )}
          </div>

          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-[#F5F3EE] leading-[1.14] mb-6 text-balance-editorial">
            {study.title}
          </h1>

          <p className="text-base sm:text-lg text-[#A9B0BE] leading-relaxed mb-8">
            {study.summary}
          </p>

          {/* Quick Context Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#0F1626] border border-white/08 text-xs">
            <div>
              <span className="text-[#C6A15B] font-mono uppercase tracking-wider block mb-1">
                Client Profile
              </span>
              <strong className="text-[#F5F3EE]">
                {isAnonymised ? study.sector : study.clientName}
              </strong>
            </div>
            <div>
              <span className="text-[#C6A15B] font-mono uppercase tracking-wider block mb-1">
                Enterprise Scale
              </span>
              <span className="text-[#F5F3EE]">{study.clientScale}</span>
            </div>
            <div>
              <span className="text-[#C6A15B] font-mono uppercase tracking-wider block mb-1">
                Engagement Mandate
              </span>
              <span className="text-[#F5F3EE]">{study.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Structured Narrative Body */}
      <section className="py-20 md:py-28 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1040px] mx-auto px-6 sm:px-8 space-y-12">
          {/* Challenge & Diagnosis (2-Col) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#151D30]/60 border border-white/08">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] block mb-2 font-semibold">
                01 • The Business Challenge
              </span>
              <h2 className="font-editorial text-2xl text-[#F5F3EE] mb-4">
                Operational Friction & Constraints
              </h2>
              <p className="text-sm text-[#A9B0BE] leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#151D30]/60 border border-white/08">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] block mb-2 font-semibold">
                02 • Strategic Diagnosis
              </span>
              <h2 className="font-editorial text-2xl text-[#F5F3EE] mb-4">
                Root Cause Identification
              </h2>
              <p className="text-sm text-[#A9B0BE] leading-relaxed">
                {study.diagnosis}
              </p>
            </div>
          </div>

          {/* Strategy & Interventions */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#004671] border border-white/08">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] block mb-2 font-semibold">
              03 • Strategic Architecture
            </span>
            <h2 className="font-editorial text-3xl text-[#F5F3EE] mb-4">
              Intervention Strategy
            </h2>
            <p className="text-sm text-[#A9B0BE] leading-relaxed mb-6">
              {study.strategy}
            </p>

            <div className="pt-6 border-t border-white/06">
              <h3 className="text-xs uppercase tracking-wider text-[#F5F3EE] font-mono mb-4">
                Key Actions Executed:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {study.actionsTaken.map((act) => (
                  <div key={act} className="flex items-start gap-2.5 text-xs text-[#A9B0BE]">
                    <Check className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                    <span className="leading-snug text-[#F5F3EE]/90">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Systems or Campaigns Implemented */}
          <div className="p-8 rounded-2xl bg-[#151D30]/40 border border-white/08">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] block mb-2 font-semibold">
              04 • Structural Assets Built
            </span>
            <h2 className="font-editorial text-2xl text-[#F5F3EE] mb-4">
              Systems & Campaigns Installed
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {study.systemsImplemented.map((sys) => (
                <div
                  key={sys}
                  className="p-4 rounded-xl bg-[#004671]/80 border border-white/06 text-xs text-[#F5F3EE] font-medium"
                >
                  {sys}
                </div>
              ))}
            </div>
          </div>

          {/* Results Matrix */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#151D30] to-[#004671] border border-[#C6A15B]/30 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] block mb-1">
                  05 • Verified Outcomes
                </span>
                <h2 className="font-editorial text-3xl text-[#F5F3EE]">
                  Transformation Results
                </h2>
              </div>
              <Award className="w-8 h-8 text-[#C6A15B]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/08">
              {study.results.map((res) => (
                <div key={res.metric} className="p-4 rounded-xl bg-[#004671]/60 border border-white/06">
                  <span className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-mono block mb-1">
                    {res.metric}
                  </span>
                  <p className="text-sm font-medium text-[#F5F3EE] leading-snug">
                    {res.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Learning & Client Quote */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 p-8 rounded-2xl bg-[#004671] border border-white/08">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] block mb-2 font-semibold">
                06 • Executive Learning
              </span>
              <h3 className="font-editorial text-2xl text-[#F5F3EE] mb-3">
                Strategic Takeaway
              </h3>
              <p className="text-sm text-[#A9B0BE] leading-relaxed">
                {study.learning}
              </p>
            </div>

            <div className="md:col-span-6 p-8 rounded-2xl bg-[#151D30] border border-white/10 relative overflow-hidden">
              <Quote className="w-16 h-16 text-[#C6A15B]/10 absolute -bottom-2 right-2" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] block mb-2 font-semibold">
                Client Reflection
              </span>
              <p className="font-editorial text-xl sm:text-2xl text-[#F5F3EE] italic leading-snug mb-4">
                &ldquo;{study.clientQuote.text}&rdquo;
              </p>
              <div>
                <strong className="text-sm text-[#F5F3EE] block">
                  {study.clientQuote.author}
                </strong>
                <span className="text-xs text-[#A9B0BE]">
                  {study.clientQuote.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Closing CTA */}
      <PageCTA
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
