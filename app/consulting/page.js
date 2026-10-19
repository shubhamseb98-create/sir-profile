"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import { consultingServices, engagementModels } from "@/data/services";
import { Check, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ConsultingPage() {
  const [activeService, setActiveService] = useState(consultingServices[0].id);

  return (
    <>
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="EXECUTIVE ADVISORY & SYSTEMS"
        title="Strategic Clarity. Scalable Systems. Predictable Growth."
        description="I work with founders and leadership teams to identify growth barriers, design practical strategies, improve execution and establish systems that produce sustainable results."
        breadcrumbs={[{ label: "Consulting Services" }]}
        imageSrc="/images/hero/hero-executive-consulting.jpg"
      />

      {/* 2. Interactive Consulting Practices with Sticky Index (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style balanced ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="01"
            eyebrow="SPECIALIZED PRACTICES"
            title="Consulting Domains"
            description="Six structured practice areas designed to eliminate founder bottlenecking and build self-sustaining commercial operations."
            light={true}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Sticky Index Menu */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-2 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md">
                <span className="text-[10px] uppercase tracking-widest text-slate-900 font-mono px-3 py-1 font-bold block">
                  Select Practice Area
                </span>

                {consultingServices.map((service, idx) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setActiveService(service.id);
                      const el = document.getElementById(service.id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={cn(
                      "w-full text-left px-3.5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between group cursor-pointer",
                      activeService === service.id
                        ? "bg-black text-white font-bold shadow-sm"
                        : "text-slate-700 hover:text-black hover:bg-slate-100"
                    )}
                  >
                    <span>
                      0{idx + 1}. {service.title}
                    </span>
                    <ArrowRight
                      className={cn(
                        "w-3.5 h-3.5 transition-transform",
                        activeService === service.id ? "translate-x-0.5 text-white" : "opacity-0 group-hover:opacity-100 text-slate-800"
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Detailed Practices */}
            <div className="lg:col-span-8 space-y-8">
              {consultingServices.map((service, idx) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 hover:border-black transition-all duration-300 shadow-md hover:shadow-xl scroll-mt-28 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-black text-white border border-black shadow-sm">
                      Practice 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      Advisory Framework
                    </span>
                  </div>

                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-black transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Impact Summary */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-6">
                    <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      Expected Commercial Outcome:
                    </span>
                    <p className="text-xs text-slate-600 font-medium">{service.impact}</p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold block">
                      Core Strategic Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 text-xs text-slate-700 font-medium"
                        >
                          <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enquire CTA */}
                  <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 font-mono">
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

      {/* 3. Engagement Models Comparison Row (DARK - 80px padding) */}
      <section id="models" className="min-h-screen flex flex-col justify-center py-[80px] bg-[#000000] border-b border-white/10 relative overflow-hidden">
        {/* Subtle balanced neon lime glow aura */}
        <div className="absolute top-1/3 -left-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="02"
            eyebrow="COLLABORATION STRUCTURE"
            title="Engagement Models"
            description="Flexible advisory formats structured around enterprise maturity, operational urgency, and growth horizon."
            align="center"
            light={false}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div
                key={model.id}
                className={cn(
                  "p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative group",
                  model.featured
                    ? "bg-[#0A0D14] border-2 border-[#CFFF04] shadow-[0_0_35px_rgba(207,255,4,0.2)] -translate-y-1"
                    : "bg-[#0A0D14]/80 border border-white/10 hover:border-[#CFFF04]/40 shadow-xl"
                )}
              >
                {model.featured && (
                  <span className="absolute -top-3 left-8 text-[10px] font-mono uppercase tracking-widest font-bold bg-[#CFFF04] text-black px-3.5 py-1 rounded-full shadow-[0_0_12px_rgba(207,255,4,0.4)]">
                    Most Selected Mandate
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#CFFF04] font-bold">
                      {model.duration}
                    </span>
                    <Clock className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="font-sans text-2xl font-bold text-white group-hover:text-[#CFFF04] transition-colors mb-3">
                    {model.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {model.objective}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                    <div>
                      <span className="text-[#CFFF04] font-mono font-semibold block mb-1">
                        Primary Deliverable:
                      </span>
                      <p className="text-white leading-snug">{model.deliverable}</p>
                    </div>

                    <div className="pt-2">
                      <span className="text-slate-400 font-mono block mb-1">
                        Commitment Rhythm:
                      </span>
                      <p className="text-slate-300 leading-snug">{model.commitment}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
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

      {/* 4. Page Closing CTA (LIGHT - 80px padding) */}
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
