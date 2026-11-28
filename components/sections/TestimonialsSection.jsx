"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { writtenTestimonials } from "@/data/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TOTAL = writtenTestimonials.length;
// Three copies allow endless forward & backward sliding with seamless silent wrap
const SLIDES = [
  ...writtenTestimonials,
  ...writtenTestimonials,
  ...writtenTestimonials,
];

export default function TestimonialsSection() {
  const [trackIndex, setTrackIndex] = useState(TOTAL);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const trackRef = useRef(null);
  const pointerStartX = useRef(null);

  const activeIndex = ((trackIndex % TOTAL) + TOTAL) % TOTAL;

  const stepBy = useCallback((delta) => {
    setWithTransition(true);
    setTrackIndex((prev) => {
      // Normalize first if user clicks rapidly near track boundaries
      let base = prev;
      if (base >= TOTAL * 2) base -= TOTAL;
      else if (base < TOTAL) base += TOTAL;
      return base + delta;
    });
  }, []);

  const nextSlide = useCallback(() => stepBy(1), [stepBy]);
  const prevSlide = useCallback(() => stepBy(-1), [stepBy]);

  const goToSlide = (targetIdx) => {
    setWithTransition(true);
    setTrackIndex(TOTAL + targetIdx);
  };

  // Seamless silent snap back into middle copy after slide animation completes
  const handleTransitionEnd = (e) => {
    if (e.target !== trackRef.current || e.propertyName !== "transform") return;

    if (trackIndex >= TOTAL * 2 || trackIndex < TOTAL) {
      const normalized = TOTAL + activeIndex;
      setWithTransition(false);
      setTrackIndex(normalized);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
    }
  };

  // Smooth autoplay loop (pauses on hover, focus, or reduced-motion preference)
  useEffect(() => {
    if (isPaused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Basic touch/mouse swipe support
  const handlePointerDown = (e) => {
    pointerStartX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (pointerStartX.current === null) return;
    const diff = e.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(diff) > 48) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section id="testimonials" className="py-[60px] bg-[#F8FAFC] text-[#0F172A] border-y border-slate-200 relative font-sans overflow-hidden">
      {/* Subtle Light Blueprint Hairline Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37, 99, 235, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeading
            number="09"
            eyebrow="EXECUTIVE CREDIBILITY"
            title="Written Endorsements & Results"
            description="Institutional reflections from board members, advisory councils, and enterprise leaders who partnered with Dheeraj Aggarwal."
            light={true}
            className="!mb-0"
          />

          {/* Carousel Controls, Counter & Media Link */}
          <div className="flex flex-wrap items-center gap-3 shrink-0 self-start md:self-end">
            <Link
              href="/media"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#4F46E5] border border-slate-200 hover:border-[#2563EB] text-slate-700 hover:text-white text-xs font-semibold shadow-xs transition-all"
            >
              <span>All Media &amp; Endorsements</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-slate-200 hover:border-[#3B82F6] bg-white hover:bg-[#EFF6FF] text-slate-600 hover:text-[#2563EB] shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-[#2563EB] px-2 font-semibold tabular-nums select-none">
              0{activeIndex + 1} / 0{TOTAL}
            </span>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-slate-200 hover:border-[#3B82F6] bg-white hover:bg-[#EFF6FF] text-slate-600 hover:text-[#2563EB] shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <ScrollReveal distance={24} delay={0.1}>
          {/* Carousel Viewport (pauses autoplay on hover/focus) */}
          <div
            className="relative overflow-hidden -mx-2.5 py-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            {/* Equal-Height Compact 3-Card Flex Track (zero vertical shift) */}
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translate3d(calc(${trackIndex} * -100% / var(--slides-per-view)), 0, 0)`,
              }}
              className={`flex items-stretch select-none [--slides-per-view:1] md:[--slides-per-view:2] lg:[--slides-per-view:3] ${
                withTransition
                  ? "transition-transform duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : ""
              }`}
            >
              {SLIDES.map((item, idx) => {
                const displayNumber = (idx % TOTAL) + 1;
                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2.5"
                  >
                    <article className="group h-full relative rounded-2xl bg-white border border-slate-200/90 hover:border-[#3B82F6] p-5 sm:p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)]">
                      {/* Top Hover Accent Hairline */}
                      <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-[linear-gradient(90deg,transparent_0%,#2563EB_25%,#3B82F6_50%,#60A5FA_75%,transparent_100%)] opacity-25 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Top Meta + Compact Quote */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-[10px] font-mono font-bold text-[#2563EB] tracking-widest shrink-0">
                              0{displayNumber}
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-slate-600 px-2.5 py-0.5 rounded-full bg-[#F8FAFC] border border-slate-200 truncate">
                              {item.engagementType}
                            </span>
                          </div>

                          <div className="flex items-center gap-0.5 text-amber-500 shrink-0">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-500" />
                            ))}
                          </div>
                        </div>

                        {/* Compact Quote Mark */}
                        <span
                          aria-hidden="true"
                          className="block font-sans font-light text-4xl leading-[0.65] text-[#3B82F6]/30 group-hover:text-[#3B82F6]/65 transition-colors duration-300 mb-2"
                        >
                          &ldquo;
                        </span>

                        <blockquote className="text-sm leading-relaxed text-slate-700 font-normal">
                          {item.text}
                        </blockquote>
                      </div>

                      {/* Bottom Author & Verified Result Block */}
                      <div className="relative z-10 mt-5 pt-4 border-t border-slate-100">
                        <div className="flex items-start justify-between gap-3">
                          <div className="border-l-2 border-[#3B82F6]/70 pl-3 min-w-0">
                            <h3 className="text-sm sm:text-[15px] font-normal text-[#0F172A] leading-snug truncate">
                              {item.author}
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5 truncate">
                              {item.designation} &bull;{" "}
                              <span className="text-slate-800 font-medium">
                                {item.organisation}
                              </span>
                            </p>
                          </div>
                          <Quote className="w-4 h-4 text-slate-200 group-hover:text-[#3B82F6]/35 transition-colors shrink-0 mt-0.5" />
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {writtenTestimonials.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`View testimonial ${idx + 1}: ${item.organisation}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-8 bg-gradient-to-r from-[#2563EB] to-[#4F46E5] shadow-[0_4px_12px_rgba(37,99,235,0.35)]"
                      : "w-2 bg-slate-300 hover:bg-[#93C5FD]"
                  }`}
                />
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
