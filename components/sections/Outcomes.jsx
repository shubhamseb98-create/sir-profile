"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink, TrendingUp, Sparkles } from "lucide-react";

const OUTCOMES_CARDS = [
  {
    id: "roas-conversion",
    num: "01",
    tag: "Performance & CRO",
    title: "Improve ROAS, Conversions & Sales Pipeline",
    description:
      "Audit media spend efficiency, plug pipeline leakage, improve sales scripts, and drive higher unit conversion ratios at lower acquisition costs.",
    metric: "+340% ROAS Lift",
    image: "/images/cards/roas-analytics-real.jpg",
    tags: ["Media Spend Audit", "Conversion CRO", "Sales Velocity"],
    href: "/consulting#roas-conversion",
    color: "#C2E8FF",
  },
  {
    id: "brand-positioning",
    num: "02",
    tag: "Brand Strategy & Moat",
    title: "Build a Clear Brand & Market Position",
    description:
      "Define a commanding value proposition, sharp messaging hierarchy, and differentiated market standing that cuts through commodity noise.",
    metric: "3.2x Price Premium",
    image: "/images/cards/brand-strategy-real.jpg",
    tags: ["Positioning", "Value Proposition", "Commercial Moat"],
    href: "/consulting#brand-positioning",
    color: "#60A5FA",
  },
  {
    id: "digital-visibility",
    num: "03",
    tag: "Digital Acquisition",
    title: "Create Stronger Digital Visibility & Lead Flow",
    description:
      "Architect high-converting digital ecosystems, multi-channel acquisition funnels, and organic search dominance across high-intent queries.",
    metric: "8.4x Inbound Pipeline",
    image: "/images/cards/digital-growth-real.jpg",
    tags: ["Full-Funnel Strategy", "SEO Dominance", "Lead Routing"],
    href: "/digital-growth",
    color: "#818CF8",
  },
  {
    id: "crm-systems",
    num: "04",
    tag: "Operational Scale",
    title: "Scale Operations with CRM & Process Discipline",
    description:
      "Eliminate spreadsheet chaos with centralized CRM routing, role-based pipeline views, and structured operational dashboards for promoter clarity.",
    metric: "< 7 min Lead SLA",
    image: "/images/cards/crm-operations-real.jpg",
    tags: ["Custom CRM Routing", "SLA Dashboards", "Branch Operations"],
    href: "/consulting#crm-operations",
    color: "#34D399",
  },
  {
    id: "franchise-expansion",
    num: "05",
    tag: "Commercial Expansion",
    title: "Design Franchise & Multi-Location Expansion",
    description:
      "Formulate unit economics, franchise investor playbooks, operational compliance systems, and multi-city rollouts that protect brand equity.",
    metric: "Multi-City Replication",
    image: "/images/cards/franchise-expansion-real.jpg",
    tags: ["Unit Economics", "Franchise SOPs", "Multi-Branch Scale"],
    href: "/consulting#franchise-expansion",
    color: "#FBBF24",
  },
  {
    id: "strategic-alliances",
    num: "06",
    tag: "Ecosystem Alliances",
    title: "Create Strategic Partnerships & Ecosystem Alliances",
    description:
      "Facilitate high-value commercial tie-ups, institutional networking relationships, joint go-to-market motions, and vendor collaboration models.",
    metric: "Cross-Industry Distribution",
    image: "/images/cards/strategic-alliances-real.jpg",
    tags: ["Enterprise JVs", "Distribution Alliances", "B2B Trade Networks"],
    href: "/consulting#strategic-alliances",
    color: "#F472B6",
  },
  {
    id: "leadership-teams",
    num: "07",
    tag: "Governance & Speed",
    title: "Build Leadership Teams & Execution Discipline",
    description:
      "Establish monthly governance rhythms, performance dashboards, clear accountability matrices, and execution speed across key departments.",
    metric: "99.4% On-Time Execution",
    image: "/images/cards/leadership-governance-real.jpg",
    tags: ["Executive OKRs", "Weekly Rhythms", "Decision Matrices"],
    href: "/consulting#business-growth",
    color: "#A78BFA",
  },
];

