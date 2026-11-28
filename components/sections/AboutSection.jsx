"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap, initGSAP } from "@/lib/gsap";
import Button from "@/components/ui/Button";

/**
 * Manifesto lines revealed word-by-word on scroll in the homepage About section.
 * Keeps every claim strictly verified from executive profile data.
 */
const MANIFESTO_BLOCKS = [
  {
    id: "profile",
    sizeClass:
      "text-lg sm:text-xl md:text-[22px] lg:text-[24px] leading-[1.42] tracking-[-0.012em]",
    text: "Dheeraj Aggarwal is a business consultant, growth specialist, and digital strategist with over 15 years of ground-level entrepreneurial experience. Having delivered 3,700+ digital platforms, advised promoter-driven enterprises, and built institutional industry communities, he bridges high-level strategic vision with disciplined operational execution.",
  },
  {
    id: "practice",
    sizeClass:
      "text-base sm:text-lg md:text-[20px] lg:text-[22px] leading-[1.45] tracking-[-0.01em]",
    text: "Whether advising nationwide healthcare chains like Karma Ayurveda, scaling digital agency ecosystems at Web Tycoons, or uniting hospitality leaders through Happy Hospitality Club, his approach centers on unit economics, automated workflows, and building enterprises that operate seamlessly without founder bottlenecks.",
  },
];

const DIAL_TICKS = Array.from({ length: 120 }, (_, idx) => {
  const angle = idx * 3;
  const rad = (angle * Math.PI) / 180;
  const isMajor = angle % 30 === 0;
  const inner = isMajor ? 256 : 262;
  const outer = 268;
  return {
    angle,
    isMajor,
    x1: (300 + inner * Math.cos(rad)).toFixed(1),
    y1: (300 + inner * Math.sin(rad)).toFixed(1),
    x2: (300 + outer * Math.cos(rad)).toFixed(1),
    y2: (300 + outer * Math.sin(rad)).toFixed(1),
  };
});

