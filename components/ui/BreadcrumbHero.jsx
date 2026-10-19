"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import RollingText from "@/components/ui/RollingText";

export default function BreadcrumbHero({
  eyebrow = "EXECUTIVE ADVISORY",
  title,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }],
  imageSrc = "/images/hero/hero-corporate-skyline.jpg",
  badge,
  className = "",
}) {
  return (
    <section
      className={`relative bg-black text-white overflow-hidden pt-32 pb-14 md:pt-36 md:pb-16 min-h-[360px] md:min-h-[400px] flex flex-col justify-center border-b border-white/10 ${className}`}
    >
      {/* 1. Cinematic Background Image with Parallax-grade presentation */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={typeof title === "string" ? title : "Header Banner"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.35] contrast-125 scale-105"
        />
        {/* Layered cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(207,255,4,0.12),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85" />
      </div>

      {/* 2. Hero Content Container */}
      <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 relative z-10 my-auto">
        {/* Breadcrumb Trail */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono text-slate-300 mb-5 shadow-lg"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-[#CFFF04] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <span key={crumb.label || idx} className="inline-flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-slate-500 shrink-0" />
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#CFFF04] transition-colors truncate max-w-[150px] sm:max-w-none"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#CFFF04] font-semibold truncate max-w-[200px] sm:max-w-none">
                    {crumb.label}
                  </span>
                )}
              </span>
            );
          })}
        </nav>

        {/* Content Box */}
        <div className="max-w-3xl">
          {/* Eyebrow & Badge row */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {eyebrow && (
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#CFFF04] font-mono font-bold block">
                {eyebrow}
              </span>
            )}
            {badge && (
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-black bg-[#CFFF04] px-2.5 py-0.5 rounded-full shadow-[0_0_12px_rgba(207,255,4,0.3)]">
                {badge}
              </span>
            )}
          </div>

          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15] mb-4">
            {typeof title === "string" ? <RollingText text={title} /> : title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              {typeof description === "string" ? (
                <RollingText text={description} delay={0.15} duration={1.1} stagger={0.015} />
              ) : (
                description
              )}
            </p>
          )}
        </div>
      </div>

      {/* Ambient bottom transition glow */}
      <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
