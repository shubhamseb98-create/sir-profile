"use client";

import { useEffect, useRef } from "react";
import { initGSAP, gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Timeline({ light = false }) {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const milestones = [
    {
      step: "01",
      title: "Early Entrepreneurial & Digital Inception",
      period: "Foundational Phase",
      description:
        "Entering the emerging internet ecosystem with focused web engineering, search algorithms, and commercial digital solutions.",
    },
    {
      step: "02",
      title: "Foundation & Scale of Web Tycoons",
      period: "Agency Inception",
      description:
        "Establishing Web Tycoons as a full-service agency, deploying structured sprint workflows and ROI-focused digital architectures.",
    },
    {
      step: "03",
      title: "Delivering 3,700+ Digital Ecosystems",
      period: "Multi-Sector Delivery",
      description:
        "Expanding client delivery across 15+ industry verticals—including manufacturing, healthcare, hospitality, and consumer enterprises.",
    },
    {
      step: "04",
      title: "Transition to Business Consulting",
      period: "Advisory Mandates",
      description:
        "Evolving into executive consulting: diagnosing business models, optimizing sales funnels, and restructuring team accountability.",
    },
    {
      step: "05",
      title: "Executive Advisory with Karma Ayurveda",
      period: "Healthcare Leadership",
      description:
        "Directing growth strategy, custom CRM architecture, sales counseling SOPs, and hospital partnership frameworks across India.",
    },
    {
      step: "06",
      title: "Hospitality Leadership via HHC",
      period: "Community Building",
      description:
        "Co-directing Happy Hospitality Club, architecting structured vendor monetization models, and curating executive roundtables.",
    },
    {
      step: "07",
      title: "BNI Chapter Leadership & Governance",
      period: "Networking Governance",
      description:
        "Serving as Chapter President and mentor within BNI, driving high-accountability referral culture and scalable enterprise growth.",
    },
    {
      step: "08",
      title: "National Speaking & MSME Mentoring",
      period: "Current Horizon",
      description:
        "Delivering masterclasses at industry conclaves on digital strategy, ROAS optimization, and system-driven founder freedom.",
    },
  ];

  useEffect(() => {
    if (prefersReducedMotion) return;

    const { ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".timeline-node").forEach((node, i) => {
        gsap.from(node, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: (i % 4) * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="w-full">
      {/* Desktop & Tablet: Spacious 4x2 Milestone Grid with generous breathing room */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {milestones.map((m) => (
          <div
            key={m.step}
            className={`timeline-node relative flex flex-col justify-between p-5 sm:p-6 lg:p-7 rounded-2xl transition-all duration-300 group hover:-translate-y-1.5 ${
              light
                ? "bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-black"
                : "bg-[#0A0D14]/90 backdrop-blur-xl border border-white/10 hover:border-[#CFFF04]/50 shadow-lg hover:shadow-[0_0_25px_rgba(207,255,4,0.14)]"
            }`}
          >
            {/* Top Node & Milestone Badge */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span
                  className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    light
                      ? "text-white bg-black border border-black shadow-sm"
                      : "text-black bg-[#CFFF04] border border-[#CFFF04] font-extrabold"
                  }`}
                >
                  Step {m.step}
                </span>
                <span
                  className={`text-[11px] font-mono ${
                    light ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {m.period}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`font-sans text-sm sm:text-base font-bold mb-2 leading-snug transition-colors line-clamp-2 ${
                  light
                    ? "text-slate-900 group-hover:text-black"
                    : "text-white group-hover:text-[#CFFF04]"
                }`}
              >
                {m.title}
              </h3>

              {/* Description */}
              <p
                className={`text-xs sm:text-[13px] leading-relaxed line-clamp-3 font-normal ${
                  light ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {m.description}
              </p>
            </div>

            {/* Bottom Glow Indicator */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#CFFF04] shadow-[0_0_6px_#CFFF04]" />
              <span
                className={`text-[10px] uppercase tracking-wider font-mono ${
                  light ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Milestone 0{m.step}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
