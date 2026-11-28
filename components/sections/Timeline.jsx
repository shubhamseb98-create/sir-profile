"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { gsap, initGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const milestones = [
  {
    step: "01",
    year: "2008",
    period: "Foundational Phase",
    title: "Web Technology Pioneering",
    metric: "First Enterprise Web Builds",
    image: "/images/cards/digital-growth-real.jpg",
    description:
      "Entered the digital industry at its inflection point, designing and building foundational websites for emerging Indian SMEs.",
  },
  {
    step: "02",
    year: "Foundation",
    period: "Entrepreneurial Anchor",
    title: "Launched Web Tycoons",
    metric: "Full-Stack Digital Agency",
    image: "/images/transformations/webtycoons-studio.jpg",
    description:
      "Founded a full-service web engineering and digital strategy firm built around delivery discipline and measurable commercial ROI.",
  },
  {
    step: "03",
    year: "15+ Years",
    period: "15+ Year Benchmark",
    title: "3,700+ Digital Platforms Delivered",
    metric: "15+ Sector Verticals",
    image: "/images/hero/hero-corporate-boardroom-clean.jpg",
    description:
      "Built sustained execution teams serving healthcare clinics, hospitality groups, real estate, B2B manufacturers, and retail enterprises.",
  },
  {
    step: "04",
    year: "Advisory",
    period: "Strategic Expansion",
    title: "Consulting & Business Systems",
    metric: "CRM & SOP Architecture",
    image: "/images/inner/about-sop-systems.jpg",
    description:
      "Evolved beyond execution into executive consulting: redesigning funnel velocity, enterprise CRM routing, and branch SOP playbooks.",
  },
  {
    step: "05",
    year: "Healthcare",
    period: "Healthcare Leadership",
    title: "Karma Ayurveda Advisory Mandate",
    metric: "Pan-India Clinic Expansion",
    image: "/images/transformations/karma-clinic-ops.jpg",
    description:
      "Partnered with leadership to modernize patient acquisition, clinical counseling SOPs, pan-India branch operations, and franchise expansion.",
  },
  {
    step: "06",
    year: "Co-Director",
    period: "Ecosystem Co-Founder",
    title: "Happy Hospitality Club (HHC)",
    metric: "Multi-Chapter Network",
    image: "/images/inner/hhc-gala-networking.jpg",
    description:
      "Co-directed a curated hospitality platform uniting hoteliers, restaurateurs, and vetted Star Vendors around high-trust deal flow.",
  },
  {
    step: "07",
    year: "Leadership",
    period: "Network Governance",
    title: "BNI Chapter Leadership",
    metric: "Chapter President",
    image: "/images/roles/bni-showcase.jpg",
    description:
      "Served as Chapter President, coaching promoters on accountability, ethical leadership, and high-value referral engines.",
  },
  {
    step: "08",
    year: "Keynotes",
    period: "Thought Leadership",
    title: "National Keynotes & Mentorship",
    metric: "50+ Summits & Conclaves",
    image: "/images/inner/speaking-panel-moderation.jpg",
    description:
      "Invited across 50+ industry summits and MSME forums to unpack Google search dominance, ROAS optimization, and founder independence.",
  },
];

