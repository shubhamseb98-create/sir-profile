"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { writtenTestimonials } from "@/data/testimonials";
import { Quote, ChevronLeft, ChevronRight, Award, Star } from "lucide-react";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TestimonialsSection() {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  const nextQuote = () => {
    setActiveQuoteIndex((prev) => (prev + 1) % writtenTestimonials.length);
  };

  const prevQuote = () => {
    setActiveQuoteIndex((prev) =>
      prev === 0 ? writtenTestimonials.length - 1 : prev - 1
    );
  };

  const currentQuote = writtenTestimonials[activeQuoteIndex];

  return (
    <section className="py-20 sm:py-24 bg-[#0A0F1A] border-b border-slate-800/50 relative font-sans overflow-hidden">
      {/* Background lining texture and subtle glow */}
      <DarkSectionLining glowPosition="top" showTopBeam={true} showBottomBeam={true} />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
        <SectionHeading
          number="07"
          eyebrow="EXECUTIVE CREDIBILITY"
          title="Written Endorsements & Results"
          description="Institutional reflections from board members, advisory councils, and enterprise leaders who partnered with Dheeraj Aggarwal."
          className="!mb-12"
        />

        {/* Written Testimonial Feature Card */}
        <ScrollReveal distance={35} delay={0.2} scale={0.98}>
        <div className="rounded-3xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700/60 p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(56,189,248,0.12)]">
          {/* Glowing Top Beam */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8]/70 to-transparent shadow-[0_0_14px_rgba(56,189,248,0.8)]" />

          {/* Subtle Watermark Quote */}
          <div className="absolute top-6 right-8 text-[#38BDF8]/10 pointer-events-none">
            <Quote className="w-20 h-20 sm:w-28 sm:h-28 stroke-[1]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#38BDF8] px-3.5 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25">
                {currentQuote.engagementType}
              </span>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Quote Body */}
            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
              &ldquo;{currentQuote.text}&rdquo;
            </p>

            {/* Author Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-700/60">
              <div>
                <h5 className="text-xl font-bold text-white flex items-center gap-2">
                  {currentQuote.author}
                </h5>
                <p className="text-sm text-slate-400 mt-1">
                  {currentQuote.designation} &bull; <span className="text-slate-200 font-semibold">{currentQuote.organisation}</span>
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
                  <Award className="w-3.5 h-3.5" />
                  <span>Result: {currentQuote.resultHighlight}</span>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  onClick={prevQuote}
                  aria-label="Previous quote"
                  className="w-11 h-11 rounded-full border border-slate-700 hover:border-[#38BDF8] bg-[#0F172A] text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-[#38BDF8] px-2 font-semibold">
                  0{activeQuoteIndex + 1} / 0{writtenTestimonials.length}
                </span>
                <button
                  onClick={nextQuote}
                  aria-label="Next quote"
                  className="w-11 h-11 rounded-full border border-slate-700 hover:border-[#38BDF8] bg-[#0F172A] text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
