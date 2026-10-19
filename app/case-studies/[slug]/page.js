import { notFound } from "next/navigation";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
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
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="CASE STUDY & TRANSFORMATION"
        title={study.title}
        description={study.summary}
        breadcrumbs={[
          { label: "Case Studies", href: "/case-studies" },
          { label: study.category },
        ]}
        imageSrc="/images/hero/hero-corporate-boardroom-clean.jpg"
      />

      {/* 2. Structured Narrative Body: Challenge & Strategy (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1040px] w-full mx-auto px-6 sm:px-8 space-y-10 my-auto relative z-10">
          {/* Challenge & Diagnosis (2-Col) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-black transition-all">
              <span className="text-xs font-mono uppercase tracking-wider text-white font-bold bg-black px-2.5 py-0.5 rounded-full inline-block mb-3 shadow-sm">
                01 • Challenge
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Operational Friction & Constraints
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {study.challenge}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-black transition-all">
              <span className="text-xs font-mono uppercase tracking-wider text-white font-bold bg-black px-2.5 py-0.5 rounded-full inline-block mb-3 shadow-sm">
                02 • Strategic Diagnosis
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Root Cause Identification
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {study.diagnosis}
              </p>
            </div>
          </div>

          {/* Strategy & Interventions */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold bg-black px-2.5 py-0.5 rounded-full inline-block mb-3 shadow-sm">
              03 • Strategic Architecture
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Intervention Strategy
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
              {study.strategy}
            </p>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-xs uppercase tracking-wider text-slate-900 font-mono font-bold mb-4">
                Key Actions Executed:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {study.actionsTaken.map((act) => (
                  <div key={act} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-black font-bold shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Transformation Outcomes & Results Matrix (DARK - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#000000] border-b border-white/10 relative overflow-hidden">
        {/* Homepage style ambient glow */}
        <div className="absolute top-1/3 -left-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1040px] w-full mx-auto px-6 sm:px-8 space-y-10 my-auto relative z-10">
          {/* Results Matrix */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0A0D14] to-black border border-[#CFFF04]/30 shadow-2xl shadow-[0_0_35px_rgba(207,255,4,0.08)]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#CFFF04] block mb-1 font-bold">
                  04 • Verified Outcomes
                </span>
                <h2 className="text-3xl font-bold text-white">
                  Transformation Results
                </h2>
              </div>
              <Award className="w-8 h-8 text-[#CFFF04]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              {study.results.map((res) => (
                <div key={res.metric} className="p-4 rounded-xl bg-black/70 border border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-[#CFFF04] font-mono block mb-1 font-bold">
                    {res.metric}
                  </span>
                  <p className="text-sm font-semibold text-white leading-snug">
                    {res.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Learning & Client Quote */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 p-8 rounded-2xl bg-[#0A0D14] border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#CFFF04] block mb-2 font-bold">
                05 • Executive Learning
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Strategic Takeaway
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {study.learning}
              </p>
            </div>

            <div className="md:col-span-6 p-8 rounded-2xl bg-[#0A0D14] border border-white/10 relative overflow-hidden">
              <Quote className="w-16 h-16 text-[#CFFF04]/10 absolute -bottom-2 right-2 pointer-events-none" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#CFFF04] block mb-2 font-bold">
                Client Reflection
              </span>
              <p className="text-lg sm:text-xl text-white italic leading-snug mb-4">
                &ldquo;{study.clientQuote.text}&rdquo;
              </p>
              <div>
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

      {/* 4. Page Closing CTA (LIGHT - 80px padding) */}
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