export default function Timeline({ light = false }) {
  const containerRef = useRef(null);
  const trackWrapRef = useRef(null);
  const spineFillRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current || !trackWrapRef.current) return;
    const { gsap: g, ScrollTrigger } = initGSAP();

    const ctx = g.context(() => {
      // 1. Scrubbed vertical progress line tied directly to scroll through the 8 milestones
      if (spineFillRef.current) {
        g.fromTo(
          spineFillRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: trackWrapRef.current,
              start: "top 65%",
              end: "bottom 65%",
              scrub: 0.35,
            },
          }
        );
      }

      // 2. Per-milestone entrance & active index tracking
      cardRefs.current.forEach((el, idx) => {
        if (!el) return;

        g.fromTo(
          el,
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true,
            },
          }
        );

        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => setActiveIdx(idx),
          onEnterBack: () => setActiveIdx(idx),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  const jumpToMilestone = (idx) => {
    setActiveIdx(idx);
    const el = cardRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const activeMilestone = milestones[activeIdx] || milestones[0];
  const progressPct = ((activeIdx + 1) / milestones.length) * 100;

  return (
    <div ref={containerRef} className="w-full relative font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN: Sticky Interactive Preview Stage (Desktop) */}
        <aside className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
          <div
            className={cn(
              "rounded-2xl border overflow-hidden transition-colors duration-300",
              light
                ? "bg-white border-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
                : "bg-[#090F1E] border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
            )}
          >
            {/* Crossfading Photograph Window */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#04040A]">
              {milestones.map((m, idx) => (
                <Image
                  key={m.step}
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority={idx === 0}
                  className={cn(
                    "object-cover transition-all duration-500 ease-out",
                    activeIdx === idx
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[1.03] pointer-events-none"
                  )}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-[#04040A]/90 via-[#04040A]/20 to-transparent pointer-events-none" />

              {/* Top Step Pill & Period */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                <span className="px-3 py-1 rounded-full bg-[#04040A]/85 border border-[#60A5FA]/45 text-[11px] font-mono font-bold text-[#DBEAFE]">
                  STEP {activeMilestone.step} / 0{milestones.length}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/55 border border-white/15 text-[10px] uppercase tracking-[0.14em] font-semibold text-white">
                  {activeMilestone.metric}
                </span>
              </div>

              {/* Bottom Photo Caption */}
              <div className="absolute bottom-4 left-5 right-5 z-10">
                <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#60A5FA] block mb-1">
                  {activeMilestone.period}
                </span>
                <h3 className="text-xl font-normal text-white leading-snug">
                  {activeMilestone.title}
                </h3>
              </div>
            </div>

            {/* Stage Narrative + Quick-Step Scrub Nav */}
            <div className="p-6">
              <p
                className={cn(
                  "text-sm leading-relaxed mb-5 min-h-[4.25rem]",
                  light ? "text-slate-600" : "text-slate-300"
                )}
              >
                {activeMilestone.description}
              </p>

              {/* Horizontal Chapter Bar */}
              <div className="mb-4">
                <div
                  className={cn(
                    "h-1 w-full rounded-full overflow-hidden",
                    light ? "bg-slate-200" : "bg-white/10"
                  )}
                >
                  <div
                    className={cn(
                      "h-full transition-all duration-300 ease-out",
                      light
                        ? "bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#60A5FA]"
                        : "bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#818CF8]"
                    )}
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {/* Quick-Jump Milestone Selector Pills */}
              <div className="flex items-center justify-between gap-1.5">
                {milestones.map((m, idx) => {
                  const isCurrent = activeIdx === idx;
                  return (
                    <button
                      key={m.step}
                      type="button"
                      onClick={() => jumpToMilestone(idx)}
                      aria-label={`Jump to milestone ${m.step}: ${m.title}`}
                      className={cn(
                        "flex-1 py-1.5 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer border",
                        isCurrent
                          ? light
                            ? "bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white border-[#2563EB] shadow-sm"
                            : "bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white border-[#93C5FD]/50 shadow-sm"
                          : light
                            ? "bg-[#F8FAFC] text-slate-600 border-slate-200 hover:border-[#3B82F6]/60 hover:text-[#1D4ED8]"
                            : "bg-white/[0.04] text-slate-400 border-white/10 hover:border-[#60A5FA]/50 hover:text-white"
                      )}
                    >
                      {m.step}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: GSAP Scrubbed Architectural Vertical Spine + Milestone Cards */}
        <div ref={trackWrapRef} className="lg:col-span-7 relative pl-12 sm:pl-14">
          {/* Continuous Vertical Spine Track */}
          <div
            aria-hidden="true"
            className={cn(
              "absolute left-[18px] sm:left-[22px] top-6 bottom-6 w-[2px] rounded-full overflow-hidden",
              light ? "bg-slate-200" : "bg-white/10"
            )}
          >
            {/* GSAP ScrollTrigger Scrubbed Spine Line */}
            <div
              ref={spineFillRef}
              className={cn(
                "w-full h-full origin-top will-change-transform",
                light
                  ? "bg-gradient-to-b from-[#1D4ED8] via-[#2563EB] to-[#60A5FA]"
                  : "bg-gradient-to-b from-[#2563EB] via-[#60A5FA] to-[#93C5FD]"
              )}
              style={shouldReduceMotion ? { transform: "scaleY(1)" } : undefined}
            />
          </div>

          <div className="space-y-5">
            {milestones.map((m, idx) => {
              const isActive = activeIdx === idx;
              const isPassed = idx <= activeIdx;

              return (
                <article
                  key={m.step}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  onClick={() => setActiveIdx(idx)}
                  className={cn(
                    "relative group rounded-2xl border p-5 sm:p-6 transition-all duration-300 cursor-pointer overflow-hidden",
                    isActive
                      ? light
                        ? "bg-white border-[#3B82F6] shadow-[0_12px_32px_rgba(37,99,235,0.12)]"
                        : "bg-[#0D1730] border-[#60A5FA]/75 shadow-[0_14px_34px_rgba(0,0,0,0.45),0_0_24px_rgba(59,130,246,0.2)]"
                      : light
                        ? "bg-[#F8FAFC] border-slate-200 hover:border-[#3B82F6]/60"
                        : "bg-[#090F1E]/85 border-white/10 hover:border-white/25"
                  )}
                >
                  {/* Spine Node Circle Indicator */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -left-12 sm:-left-14 top-6 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-xs font-mono font-bold border-2 transition-all duration-300",
                      isActive
                        ? light
                          ? "bg-[#2563EB] border-[#BFDBFE] text-white scale-110 shadow-[0_0_20px_rgba(37,99,235,0.38)]"
                          : "bg-gradient-to-br from-[#3B82F6] to-[#6366F1] border-[#DBEAFE] text-white scale-110 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        : isPassed
                          ? light
                            ? "bg-white border-[#2563EB] text-[#1D4ED8]"
                            : "bg-[#090F1E] border-[#60A5FA]/70 text-[#DBEAFE]"
                          : light
                            ? "bg-white border-slate-300 text-slate-500"
                            : "bg-[#04040A] border-white/20 text-slate-400"
                    )}
                  >
                    {m.step}
                  </span>

                  {/* Mobile / Tablet Image Strip (hidden on lg where sticky stage handles preview) */}
                  <div className="lg:hidden relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 border border-white/10 bg-[#04040A]">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover"
                    />
                  </div>

                  {/* Card Header Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={cn(
                        "text-[11px] uppercase tracking-[0.16em] font-bold",
                        light ? "text-[#1D4ED8]" : "text-[#60A5FA]"
                      )}
                    >
                      {m.period}
                    </span>

                    <span
                      className={cn(
                        "text-[11px] font-medium px-2.5 py-0.5 rounded-full border",
                        isActive
                          ? light
                            ? "border-[#BFDBFE] bg-[#EFF6FF] text-[#1D4ED8]"
                            : "border-[#60A5FA]/45 bg-[#3B82F6]/15 text-[#DBEAFE]"
                          : light
                            ? "border-slate-200 bg-white text-slate-600"
                            : "border-white/10 bg-white/[0.04] text-slate-400"
                      )}
                    >
                      {m.metric}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className={cn(
                        "text-lg sm:text-xl font-normal leading-snug mb-1.5 transition-colors",
                        light
                          ? isActive
                            ? "text-[#04040A]"
                            : "text-slate-900 group-hover:text-[#1D4ED8]"
                          : isActive
                            ? "text-[#93C5FD]"
                            : "text-white group-hover:text-[#93C5FD]"
                      )}
                    >
                      {m.title}
                    </h3>

                    <ArrowUpRight
                      className={cn(
                        "hidden lg:block w-4 h-4 shrink-0 mt-1 transition-all duration-300",
                        isActive
                          ? light
                            ? "opacity-100 text-[#2563EB] translate-x-0"
                            : "opacity-100 text-[#60A5FA] translate-x-0"
                          : "opacity-0 group-hover:opacity-70 text-slate-400 -translate-x-1"
                      )}
                    />
                  </div>

                  <p
                    className={cn(
                      "text-xs sm:text-sm leading-relaxed",
                      light ? "text-slate-600" : "text-slate-300"
                    )}
                  >
                    {m.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
