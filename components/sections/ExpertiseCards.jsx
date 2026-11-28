"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowLeft, ArrowRight, ArrowUpRight, Bookmark, Pause, Play } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const DOMAIN_IMAGES = {
  consulting: "/images/cards/leadership-governance-real.jpg",
  "digital-growth": "/images/cards/digital-growth-real.jpg",
  "brand-strategy": "/images/cards/brand-strategy-real.jpg",
  ecosystems: "/images/roles/web-tycoons-showcase.jpg",
  "crm-systems": "/images/cards/crm-operations-real.jpg",
  "sop-creation": "/images/roles/karma-ayurveda-showcase.jpg",
  "roas-conversion": "/images/cards/roas-analytics-real.jpg",
  franchise: "/images/cards/franchise-expansion-real.jpg",
  community: "/images/roles/hhc-showcase.jpg",
  speaking: "/images/roles/keynote-speaker-showcase.jpg",
};

const DOMAIN_LINKS = {
  consulting: "/consulting#business-growth",
  "digital-growth": "/consulting#digital-growth",
  "brand-strategy": "/consulting#brand-strategy",
  ecosystems: "/digital-growth",
  "crm-systems": "/consulting#crm-systems",
  "sop-creation": "/consulting#sop-development",
  "roas-conversion": "/consulting#digital-growth",
  franchise: "/consulting#franchise-expansion",
  community: "/hhc",
  speaking: "/speaking",
};

