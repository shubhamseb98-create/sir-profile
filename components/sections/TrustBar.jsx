"use client";

import Counter from "@/components/ui/Counter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Clock, Globe, Building2, Mic } from "lucide-react";

export default function TrustBar() {
  const metrics = [
    {
      num: "01",
      icon: Clock,
      value: 15,
      suffix: "+",
      titleSuffix: " Years",
      tag: "Career Tenure",
      label: "Entrepreneurial, consulting, and executive leadership guiding multi-sector ventures.",
    },
    {
      num: "02",
      icon: Globe,
      value: 3700,
      suffix: "+",
      titleSuffix: " Platforms",
      tag: "Digital Scale",
      label: "Web platforms, e-commerce engines, and digital growth ecosystems delivered.",
    },
    {
      num: "03",
      icon: Building2,
      value: 100,
      suffix: "+",
      titleSuffix: " Brands",
      tag: "Client Trust",
      label: "Promoter-led businesses, healthcare chains, and corporate teams advised.",
    },
    {
      num: "04",
      icon: Mic,
      value: 50,
      suffix: "+",
      titleSuffix: " Keynotes",
      tag: "Industry Forums",
      label: "Business workshops, leadership keynotes, and MSME masterclasses delivered.",
    },
  ];

  return (
    <section
      id="credibility-bar"
      className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 relative font-sans overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading
          eyebrow="PROVEN TRACK RECORD"
          title="Scale Built Across Ventures & Industries"
          description="Measured commercial outcomes, digital delivery volume, and advisory trust forged over 15+ years of real-world execution."
          align="center"
          light={true}
          compact={true}
          className="!mb-10 sm:!mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-fr">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <ScrollReveal
                key={m.num}
                delay={idx * 0.06}
                distance={20}
                className="h-full"
              >
                <article className="group h-full relative rounded-2xl bg-[#FAFAFB] hover:bg-white border border-slate-200/90 hover:border-[#D4AF37]/60 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)]">
                  {/* Top Row: Refined Framed Icon + Pill Number */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#9A6B0C] group-hover:bg-[#0B1528] group-hover:border-[#0B1528] group-hover:text-[#F5E2A3] flex items-center justify-center transition-all duration-300">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono font-bold text-slate-600 group-hover:border-[#D4AF37]/60 group-hover:text-[#9A6B0C] transition-colors">
                        {m.num}
                      </span>
                    </div>

                    {/* Bold Metric Title */}
                    <h3 className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight leading-none mb-2.5">
                      <Counter value={m.value} suffix={m.suffix} duration={1500 + idx * 140} />
                      <span className="text-base font-bold text-slate-700">
                        {m.titleSuffix}
                      </span>
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {m.label}
                    </p>
                  </div>

                  {/* Bottom Footer: Divider + Uppercase Label + Huge Outlined Watermark Number */}
                  <div className="relative mt-7 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9A6B0C] relative z-10">
                      {m.tag}
                    </span>

                    {/* Huge Architectural Outlined Numeral */}
                    <span
                      aria-hidden="true"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "1.5px rgba(15, 23, 42, 0.14)",
                      }}
                      className="pointer-events-none select-none font-black text-[58px] leading-none tracking-tighter -my-2 transition-opacity duration-300 opacity-85 group-hover:opacity-100"
                    >
                      {m.num}
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
