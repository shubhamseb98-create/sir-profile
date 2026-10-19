"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight, Sparkles, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// Curated high-res showcase photographs for executive ventures
const ROLE_SHOWCASE_IMAGES = {
  "web-tycoons": "/images/roles/web-tycoons-showcase.jpg",
  "karma-ayurveda": "/images/roles/karma-ayurveda-showcase.jpg",
  "hhc": "/images/roles/hhc-showcase.jpg",
  "bni": "/images/roles/bni-showcase.jpg",
  "speaker-mentor": "/images/roles/keynote-speaker-showcase.jpg",
};

export default function LeadershipRolesShowcase({ roles = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!roles || roles.length === 0) return null;

  const currentRole = roles[activeIndex];
  const imageSrc = ROLE_SHOWCASE_IMAGES[currentRole.id] || currentRole.image;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + roles.length) % roles.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % roles.length);
  };

  return (
    <section className="min-h-screen py-6 sm:py-8 lg:py-10 flex flex-col justify-center bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
      {/* Homepage style balanced ambient glow */}
      <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 my-auto relative z-10 flex flex-col justify-center">
        {/* Compact Section Heading */}
        <SectionHeading
          number="01"
          eyebrow="ACTIVE MANDATES"
          title="Current Leadership Positions"
          description="Direct executive roles spanning digital engineering, clinical healthcare advisory, and executive communities."
          light={true}
          className="mb-4 sm:mb-5"
        />

        {/* Interactive Navigation Tabs & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-5 pb-3 border-b border-slate-200/80">
          {/* Scrollable / Wrap Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {roles.map((role, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-black text-white font-bold shadow-sm ring-1 ring-black"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/60"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-[#CFFF04]" : "bg-slate-400"
                    }`}
                  />
                  <span>{role.name}</span>
                </button>
              );
            })}
          </div>

          {/* Prev / Next Arrows + Counter */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <span className="text-xs font-mono text-slate-500 font-semibold mr-1">
              <span className="text-black font-extrabold">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(roles.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Venture"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-black hover:text-[#CFFF04] text-slate-800 border border-slate-200 transition-colors flex items-center justify-center cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Venture"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-black hover:text-[#CFFF04] text-slate-800 border border-slate-200 transition-colors flex items-center justify-center cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Active Venture Card: Sleek Compact Horizontal Layout (Image 3 Style) */}
        <article
          key={currentRole.id}
          className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:border-slate-900 transition-all duration-300 relative overflow-hidden flex flex-col md:grid md:grid-cols-12 md:h-[430px] lg:h-[420px]"
        >
          {/* Top Edge Accent Beam on Hover */}
          <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#CFFF04] to-transparent z-20 pointer-events-none" />

          {/* Left Media Column (5 Cols) */}
          <div className="relative w-full h-52 sm:h-60 md:h-full md:col-span-5 overflow-hidden bg-slate-950 shrink-0">
            <Image
              src={imageSrc}
              alt={currentRole.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
            {/* Smooth Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/50 to-black/25" />

            {/* Floating Top Badges */}
            <div className="absolute inset-x-0 top-0 p-3.5 sm:p-4 flex items-center justify-between gap-2 z-10">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider bg-black/85 backdrop-blur-md text-[#CFFF04] px-3 py-1 rounded-full border border-[#CFFF04]/30 shadow-sm truncate max-w-[210px] sm:max-w-none">
                {currentRole.badge}
              </span>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-medium bg-black/85 backdrop-blur-md text-white/90 px-2.5 py-1 rounded-full border border-white/15 shadow-sm shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CFFF04] animate-pulse" />
                <span>{currentRole.period}</span>
              </div>
            </div>

            {/* Title & Role overlay on bottom of media */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
              <span className="inline-block text-[10px] uppercase tracking-widest font-mono font-bold text-[#CFFF04] mb-0.5 drop-shadow-sm">
                {currentRole.title}
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-md leading-tight">
                {currentRole.name}
              </h2>
            </div>
          </div>

          {/* Right Content Column (7 Cols) - Compact & Structured */}
          <div className="md:col-span-7 p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between h-full bg-white min-h-0">
            <div>
              {/* Summary Paragraph */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                {currentRole.summary}
              </p>

              {/* Key Mandates in 2-Column Micro-Grid */}
              <div className="mb-3 sm:mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-mono text-slate-900 font-bold">
                    Key Mandates & Focus
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-medium">
                    {currentRole.focusAreas.length} Strategic Pillars
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {currentRole.focusAreas.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 hover:bg-slate-100/70 transition-all text-[11px] text-slate-700"
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-black text-[#CFFF04] flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span className="font-medium leading-tight truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compact Demonstrated Scale Box */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-slate-50 via-slate-100/60 to-white border border-slate-200/80 flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-black text-[#CFFF04] flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-0.5">
                    Demonstrated Scale & Impact
                  </span>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-900 leading-snug line-clamp-2">
                    {currentRole.impactHighlight}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0">
              {currentRole.externalUrl ? (
                <a
                  href={currentRole.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-black font-semibold transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Platform Site</span>
                  <span className="sm:hidden">Website</span>
                </a>
              ) : (
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-medium truncate max-w-[150px] sm:max-w-none">
                  {currentRole.title}
                </span>
              )}

              <Link
                href={currentRole.href}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black hover:bg-[#CFFF04] text-white hover:text-black text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-sm hover:shadow-md group/btn shrink-0"
              >
                <span>View Role</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
