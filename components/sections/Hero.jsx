"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  const handleScrollDown = () => {
    const target = document.getElementById("about-us");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] lg:h-[100svh] lg:min-h-[600px] lg:max-h-[900px] flex flex-col justify-center overflow-hidden bg-[#04060D] text-white font-sans pt-20 sm:pt-24 pb-10 lg:pb-0 select-none"
    >
      {/* ── 1. DARK OBSIDIAN STAGE + CROSSED BLUE GLASS BARS + BOTTOM WAVE GLOW ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#04040A]"
      >
        {/* Bottom-Only Mask on Generated Rounded Blue Waves Backdrop (Leaves Upper-Right Clean Pitch-Black for Crisp Bars) */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(ellipse 88% 58% at 64% 96%, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.35) 56%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 88% 58% at 64% 96%, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.35) 56%, transparent 78%)",
          }}
        >
          <Image
            src="/images/hero/hero-blue-curves-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom opacity-85"
          />
        </div>

        {/* Left-Side Vignette for Ultra-Sharp Typography Contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #04040A 0%, rgba(4,4,10,0.88) 38%, transparent 66%)",
          }}
        />

        {/* Bar 1 (Upper Diagonal Strip Behind Head Extending Cleanly to Top Edge) */}
        <div
          className="hidden sm:block absolute -top-[4%] right-[22%] lg:right-[23%] w-[105px] md:w-[130px] lg:w-[155px] h-[110%]"
          style={{
            transform: "skewX(-30deg)",
            transformOrigin: "top right",
            background:
              "linear-gradient(180deg, rgba(30, 58, 138, 0.28) 0%, rgba(79, 70, 229, 0.26) 42%, rgba(59, 130, 246, 0.14) 72%, rgba(4, 4, 10, 0) 100%)",
            borderLeft: "1px solid rgba(96, 165, 250, 0.28)",
          }}
        />

        {/* Bar 2 (Exact Flat-Top Tilted Box Right Below Top-Right CTA Button Behind Shoulder) */}
        <div
          className="hidden sm:block absolute top-[18%] right-[4%] lg:right-[5.5%] xl:right-[6.5%] w-[135px] md:w-[165px] lg:w-[195px] h-[88%]"
          style={{
            transform: "skewX(-28deg)",
            transformOrigin: "top right",
            background:
              "linear-gradient(175deg, rgba(99, 102, 241, 0.56) 0%, rgba(59, 130, 246, 0.42) 32%, rgba(37, 99, 235, 0.2) 66%, rgba(4, 4, 10, 0) 96%)",
            borderTop: "1.5px solid rgba(191, 219, 254, 0.48)",
            borderRight: "1px solid rgba(96, 165, 250, 0.22)",
            boxShadow:
              "0 0 55px rgba(79, 70, 229, 0.42), inset 14px 0 32px -12px rgba(147, 197, 253, 0.45)",
          }}
        >
          {/* Intense Razor-Bright Left Luminous Edge Beam Along Tilted Box Spine */}
          <span
            className="absolute inset-y-0 -left-[1px] w-[2px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(147, 197, 253, 0.25) 0%, rgba(239, 246, 255, 0.96) 26%, rgba(96, 165, 250, 0.85) 56%, rgba(59, 130, 246, 0.08) 92%)",
              boxShadow:
                "0 0 18px 3px rgba(96, 165, 250, 0.85), 0 0 42px 8px rgba(79, 70, 229, 0.65)",
            }}
          />
        </div>

        {/* Focused Shoulder Optical Bloom Right Where Left Beam Emerges Behind Collar */}
        <div
          className="hidden sm:block absolute top-[28%] right-[16%] lg:right-[19%] w-[140px] h-[180px] rounded-full blur-[34px] opacity-75"
          style={{
            background:
              "radial-gradient(circle, rgba(219, 234, 254, 0.78) 0%, rgba(79, 70, 229, 0.48) 45%, transparent 78%)",
          }}
        />

        {/* Bottom Smooth Edge Blend */}
        <div
          className="absolute inset-x-0 bottom-0 h-20"
          style={{
            background:
              "linear-gradient(to top, #04040A 0%, rgba(4,4,10,0.4) 55%, transparent 100%)",
          }}
        />

        {/* Rounded Blue SVG Bottom Wave Accents & Crescent */}
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <linearGradient id="blueRoundStroke" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.06" />
              <stop offset="45%" stopColor="#60A5FA" stopOpacity="0.72" />
              <stop offset="80%" stopColor="#A5B4FC" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.22" />
            </linearGradient>

            <linearGradient id="blueWaveMesh" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.04" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.04" />
            </linearGradient>

            <filter id="blueRoundBloom" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Rounded Luminous Wave Curve Rising Gently Up Left Side of Portrait Waist */}
          <path
            d="M 555 910 C 655 775, 745 640, 840 485"
            stroke="url(#blueRoundStroke)"
            strokeWidth="1.8"
            strokeLinecap="round"
            filter="url(#blueRoundBloom)"
            fill="none"
          />

          {/* Rounded Crescent Arch Sweeping Bottom-Right */}
          <path
            d="M 1075 910 C 1165 815, 1285 765, 1455 760"
            stroke="url(#blueRoundStroke)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#blueRoundBloom)"
            fill="none"
          />

          {/* Smooth Rounded Bottom-Left Multi-Strand Contour Curves */}
          <path
            d="M -20 822 C 185 734, 345 734, 540 818"
            stroke="url(#blueWaveMesh)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M -20 842 C 190 756, 355 758, 550 838"
            stroke="url(#blueWaveMesh)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.72"
            fill="none"
          />
        </svg>
      </div>

      {/* ── 2. MAIN EDITORIAL HERO CONTAINER ── */}
      <div className="relative z-10 flex-1 max-w-[1280px] w-full mx-auto px-4 sm:px-6 md:px-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center w-full h-full">
          {/* LEFT EDITORIAL COLUMN (Typographic Headline + Bio + CTAs + Scroll Down) */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center py-2 lg:pb-6 z-20">
            {/* Eyebrow Uppercase Role + Hairline Rule */}
            <div className="flex items-center gap-2.5 mb-3 max-w-full">
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-slate-200 truncate">
                BUSINESS CONSULTANT &amp; GROWTH STRATEGIST
              </span>
              <span
                aria-hidden="true"
                className="hidden sm:inline-block h-px w-14 md:w-20 bg-gradient-to-r from-[#60A5FA]/60 to-transparent shrink-0"
              />
            </div>

            {/* 3-Tier Editorial Name Stack */}
            <h1 className="font-sans tracking-[-0.032em] leading-[0.97]">
              <span className="block font-light text-slate-200 text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] mb-1">
                Hello, I&apos;m
              </span>
              <span className="block font-normal text-white text-[40px] xs:text-[50px] sm:text-[60px] lg:text-[66px] xl:text-[76px] tracking-[-0.03em]">
                Dheeraj
              </span>
              <span
                className="block font-normal text-[40px] xs:text-[50px] sm:text-[60px] lg:text-[66px] xl:text-[76px] tracking-[-0.03em] pb-1"
                style={{
                  backgroundImage:
                    "linear-gradient(115deg, #DBEAFE 0%, #93C5FD 30%, #60A5FA 65%, #818CF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Aggarwal
              </span>
            </h1>

            {/* Positioning Statement With Vertical Royal-Blue Bar */}
            <div className="mt-3 sm:mt-4 pl-3.5 sm:pl-4 border-l-2 border-[#60A5FA] max-w-[440px]">
              <p className="text-xs sm:text-sm md:text-[15px] text-slate-300 leading-relaxed font-normal">
                Building stronger brands, scalable systems and measurable growth.
              </p>
            </div>

            {/* Primary Pill CTA + Watch Intro Trigger */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5 sm:gap-5">
              <Button
                href="/contact?type=strategy-call"
                variant="secondary"
                size="md"
                icon="right"
                className="h-10 sm:h-11 px-5 sm:px-7 text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#2563EB] to-[#4F46E5] border-[#93C5FD]/40 text-white hover:text-white hover:border-[#93C5FD]/75 hover:brightness-110 shadow-[0_8px_24px_rgba(37,99,235,0.42)]"
              >
                Let&apos;s Work Together
              </Button>
            </div>

            {/* Clean Scroll Down Trigger Kept Clear of Corner Floating Badges */}
            <button
              type="button"
              onClick={handleScrollDown}
              className="mt-6 lg:mt-8 hidden sm:inline-flex items-center gap-2.5 text-[11px] font-medium text-slate-400 hover:text-[#93C5FD] transition-colors cursor-pointer group"
            >
              <span className="w-4 h-6 rounded-full border border-white/30 group-hover:border-[#60A5FA] flex items-start justify-center p-1 transition-colors">
                <span className="w-0.5 h-1.5 rounded-full bg-[#60A5FA] animate-bounce" />
              </span>
              <span>Scroll Down</span>
            </button>
          </div>

          {/* RIGHT PORTRAIT COLUMN (Existing Studio Portrait Positioned Cleanly Front of Tilted Glass Box) */}
          <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-end self-stretch min-h-[340px] sm:min-h-[420px] lg:min-h-0">
            <div
              className="relative h-[340px] xs:h-[380px] sm:h-[460px] lg:h-[clamp(440px,84svh,700px)] aspect-[682/740] lg:mr-14 xl:mr-20 pointer-events-none"
              style={{
                maskImage:
                  "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.85) 6%, #000 15%, #000 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.85) 6%, #000 15%, #000 100%)",
              }}
            >
              <Image
                src="/images/hero/dheeraj-studio-portrait.png"
                alt="Dheeraj Aggarwal - Business Consultant & Growth Specialist"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 390px, 660px"
                className="object-cover object-top drop-shadow-[0_24px_45px_rgba(0,0,0,0.65)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
