"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useMotionValue, motion } from "framer-motion";

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

export default function ExpertiseCards() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const currentIdxRef = useRef(0);

  const [activeIdx, setActiveIdx] = useState(0);
  const total = siteConfig.coreExpertise.length;

  // Direct GPU-accelerated MotionValues
  const x = useMotionValue(0);
  const progressScale = useMotionValue(0.1);

  // Rock-solid scroll listener: computes exact pinned progress 0.0 -> 1.0 across any browser
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const r = sectionRef.current.getBoundingClientRect();
      const range = r.height - window.innerHeight;
      if (range > 0) {
        // p goes cleanly from 0.0 (pinned top) to 1.0 (pinned end)
        const p = Math.max(0, Math.min(1, -r.top / range));

        // Total horizontal distance the track needs to travel
        const totalTravel = trackRef.current
          ? Math.max(trackRef.current.scrollWidth - window.innerWidth, 0)
          : (total * 700 - window.innerWidth);

        // Update card track transform directly
        x.set(-p * totalTravel);

        // Update top progress bar
        progressScale.set(0.1 + p * 0.9);

        // Update active index only when changed to avoid re-renders
        const idx = Math.min(Math.floor(p * total), total - 1);
        if (idx !== currentIdxRef.current) {
          currentIdxRef.current = idx;
          setActiveIdx(idx);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    const t1 = setTimeout(onScroll, 100);
    const t2 = setTimeout(onScroll, 500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [total, x, progressScale]);

  // Arrow button navigation
  const goToIdx = (idx) => {
    if (!sectionRef.current) return;
    const clamped = Math.max(0, Math.min(idx, total - 1));
    const range = sectionRef.current.offsetHeight - window.innerHeight;
    const top = sectionRef.current.offsetTop + (clamped / (total - 1)) * range;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45 && currentIdxRef.current < total - 1) goToIdx(currentIdxRef.current + 1);
    else if (diff < -45 && currentIdxRef.current > 0) goToIdx(currentIdxRef.current - 1);
  };

  const activeItem = siteConfig.coreExpertise[activeIdx] || siteConfig.coreExpertise[0];

  return (
    <section
      ref={sectionRef}
      id="core-expertise"
      suppressHydrationWarning
      className="relative h-[480vh] bg-[#F1F5FB] text-[#0F172A] border-y border-slate-200 select-none"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden z-10">
        {/* Subtle side-edge glow */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-400/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-sky-400/12 rounded-full blur-[130px] pointer-events-none" />

        {/* Header */}
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-10 lg:px-16 z-20 shrink-0 pt-3 sm:pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2.5 sm:gap-3 border-b border-slate-200 pb-2.5 sm:pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#334155] text-[9px] sm:text-[11px] font-mono font-bold tracking-widest uppercase mb-1 sm:mb-1.5">
                <Sparkles className="w-3 h-3 text-[#38BDF8]" />
                <span>STRATEGIC ARSENAL &amp; DOMAINS</span>
              </div>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Core Expertise &amp; Strategic Playbooks
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-normal">
                Scroll down to glide horizontally through 10 specialized execution practices.
              </p>
            </div>
            <div className="flex items-center gap-3.5 self-start md:self-end">
              <div className="text-left md:text-right">
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#334155] block">
                  Domain {String(activeIdx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-600 font-semibold truncate block max-w-[160px] sm:max-w-[180px]">
                  {activeItem.title}
                </span>
              </div>
              <div className="w-20 sm:w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden border border-slate-300 shadow-inner">
                <motion.div
                  suppressHydrationWarning
                  className="h-full bg-gradient-to-r from-[#334155] to-[#38BDF8] rounded-full"
                  style={{ scaleX: progressScale, transformOrigin: "left" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card Track */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="w-full flex-1 flex items-center overflow-hidden z-10"
        >
          <motion.div
            ref={trackRef}
            suppressHydrationWarning
            style={{ x }}
            className="flex items-center gap-4 sm:gap-6 lg:gap-8 pl-4 sm:pl-10 lg:pl-16 pr-12 sm:pr-24"
          >
            {siteConfig.coreExpertise.map((item, idx) => {
              const isCurrent = activeIdx === idx;
              const imageSrc = DOMAIN_IMAGES[item.id] || "/images/cards/brand-positioning.jpg";
              return (
                <div
                  key={item.id}
                  className={`w-[85vw] sm:w-[540px] md:w-[620px] lg:w-[680px] rounded-2xl sm:rounded-3xl bg-white p-3.5 sm:p-5 md:p-6 border shrink-0 transition-all duration-300 flex flex-col justify-between shadow-lg relative overflow-hidden group ${
                    isCurrent
                      ? "border-[#334155] ring-1 ring-[#334155]/30 shadow-[0_8px_40px_rgba(37,99,235,0.18)]"
                      : "border-slate-200 hover:border-slate-300 opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#334155]/30 to-transparent" />
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-[#334155] px-2 py-0.5 rounded-full border border-blue-200">
                        Practice {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-500">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-base sm:text-xl font-mono font-extrabold text-slate-200">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-5 my-2.5 sm:my-3.5 items-center">
                    <div className="md:col-span-5 relative h-28 sm:h-36 md:h-40 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                      <Image
                        src={imageSrc}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-2 left-2 text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                        {item.category} Mandate
                      </span>
                    </div>
                    <div className="md:col-span-7 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-[#0F172A] mb-1 leading-snug group-hover:text-[#334155] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-[13px] text-slate-500 leading-relaxed mb-2.5 line-clamp-2 sm:line-clamp-3">
                          {item.summary}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 mb-2.5 sm:mb-3">
                          {["Unit Economics Focus","Founder Independence","Weekly KPI Governance","Structured SOP Playbooks"].map((pt) => (
                            <div key={pt} className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-600">
                              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#334155] shrink-0" />
                              <span className="truncate">{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Link
                        href={`/consulting#${item.id}`}
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#334155] hover:text-[#0A0F1A] transition-colors group/btn"
                      >
                        <span>Explore Domain Framework</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] sm:text-[11px] text-slate-400">
                    <span>Executive Advisory Mandate</span>
                    <span className="text-[#334155] font-mono">Dheeraj Aggarwal</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Status Bar */}
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-10 lg:px-16 z-20 shrink-0 pb-3 sm:pb-6 md:pb-8">
          <div className="flex items-center justify-between border-t border-slate-200 pt-2.5 sm:pt-3 text-xs text-slate-500">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-2 h-2 rounded-full bg-[#334155] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px]">
                Showing {activeIdx + 1} of {total} Strategic Practices
              </span>
              <div className="flex items-center gap-1.5 ml-2">
                <button onClick={() => goToIdx(activeIdx - 1)} disabled={activeIdx === 0} aria-label="Previous Practice" className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-slate-100 text-xs transition-colors">&larr;</button>
                <button onClick={() => goToIdx(activeIdx + 1)} disabled={activeIdx >= total - 1} aria-label="Next Practice" className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-slate-100 text-xs transition-colors">&rarr;</button>
              </div>
            </div>
            {activeIdx >= total - 1 ? (
              <a href="#roles-ecosystems" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#334155] hover:bg-[#0A0F1A] border border-[#0A0F1A] text-white text-[10px] sm:text-[11px] font-semibold transition-all group">
                <span>Continue to Showcase</span>
                <span className="group-hover:translate-y-0.5 transition-transform">&darr;</span>
              </a>
            ) : (
              <p className="text-[10px] sm:text-[11px] font-light text-slate-500 hidden sm:block">
                Scroll vertically to traverse strategic domains &darr;
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

