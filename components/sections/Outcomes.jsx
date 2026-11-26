"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

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
    color: "#D4AF37",
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
    color: "#DFBE54",
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
    color: "#9E7E1E",
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
    // Only drag with primary mouse button or touch
    if (e.pointerType === "mouse" && e.button !== 0) return;
    setIsDragging(true);
    setIsPaused(true);
    dragStartX.current = e.clientX;
    dragDistance.current = 0;
    hasDragged.current = false;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX.current;
    dragDistance.current = diff;
    if (Math.abs(diff) > 6) {
      hasDragged.current = true;
    }
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    try {
      if (e?.currentTarget?.hasPointerCapture?.(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // ignore
    }
    if (dragDistance.current > 35) {
      prevSlide();
    } else if (dragDistance.current < -35) {
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
      className="py-[60px] bg-[#060D1A] text-white relative font-sans border-b border-white/10"
    >
      {/* ── Background Lining Texture & Subtle Glow ── */}
      <DarkSectionLining glowPosition="center" showTopBeam={true} showBottomBeam={true} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        {/* Section Header */}
        <ScrollReveal distance={30} delay={0.1} className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8">
          <SectionHeading
            number="02"
            eyebrow="STRATEGIC VALUE CREATION"
            title="What I Help Businesses Achieve"
            align="center"
            light={false}
            compact={true}
            animate={false}
            className="!mb-0"
          />
        </ScrollReveal>

        {/* 3D Infinite Perspective Carousel Stage (Grab & Scroll, Loop, Autoplay) */}
        <ScrollReveal distance={35} delay={0.2} scale={0.98}>
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onDragStart={(e) => e.preventDefault()}
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
                onDragStart={(e) => e.preventDefault()}
                onClick={() => {
                  if (!hasDragged.current) {
                    setActiveIndex(idx);
                  }
                }}
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
                className={`rounded-[22px] sm:rounded-[28px] border transition-all duration-500 ease-out cursor-grab active:cursor-grabbing flex flex-col justify-end overflow-hidden select-none group ${
                  isCenter
                    ? "border-2 border-[#D4AF37] shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
                    : "border border-white/20 hover:border-[#D4AF37]/50 shadow-xl opacity-75 hover:opacity-90"
                }`}
              >
                {/* 1. Full-Bleed Background Image covering the entire card */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="420px"
                  priority={isCenter}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                />

                {/* 2. Light Bottom Scrim so Full-Bleed Photography Breathes */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/85 via-[#060D1A]/25 via-40% to-transparent pointer-events-none" />

                {/* 3. Top-Left Number Tag */}
                <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 px-2.5 py-1 rounded-full bg-[#060D1A]/75 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] font-mono font-bold text-[#F5E2A3] tracking-widest">
                  {card.num}
                </span>

                {/* 4. Bottom Frosted Smoked-Glass Title Plaque */}
                <div className="relative z-10 m-3 sm:m-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#060D1A]/75 backdrop-blur-md border border-white/12 group-hover:border-[#D4AF37]/40 transition-colors flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`w-[3px] self-stretch rounded-full shrink-0 ${
                      isCenter ? "bg-gold-metallic" : "bg-white/25"
                    }`}
                  />
                  <h3 className="text-[15px] sm:text-base md:text-[18px] font-semibold text-white leading-snug tracking-tight line-clamp-2">
                    {(() => {
                      const words = card.title.split(" ");
                      const splitAt = Math.max(1, words.length - 2);
                      return (
                        <>
                          <span>{words.slice(0, splitAt).join(" ")} </span>
                          <span className={isCenter ? "text-gold-metallic font-bold" : "text-slate-200"}>
                            {words.slice(splitAt).join(" ")}
                          </span>
                        </>
                      );
                    })()}
                  </h3>
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
            className="px-5 py-1.5 rounded-full border border-white/20 bg-white/05 text-xs sm:text-sm font-semibold text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200 active:scale-95 shadow-sm"
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
                  activeIndex === i ? "w-6 bg-gold-metallic" : "w-1.5 bg-white/30 hover:bg-white/60"
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
            className="px-5 py-1.5 rounded-full border border-white/20 bg-white/05 text-xs sm:text-sm font-semibold text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200 active:scale-95 shadow-sm"
          >
            Next
          </button>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

