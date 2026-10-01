"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Menu } from "lucide-react";

const SHOWCASE_VENTURES = [
  {
    id: "web-tycoons",
    name: "Web Tycoons",
    role: "Founder & Chief Strategist",
    subtitle: "(Premier 15+ Year Digital Agency & 3,700+ Platforms)",
    badge: "Digital Agency & Tech Ecosystem",
    period: "2008 â€“ Present",
    href: "/digital-growth",
    image: "/images/roles/web-tycoons-showcase.jpg",
    highlight: "Delivered 3,700+ web platforms and performance marketing engines across 15+ industry sectors.",
  },
  {
    id: "karma-ayurveda",
    name: "Karma Ayurveda",
    role: "Executive Consultant",
    subtitle: "(Healthcare & CRM Transformation Across 30+ Centers)",
    badge: "Healthcare & Wellness Enterprise",
    period: "Strategic Advisory Mandate",
    href: "/karma-ayurveda",
    image: "/images/roles/karma-ayurveda-showcase.jpg",
    highlight: "End-to-end modernization of patient acquisition, enterprise CRM routing, and nationwide franchise expansion.",
  },
  {
    id: "hhc",
    name: "Happy Hospitality Club",
    role: "Co-Director",
    subtitle: "(Elite Multi-City Hospitality & F&B Ecosystem)",
    badge: "Hospitality Industry Community",
    period: "Leadership & Co-Founder",
    href: "/hhc",
    image: "/images/roles/hhc-showcase.jpg",
    highlight: "Uniting luxury hoteliers, restaurateurs, and star vendor partners across structured collaboration chapters.",
  },
  {
    id: "bni",
    name: "BNI Regional Chapter",
    role: "Chapter President & Member",
    subtitle: "(High-Performing Referral Chapters & Executive Network)",
    badge: "Executive Business Networking",
    period: "Executive Chapter Leadership",
    href: "/about#bni-leadership",
    image: "/images/roles/bni-showcase.jpg",
    highlight: "Driving structured referral mechanisms and executive mentorship for hundreds of business promoters.",
  },
  {
    id: "msme-forums",
    name: "MSME & Corporate Summits",
    role: "Keynote Speaker & Mentor",
    subtitle: "(50+ Keynotes on Business Scaling & Google Visibility)",
    badge: "Executive Education & Keynotes",
    period: "National Stages & Masterclasses",
    href: "/speaking",
    image: "/images/roles/keynote-speaker-showcase.jpg",
    highlight: "High-voltage keynote sessions on digital transformation, founder freedom, and operational systems.",
  },
];

