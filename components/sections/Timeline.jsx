"use client";

import { useEffect, useRef } from "react";
import { initGSAP, gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Timeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const milestones = [
    {
      step: "01",
      title: "Early Entrepreneurial Phase & Digital Inception",
      period: "Foundational Phase", // TODO: CLIENT TO PROVIDE exact year
      description:
        "Entering the emerging digital ecosystem with an intense focus on internet technologies, web development, search algorithms, and commercial digital potential.",
    },
    {
      step: "02",
      title: "Foundation & Scaled Growth of Web Tycoons",
      period: "Agency Inception", // TODO: CLIENT TO PROVIDE exact year
      description:
        "Establishing Web Tycoons as a dedicated web engineering and digital marketing agency, developing structured development sprint workflows and search visibility solutions.",
    },
    {
      step: "03",
      title: "Delivering 3,700+ Digital Web Ecosystems",
      period: "Multi-Sector Delivery", // TODO: CLIENT TO PROVIDE
      description:
        "Expanding client delivery across 15+ industry verticalsâ€”including manufacturing, healthcare, hospitality, education, real estate, and consumer brands.",
    },
    {
      step: "04",
      title: "Expansion into Strategic Business Consulting",
      period: "Advisory Mandates", // TODO: CLIENT TO PROVIDE
      description:
        "Transitioning from pure digital execution into executive advisory: diagnosing business models, optimizing sales funnels, and restructuring team accountability.",
    },
    {
      step: "05",
      title: "Executive Advisory with Karma Ayurveda",
      period: "Healthcare Leadership", // TODO: CLIENT TO PROVIDE
      description:
        "Leading growth strategy, custom CRM architecture, sales counseling SOPs, clinic conversion optimization, and hospital partnership frameworks across a national network.",
    },
    {
      step: "06",
      title: "Hospitality Ecosystem Leadership via HHC",
      period: "Community Building", // TODO: CLIENT TO PROVIDE
      description:
        "Co-directing the Happy Hospitality Club, architecting structured vendor monetization models, and curating premier executive roundtables for hoteliers and restaurateurs.",
    },
    {
      step: "07",
      title: "BNI Chapter Leadership & Referral Excellence",
      period: "Networking Governance", // TODO: CLIENT TO PROVIDE
      description:
        "Serving as Chapter President and long-term business mentor within BNI, cultivating a high-accountability referral culture and driving substantial revenue for member enterprises.",
    },
    {
      step: "08",
      title: "National Speaking, Workshops & MSME Mentoring",
      period: "Current Horizon", // TODO: CLIENT TO PROVIDE
      description:
        "Taking the stage at business forums, association conclaves, and executive offsites to deliver practical masterclasses on digital strategy, ROAS, and system-driven freedom.",
    },
  ];

  useEffect(() => {
    if (prefersReducedMotion) return;

    const { ScrollTrigger } = initGSAP();

    const ctx = gsap.context(() => {
      // Scrub draw for the vertical gold line
      if (lineRef.current && containerRef.current) {
        gsap.fromTo(
          lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 80%",
              scrub: 0.5,
            },
          }
        );
      }

      // Milestone card fade-ins
      gsap.utils.toArray(".timeline-node").forEach((node) => {
        gsap.from(node, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="relative py-12">
      {/* Central Guide Track (Static Dim Line) */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/08 -translate-x-1/2" />

      {/* Scrubbed Animated Gold Fill Line */}
      <div
        ref={lineRef}
        className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#C6A15B] via-[#E2C98F] to-[#C6A15B] -translate-x-1/2 z-10"
        style={{ height: prefersReducedMotion ? "100%" : "0%" }}
      />

      <div className="space-y-12 sm:space-y-16">
        {milestones.map((m, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={m.step}
              className={`timeline-node relative flex flex-col md:flex-row items-start ${
                isEven ? "md:flex-row-reverse" : ""
              } gap-6 md:gap-12`}
            >
              {/* Center Dot Indicator */}
              <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0A0F1A] border-2 border-[#C6A15B] z-20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
              </div>

              {/* Content Card */}
              <div
                className={`ml-10 md:ml-0 md:w-1/2 ${
                  isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                }`}
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1626] border border-white/08 hover:border-[#C6A15B]/40 transition-colors shadow-lg">
                  <div
                    className={`flex items-center gap-3 mb-2 ${
                      isEven ? "md:justify-end" : "justify-start"
                    }`}
                  >
                    <span className="font-mono text-xs font-bold text-[#C6A15B] px-2 py-0.5 rounded bg-[#C6A15B]/10">
                      Step {m.step}
                    </span>
                    <span className="text-xs font-mono text-[#A9B0BE]/70">
                      {m.period}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-[#F5F3EE] mb-2 leading-snug">
                    {m.title}
                  </h3>

                  <p className="text-sm text-[#A9B0BE] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>

              {/* Empty placeholder for opposite side balance on desktop */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

