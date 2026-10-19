import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyWorkWithMe() {
  return (
    <section className="min-h-screen py-6 sm:py-8 flex flex-col justify-center bg-[#FFFFFF] text-[#1E293B] relative overflow-hidden font-sans border-b border-slate-200">
      {/* Subtle balanced neon lime ambient glow aura */}
      <div className="absolute top-1/4 -left-28 sm:-left-40 w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] bg-[#CFFF04]/13 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] bg-[#CFFF04]/13 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative architectural background watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[18rem] text-[#334155]/[0.03] select-none pointer-events-none font-bold font-sans">
        DA
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-3 sm:mb-4 gap-3">
          <SectionHeading
            number="05"
            eyebrow="THE ENGAGEMENT PHILOSOPHY"
            title="Why Work With Me"
            description="Consulting without operational accountability is theoretical luxury. I partner directly with founders to convert strategic intent into commercial and systemized execution."
            light={true}
            className="!mb-0 max-w-2xl"
          />

          <ScrollReveal delay={0.2} distance={20} className="shrink-0 pb-1">
            <Button
              href="/contact?type=consulting"
              variant="light-primary"
              size="sm"
            >
              Discuss Your Growth Objectives
            </Button>
          </ScrollReveal>
        </div>

        {/* 6 Core Engagement Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {siteConfig.whyWorkWithMe.map((item, idx) => (
            <ScrollReveal
              key={item.number}
              delay={idx * 0.08}
              distance={25}
              className="relative p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-black/25 hover:border-black/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              {/* Hover Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl z-0" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-mono text-[11px] font-bold text-[#334155] group-hover:text-[#CFFF04] tracking-widest px-2.5 py-0.5 rounded-full bg-[#334155]/10 group-hover:bg-[#CFFF04]/15 border border-[#334155]/20 group-hover:border-[#CFFF04]/30 transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#CFFF04] transition-colors duration-300" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#1E293B] group-hover:text-white mb-1.5 leading-snug transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#475569] group-hover:text-slate-300 leading-relaxed transition-colors duration-300 line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 group-hover:border-white/10 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#475569]/80 group-hover:text-[#CFFF04] font-semibold transition-colors duration-300">
                  Non-Negotiable Principle
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