export default function AboutSection() {
  const sectionRef = useRef(null);
  const dialRef = useRef(null);

  const blocksWithTokens = useMemo(
    () =>
      MANIFESTO_BLOCKS.map((block) => ({
        ...block,
        words: block.text.trim().split(/\s+/),
      })),
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const wordEls = section.querySelectorAll("[data-manifesto-word]");
    if (!wordEls.length) return;

    if (prefersReducedMotion) {
      wordEls.forEach((el) => {
        el.style.opacity = "1";
        el.style.filter = "none";
      });
      return;
    }

    initGSAP();

    const ctx = gsap.context(() => {
      // Softly dim upcoming words until scroll illuminates them word-by-word
      gsap.set(wordEls, {
        opacity: 0.16,
        filter: "blur(0.5px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 95%",
          scrub: 0.35,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        wordEls,
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
          stagger: 0.04,
          duration: 0.18,
        },
        0
      );

      if (dialRef.current) {
        tl.fromTo(
          dialRef.current,
          { rotate: -10 },
          { rotate: 22, ease: "none", duration: tl.duration() },
          0
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-us"
      ref={sectionRef}
      className="relative min-h-[165vh] sm:min-h-[180vh] bg-[#FFFFFF] text-[#0F172A] font-sans border-b border-slate-200 overflow-x-clip"
    >
      {/* Top Subtle Light Hairline Beam */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[1px] z-20 opacity-85 bg-[linear-gradient(90deg,transparent_0%,#93C5FD_25%,#3B82F6_50%,#93C5FD_75%,transparent_100%)]"
      />

      {/* Sticky Centered Manifesto Canvas */}
      <div className="sticky top-0 h-[100svh] min-h-[560px] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 pt-14 pb-8 bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9]">
        {/* Layered Architectural Studio Backdrop (Grid, Sweeping Curves, Glows, Dial Ring) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none z-0"
        >
          {/* 1. Architectural Blueprint Square Grid Across Full Width */}
          <div
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(37, 99, 235, 0.065) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(37, 99, 235, 0.065) 1px, transparent 1px)
              `,
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse 95% 88% at 50% 50%, #000 55%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 95% 88% at 50% 50%, #000 55%, transparent 100%)",
            }}
          />

          {/* 2. Subtle Angled Diagonal Pinstripes */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 42px, rgba(59, 130, 246, 0.045) 42px, rgba(59, 130, 246, 0.045) 43px)",
            }}
          />

          {/* 3. Hero-Matched Frosted Diagonal Glass Wing Accent Panels (Left & Right) */}
          <div
            className="hidden md:block absolute -top-[10%] -left-[6%] w-[240px] lg:w-[300px] h-[125%]"
            style={{
              transform: "skewX(-24deg)",
              background:
                "linear-gradient(180deg, rgba(219, 234, 254, 0.45) 0%, rgba(239, 246, 255, 0.18) 65%, transparent 100%)",
              borderRight: "1px solid rgba(59, 130, 246, 0.18)",
            }}
          />
          <div
            className="hidden md:block absolute -top-[10%] -right-[6%] w-[240px] lg:w-[300px] h-[125%]"
            style={{
              transform: "skewX(-24deg)",
              background:
                "linear-gradient(180deg, rgba(224, 231, 255, 0.42) 0%, rgba(239, 246, 255, 0.16) 65%, transparent 100%)",
              borderLeft: "1px solid rgba(99, 102, 241, 0.18)",
            }}
          />

          {/* 4. Soft Radial Ambient Sapphire & Indigo Corner Blooms */}
          <div
            className="absolute -bottom-[16%] -left-[10%] w-[500px] h-[500px] sm:w-[740px] sm:h-[740px] rounded-full transform-gpu"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(191,219,254,0.22) 36%, rgba(255,255,255,0) 70%)",
            }}
          />
          <div
            className="absolute -top-[16%] -right-[10%] w-[500px] h-[500px] sm:w-[740px] sm:h-[740px] rounded-full transform-gpu"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(219,234,254,0.20) 36%, rgba(255,255,255,0) 72%)",
            }}
          />

          {/* 5. Sweeping Rounded Light Sapphire Vector Ribbons Framing Sides */}
          <svg
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full opacity-75"
            fill="none"
          >
            <path
              d="M -60 660 C 180 510, 320 260, 490 40"
              stroke="rgba(59, 130, 246, 0.16)"
              strokeWidth="1.4"
            />
            <path
              d="M -60 720 C 210 555, 365 300, 540 40"
              stroke="rgba(99, 102, 241, 0.11)"
              strokeWidth="1"
            />
            <path
              d="M 1500 140 C 1260 290, 1120 540, 950 760"
              stroke="rgba(59, 130, 246, 0.16)"
              strokeWidth="1.4"
            />
            <path
              d="M 1500 80 C 1230 245, 1075 500, 900 760"
              stroke="rgba(99, 102, 241, 0.11)"
              strokeWidth="1"
            />
          </svg>

          {/* 6. Soft Center Readability Veil Keeping Copy Razor Sharp */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 56% 52% at 50% 50%, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.45) 68%, transparent 100%)",
            }}
          />

          {/* 7. Centered Precision Architectural Circular Tick-Mark Dial Ring */}
          <svg
            ref={dialRef}
            viewBox="0 0 600 600"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(92vw,680px)] h-[min(92vw,680px)] will-change-transform opacity-95"
            fill="none"
          >
            <circle
              cx="300"
              cy="300"
              r="286"
              stroke="rgba(59, 130, 246, 0.12)"
              strokeWidth="0.8"
              strokeDasharray="6 10"
            />
            <circle
              cx="300"
              cy="300"
              r="268"
              stroke="rgba(37, 99, 235, 0.22)"
              strokeWidth="1.1"
            />
            <circle
              cx="300"
              cy="300"
              r="242"
              stroke="rgba(59, 130, 246, 0.14)"
              strokeWidth="0.9"
              strokeDasharray="2 8"
            />
            {DIAL_TICKS.map((tick) => (
              <line
                key={tick.angle}
                x1={tick.x1}
                y1={tick.y1}
                x2={tick.x2}
                y2={tick.y2}
                stroke={
                  tick.isMajor
                    ? "rgba(37, 99, 235, 0.42)"
                    : "rgba(59, 130, 246, 0.22)"
                }
                strokeWidth={tick.isMajor ? "1.35" : "0.8"}
              />
            ))}
          </svg>
        </div>

        {/* Centered Editorial Manifesto Stack (Sentence Case) */}
        <div className="relative z-10 max-w-[820px] w-full mx-auto text-center flex flex-col items-center">
          {/* Minimalist Light Eyebrow Matching Hero Hairline Badge Design */}
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span
              aria-hidden="true"
              className="hidden sm:inline-block h-px w-10 md:w-14 bg-gradient-to-l from-[#3B82F6]/65 to-transparent"
            />
            <span className="text-[10px] sm:text-[11px] uppercase font-medium tracking-[0.22em] text-[#1D4ED8]">
              ABOUT DHEERAJ AGGARWAL
            </span>
            <span
              aria-hidden="true"
              className="hidden sm:inline-block h-px w-10 md:w-14 bg-gradient-to-r from-[#3B82F6]/65 to-transparent"
            />
          </div>

          <h2 className="sr-only">
            Dheeraj Aggarwal — Business Consultant, Strategic Growth &amp; Enterprise Systems
          </h2>

          <div className="space-y-4 sm:space-y-5">
            {blocksWithTokens.map((block) => (
              <p
                key={block.id}
                className={`font-normal text-[#04040A] ${block.sizeClass}`}
              >
                {block.words.map((word, idx) => (
                  <span key={`${block.id}-${idx}`}>
                    <span
                      data-manifesto-word
                      className="inline-block will-change-[opacity,filter] text-[#04040A]"
                    >
                      {word}
                    </span>
                    {idx < block.words.length - 1 ? " " : ""}
                  </span>
                ))}
              </p>
            ))}
          </div>

          {/* Executive Profile Read More Action */}
          <div className="mt-6 sm:mt-7 flex items-center justify-center">
            <Button
              href="/about"
              variant="light-primary"
              size="sm"
              icon="right"
              className="px-7 py-2.5 text-xs sm:text-[13px] !font-medium"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
