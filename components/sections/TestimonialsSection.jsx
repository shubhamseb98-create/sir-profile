"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Modal from "@/components/ui/Modal";
import { videoTestimonials, writtenTestimonials } from "@/data/testimonials";
import { Play, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { trackVideoPlay } from "@/lib/analytics";

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(null);
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
    <section className="min-h-screen py-8 sm:py-10 md:py-12 flex flex-col justify-center bg-[#042A41] border-b border-slate-800 relative font-sans">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <SectionHeading
          number="06"
          eyebrow="EXECUTIVE CREDIBILITY"
          title="Endorsements & Results"
          description="Reflections from promoters, managing directors, and ecosystem stakeholders who have partnered with Dheeraj Aggarwal."
          className="!mb-4 sm:!mb-6"
        />

        {/* Video Testimonials Showcase Row */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#C2E8FF]">
              Video Conversations
            </span>
            <span className="text-[10px] sm:text-xs text-[#7298AF]">
              Direct Founder Perspectives
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {videoTestimonials.map((v) => (
              <div
                key={v.id}
                className="group relative rounded-2xl bg-[#0A3A56] border border-slate-700/60 hover:border-[#C2E8FF]/60 p-2.5 sm:p-3 transition-all duration-300 shadow-lg cursor-pointer hover:-translate-y-1 flex flex-col justify-between"
                onClick={() => {
                  setActiveVideo(v);
                  trackVideoPlay(v.topic);
                }}
              >
                <div>
                  {/* Inset Poster Frame */}
                  <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#042A41] to-[#0A3A56] flex items-center justify-center overflow-hidden mb-2">
                    <div className="absolute inset-0 bg-[#042A41]/40 group-hover:bg-[#042A41]/10 transition-colors" />

                    {/* Play Button Trigger */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#005C96] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-10 group-hover:bg-[#004671]">
                      <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white ml-0.5" />
                    </div>

                    <span className="absolute bottom-1.5 right-1.5 text-[9px] font-mono bg-slate-900/80 px-2 py-0.5 rounded-full text-white border border-white/10 backdrop-blur-sm z-10">
                      {v.duration}
                    </span>
                  </div>

                  {/* Video Info */}
                  <div className="mb-0.5">
                    <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-[#C2E8FF] block mb-0.5">
                      {v.topic}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#C2E8FF] transition-colors leading-tight truncate">
                      {v.name}
                    </h4>
                  </div>
                  <p className="text-[10px] text-[#7298AF] mb-1 truncate">
                    {v.designation}, {v.organisation}
                  </p>
                  <p className="text-[11px] text-[#C2E8FF] italic leading-relaxed line-clamp-2">
                    &ldquo;{v.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Testimonial Feature Slider */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0A3A56] border border-slate-800 p-4 sm:p-6 md:p-7 relative overflow-hidden shadow-2xl">
          <div className="absolute top-4 right-4 sm:top-6 sm:right-8 text-[#C2E8FF]/10 pointer-events-none">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 stroke-[1]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C2E8FF] px-2.5 py-0.5 rounded-full bg-[#C2E8FF]/10 border border-[#C2E8FF]/20">
                {currentQuote.engagementType}
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-white font-medium leading-[1.35] mb-3 sm:mb-4 line-clamp-3">
              &ldquo;{currentQuote.text}&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-800">
              <div>
                <h5 className="text-xl font-bold text-white">
                  {currentQuote.author}
                </h5>
                <p className="text-xs text-[#7298AF] mt-0.5">
                  {currentQuote.designation} â€¢ {currentQuote.organisation}
                </p>
                <p className="text-xs text-[#C2E8FF] mt-1 font-mono font-semibold">
                  Result: {currentQuote.resultHighlight}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevQuote}
                  aria-label="Previous quote"
                  className="p-3 rounded-full border border-slate-700 text-[#7298AF] hover:text-white hover:border-[#C2E8FF] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#7298AF] px-2 font-semibold">
                  0{activeQuoteIndex + 1} / 0{writtenTestimonials.length}
                </span>
                <button
                  onClick={nextQuote}
                  aria-label="Next quote"
                  className="p-3 rounded-full border border-slate-700 text-[#7298AF] hover:text-white hover:border-[#C2E8FF] transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <Modal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        title={activeVideo ? `${activeVideo.name} â€” ${activeVideo.organisation}` : ""}
      >
        {activeVideo && (
          <div>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black mb-4">
              <iframe
                src={activeVideo.videoUrl}
                title={activeVideo.topic}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-[#A9B0BE] italic">
              &ldquo;{activeVideo.quote}&rdquo;
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
}

