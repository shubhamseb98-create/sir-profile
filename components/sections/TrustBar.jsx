"use client";

import { useEffect, useRef } from "react";
import { initGSAP } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";

const CIRCLE_RADIUS = 98;
const CIRCLE_CIRCUMFERENCE = Number((2 * Math.PI * CIRCLE_RADIUS).toFixed(2));

const DIAL_TICKS = Array.from({ length: 120 }, (_, i) => {
  const angle = (i * 3 * Math.PI) / 180;
  const isMajor = i % 10 === 0;
  const rInner = isMajor ? 278 : 284;
  const rOuter = 294;
  return {
    x1: Number((300 + rInner * Math.cos(angle)).toFixed(2)),
    y1: Number((300 + rInner * Math.sin(angle)).toFixed(2)),
    x2: Number((300 + rOuter * Math.cos(angle)).toFixed(2)),
    y2: Number((300 + rOuter * Math.sin(angle)).toFixed(2)),
    isMajor,
  };
});

const METRICS = [
  {
    num: "01",
    figure: "15",
    suffix: "+",
    unit: "YEARS",
    caption: "CAREER TENURE",
  },
  {
    num: "02",
    figure: "3,700",
    suffix: "+",
    unit: "PLATFORMS",
    caption: "DIGITAL SCALE",
  },
  {
    num: "03",
    figure: "100",
    suffix: "+",
    unit: "BRANDS",
    caption: "CLIENT TRUST",
  },
  {
    num: "04",
    figure: "50",
    suffix: "+",
    unit: "KEYNOTES",
    caption: "INDUSTRY FORUMS",
  },
];

