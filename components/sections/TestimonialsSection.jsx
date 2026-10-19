"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { writtenTestimonials } from "@/data/testimonials";
import { Quote, ChevronLeft, ChevronRight, Award, Star } from "lucide-react";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import ScrollReveal from "@/components/ui/ScrollReveal";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 36 : -36,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 340, damping: 30 },
      opacity: { duration: 0.22 },
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -36 : 36,
    opacity: 0,
    transition: {
      x: { duration: 0.16, ease: "easeOut" },
      opacity: { duration: 0.16 },
    },
  }),
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextQuote = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % writtenTestimonials.length);
  };

  const prevQuote = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? writtenTestimonials.length - 1 : prev - 1
    );
  };

  const currentQuote = writtenTestimonials[currentIndex];

  return (
    <section className="py-20 sm:py-24 bg-[#000000] border-b border-white/10 relative font-sans overflow-hidden">
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
          <div className="rounded-3xl bg-gradient-to-br from-[#121212] to-[#050505] border border-white/15 p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(207,255,4,0.18)] min-h-[460px] sm:min-h-[420px] md:min-h-[390px] flex flex-col justify-between">
            {/* Glowing Top Beam */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#CFFF04]/70 to-transparent shadow-[0_0_14px_rgba(207,255,4,0.7)]" />

            {/* Subtle Watermark Quote */}
            <div className="absolute top-6 right-8 text-[#CFFF04]/10 pointer-events-none">
              <Quote className="w-20 h-20 sm:w-28 sm:h-28 stroke-[1]" />
            </div>

            {/* Slide Body with AnimatePresence to ensure zero jitter and silky smooth slide animation */}
            <div className="relative z-10 w-full overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentQuote.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full max-w-3xl"
                >
                  {/* Badges Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#CFFF04] px-3.5 py-1 rounded-full bg-[#CFFF04]/10 border border-[#CFFF04]/30">
                      {currentQuote.engagementType}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Body with Stable Min-Height to eliminate layout shift */}
                  <div className="min-h-[110px] sm:min-h-[96px] md:min-h-[82px] flex items-center mb-8">
                    <p className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed">
                      &ldquo;{currentQuote.text}&rdquo;
                    </p>
                  </div>

                  {/* Author Information */}
                  <div className="pt-6 border-t border-slate-700/60 pb-2 sm:pb-0">
                    <h5 className="text-xl font-bold text-white flex items-center gap-2">
                      {currentQuote.author}
                    </h5>
                    <p className="text-sm text-slate-400 mt-1">
                      {currentQuote.designation} &bull;{" "}
                      <span className="text-slate-200 font-semibold">{currentQuote.organisation}</span>
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
                      <Award className="w-3.5 h-3.5" />
                      <span>Result: {currentQuote.resultHighlight}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls - Stable position so clicking does not move or jitter buttons */}
            <div className="relative sm:absolute sm:bottom-10 sm:right-10 md:bottom-12 md:right-12 z-20 flex items-center gap-3 justify-end pt-5 sm:pt-0">
              <button
                onClick={prevQuote}
                aria-label="Previous quote"
                className="w-11 h-11 rounded-full border border-neutral-800 hover:border-[#CFFF04] bg-black text-slate-300 hover:text-[#CFFF04] hover:shadow-[0_0_16px_rgba(207,255,4,0.25)] flex items-center justify-center transition-all duration-200 shadow-lg active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-[#CFFF04] px-2 font-semibold tabular-nums select-none">
                0{currentIndex + 1} / 0{writtenTestimonials.length}
              </span>
              <button
                onClick={nextQuote}
                aria-label="Next quote"
                className="w-11 h-11 rounded-full border border-neutral-800 hover:border-[#CFFF04] bg-black text-slate-300 hover:text-[#CFFF04] hover:shadow-[0_0_16px_rgba(207,255,4,0.25)] flex items-center justify-center transition-all duration-200 shadow-lg active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

