"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import { initGSAP, gsap } from "@/lib/gsap";

const HeroThreeScene = dynamic(() => import("@/components/ui/HeroThreeScene"), {
  ssr: false,
});

const DISPLAY_LINES = [
  ["D", "H", "E", "E", "R", "A", "J"],
  ["A", "G", "G", "A", "R", "W", "A", "L"],
];

export default function Hero() {
  const sectionRef = useRef(null);
  const portraitRef = useRef(null);

  // Staggered bottom-to-top entrance animation (synced with Preloader lift) + scroll parallax
  useEffect(() => {
    const { ScrollTrigger: st } = initGSAP();
    if (!sectionRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let hasPlayedIntro = false;
    let fallbackTimer = null;
    let playEntranceRef = null;

    const ctx = gsap.context(() => {
      const revealTargets = [
        ".hero-intro-letter",
        ".hero-intro-portrait",
        ".hero-intro-left",
        ".hero-intro-right",
        ".hero-intro-bg",
      ];

      if (prefersReducedMotion) {
        gsap.set(revealTargets, { opacity: 1, y: 0, scale: 1 });
      } else {
        const playEntrance = () => {
          if (hasPlayedIntro) return;
          hasPlayedIntro = true;
          if (fallbackTimer) {
            clearTimeout(fallbackTimer);
            fallbackTimer = null;
          }

          const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

          // 1. Three.js backdrop fades in gently
          introTl.fromTo(
            ".hero-intro-bg",
            { opacity: 0 },
            { opacity: 1, duration: 1.2, ease: "power2.out" },
            0
          );

          // 2. First: DHEERAJ AGGARWAL text behind the portrait sweeps up slowly bottom-to-top
          introTl.fromTo(
            ".hero-intro-letter",
            { y: 110, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.25,
              stagger: 0.048,
            },
            0.15
          );

          // 3. Second: Center portrait rises slowly after background text appears
          introTl.fromTo(
            ".hero-intro-portrait",
            { y: 130, opacity: 0, scale: 1.03 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.45,
            },
            0.85
          );

          // 4. Third: Bottom-left pillars & signature enter one by one
          introTl.fromTo(
            ".hero-intro-left",
            { y: 45, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.16,
            },
            1.75
          );

          // 5. Fourth: Bottom-right CTA & credentials enter one by one
          introTl.fromTo(
            ".hero-intro-right",
            { y: 45, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.18,
            },
            2.35
          );
        };

        playEntranceRef = playEntrance;

        if (typeof window !== "undefined" && window.__DA_PRELOADER_EXITED__) {
          playEntrance();
        } else if (typeof window !== "undefined") {
          window.addEventListener("da-preloader-exit", playEntrance, { once: true });
          fallbackTimer = setTimeout(playEntrance, 3000);
        }
      }

      // Scroll-out parallax on outer wrappers (independent of inner intro targets)
      if (st) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.2,
          },
        });

        scrollTl.to(
          ".hero-editorial-name",
          {
            y: -60,
            opacity: 0.35,
            ease: "none",
          },
          0
        );

        scrollTl.to(
          ".hero-editorial-meta",
          {
            y: -25,
            opacity: 0,
            ease: "none",
          },
          0
        );

        if (portraitRef.current) {
          scrollTl.to(
            portraitRef.current,
            {
              y: 30,
              scale: 0.97,
              ease: "none",
            },
            0
          );
        }
      }
    }, sectionRef);

    return () => {
      if (typeof window !== "undefined" && playEntranceRef) {
        window.removeEventListener("da-preloader-exit", playEntranceRef);
      }
      if (fallbackTimer) clearTimeout(fallbackTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#060D1A] font-sans pt-24 sm:pt-28 select-none"
    >
      {/* Semantic Page Heading */}
      <h1 className="sr-only">
        Dheeraj Aggarwal — Business Consultant, Digital Expert &amp; Growth Specialist
      </h1>

      {/* Atmospheric Midnight Navy Depth Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_38%,#0E1E3A_0%,#060D1A_75%)]"
      />

      {/* ── 1. INTERACTIVE THREE.JS 3D WAVE & STUDIO DEPTH ── */}
      <div className="hero-intro-bg absolute inset-0 pointer-events-none z-[1] opacity-0">
        <HeroThreeScene />
      </div>

      {/* Tactile Fine Film Grain Texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.045] mix-blend-screen z-[1]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── 2. ARCHITECTURAL CLEAN METALLIC GOLD DISPLAY NAME BEHIND PORTRAIT ── */}
      <div
        aria-hidden="true"
        className="hero-editorial-name absolute top-[30%] xs:top-[32%] sm:top-auto sm:bottom-[clamp(225px,39vh,365px)] inset-x-0 flex justify-center items-center pointer-events-none select-none z-[2] px-2 sm:px-8"
      >
        <div
          className="relative flex flex-col items-center justify-center font-[family-name:var(--font-hero)] font-extrabold uppercase tracking-[0.04em] sm:tracking-[0.06em] leading-[0.92] sm:leading-[0.94] whitespace-nowrap text-center"
          style={{
            fontSize: "clamp(44px, 13vw, 128px)",
          }}
        >
          {DISPLAY_LINES.map((line, lineIdx) => (
            <div key={lineIdx} className="inline-flex items-baseline justify-center">
              {line.map((letter, idx) => (
                <span
                  key={`${lineIdx}-${letter}-${idx}`}
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #FFF9DE 0%, #FCE79D 24%, #D4AF37 60%, #9C720B 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="hero-intro-letter inline-block pt-[0.04em] pb-[0.12em] -mb-[0.12em] pr-[0.06em] -mr-[0.06em] opacity-0 font-extrabold"
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. CENTER PORTRAIT CUTOUT (MASKED BOTTOM FADE — NO BLACK BOX OVERLAY) ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-end justify-center w-[290px] h-[450px] xs:w-[320px] xs:h-[490px] sm:w-auto sm:h-[clamp(400px,68vh,580px)] sm:aspect-[682/740]">
        <div ref={portraitRef} className="relative w-full h-full origin-bottom">
          <div
            className="hero-intro-portrait relative w-full h-full opacity-0 origin-bottom"
            style={{
              maskImage:
                "linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.78) 6%, #000 14%, #000 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.78) 6%, #000 14%, #000 100%)",
            }}
          >
            <Image
              src="/images/hero/dheeraj-studio-portrait.png"
              alt="Dheeraj Aggarwal - Business Consultant & Growth Specialist"
              fill
              preload
              unoptimized
              className="object-cover object-top select-none pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* ── 4. BOTTOM-LEFT & BOTTOM-RIGHT EDITORIAL COLUMNS ── */}
      <div className="hero-editorial-meta relative z-20 w-full max-w-[1280px] mx-auto px-4 xs:px-6 sm:px-12 md:px-16 lg:px-24 pb-6 sm:pb-16 md:pb-20 pt-4">
        <div className="grid grid-cols-2 md:flex md:flex-row md:items-end justify-between gap-2 sm:gap-8 items-end">
          {/* Bottom Left: 4-Word Pillar Stack + Signature */}
          <div className="flex flex-col items-start text-left">
            <div className="font-sans font-extrabold uppercase tracking-tight leading-[1.08] text-xs xs:text-sm sm:text-xl lg:text-[22px]">
              <span className="hero-intro-left block text-white opacity-0">BRANDS.</span>
              <span className="hero-intro-left block text-white opacity-0">SYSTEMS.</span>
              <span className="hero-intro-left block text-white opacity-0">GROWTH.</span>
              <span className="hero-intro-left block text-gold-metallic opacity-0">IMPACT.</span>
            </div>

            <div className="hero-intro-left mt-1.5 xs:mt-2 sm:mt-3 opacity-0">
              <Image
                src="/cl-logo/dheeraj-gold-logo.png"
                alt="Dheeraj Aggarwal Signature"
                width={150}
                height={51}
                unoptimized
                className="h-5 xs:h-6 sm:h-9 w-auto object-contain drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
              />
            </div>
          </div>

          {/* Bottom Right: Primary CTA + Experience & Title */}
          <div className="flex flex-col items-end text-right">
            <div className="hero-intro-right opacity-0">
              <Button
                href="/contact?type=strategy-call"
                variant="primary"
                size="md"
                icon="right"
                className="!rounded-md px-3 sm:px-5 py-1.5 sm:py-2.5 h-auto text-[10px] xs:text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.12em] sm:tracking-[0.14em]"
              >
                LET&apos;S TALK
              </Button>
            </div>

            <div className="mt-1.5 xs:mt-2 sm:mt-3.5">
              <p className="hero-intro-right text-[10px] xs:text-[11px] sm:text-sm font-semibold text-white/95 leading-snug opacity-0">
                15+ Years of Experience
              </p>
              <p className="hero-intro-right text-[9px] xs:text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-gold-metallic mt-0.5 opacity-0">
                BUSINESS CONSULTANT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
