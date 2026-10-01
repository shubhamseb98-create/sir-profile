import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

export default function WhyWorkWithMe() {
  return (
    <section className="min-h-screen py-6 sm:py-8 flex flex-col justify-center bg-[#EFF6FF] text-[#0A3A56] relative overflow-hidden font-sans border-b border-slate-200">
      {/* Decorative architectural background watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[18rem] text-[#005C96]/[0.03] select-none pointer-events-none font-bold font-sans">
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

          <div className="shrink-0 pb-1">
            <Button
              href="/contact?type=consulting"
              variant="primary"
              size="sm"
            >
              Discuss Your Growth Objectives
            </Button>
          </div>
        </div>

        {/* 6 Core Engagement Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {siteConfig.whyWorkWithMe.map((item) => (
            <div
              key={item.number}
              className="relative p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-blue-950/20 hover:border-[#C2E8FF]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              {/* Hover Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#042A41] via-[#0F2459] to-[#004671] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl z-0" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-mono text-[11px] font-bold text-[#005C96] group-hover:text-[#C2E8FF] tracking-widest px-2.5 py-0.5 rounded-full bg-[#005C96]/10 group-hover:bg-[#C2E8FF]/20 border border-[#005C96]/20 group-hover:border-[#C2E8FF]/40 transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#C2E8FF] transition-colors duration-300" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0A3A56] group-hover:text-white mb-1.5 leading-snug transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#4E7A96] group-hover:text-[#C2E8FF] leading-relaxed transition-colors duration-300 line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 group-hover:border-white/10 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#4E7A96]/80 group-hover:text-[#C2E8FF] font-semibold transition-colors duration-300">
                  Non-Negotiable Principle
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

