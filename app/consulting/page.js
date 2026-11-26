"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import { consultingServices, engagementModels } from "@/data/services";
import { Check, ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ConsultingPage() {
  const [activeService, setActiveService] = useState(consultingServices[0].id);

  return (
    <>
      {/* 1. Architectural Midnight Navy Masthead */}
      <BreadcrumbHero
        eyebrow="EXECUTIVE ADVISORY & SYSTEMS"
        title="Strategic Clarity. Scalable Systems. Predictable Growth."
        description="I work with founders and leadership teams to identify growth barriers, design practical strategies, improve execution and establish systems that produce sustainable results."
        breadcrumbs={[{ label: "Consulting Services" }]}
        imageSrc="/images/transformations/karma-clinic-ops.jpg"
      />

      {/* 2. Interactive Consulting Practices Directory (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="SPECIALIZED PRACTICES"
            title="Consulting Domains"
            description="Six structured practice areas designed to eliminate founder bottlenecking and build self-sustaining commercial operations."
            light={true}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sticky Editorial Practice Index (4 Cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 border border-slate-200 rounded-2xl bg-[#FAF9F6] p-4 sm:p-5">
                <span className="text-[11px] uppercase tracking-[0.16em] text-slate-500 font-bold block pb-3 mb-2 border-b border-slate-200">
                  Practice Index
                </span>

                <div className="divide-y divide-slate-200/80">
                  {consultingServices.map((service, idx) => {
                    const isSelected = activeService === service.id;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => {
                          setActiveService(service.id);
                          const el = document.getElementById(service.id);
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={cn(
                          "w-full text-left py-3 px-2.5 text-xs sm:text-sm font-medium transition-colors flex items-center justify-between gap-2 cursor-pointer border-l-2",
                          isSelected
                            ? "border-[#D4AF37] text-[#0F172A] font-bold bg-white"
                            : "border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300"
                        )}
                      >
                        <span className="flex items-baseline gap-2.5">
                          <span className="text-xs font-bold text-[#9A6B0C] tabular-nums">
                            0{idx + 1}
                          </span>
                          <span>{service.title}</span>
                        </span>
                        <ArrowRight
                          className={cn(
                            "w-3.5 h-3.5 shrink-0 transition-opacity",
                            isSelected ? "opacity-100 text-[#9A6B0C]" : "opacity-0"
                          )}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Specification Dossiers (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              {consultingServices.map((service, idx) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[#D4AF37]/70 transition-colors shadow-[0_2px_12px_rgba(15,23,42,0.03)] scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-200">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-[#9A6B0C] block mb-1">
                        Advisory Domain 0{idx + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    <span
                      aria-hidden="true"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "1.5px rgba(15, 23, 42, 0.13)",
                      }}
                      className="font-black text-4xl sm:text-5xl leading-none select-none shrink-0"
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Expected Outcome Rule Callout */}
                  <div className="p-4 rounded-xl bg-[#FAF9F6] border-l-2 border-[#D4AF37] mb-6">
                    <span className="text-[11px] font-bold text-[#9A6B0C] uppercase tracking-[0.14em] block mb-1">
                      Expected Commercial Outcome
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium">
                      {service.impact}
                    </p>
                  </div>

                  {/* Strategic Deliverables */}
                  <div className="mb-6">
                    <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-500 block mb-3">
                      Core Strategic Deliverables
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700"
                        >
                          <Check className="w-4 h-4 text-[#9A6B0C] shrink-0 mt-0.5" strokeWidth={2.2} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      Confidential Strategic Diagnostic Available
                    </span>

                    <Button
                      href={`/contact?type=${service.id}`}
                      variant="light-primary"
                      size="sm"
                    >
                      Enquire for Practice
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engagement Models Comparison (DARK MIDNIGHT NAVY - 60px padding) */}
      <section
        id="models"
        className="py-[60px] bg-[#060D1A] border-b border-white/10 relative overflow-hidden font-sans"
      >
        <DarkSectionLining />

        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <SectionHeading
            eyebrow="COLLABORATION STRUCTURE"
            title="Engagement Models"
            description="Flexible advisory formats structured around enterprise maturity, operational urgency, and growth horizon."
            align="center"
            light={false}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {engagementModels.map((model, idx) => (
              <div
                key={model.id}
                className={cn(
                  "p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-colors relative bg-[#0B1528]",
                  model.featured
                    ? "border-2 border-[#D4AF37] shadow-[0_18px_45px_rgba(0,0,0,0.55)]"
                    : "border border-white/12 hover:border-[#D4AF37]/50"
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs uppercase tracking-[0.14em] text-[#D4AF37] font-bold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {model.duration}
                    </span>
                    {model.featured ? (
                      <span className="text-[10px] uppercase tracking-[0.14em] font-bold bg-[#D4AF37] text-[#060D1A] px-2.5 py-0.5 rounded-full">
                        Most Selected
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-slate-500 tabular-nums">
                        0{idx + 1}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5">
                    {model.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {model.objective}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                    <div>
                      <span className="text-[#F5E2A3] font-semibold uppercase tracking-[0.1em] text-[10px] block mb-1">
                        Primary Deliverable
                      </span>
                      <p className="text-white leading-snug">{model.deliverable}</p>
                    </div>

                    <div className="pt-1">
                      <span className="text-slate-400 font-semibold uppercase tracking-[0.1em] text-[10px] block mb-1">
                        Commitment Rhythm
                      </span>
                      <p className="text-slate-300 leading-snug">{model.commitment}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <Button
                    href={`/contact?type=${model.id}`}
                    variant={model.featured ? "primary" : "secondary"}
                    size="md"
                    className="w-full"
                  >
                    Select Engagement
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Page Closing CTA (LIGHT - 60px padding) */}
      <PageCTA
        title="Ready to Diagnose Your Growth Bottlenecks?"
        description="Book a confidential, one-on-one strategic diagnostic call to review your current commercial numbers, systems, and execution priorities."
        primaryAction={{
          label: "Book Diagnostic Call",
          href: "/contact?type=strategy-call",
        }}
        secondaryAction={{
          label: "Explore Case Studies",
          href: "/case-studies",
        }}
        light={true}
      />
    </>
  );
}