export default function RolesScroller() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const total = SHOWCASE_VENTURES.length;

  const dragStartX = useRef(0);
  const dragDistance = useRef(0);
  const hasDragged = useRef(false);
  const wheelLock = useRef(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay with loop
  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, isDragging, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const activeVenture = SHOWCASE_VENTURES[currentIndex];

  // Mouse & Touch Pointer Drag Handlers (Grab and Scroll)
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    dragStartX.current = e.clientX;
    dragDistance.current = 0;
    hasDragged.current = false;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX.current;
    dragDistance.current = diff;
    if (Math.abs(diff) > 8) {
      hasDragged.current = true;
    }
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    if (dragDistance.current > 40) {
      prevSlide();
    } else if (dragDistance.current < -40) {
      nextSlide();
    }
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 2500);
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > 25) {
      if (wheelLock.current) return;
      wheelLock.current = true;
      if (e.deltaX > 0) nextSlide();
      else prevSlide();
      setTimeout(() => { wheelLock.current = false; }, 400);
    }
  };

  const handleClickCapture = (e) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section
      id="roles-ecosystems"
      className="min-h-screen py-8 sm:py-10 md:py-12 flex flex-col justify-center bg-[#0E100F] text-[#FFFCE1] relative font-sans overflow-hidden border-b border-white/10 select-none"
    >
      <div className="w-full mx-auto">
        {/* Top Left Title: Exact GSAP Showcase Typography */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-16 mb-3 sm:mb-4 md:mb-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFFCE1] font-sans">
            Showcase
          </h2>
        </div>

        {/* The Horizontal Viewport Slider Stage (Grab & Scroll, Loop, Autoplay) */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onWheel={handleWheel}
          onClickCapture={handleClickCapture}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!isDragging) setIsPaused(false);
          }}
          className="relative w-full overflow-hidden py-2 sm:py-3 cursor-grab active:cursor-grabbing select-none touch-pan-y"
        >
          {/* Track container with center alignment */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 transition-transform duration-500 ease-out">
            {SHOWCASE_VENTURES.map((item, idx) => {
              // Circular offset relative to currentIndex (-2, -1, 0, 1, 2)
              let offset = (idx - currentIndex + total) % total;
              if (offset > total / 2) offset -= total;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 1; // Center + 1 card visible on each side

              if (!isVisible) return null;

              return (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative shrink-0 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out group ${
                    isCenter
                      ? "w-[88vw] sm:w-[80vw] md:w-[72vw] lg:w-[60vw] max-w-[940px] h-[220px] sm:h-[290px] md:h-[350px] shadow-2xl ring-1 ring-white/20 z-20 opacity-100"
                      : "w-[45vw] sm:w-[35vw] md:w-[28vw] lg:w-[24vw] max-w-[420px] h-[200px] sm:h-[260px] md:h-[310px] opacity-35 hover:opacity-75 z-10 hidden sm:block"
                  }`}
                >
                  {/* Full-bleed visual image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    priority={isCenter}
                    sizes="(max-width: 1024px) 90vw, 940px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                  {/* Top Header Row of Card */}
                  <div className="absolute top-3.5 sm:top-6 left-3.5 sm:left-6 right-3.5 sm:right-6 flex items-center justify-between z-10">
                    <span className="text-[9px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-black/70 text-[#C2E8FF] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/15 backdrop-blur-md">
                      {item.role}
                    </span>

                    {/* GSAP-style hamburger / action badge */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-white transition-colors">
                      <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  {/* Center Branding Watermark (Only visible when center) */}
                  {isCenter && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6 pointer-events-none z-10">
                      <span className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-[#C2E8FF] font-bold mb-1.5 sm:mb-2 drop-shadow-md">
                        {item.badge}
                      </span>
                      <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg max-w-xl">
                        {item.name}
                      </h3>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-200/90 max-w-md line-clamp-2 drop-shadow-md hidden sm:block">
                        {item.highlight}
                      </p>
                    </div>
                  )}

                  {/* Bottom Strip of Card */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between z-10">
                    <span className="text-xs sm:text-sm font-semibold text-white/90 drop-shadow-md truncate">
                      {item.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-300 bg-black/50 px-2 sm:px-2.5 py-0.5 rounded-full border border-white/10 hidden sm:inline">
                      {item.period}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar: Matching Exact GSAP Showcase Layout */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-16 mt-3 sm:mt-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          {/* Bottom Left: Title, Subtitle, and Explore All Showcases button */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5">
              {activeVenture.name}
            </h4>

            <p className="text-xs sm:text-sm text-slate-400 font-normal mb-2 sm:mb-3">
              {activeVenture.subtitle}
            </p>

            <Link
              href={activeVenture.href}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black text-xs font-semibold tracking-wide transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>Explore All Showcases</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Bottom Right: Circular Navigation Arrows matching GSAP */}
          <div className="flex items-center gap-2.5 sm:gap-3 self-end sm:self-center">
            <button
              onClick={() => {
                prevSlide();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 3000);
              }}
              aria-label="Previous Showcase"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-200 active:scale-90 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
            </button>

            <button
              onClick={() => {
                nextSlide();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 3000);
              }}
              aria-label="Next Showcase"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-200 active:scale-90 shadow-sm"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

