"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import Button from "@/components/ui/Button";

export default function DigitalCaseStudiesCarousel({ studies = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = studies.length;

  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const isDraggingRef = useRef(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    dragDelta.current = e.clientX - dragStartX.current;
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    if (dragDelta.current < -50) nextSlide();
    else if (dragDelta.current > 50) prevSlide();
  };

  if (total === 0) return null;

  return (
    <section
      id="featured-case-studies"
      className="relative py-[60px] bg-[#04040A] text-white overflow-hidden border-b border-white/10 font-sans"
    >
      <DarkSectionLining variant="blue" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header Bar with Case Switcher Pills + Prev/Next Arrows */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 mb-4">
          <SectionHeading
            eyebrow="05 · FEATURED DIGITAL CASE STUDIES"
            title="Featured Digital Case Studies"
            description="Context, digital challenge, strategy, channels used, execution, measurable results, and lessons from real mandates."
            light={false}
            compact={true}
            animate={false}
            className="!mb-0 max-w-2xl"
          />

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {studies.map((item, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide border transition-all cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white border-[#93C5FD]/50 shadow-sm"
                      : "bg-[#090F1E] text-slate-300 border-white/12 hover:border-[#60A5FA]/50 hover:text-white"
                  }`}
                >
                  0{idx + 1} · {item.shortTab}
                </button>
              );
            })}

            <div className="flex items-center gap-1.5 ml-1">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous case study"
                className="w-8 h-8 rounded-full bg-[#090F1E] border border-white/15 hover:border-[#60A5FA] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next case study"
                className="w-8 h-8 rounded-full bg-[#090F1E] border border-white/15 hover:border-[#60A5FA] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Track (Compact Single-Screen Dossier Cards) */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
        >
          <div
            style={{
              transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
              transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className="flex"
          >
            {studies.map((study, index) => (
              <div key={study.slug} className="w-full shrink-0">
                <article className="rounded-2xl bg-[#090F1E]/95 border border-white/12 p-3.5 sm:p-4 shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
                    {/* Left Column: Visual + Business Context + Channels Used */}
                    <div className="lg:col-span-4 flex flex-col justify-between gap-2.5 border-b lg:border-b-0 lg:border-r border-white/10 pb-3 lg:pb-0 lg:pr-4">
                      <div>
                        <div className="relative h-[115px] sm:h-[125px] w-full rounded-xl overflow-hidden bg-[#04040A] border border-white/10 mb-2.5">
                          <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            draggable={false}
                            sizes="(max-width: 1024px) 100vw, 380px"
                            className="object-cover pointer-events-none"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#04040A]/85 via-[#04040A]/20 to-transparent" />
                          <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#04040A]/85 border border-[#60A5FA]/40 text-[10px] font-bold tracking-[0.12em] uppercase text-[#DBEAFE]">
                            Case 0{index + 1} · {study.sector}
                          </span>
                        </div>

                        <h3 className="text-sm sm:text-base font-normal text-white leading-snug line-clamp-2">
                          {study.title}
                        </h3>
                        <p className="text-[11px] font-medium text-[#93C5FD] mt-0.5">
                          {study.clientName} • {study.clientScale}
                        </p>

                        <div className="mt-2">
                          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400 font-bold mb-0.5">
                            Business Context
                          </p>
                          <p className="text-xs text-slate-300 leading-snug line-clamp-2">
                            {study.businessContext}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400 font-bold mb-1">
                          Channels Used
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {study.channelsUsed.map((channel) => (
                            <span
                              key={channel}
                              className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#3B82F6]/12 text-[#DBEAFE] border border-[#60A5FA]/35"
                            >
                              {channel}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Challenge + Strategy + Execution + Measurable Results + Lessons */}
                    <div className="lg:col-span-8 flex flex-col justify-between gap-2.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="rounded-xl bg-[#050A14] border border-white/10 p-2.5 sm:p-3">
                          <p className="text-[10px] uppercase tracking-[0.14em] text-[#93C5FD] font-bold mb-1">
                            Digital Challenge
                          </p>
                          <p className="text-xs text-slate-200 leading-snug line-clamp-2">
                            {study.challenge}
                          </p>
                        </div>

                        <div className="rounded-xl bg-[#050A14] border border-white/10 p-2.5 sm:p-3">
                          <p className="text-[10px] uppercase tracking-[0.14em] text-[#93C5FD] font-bold mb-1">
                            Strategy
                          </p>
                          <p className="text-xs text-slate-200 leading-snug line-clamp-2">
                            {study.strategy}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                        <div className="sm:col-span-7 rounded-xl bg-[#050A14] border border-white/10 p-2.5 sm:p-3">
                          <p className="text-[10px] uppercase tracking-[0.14em] text-[#93C5FD] font-bold mb-1">
                            Execution
                          </p>
                          <ul className="space-y-1">
                            {study.actionsTaken.slice(0, 3).map((action, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-1.5 text-[11px] text-slate-200 leading-snug"
                              >
                                <CheckCircle2 className="w-3 h-3 text-[#60A5FA] shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="sm:col-span-5 rounded-xl bg-[#050A14] border border-[#60A5FA]/35 p-2.5 sm:p-3">
                          <p className="text-[10px] uppercase tracking-[0.14em] text-[#DBEAFE] font-bold mb-1">
                            Measurable Results
                          </p>
                          <div className="space-y-1">
                            {study.results.slice(0, 3).map((res, i) => (
                              <div
                                key={i}
                                className="border-b border-white/10 last:border-0 pb-1 last:pb-0"
                              >
                                <div className="text-[9.5px] font-bold uppercase tracking-[0.08em] text-[#93C5FD]">
                                  {res.metric}
                                </div>
                                <div className="text-[11px] text-white leading-snug line-clamp-1">
                                  {res.outcome}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Compact Lessons Learned + Link */}
                      <div className="rounded-xl bg-[#060B16] border-l-[3px] border-[#60A5FA] px-3 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <p className="text-[11px] text-slate-200 leading-snug line-clamp-1">
                          <span className="text-[#93C5FD] font-bold uppercase tracking-[0.12em] text-[10px] mr-1.5">
                            Lessons:
                          </span>
                          {study.learning}
                        </p>

                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#93C5FD] hover:text-white transition-colors shrink-0"
                        >
                          <span>Full Dossier</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Bottom Carousel Dots + Archive CTA */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {studies.map((item, idx) => (
              <button
                key={item.slug}
                type="button"
                aria-label={`Select case study ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? "w-7 bg-[#60A5FA]" : "w-2 bg-white/25 hover:bg-white/45"
                }`}
              />
            ))}
            <span className="ml-2 text-[11px] text-slate-400 tabular-nums">
              0{activeIndex + 1} / 0{total}
            </span>
          </div>

          <Button href="/case-studies" variant="secondary" size="sm">
            Explore All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
