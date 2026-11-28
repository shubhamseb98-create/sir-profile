"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  BarChart3,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Film,
  Globe,
  Megaphone,
  MousePointerClick,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const SERVICE_ICONS = {
  globe: Globe,
  ecommerce: ShoppingBag,
  search: Search,
  "google-ads": MousePointerClick,
  "meta-ads": Megaphone,
  linkedin: Briefcase,
  social: Share2,
  content: Film,
  "lead-gen": TrendingUp,
  analytics: BarChart3,
  hosting: ShieldCheck,
};

export default function DigitalServicesCarousel({ services = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const isDraggingRef = useRef(false);

  const total = services.length;
  const maxIndex = Math.max(0, total - visibleCount);
  const safeIndex = Math.min(activeIndex, maxIndex);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
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
    const timer = setInterval(nextSlide, 4200);
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
      id="digital-services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-[60px] bg-[#F8FAFC] text-[#0F172A] border-b border-slate-200 font-sans overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Compact Homepage-Matched Heading + Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-5">
          <SectionHeading
            eyebrow="02 · DIGITAL SERVICES"
            title="Complete Digital Ecosystem"
            description="Eleven integrated engineering, search, creative, and performance capabilities—eliminating fragmented vendors."
            light={true}
            compact={true}
            animate={false}
            className="!mb-0 max-w-2xl"
          />

          <div className="flex items-center gap-2.5 self-start md:self-auto shrink-0">
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-[#0F172A] tabular-nums shadow-sm">
              {String(safeIndex + 1).padStart(2, "0")}–
              {String(Math.min(safeIndex + visibleCount, total)).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous digital service"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-[#2563EB] hover:text-[#1D4ED8] text-[#0F172A] flex items-center justify-center shadow-sm transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next digital service"
              className="w-9 h-9 rounded-full bg-[#04040A] border border-[#04040A] hover:bg-[#2563EB] hover:border-[#2563EB] text-white flex items-center justify-center shadow-sm transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Viewport */}
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
            {services.map((service) => {
              const Icon = SERVICE_ICONS[service.iconKey] || Globe;
              return (
                <div
                  key={service.number}
                  style={{ width: `${100 / visibleCount}%` }}
                  className="shrink-0 px-2.5"
                >
                  <article className="group h-full rounded-2xl bg-white border border-slate-200 hover:border-[#3B82F6]/65 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                    {/* Compact Card Image Frame */}
                    <div className="relative h-[145px] sm:h-[155px] w-full overflow-hidden bg-slate-100 shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        draggable={false}
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 390px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03] pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#04040A]/75 via-[#04040A]/15 to-transparent" />
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#04040A]/85 backdrop-blur-sm border border-white/15 text-[10px] font-bold text-[#93C5FD] tabular-nums">
                          {service.number}
                        </span>
                        <span className="w-7 h-7 rounded-full bg-white/95 text-[#1D4ED8] flex items-center justify-center shadow-sm">
                          <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                        </span>
                      </div>
                    </div>

                    {/* Compact Homepage-Sized Card Copy */}
                    <div className="p-4 flex-1 flex flex-col">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#1D4ED8] mb-1 truncate">
                        {service.deliverable}
                      </p>
                      <h3 className="text-[15px] sm:text-base font-normal text-[#0F172A] leading-snug group-hover:text-[#1D4ED8] transition-colors line-clamp-1">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Progress Dots + Quick Service Strip */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Digital services slides">
            {pageDots.map((dotIdx) => {
              const isActive = dotIdx === safeIndex;
              return (
                <button
                  key={dotIdx}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show services starting at ${dotIdx + 1}`}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-7 bg-[#2563EB]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              );
            })}
          </div>

          <p className="text-[11px] font-medium text-slate-500">
            Slide or click arrows to explore all 11 Web Tycoons capabilities
          </p>
        </div>
      </div>
    </section>
  );
}
