"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import { consultingServices, engagementModels } from "@/data/services";
import { Check, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ConsultingPage() {
  const [activeService, setActiveService] = useState(consultingServices[0].id);

  return (
    <>
      {/* 1. Consulting Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.24em] text-[#C6A15B] font-mono font-medium block mb-4">
              EXECUTIVE ADVISORY & SYSTEMS
            </span>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium text-[#F5F3EE] leading-[1.1] mb-6">
              Strategic Clarity. Scalable Systems. Predictable Growth.
            </h1>

            <p className="text-base sm:text-lg text-[#A9B0BE] leading-relaxed mb-8">
              I work with founders and leadership teams to identify growth barriers, design practical
              strategies, improve execution and establish systems that produce sustainable results.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact?type=consulting" variant="primary" size="lg">
                Book a Strategy Diagnostic
              </Button>
              <Button href="#models" variant="secondary" size="lg" icon="right">
                View Engagement Models
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Consulting Practices with Sticky Index */}
      <section className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="01"
            eyebrow="SPECIALIZED PRACTICES"
            title="Consulting Domains"
            description="Six structured practice areas designed to eliminate founder bottlenecking and build self-sustaining commercial operations."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Sticky Index Menu */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-2 p-4 rounded-2xl bg-[#0A0F1A]/80 border border-white/08 backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-widest text-[#C6A15B] font-mono px-3 py-1 block">
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
                      "w-full text-left px-3.5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between group",
                      activeService === service.id
                        ? "bg-[#C6A15B] text-[#0A0F1A] font-semibold shadow-md"
                        : "text-[#A9B0BE] hover:text-[#F5F3EE] hover:bg-white/05"
                    )}
                  >
                    <span>
                      0{idx + 1}. {service.title}
                    </span>
                    <ArrowRight
                      className={cn(
                        "w-3.5 h-3.5 transition-transform",
                        activeService === service.id ? "translate-x-0.5" : "opacity-0 group-hover:opacity-100"
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Detailed Practices */}
            <div className="lg:col-span-8 space-y-12">
              {consultingServices.map((service, idx) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="p-8 sm:p-10 rounded-2xl bg-[#151D30]/60 border border-white/08 hover:border-[#C6A15B]/40 transition-colors shadow-xl scroll-mt-28"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#C6A15B] font-bold px-2.5 py-1 rounded bg-[#C6A15B]/10 border border-[#C6A15B]/20">
                      Practice 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-[#A9B0BE]/70">
                      Advisory Framework
                    </span>
                  </div>

                  <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-[#F5F3EE] mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm font-medium text-[#E2C98F] mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-[#A9B0BE] leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mb-6 pt-6 border-t border-white/06">
                    <h3 className="text-xs uppercase tracking-wider text-[#F5F3EE] font-mono mb-4">
                      Core Deliverables & Interventions:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((del) => (
                        <div key={del} className="flex items-start gap-2.5 text-xs text-[#A9B0BE]">
                          <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                          <span className="leading-snug">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For Callout */}
                  <div className="p-4 rounded-xl bg-[#0A0F1A]/60 border border-white/06 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs">
                      <span className="text-[#C6A15B] font-mono uppercase tracking-wider font-semibold block sm:inline mr-2">
                        Ideal For:
                      </span>
                      <span className="text-[#F5F3EE]">{service.idealFor}</span>
                    </div>

                    <Button
                      href={`/contact?type=${service.id}`}
                      variant="outline"
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

      {/* 3. Engagement Models Comparison Row */}
      <section id="models" className="py-24 md:py-32 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="02"
            eyebrow="COLLABORATION STRUCTURE"
            title="Engagement Models"
            description="Flexible advisory formats structured around enterprise maturity, operational urgency, and growth horizon."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div
                key={model.id}
                className={cn(
                  "p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative group",
                  model.featured
                    ? "bg-[#151D30] border-2 border-[#C6A15B] shadow-[0_8px_30px_rgba(198,161,91,0.15)] -translate-y-1"
                    : "bg-[#0F1626] border border-white/08 hover:border-white/20"
                )}
              >
                {model.featured && (
                  <span className="absolute -top-3 left-8 text-[10px] font-mono uppercase tracking-widest font-bold bg-[#C6A15B] text-[#0A0F1A] px-3 py-1 rounded-full shadow">
                    Most Selected Mandate
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B]">
                      {model.duration}
                    </span>
                    <Clock className="w-4 h-4 text-[#A9B0BE]" />
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-[#F5F3EE] mb-3">
                    {model.title}
                  </h3>

                  <p className="text-xs text-[#A9B0BE] leading-relaxed mb-6">
                    {model.objective}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/06 text-xs">
                    <div>
                      <span className="text-[#C6A15B] font-mono block mb-1">
                        Primary Deliverable:
                      </span>
                      <p className="text-[#F5F3EE] leading-snug">{model.deliverable}</p>
                    </div>

                    <div className="pt-2">
                      <span className="text-[#A9B0BE]/70 font-mono block mb-1">
                        Commitment Rhythm:
                      </span>
                      <p className="text-[#A9B0BE] leading-snug">{model.commitment}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/06">
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

      {/* Page Closing CTA */}
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
      />
    </>
  );
}
