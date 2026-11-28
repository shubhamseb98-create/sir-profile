"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const MODEL_IMAGES = {
  audit: "/images/hero/hero-corporate-boardroom-clean.jpg",
  "90-day": "/images/hero/hero-business-strategy.jpg",
  mandate: "/images/inner/about-values-integrity.jpg",
  advisory: "/images/supporting/testimonial-poster-1.jpg",
  workshop: "/images/inner/speaking-executive-workshop.jpg",
  project: "/images/cards/strategic-alliances-real.jpg",
};

export default function EngagementModelsCarousel({ models = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const isDraggingRef = useRef(false);

  const total = models.length;
  const maxIndex = Math.max(0, total - visibleCount);
  const safeIndex = Math.min(activeIndex, maxIndex);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount, { passive: true });
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const timer = setInterval(nextSlide, 4600);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex, nextSlide]);

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    setIsPaused(true);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    dragDelta.current = e.clientX - dragStartX.current;
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    if (dragDelta.current < -45) nextSlide();
    else if (dragDelta.current > 45) prevSlide();
    setTimeout(() => setIsPaused(false), 3000);
  };

  const pageDots = Array.from({ length: maxIndex + 1 }, (_, i) => i);

  return (
    <section
      id="models"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-[60px] bg-[#04040A] border-b border-white/10 relative overflow-hidden font-sans"
    >
      <DarkSectionLining variant="blue" />

      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Compact Homepage Heading + Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-5">
          <SectionHeading
            eyebrow="02 · COLLABORATION STRUCTURE"
            title="Engagement Models"
            description="Flexible advisory formats structured around enterprise maturity, operational urgency, and growth horizon."
            light={false}
            compact={true}
            animate={false}
            className="!mb-0 max-w-2xl"
          />

          <div className="flex items-center gap-2.5 self-start md:self-auto shrink-0">
            <span className="px-3 py-1 rounded-full bg-[#090F1E] border border-white/15 text-[11px] font-bold text-[#DBEAFE] tabular-nums">
              {String(safeIndex + 1).padStart(2, "0")}–
              {String(Math.min(safeIndex + visibleCount, total)).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous engagement model"
              className="w-9 h-9 rounded-full bg-[#090F1E] border border-white/15 hover:border-[#60A5FA] text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next engagement model"
              className="w-9 h-9 rounded-full bg-gradient-to-r from-[#2563EB] to-[#6366F1] border border-[#93C5FD]/45 hover:brightness-110 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
        >
          <div
            style={{
              transform: `translate3d(-${(safeIndex * 100) / visibleCount}%, 0, 0)`,
              transition: "transform 480ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className="flex -mx-2.5"
          >
            {models.map((model, idx) => (
              <div
                key={model.id}
                style={{ width: `${100 / visibleCount}%` }}
                className="shrink-0 px-2.5"
              >
                <div
                  className={cn(
                    "group h-full rounded-2xl overflow-hidden flex flex-col justify-between transition-colors relative bg-[#090F1E]",
                    model.featured
                      ? "border-2 border-[#60A5FA] shadow-[0_14px_35px_rgba(0,0,0,0.5),0_0_24px_rgba(59,130,246,0.22)]"
                      : "border border-white/12 hover:border-[#60A5FA]/50"
                  )}
                >
                  <div>
                    <div className="relative h-[125px] sm:h-[135px] w-full overflow-hidden bg-[#04040A] border-b border-white/10">
                      <Image
                        src={
                          MODEL_IMAGES[model.id] ||
                          "/images/hero/hero-corporate-boardroom-clean.jpg"
                        }
                        alt={model.title}
                        fill
                        draggable={false}
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 390px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090F1E]/90 via-[#090F1E]/25 to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#04040A]/85 backdrop-blur-sm border border-white/15 text-[10px] uppercase tracking-[0.12em] text-[#93C5FD] font-bold">
                          <Clock className="w-3 h-3" />
                          {model.duration}
                        </span>
                        {model.featured ? (
                          <span className="text-[9.5px] uppercase tracking-[0.12em] font-bold bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white px-2.5 py-0.5 rounded-full border border-[#93C5FD]/40">
                            Most Selected
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full bg-[#04040A]/80 text-[10px] font-bold text-slate-300 tabular-nums border border-white/10">
                            0{idx + 1}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-base font-normal text-white leading-snug mb-1.5 line-clamp-1">
                        {model.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-snug mb-3 line-clamp-2">
                        {model.objective}
                      </p>

                      <div className="space-y-2 pt-2.5 border-t border-white/10 text-[11px]">
                        <div>
                          <span className="text-[#93C5FD] font-semibold uppercase tracking-[0.1em] text-[9.5px] block">
                            Primary Deliverable
                          </span>
                          <p className="text-white leading-snug line-clamp-1">
                            {model.deliverable}
                          </p>
                        </div>

                        <div>
                          <span className="text-slate-400 font-semibold uppercase tracking-[0.1em] text-[9.5px] block">
                            Commitment Rhythm
                          </span>
                          <p className="text-slate-300 leading-snug line-clamp-1">
                            {model.commitment}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 pb-4 pt-2 border-t border-white/10">
                    <Button
                      href={`/contact?type=${model.id}`}
                      variant={model.featured ? "primary" : "secondary"}
                      size="sm"
                      className="w-full"
                    >
                      Select Engagement
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Progress Dots */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            {pageDots.map((dotIdx) => {
              const isActive = dotIdx === safeIndex;
              return (
                <button
                  key={dotIdx}
                  type="button"
                  aria-label={`Show engagement models starting at ${dotIdx + 1}`}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-7 bg-[#60A5FA]"
                      : "w-2 bg-white/25 hover:bg-white/45"
                  }`}
                />
              );
            })}
          </div>

          <p className="text-[11px] font-medium text-slate-400">
            Slide or click arrows to compare all 6 engagement models
          </p>
        </div>
      </div>
    </section>
  );
}
