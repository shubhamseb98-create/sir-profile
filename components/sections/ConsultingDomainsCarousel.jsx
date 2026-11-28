"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const DOMAIN_IMAGES = {
  "business-growth": "/images/cards/leadership-governance-real.jpg",
  "brand-strategy": "/images/inner/about-philosophy-clarity.jpg",
  "digital-growth": "/images/cards/digital-growth-real.jpg",
  "crm-systems": "/images/cards/crm-operations-real.jpg",
  "sop-development": "/images/inner/about-sop-systems.jpg",
  "franchise-expansion": "/images/cards/franchise-expansion-real.jpg",
};

const SHORT_TABS = {
  "business-growth": "Business Growth",
  "brand-strategy": "Brand Strategy",
  "digital-growth": "Digital Growth",
  "crm-systems": "CRM Systems",
  "sop-development": "SOPs & Process",
  "franchise-expansion": "Franchise Scale",
};

export default function ConsultingDomainsCarousel({ services = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = services.length;

  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const isDraggingRef = useRef(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Support deep links like /consulting#crm-systems or /consulting#franchise-expansion cleanly
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const idx = services.findIndex((s) => s.id === hash);
      if (idx !== -1) {
        setActiveIndex(idx);
        const section = document.getElementById("consulting-domains");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [services]);

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
      id="consulting-domains"
      className="py-[60px] bg-white text-[#0F172A] border-b border-slate-200 font-sans overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Compact Homepage Heading + Domain Tabs & Arrows */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3.5 mb-4">
          <SectionHeading
            eyebrow="01 · SPECIALIZED PRACTICES"
            title="Consulting Domains"
            description="Six structured practice areas designed to eliminate founder bottlenecks and build scalable commercial systems."
            light={true}
            compact={true}
            animate={false}
            className="!mb-0 max-w-xl"
          />

          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            {services.map((service, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide border transition-all cursor-pointer",
                    isSelected
                      ? "bg-[#04040A] text-[#93C5FD] border-[#04040A] shadow-sm"
                      : "bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-[#2563EB] hover:text-[#1D4ED8]"
                  )}
                >
                  0{idx + 1} · {SHORT_TABS[service.id] || service.title}
                </button>
              );
            })}

            <div className="flex items-center gap-1.5 ml-1">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous consulting domain"
                className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-slate-200 hover:border-[#2563EB] hover:text-[#1D4ED8] text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next consulting domain"
                className="w-8 h-8 rounded-full bg-[#04040A] border border-[#04040A] hover:bg-[#2563EB] hover:border-[#2563EB] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
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
              transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
              transition: "transform 480ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className="flex"
          >
            {services.map((service, idx) => (
              <div key={service.id} className="w-full shrink-0">
                <article className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-4 sm:p-5 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
                    {/* Left Visual + Outcome Callout + Enquiry CTA */}
                    <div className="lg:col-span-4 flex flex-col justify-between gap-3 border-b lg:border-b-0 lg:border-r border-slate-200 pb-4 lg:pb-0 lg:pr-5">
                      <div>
                        <div className="relative h-[135px] sm:h-[145px] w-full rounded-xl overflow-hidden bg-[#04040A] border border-slate-200 mb-3">
                          <Image
                            src={
                              DOMAIN_IMAGES[service.id] ||
                              "/images/cards/leadership-governance-real.jpg"
                            }
                            alt={service.title}
                            fill
                            draggable={false}
                            sizes="(max-width: 1024px) 100vw, 380px"
                            className="object-cover pointer-events-none"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#04040A]/85 via-[#04040A]/20 to-transparent" />
                          <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#04040A]/85 border border-[#60A5FA]/45 text-[10px] font-bold tracking-[0.14em] uppercase text-[#93C5FD]">
                            Domain 0{idx + 1}
                          </span>
                        </div>

                        <p className="text-[11px] font-semibold text-[#1D4ED8] leading-snug mb-1.5">
                          {service.tagline}
                        </p>

                        <div className="p-2.5 sm:p-3 rounded-xl bg-white border-l-[3px] border-[#2563EB] border border-slate-200">
                          <span className="text-[9.5px] font-bold text-[#1D4ED8] uppercase tracking-[0.12em] block mb-0.5">
                            {service.impact ? "Expected Outcome" : "Ideal Client Profile"}
                          </span>
                          <p className="text-xs text-slate-800 font-medium leading-snug line-clamp-2">
                            {service.impact || service.idealFor}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-3 pt-1">
                        <span className="text-[11px] text-slate-500">
                          Confidential Diagnostic
                        </span>
                        <Button
                          href={`/contact?type=${service.id}`}
                          variant="light-primary"
                          size="sm"
                        >
                          Enquire Now
                        </Button>
                      </div>
                    </div>

                    {/* Right Content: Summary + Deliverables Matrix */}
                    <div className="lg:col-span-8 flex flex-col justify-between gap-3">
                      <div className="pb-2.5 border-b border-slate-200">
                        <h3 className="text-lg sm:text-xl font-normal text-[#0F172A] tracking-tight">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                          {service.description || service.summary}
                        </p>
                      </div>

                      <div className="rounded-xl bg-white border border-slate-200 p-3.5 sm:p-4 flex-1">
                        <span className="text-[10px] uppercase tracking-[0.14em] font-bold text-[#1D4ED8] block mb-2.5">
                          Core Strategic Deliverables
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                          {service.deliverables.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-2 text-[11.5px] sm:text-xs text-slate-700 leading-snug"
                            >
                              <Check
                                className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5"
                                strokeWidth={2.2}
                              />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Progress Dots */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            {services.map((service, idx) => (
              <button
                key={service.id}
                type="button"
                aria-label={`Select domain ${idx + 1}: ${service.title}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-7 bg-[#2563EB]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
            <span className="ml-2 text-[11px] font-medium text-slate-500 tabular-nums">
              0{activeIndex + 1} / 0{total}
            </span>
          </div>

          <p className="text-[11px] text-slate-500">
            Slide or click any domain pill to inspect consulting deliverables
          </p>
        </div>
      </div>
    </section>
  );
}
