import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Compass, Target, Layers, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const PRINCIPLE_META = [
  {
    icon: Compass,
    tag: "Strategic Clarity",
    focus: "Diagnosis before ad or tech spend",
  },
  {
    icon: Target,
    tag: "Accountability",
    focus: "Weekly KPI rhythm & team ownership",
  },
  {
    icon: Layers,
    tag: "Scalable Systems",
    focus: "Founder-independent repeatable SOPs",
  },
  {
    icon: TrendingUp,
    tag: "Commercial ROI",
    focus: "Evaluated on CAC, margin & LTV",
  },
  {
    icon: ShieldCheck,
    tag: "Hands-On Rigor",
    focus: "Direct principal-level involvement",
  },
  {
    icon: Zap,
    tag: "Execution Speed",
    focus: "Zero jargon, decisive execution",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section
      id="why-work-with-me"
      className="py-[60px] bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden font-sans border-y border-slate-200"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-5">
          <SectionHeading
            eyebrow="THE ENGAGEMENT PHILOSOPHY"
            title="Why Work With Me"
            description="Consulting without operational accountability is theoretical luxury. I partner directly with founders to convert strategic intent into commercial and systemized execution."
            light={true}
            compact={true}
            animate={false}
            className="!mb-0 max-w-2xl"
          />

          <ScrollReveal delay={0.15} distance={16} className="shrink-0 pb-1">
            <Button
              href="/contact?type=strategy-call"
              variant="light-primary"
              size="sm"
            >
              Discuss Your Growth Objectives
            </Button>
          </ScrollReveal>
        </div>

        {/* 6 Core Engagement Principles — Architectural Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-fr">
          {siteConfig.whyWorkWithMe.map((item, idx) => {
            const meta = PRINCIPLE_META[idx % PRINCIPLE_META.length];
            const Icon = meta.icon;
            return (
              <ScrollReveal
                key={item.number}
                delay={idx * 0.05}
                distance={20}
                className="h-full"
              >
                <article className="group relative h-full rounded-2xl bg-white border border-slate-200 hover:border-[#3B82F6]/65 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_10px_rgba(4,4,10,0.03)] hover:shadow-[0_18px_36px_-14px_rgba(37,99,235,0.14)]">
                  {/* Signature Expanding Royal-Blue Top Rule */}
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-[3px] w-12 group-hover:w-full bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#6366F1] transition-all duration-500 ease-out"
                  />

                  <div>
                    {/* Top Meta Bar: Single Clean Editorial Index + Subtle Icon Medallion */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold tracking-wider text-[#1D4ED8]">
                          {item.number}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-3 w-px bg-slate-200"
                        />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                          {meta.tag}
                        </span>
                      </div>

                      <div className="w-9 h-9 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#04040A] group-hover:bg-[#04040A] group-hover:border-[#04040A] group-hover:text-[#93C5FD] flex items-center justify-center shrink-0 transition-colors duration-300">
                        <Icon className="w-4 h-4 stroke-[1.8]" />
                      </div>
                    </div>

                    <h3 className="text-[18px] sm:text-[19px] font-normal text-[#04040A] mb-2.5 leading-snug tracking-[-0.015em]">
                      {item.title}
                    </h3>

                    <p className="text-[13.5px] sm:text-sm text-slate-600 leading-[1.65]">
                      {item.desc}
                    </p>
                  </div>

                  {/* Operational Standard Footer */}
                  <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0 group-hover:bg-[#1D4ED8] transition-colors"
                    />
                    <span className="text-xs font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
                      {meta.focus}
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