export default function ExpertiseCards() {
  const items = siteConfig.coreExpertise;
  const total = items.length;

  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragX = useMotionValue(0);
  const dragStartX = useRef(0);
  const dragDeltaX = useRef(0);
  const hasDragged = useRef(false);
  const wheelLock = useRef(false);

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused || isDragging || total <= 1) return;
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [isPaused, isDragging, nextSlide, total]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e) => {
      const delta = e.clientX - dragStartX.current;
      dragDeltaX.current = delta;
      if (Math.abs(delta) > 6) {
        hasDragged.current = true;
      }

      // Live elastic pull under cursor
      dragX.set(Math.max(-130, Math.min(130, delta * 0.55)));

      // Continuous multi-card step when pulled far in one drag
      if (delta <= -125) {
        nextSlide();
        dragStartX.current = e.clientX;
        dragDeltaX.current = 0;
        dragX.set(0);
      } else if (delta >= 125) {
        prevSlide();
        dragStartX.current = e.clientX;
        dragDeltaX.current = 0;
        dragX.set(0);
      }
    };

    const handleUp = () => {
      if (dragDeltaX.current < -36) {
        nextSlide();
      } else if (dragDeltaX.current > 36) {
        prevSlide();
      }

      animate(dragX, 0, { type: "spring", stiffness: 380, damping: 32 });
      setIsDragging(false);

      setTimeout(() => {
        hasDragged.current = false;
      }, 60);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };
  }, [isDragging, nextSlide, prevSlide, dragX]);

  const handlePointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
    hasDragged.current = false;
    setIsDragging(true);
  };

  const handleClickCapture = (e) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > 28) {
      if (wheelLock.current) return;
      wheelLock.current = true;
      if (e.deltaX > 0) nextSlide();
      else prevSlide();
      setTimeout(() => {
        wheelLock.current = false;
      }, 360);
    }
  };

  const activeItem = items[activeIdx] || items[0];
  const activeBg = DOMAIN_IMAGES[activeItem.id] || activeItem.image;
  const activeHref = DOMAIN_LINKS[activeItem.id] || "/consulting";
  const progressPercent = ((activeIdx + 1) / total) * 100;

  // Next 4 upcoming cards queued in the horizontal right deck
  const upcomingItems = [1, 2, 3, 4].map((offset) => {
    const idx = (activeIdx + offset) % total;
    return {
      ...items[idx],
      idx,
      photo: DOMAIN_IMAGES[items[idx].id] || items[idx].image,
    };
  });

  return (
    <section
      id="core-expertise"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[640px] lg:h-[680px] flex flex-col justify-between overflow-hidden bg-[#04040A] text-white font-sans border-y border-white/10 py-[60px] select-none"
    >
      {/* Expanding Full-Bleed Atmospheric Background Layer */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, scale: 1.09 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={activeBg}
            alt={activeItem.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Deep Obsidian Cinematic Scrims so foreground copy and cards stay crisp */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#04040A]/92 via-[#04040A]/58 to-[#04040A]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04040A]/95 via-[#04040A]/25 to-[#04040A]/55" />
        </motion.div>
      </AnimatePresence>

      {/* Top Site-Standard SectionHeading Header */}
      <div className="relative z-20 max-w-[1340px] w-full mx-auto px-4 sm:px-6 md:px-8 flex items-start justify-between gap-4">
        <SectionHeading
          eyebrow="STRATEGIC ARSENAL & DOMAINS"
          title="Core Expertise & Strategic Playbooks"
          align="left"
          light={false}
          compact={true}
          animate={false}
          className="!mb-0"
        />

        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          aria-label={isPaused ? "Resume domain showcase" : "Pause domain showcase"}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#090F1E]/80 border border-white/15 hover:border-[#60A5FA]/60 text-[10px] font-mono uppercase tracking-widest text-[#DBEAFE] backdrop-blur-md transition-colors cursor-pointer shrink-0 mt-1"
        >
          {isPaused ? <Play className="w-2.5 h-2.5 text-[#60A5FA]" /> : <Pause className="w-2.5 h-2.5 text-[#60A5FA]" />}
          <span>{isPaused ? "Paused" : "Auto"}</span>
        </button>
      </div>

      {/* Main Split Stage: Bottom-Left Active Spotlight + Bottom-Right Expanding Card Deck */}
      <div className="relative z-20 max-w-[1340px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:pr-14 xl:pr-8 mt-auto pt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-10">
        {/* Bottom-Left Editorial Copy */}
        <div className="w-full lg:w-[39%] xl:w-[38%] shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start"
            >
              {/* Clean Royal-Blue Practice Eyebrow Badge (No Orphan Dash) */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#93C5FD]">
                  {activeItem.category} — Practice {String(activeIdx + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-gradient-to-r from-[#3B82F6]/70 to-transparent"
                />
              </div>

              {/* Main Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-white leading-[1.08] tracking-tight mb-3.5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
                {activeItem.title}
              </h3>

              {/* Concise Summary */}
              <p className="text-xs sm:text-sm text-slate-200/85 leading-relaxed max-w-md mb-6 line-clamp-3">
                {activeItem.summary}
              </p>

              {/* Circular Strategy Icon + Outlined Glass Pill CTA */}
              <div className="flex items-center gap-3">
                <a
                  href="#strategy-call"
                  aria-label="Book a strategy call for this domain"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#4F46E5] border border-[#93C5FD]/50 hover:scale-105 text-white flex items-center justify-center shadow-[0_0_24px_rgba(37,99,235,0.55)] transition-transform"
                >
                  <Bookmark className="w-4 h-4" />
                </a>

                <Link
                  href={activeHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-[#2563EB] border border-white/35 hover:border-[#60A5FA] text-[11px] font-mono uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-300"
                >
                  <span>Explore Practice</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom-Right Interactive Upcoming Card Deck & Pagination Controls */}
        <div className="w-full lg:flex-1 min-w-0 flex flex-col gap-5">
          {/* Grabbable Upcoming Portrait Cards Row */}
          <div
            onPointerDown={handlePointerDown}
            onClickCapture={handleClickCapture}
            onWheel={handleWheel}
            onDragStart={(e) => e.preventDefault()}
            className={`overflow-hidden pb-1 pt-2 select-none touch-pan-y ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            <motion.div
              style={{ x: dragX }}
              className="flex items-stretch gap-3 sm:gap-4"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {upcomingItems.map((card, slotIdx) => (
                  <motion.button
                    key={card.id}
                    layout="position"
                    type="button"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    onClick={() => {
                      if (!hasDragged.current) {
                        setActiveIdx(card.idx);
                      }
                    }}
                    initial={{ opacity: 0, x: 40, scale: 0.94 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0.92 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    aria-label={`Preview ${card.title}`}
                    className={`group relative shrink-0 w-[178px] sm:w-[196px] xl:w-[216px] h-[240px] sm:h-[280px] lg:h-[304px] rounded-[18px] overflow-hidden border text-left transition-colors duration-300 shadow-[0_18px_40px_rgba(0,0,0,0.65)] ${
                      isDragging ? "cursor-grabbing" : "cursor-grab"
                    } ${
                      slotIdx === 0
                        ? "border-[#60A5FA]/75 hover:border-[#93C5FD]"
                        : "border-white/20 hover:border-[#60A5FA]/70"
                    }`}
                  >
                    <Image
                      src={card.photo}
                      alt={card.title}
                      fill
                      sizes="240px"
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out pointer-events-none select-none"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04040A]/92 via-[#04040A]/25 to-black/20" />

                  {/* Card Footer Copy */}
                  <div className="relative z-10 h-full p-3.5 flex flex-col justify-between">
                    <span className="self-start px-2 py-0.5 rounded-full bg-black/50 border border-white/20 text-[9.5px] font-mono text-slate-200 backdrop-blur-md">
                      {String(card.idx + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <span className="block text-[9px] font-mono uppercase tracking-[0.14em] text-[#93C5FD] mb-0.5">
                        {card.category}
                      </span>
                      <span className="block text-[12.5px] sm:text-[13px] font-normal text-white leading-snug line-clamp-2 group-hover:text-[#DBEAFE] transition-colors">
                        {card.title}
                      </span>
                    </div>
                  </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Bottom Controls Bar: Prev / Next Arrows + Horizontal Track + Giant Counter */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous domain"
                className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-[#2563EB] border border-white/25 hover:border-[#60A5FA] text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next domain"
                className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-[#2563EB] border border-white/25 hover:border-[#60A5FA] text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Linear Progress Track */}
            <div className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#3B82F6] to-[#93C5FD]"
                initial={false}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Large Tabular Slide Counter */}
            <div className="shrink-0 flex items-baseline gap-1 tabular-nums">
              <span className="text-2xl sm:text-3xl font-normal text-white leading-none">
                {String(activeIdx + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-mono text-slate-400">
                / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