export default function Outcomes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const total = OUTCOMES_CARDS.length;

  const dragStartX = useRef(0);
  const dragDistance = useRef(0);
  const hasDragged = useRef(false);
  const wheelLock = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay with loop
  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
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
      id="achieve-section"
      style={{ overflow: "clip" }}
      className="min-h-screen py-8 sm:py-10 md:py-12 flex flex-col justify-center bg-[#0E100F] text-white relative font-sans border-b border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/05 backdrop-blur-md mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C2E8FF]" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#C2E8FF] font-bold">
              STRATEGIC VALUE CREATION
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            What I Help Businesses Achieve
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto px-2">
            Transforming strategic intent into predictable operational reality. Explore seven core growth dimensions designed for promoter-led enterprises.
          </p>
        </div>

        {/* 3D Infinite Perspective Carousel Stage (Grab & Scroll, Loop, Autoplay) */}
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
          style={{ overflow: "clip" }}
          className="relative h-[340px] sm:h-[390px] md:h-[420px] w-full flex items-center justify-center perspective-[1200px] cursor-grab active:cursor-grabbing select-none touch-pan-y"
        >
          {OUTCOMES_CARDS.map((card, idx) => {
            // Calculate circular offset relative to activeIndex (-3 to +3)
            let offset = (idx - activeIndex + total) % total;
            if (offset > total / 2) offset -= total;

            const isCenter = offset === 0;
            // On mobile render 3 cards (-1, 0, +1); on desktop render 5 cards (-2 to +2)
            const maxOffset = isMobile ? 1 : 2;
            const isVisible = Math.abs(offset) <= maxOffset;

            if (!isVisible) return null;

            // 3D transform metrics based on distance from center
            const spacing = isMobile ? 95 : 210;
            const xShift = offset * spacing;
            const scale = isCenter ? 1.0 : Math.max(0.76, 1 - Math.abs(offset) * 0.12);
            const zIndex = 30 - Math.abs(offset) * 10;
            const opacity = isCenter ? 1 : Math.max(0.25, 0.85 - Math.abs(offset) * 0.28);
            const rotateY = offset * -14; // Angled facing inward

            return (
              <div
                key={card.id}
                onClick={() => setActiveIndex(idx)}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) translateX(${xShift}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  transformOrigin: "center center",
                  zIndex,
                  opacity,
                  width: isMobile ? "min(calc(100vw - 44px), 320px)" : "min(calc(100vw - 32px), 360px)",
                  maxWidth: "360px",
                  height: isMobile ? "330px" : "390px",
                }}
                className={`rounded-[22px] sm:rounded-[28px] border transition-all duration-500 ease-out cursor-pointer flex flex-col justify-end overflow-hidden select-none group ${
                  isCenter
                    ? "border-2 border-white shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(255,255,255,0.2)]"
                    : "border border-white/20 hover:border-white/40 shadow-xl opacity-75 hover:opacity-90"
                }`}
              >
                {/* 1. Full-Bleed Background Image covering the entire card */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="420px"
                  priority={isCenter}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* 2. Dark Bottom Gradient for High-Contrast Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-50% to-black/10 pointer-events-none" />

                {/* 3. Top-Right Floating Circular External Link Button */}
                <Link
                  href={card.href}
                  onClick={(e) => {
                    if (!isCenter) {
                      e.preventDefault();
                      setActiveIndex(idx);
                    }
                  }}
                  aria-label={`Open ${card.title}`}
                  className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/45 hover:bg-black/75 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </Link>

                {/* 4. Bottom Content Area */}
                <div className="relative z-10 p-4 sm:p-5 md:p-6 flex flex-col gap-2.5 sm:gap-3">
                  <div>
                    {/* Bold Headline */}
                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white leading-snug drop-shadow-md line-clamp-2">
                      {card.title}
                    </h3>

                    {/* Subtitle with Pin Icon */}
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm text-stone-200 font-medium mt-1 drop-shadow">
                      <span className="text-amber-400 text-xs sm:text-sm leading-none shrink-0">ðŸ“</span>
                      <span className="truncate">{card.metric} â€¢ {card.tag}</span>
                    </div>
                  </div>

                  {/* 5. Pure White Rounded Pill Button */}
                  <div className="pt-0.5 sm:pt-2">
                    <Link
                      href={card.href}
                      onClick={(e) => {
                        if (!isCenter) {
                          e.preventDefault();
                          setActiveIndex(idx);
                        }
                      }}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3.5 px-4 sm:px-5 rounded-full bg-white hover:bg-stone-100 text-stone-950 font-bold text-xs sm:text-sm tracking-normal transition-all shadow-xl whitespace-nowrap group/btn active:scale-95"
                    >
                      <span>{isCenter ? "Explore Advisory Scope" : "Select Capability"}</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1 text-stone-950 shrink-0" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Prev / Next Controls (Styled exactly like GSAP Demo) */}
        <div className="flex items-center justify-center gap-4 mt-4 sm:mt-5">
          <button
            onClick={() => {
              prevSlide();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            aria-label="Previous Capability"
            className="px-5 py-1.5 rounded-full border border-white/20 bg-white/05 text-xs sm:text-sm font-semibold text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95 shadow-sm"
          >
            Prev
          </button>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/05 border border-white/10">
            {OUTCOMES_CARDS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 3000);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-6 bg-[#C2E8FF]" : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              nextSlide();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            aria-label="Next Capability"
            className="px-5 py-1.5 rounded-full border border-white/20 bg-white/05 text-xs sm:text-sm font-semibold text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95 shadow-sm"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

