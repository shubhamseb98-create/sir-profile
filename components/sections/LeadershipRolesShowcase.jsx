"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const ROLE_SHOWCASE_IMAGES = {
  "web-tycoons": "/images/transformations/webtycoons-studio.jpg",
  "karma-ayurveda": "/images/transformations/karma-clinic-ops.jpg",
  "hhc": "/images/transformations/hhc-hospitality-roundtable.jpg",
  "bni": "/images/roles/bni-showcase.jpg",
  "speaker-mentor": "/images/roles/keynote-speaker-showcase.jpg",
};

export default function LeadershipRolesShowcase({ roles = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!roles || roles.length === 0) return null;

  const currentRole = roles[activeIndex];
  const currentNum = String(activeIndex + 1).padStart(2, "0");
  const totalNum = String(roles.length).padStart(2, "0");
  const imageSrc =
    ROLE_SHOWCASE_IMAGES[currentRole.id] || "/images/transformations/webtycoons-studio.jpg";

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % roles.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + roles.length) % roles.length);
  };

  return (
    <section
      id="leadership-roles"
      className="py-[60px] bg-[#FFFFFF] text-[#0F172A] relative font-sans border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <SectionHeading
            eyebrow="INSTITUTIONAL CREDIBILITY"
            title="Leadership Roles & Ecosystems"
            light={true}
            compact={true}
            animate={false}
            className="!mb-0"
          />

          {/* Role Tab Selector + Prev/Next */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {roles.map((r, idx) => {
                const isSelected = activeIndex === idx;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 shrink-0 cursor-pointer border",
                      isSelected
                        ? "bg-[#060D1A] text-[#F5E2A3] border-[#060D1A] shadow-sm"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                    )}
                  >
                    {r.name.split(" (")[0]}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 ml-auto sm:ml-2 pl-2 border-l border-slate-200">
              <span className="text-xs font-semibold text-slate-500 tabular-nums mr-1">
                {currentNum} / {totalNum}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous role"
                className="w-8 h-8 rounded-full border border-slate-300 bg-white text-slate-700 hover:border-[#060D1A] hover:text-[#060D1A] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next role"
                className="w-8 h-8 rounded-full border border-slate-300 bg-white text-slate-700 hover:border-[#060D1A] hover:text-[#060D1A] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Clean Architectural Venture Dossier Card */}
        <article className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.05)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Left Visual Frame (5 Cols) */}
            <div className="md:col-span-5 relative min-h-[260px] sm:min-h-[340px] bg-[#060D1A]">
              <Image
                src={imageSrc}
                alt={currentRole.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 520px"
                className="object-cover object-center transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/85 via-[#060D1A]/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#F5E2A3] font-semibold block mb-1">
                  {currentRole.period}
                </span>
                <p className="text-xl sm:text-2xl font-bold leading-tight">
                  {currentRole.name}
                </p>
              </div>
            </div>

            {/* Right Executive Dossier Details (7 Cols) */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#9A6B0C] block">
                      {currentRole.title}
                    </span>
                    <span className="text-xs text-slate-500">
                      {currentRole.badge}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1.5px rgba(15, 23, 42, 0.14)",
                    }}
                    className="font-black text-4xl leading-none select-none"
                  >
                    {currentNum}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  {currentRole.summary}
                </p>

                {/* Focus Areas */}
                <div className="mb-5">
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-500 block mb-2.5">
                    Key Leadership Mandates
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentRole.focusAreas.map((area) => (
                      <div
                        key={area}
                        className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#9A6B0C] shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Measured Impact Bar */}
                <div className="p-4 rounded-xl bg-[#FAF9F6] border-l-2 border-[#D4AF37]">
                  <span className="text-[10px] uppercase tracking-[0.14em] font-bold text-[#9A6B0C] block mb-0.5">
                    Verified Impact
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                    {currentRole.impactHighlight}
                  </p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-5 mt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                {currentRole.externalUrl ? (
                  <a
                    href={currentRole.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <span>Visit Official Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 font-medium">
                    Executive Leadership Mandate
                  </span>
                )}

                <Link
                  href={currentRole.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#060D1A] hover:bg-[#0F1E3A] text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <span>Explore Venture Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