export default function TrustBar() {
  const sectionRef = useRef(null);
  const dialRef = useRef(null);
  const headingRef = useRef(null);
  const glowRef = useRef(null);
  const nodeRefs = useRef([]);
  const strokeRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const { gsap, ScrollTrigger } = initGSAP();
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nodes = nodeRefs.current.filter(Boolean);
    const strokes = strokeRefs.current.filter(Boolean);
    const contents = contentRefs.current.filter(Boolean);

    if (!nodes.length || !strokes.length) return;

    const mm = gsap.matchMedia();

    const buildTimeline = (spreads, mobileGrid) => {
      if (prefersReducedMotion) {
        gsap.set(headingRef.current, { opacity: 1, y: 0 });
        gsap.set(glowRef.current, { opacity: 1, scale: 1 });
        gsap.set(contents, { opacity: 1, y: 0 });
        strokes.forEach((circle) => {
          gsap.set(circle, { strokeDashoffset: 0, opacity: 1 });
        });
        nodes.forEach((node, idx) => {
          if (mobileGrid) {
            gsap.set(node, {
              x: mobileGrid[idx].x,
              y: mobileGrid[idx].y,
              opacity: 1,
              scale: 1,
            });
          } else {
            gsap.set(node, { x: spreads[idx], y: 0, opacity: 1, scale: 1 });
          }
        });
        return;
      }

      // Initial state: single centered ring ready to draw clockwise
      gsap.set(headingRef.current, { opacity: 0.18, y: 14 });
      gsap.set(glowRef.current, { opacity: 0, scale: 0.88 });
      gsap.set(contents, { opacity: 0, y: 10 });
      nodes.forEach((node, idx) => {
        gsap.set(node, {
          x: 0,
          y: 0,
          opacity: idx === 0 ? 1 : 0,
          scale: 1,
        });
      });
      strokes.forEach((circle, idx) => {
        gsap.set(circle, {
          strokeDasharray: CIRCLE_CIRCUMFERENCE,
          strokeDashoffset: idx === 0 ? CIRCLE_CIRCUMFERENCE * 0.86 : 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.85,
          invalidateOnRefresh: true,
        },
      });

      // Stage 1: Single circle draws itself progressively clockwise + subtle dial turn
      tl.to(
        strokes[0],
        {
          strokeDashoffset: 0,
          ease: "none",
          duration: 0.34,
        },
        0
      );

      if (dialRef.current) {
        tl.to(
          dialRef.current,
          {
            rotation: 24,
            ease: "none",
            duration: 1,
          },
          0
        );
      }

      // Stage 2: Heading sharpens into view & single circle splits into 4 concentric rings
      tl.to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.28,
        },
        0.28
      );

      const initialSplitX = [-34, -11, 11, 34];
      nodes.forEach((node, idx) => {
        tl.to(
          node,
          {
            x: initialSplitX[idx],
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 0.22,
          },
          0.34
        );
      });

      // Stage 3: 4 circles fan into connected horizontal Venn arrangement (or 2x2 on mobile)
      nodes.forEach((node, idx) => {
        tl.to(
          node,
          {
            x: mobileGrid ? mobileGrid[idx].x : spreads[idx],
            y: mobileGrid ? mobileGrid[idx].y : 0,
            ease: "power2.inOut",
            duration: 0.24,
          },
          0.56
        );
      });

      // Stage 4: Bottom ambient light bloom + metrics reveal cleanly inside each circle
      if (glowRef.current) {
        tl.to(
          glowRef.current,
          {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            duration: 0.2,
          },
          0.74
        );
      }

      tl.to(
        contents,
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          stagger: 0.025,
          duration: 0.18,
        },
        0.78
      );

      // Gentle plateau at the end so metrics hold crisply before section unpins
      tl.to({}, { duration: 0.06 }, 0.94);
    };

    const ctx = gsap.context(() => {
      mm.add("(min-width: 1024px)", () => {
        buildTimeline([-252, -84, 84, 252], null);
      });

      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        buildTimeline([-201, -67, 67, 201], null);
      });

      mm.add("(max-width: 767px)", () => {
        buildTimeline(null, [
          { x: -66, y: -66 },
          { x: 66, y: -66 },
          { x: -66, y: 66 },
          { x: 66, y: 66 },
        ]);
      });
    }, section);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 250);

    return () => {
      clearTimeout(refreshTimer);
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="credibility-bar"
      ref={sectionRef}
      className="relative min-h-[250vh] bg-[#FFFFFF] text-[#0F172A] border-b border-slate-200 font-sans overflow-x-clip"
    >
      <div className="sticky top-0 h-[100svh] min-h-[580px] flex flex-col items-center justify-center overflow-hidden pt-[74px] pb-8 px-4 sm:px-6 bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#EFF6FF]">
        {/* Architectural hairline grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.42]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(37, 99, 235, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.045) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Subtle circular outer precision dial ring */}
        <svg
          ref={dialRef}
          aria-hidden="true"
          viewBox="0 0 600 600"
          className="pointer-events-none absolute left-1/2 top-1/2 -ml-[270px] -mt-[270px] sm:-ml-[350px] sm:-mt-[350px] lg:-ml-[410px] lg:-mt-[410px] w-[540px] sm:w-[700px] lg:w-[820px] h-[540px] sm:h-[700px] lg:h-[820px] opacity-65 select-none"
        >
          <circle
            cx="300"
            cy="300"
            r="278"
            fill="none"
            stroke="#94A3B8"
            strokeOpacity="0.18"
            strokeWidth="0.8"
          />
          <circle
            cx="300"
            cy="300"
            r="294"
            fill="none"
            stroke="#2563EB"
            strokeOpacity="0.14"
            strokeWidth="0.7"
          />
          {DIAL_TICKS.map((t, i) => (
            <line
              key={i}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke={t.isMajor ? "#2563EB" : "#64748B"}
              strokeOpacity={t.isMajor ? 0.34 : 0.22}
              strokeWidth={t.isMajor ? 1.15 : 0.75}
            />
          ))}
        </svg>

        {/* Bottom sapphire ambient light glow (Stage 4 polish) */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[380px] sm:w-[540px] lg:w-[680px] h-[220px] sm:h-[260px] rounded-full blur-3xl opacity-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.22) 0%, rgba(147, 197, 253, 0.14) 45%, rgba(255, 255, 255, 0) 75%)",
          }}
        />

        {/* Foreground container */}
        <div className="relative z-10 w-full max-w-[1160px] mx-auto flex flex-col items-center">
          <div ref={headingRef} className="w-full max-w-[680px] mx-auto">
            <SectionHeading
              eyebrow="PROVEN TRACK RECORD"
              title="Scale Built Across Ventures & Industries"
              align="center"
              light={true}
              compact={true}
              animate={false}
              className="!mb-6 sm:!mb-10"
            />
          </div>

          {/* Morphing Circle Stage */}
          <div className="relative w-full h-[300px] sm:h-[310px] md:h-[230px] lg:h-[250px] flex items-center justify-center">
            {METRICS.map((item, idx) => (
              <div
                key={item.num}
                ref={(el) => {
                  nodeRefs.current[idx] = el;
                }}
                className={`absolute left-1/2 top-1/2 -ml-[78px] -mt-[78px] md:-ml-[87px] md:-mt-[87px] lg:-ml-[108px] lg:-mt-[108px] w-[156px] h-[156px] md:w-[174px] md:h-[174px] lg:w-[216px] lg:h-[216px] flex items-center justify-center rounded-full ${
                  idx === 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* SVG Circle Stroke */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none overflow-visible"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r={CIRCLE_RADIUS}
                    fill="rgba(255, 255, 255, 0.28)"
                    stroke="none"
                  />
                  <circle
                    ref={(el) => {
                      strokeRefs.current[idx] = el;
                    }}
                    cx="100"
                    cy="100"
                    r={CIRCLE_RADIUS}
                    fill="none"
                    stroke="#3B82F6"
                    strokeOpacity="0.38"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeDasharray={CIRCLE_CIRCUMFERENCE}
                    strokeDashoffset={
                      idx === 0 ? Number((CIRCLE_CIRCUMFERENCE * 0.86).toFixed(2)) : 0
                    }
                  />
                </svg>

                {/* Centered Metric Content */}
                <div
                  ref={(el) => {
                    contentRefs.current[idx] = el;
                  }}
                  className="relative z-10 flex flex-col items-center justify-center text-center px-3 select-none opacity-0"
                >
                  <div className="text-[28px] md:text-[34px] lg:text-[42px] font-normal tracking-tight leading-none text-[#04040A] tabular-nums">
                    {item.figure}
                    <span className="text-[#2563EB]">{item.suffix}</span>
                  </div>
                  <div className="mt-2 md:mt-2.5 flex flex-col items-center gap-0.5 text-[9.5px] md:text-[10.5px] font-mono uppercase tracking-[0.14em] leading-tight text-slate-500">
                    <span className="text-slate-700 font-medium">{item.unit}</span>
                    <span>{item.caption}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
