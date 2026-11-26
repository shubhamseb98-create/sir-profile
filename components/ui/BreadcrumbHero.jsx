"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import RollingText from "@/components/ui/RollingText";
import DarkSectionLining from "@/components/ui/DarkSectionLining";

export default function BreadcrumbHero({
  eyebrow = "EXECUTIVE ADVISORY",
  title,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }],
  imageSrc,
  badge,
  className = "",
}) {
  return (
    <section
      className={`relative bg-[#060D1A] text-white overflow-hidden pt-28 pb-12 md:pt-36 md:pb-14 border-b border-white/10 font-sans ${className}`}
    >
      {/* Unified Midnight Navy Architectural Grid & Side Depth */}
      <DarkSectionLining showTopBeam={false} showBottomBeam={true} />

      {/* Optional subtle monochrome architectural backdrop — kept restrained for clean legibility */}
      {imageSrc && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={imageSrc}
            alt={typeof title === "string" ? title : "Header Banner"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.14] grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1A] via-[#060D1A]/85 to-[#060D1A]/75" />
        </div>
      )}

      {/* Hero Content Container */}
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Clean Architectural Breadcrumb Trail */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 text-xs text-slate-400 mb-5 pb-3 border-b border-white/10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#F5E2A3] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <span key={crumb.label || idx} className="inline-flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="text-slate-300 hover:text-[#F5E2A3] transition-colors truncate max-w-[160px] sm:max-w-none"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#E5C665] font-medium truncate max-w-[220px] sm:max-w-none">
                    {crumb.label}
                  </span>
                )}
              </span>
            );
          })}
        </nav>

        {/* Content Box */}
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-3.5">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#0B172C] text-[#F6E3A8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-bold leading-none">
                  {eyebrow}
                </span>
              </div>
            )}
            {badge && (
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#060D1A] bg-gold-metallic px-3 py-1 rounded-full">
                {badge}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.14] mb-4">
            {typeof title === "string" ? (
              <RollingText
                text={title}
                highlightCount={2}
                highlightClassName="text-[#F5D57A] font-extrabold"
              />
            ) : (
              title
            )}
          </h1>

          {description && (
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              {typeof description === "string" ? (
                <RollingText text={description} delay={0.12} duration={1.0} stagger={0.012} />
              ) : (
                description
              )}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
