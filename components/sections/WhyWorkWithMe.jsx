import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Compass, Target, Layers, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const PRINCIPLE_META = [
  { icon: Compass, tag: "Strategic Clarity" },
  { icon: Target, tag: "Accountability" },
  { icon: Layers, tag: "Scalable Systems" },
  { icon: TrendingUp, tag: "Commercial ROI" },
  { icon: ShieldCheck, tag: "Hands-On Rigor" },
  { icon: Zap, tag: "Execution Speed" },
];

export default function WhyWorkWithMe() {
  return (
    <section
      id="why-work-with-me"
      className="py-[60px] bg-[#FFFFFF] text-[#1E293B] relative overflow-hidden font-sans border-b border-slate-200"
    >
      {/* Decorative architectural background watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[18rem] text-[#334155]/[0.03] select-none pointer-events-none font-bold font-sans">
        DA
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-4">
          <SectionHeading
            eyebrow="THE ENGAGEMENT PHILOSOPHY"
            title="Why Work With Me"
            description="Consulting without operational accountability is theoretical luxury. I partner directly with founders to convert strategic intent into commercial and systemized execution."
            light={true}
            compact={true}
            animate={false}
            className="!mb-0 max-w-2xl"
          />

          <ScrollReveal delay={0.2} distance={20} className="shrink-0 pb-1">
            <Button
              href="/contact?type=strategy-call"
              variant="light-primary"
              size="sm"
            >
              Discuss Your Growth Objectives
            </Button>
          </ScrollReveal>
        </div>

        {/* 6 Core Engagement Principles Grid with Giant Watermark Counting */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
          {siteConfig.whyWorkWithMe.map((item, idx) => {
            const meta = PRINCIPLE_META[idx % PRINCIPLE_META.length];
            const Icon = meta.icon;
            return (
              <ScrollReveal
                key={item.number}
                delay={idx * 0.06}
                distance={24}
                className="h-full"
              >
                <article className="group h-full relative rounded-2xl bg-[#FAFAFB] hover:bg-white border border-slate-200/90 hover:border-[#D4AF37]/60 p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)]">
                  <div>
                    {/* Top Row: Refined Framed Icon + Pill Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#9A6B0C] group-hover:bg-[#0B1528] group-hover:border-[#0B1528] group-hover:text-[#F5E2A3] flex items-center justify-center transition-all duration-300">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono font-bold text-slate-600 group-hover:border-[#D4AF37]/60 group-hover:text-[#9A6B0C] transition-colors">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Footer: Divider + Micro Label + Huge Outlined Watermark Counting */}
                  <div className="relative mt-7 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9A6B0C] relative z-10">
                      {meta.tag}
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
                      {item.number}
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
