"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap, initGSAP } from "@/lib/gsap";

const milestones = [
  {
    step: "01",
    period: "Foundational Phase",
    title: "Web Technology Pioneering",
    description:
      "Entered the digital industry at its inflection point, designing and building foundational websites for emerging Indian SMEs.",
  },
  {
    step: "02",
    period: "Entrepreneurial Anchor",
    title: "Launched Web Tycoons",
    description:
      "Founded a full-service web engineering and digital strategy firm built around delivery discipline and measurable commercial ROI.",
  },
  {
    step: "03",
    period: "15+ Year Benchmark",
    title: "3,700+ Digital Platforms Delivered",
    description:
      "Built sustained execution teams serving healthcare clinics, hospitality groups, real estate, B2B manufacturers, and retail enterprises.",
  },
  {
    step: "04",
    period: "Strategic Expansion",
    title: "Consulting & Business Systems",
    description:
      "Evolved beyond execution into executive consulting: redesigning funnel velocity, enterprise CRM routing, and branch SOP playbooks.",
  },
  {
    step: "05",
    period: "Healthcare Leadership",
    title: "Karma Ayurveda Advisory Mandate",
    description:
      "Partnered with leadership to modernize patient acquisition, clinical counseling SOPs, pan-India branch operations, and franchise expansion.",
  },
  {
    step: "06",
    period: "Ecosystem Co-Founder",
    title: "Happy Hospitality Club (HHC)",
    description:
      "Co-directed a curated hospitality platform uniting hoteliers, restaurateurs, and vetted Star Vendors around high-trust deal flow.",
  },
  {
    step: "07",
    period: "Network Governance",
    title: "BNI Chapter Leadership",
    description:
      "Served as Chapter President, coaching promoters on accountability, ethical leadership, and high-value referral engines.",
  },
  {
    step: "08",
    period: "Thought Leadership",
    title: "National Keynotes & Mentorship",
    description:
      "Invited across 50+ industry summits and MSME forums to unpack Google search dominance, ROAS optimization, and founder independence.",
  },
];

export default function Timeline({ light = false }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current) return;
    initGSAP();

    const ctx = gsap.context(() => {
      gsap.from(".timeline-node", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 82%",
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <div ref={containerRef} className="w-full relative font-sans">
      {/* Architectural Vertical Timeline Ledger on Desktop / Clean Stacked Timeline on Mobile */}
      <div
        className={`relative border-t border-b divide-y ${
          light
            ? "border-slate-200 divide-slate-200"
            : "border-white/12 divide-white/10"
        }`}
      >
        {milestones.map((m) => (
          <div
            key={m.step}
            className="timeline-node group py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start transition-colors"
          >
            {/* Left Index & Phase Marker (4 cols) */}
            <div className="md:col-span-4 flex items-baseline gap-4">
              <span
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums shrink-0 ${
                  light ? "text-[#9A6B0C]" : "text-[#D4AF37]"
                }`}
              >
                {m.step}
              </span>
              <div className="min-w-0">
                <span
                  className={`text-[11px] uppercase tracking-[0.16em] font-semibold block ${
                    light ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {m.period}
                </span>
              </div>
            </div>

            {/* Right Title & Narrative (8 cols) */}
            <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8">
              <div className="max-w-2xl">
                <h3
                  className={`text-lg sm:text-xl font-bold mb-1.5 transition-colors ${
                    light
                      ? "text-slate-900 group-hover:text-[#9A6B0C]"
                      : "text-white group-hover:text-[#F5E2A3]"
                  }`}
                >
                  {m.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    light ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  {m.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
