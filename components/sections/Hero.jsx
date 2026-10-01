"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[560px] sm:min-h-[680px] h-[100svh] max-h-[1080px] flex items-center justify-start pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-[#0F172A] font-sans">
      {/* 1. High-Resolution Visible Corporate Architecture Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/hero/hero-corporate-skyline.jpg"
          alt="Prestigious Corporate Enterprise Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-[80%_center] opacity-85"
        />

        {/* 2. Directional Gradient: Dark on left for text contrast, open & bright on right so image is clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 via-45% to-transparent z-[2]" />

        {/* Bottom blending into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0F172A] to-transparent z-[3]" />
      </div>

      {/* Main Content: Clean, focused executive hero banner centered vertically in 100vh */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse shadow-[0_0_10px_#38BDF8]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#38BDF8] font-bold">
              {siteConfig.designation}
            </span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-md">
            Building Brands.{" "}
            <span className="bg-gradient-to-r from-white via-[#7DD3FC] to-[#38BDF8] bg-clip-text text-transparent block mt-1">
              Creating Impact.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-200 max-w-xl font-normal leading-relaxed drop-shadow-sm">
            Helping businesses grow through strategic clarity, digital transformation, scalable systems, and focused execution.
          </p>

          {/* Key Action CTAs */}
          <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button href="/contact?type=strategy-call" variant="primary" size="md" className="sm:px-8 sm:py-3.5 sm:text-base">
              Book a Strategy Call
            </Button>
            <Button href="#achieve-section" variant="secondary" size="md" icon="right" className="sm:px-8 sm:py-3.5 sm:text-base">
              Explore What I Achieve
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer pointer-events-auto">
        <a href="#achieve-section" className="flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest uppercase">
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#38BDF8]" />
        </a>
      </div>
    </section>
  );
}
