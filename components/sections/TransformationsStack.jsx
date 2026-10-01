"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { gsap, ScrollTrigger, initGSAP } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import { caseStudies } from "@/data/caseStudies";
import DarkSectionLining from "@/components/ui/DarkSectionLining";

// Representative imagery for the 3 featured transformation cases
const CASE_IMAGES = {
  "karma-ayurveda-systems-expansion": "/images/cards/crm-systems.jpg",
  "web-tycoons-agency-scale": "/images/cards/digital-visibility.jpg",
  "happy-hospitality-club-community": "/images/cards/hhc-hospitality.jpg",
};

export default function TransformationsStack() {
  const featuredCases = caseStudies.slice(0, 3);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    initGSAP();

    const cards = cardRefs.current.filter(Boolean);
    const total = cards.length;
    if (!cards[0] || total === 0) return;

    const isMob = window.innerWidth < 640;
    const rotationAmount = isMob ? 3.5 : 5.5;
    const scaleTarget = isMob ? 0.88 : 0.82;

    // 1. Initial State from skiper17: Card 0 centered, subsequent cards fully below viewport
    gsap.set(cards[0], { y: "0%", scale: 1, rotation: 0 });
    for (let i = 1; i < total; i++) {
      if (cards[i]) {
        gsap.set(cards[i], { y: "130%", scale: 1, rotation: 0 });
      }
    }

    // 2. Timeline identical to skiper17, with 10% rest buffer at the end
    const tl = gsap.timeline({ paused: true });

    // Step 1: Card 0 rotates/scales down, Card 1 glides up to center (progress 0.0 -> 0.45)
    tl.to(
      cards[0],
      {
        scale: scaleTarget,
        rotation: -rotationAmount,
        duration: 0.45,
        ease: "none",
      },
      0
    );
    tl.to(
      cards[1],
      {
        y: "0%",
        duration: 0.45,
        ease: "none",
      },
      0
    );

    // Step 2: Card 1 rotates/scales down, Card 0 scales further, Card 2 glides up to center (progress 0.45 -> 0.90)
    tl.to(
      cards[1],
      {
        scale: scaleTarget,
        rotation: rotationAmount,
        duration: 0.45,
        ease: "none",
      },
      0.45
    );
    tl.to(
      cards[0],
      {
        scale: scaleTarget * 0.90,
        rotation: -rotationAmount * 1.35,
        duration: 0.45,
        ease: "none",
      },
      0.45
    );
    tl.to(
      cards[2],
      {
        y: "0%",
        duration: 0.45,
        ease: "none",
      },
      0.45
    );

    // Buffer pause from 0.90 to 1.00 so Card 3 stays fully locked for reading before section exit
    tl.to({}, { duration: 0.10 }, 0.90);

    // 3. Rock-solid scroll progress listener: immune to layout shifts & smooth-scroll desync
    const updateProgress = () => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      const range = r.height - window.innerHeight;
      if (range > 0) {
        const p = Math.min(1, Math.max(0, -r.top / range));
        tl.progress(p);
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transformations"
      suppressHydrationWarning
      className="relative h-[280vh] bg-[#0A0F1A] border-b border-white/08 font-sans select-none"
    >
      {/* Sticky 100vh viewport lock: zero pin-spacer artifacts, zero dead space */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-start overflow-hidden pt-7 sm:pt-9 lg:pt-11 pb-3 sm:pb-5">
        {/* Background lining texture and subtle ambient glow */}
        <DarkSectionLining glowPosition="split" showTopBeam={true} showBottomBeam={true} />

        {/* Section Header: Unified 1:1 with site standard max-w-[1240px] layout */}
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 z-20 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
            <div>
              {/* Number Pill + Eyebrow */}
              <div className="flex items-center gap-2.5 mb-1.5 sm:mb-2">
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full tracking-wider border text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10">
                  04
                </span>
                <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#38BDF8]">
                  MEASURABLE IMPACT
                </span>
              </div>

              {/* Main Title Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.18] tracking-tight text-white">
                Featured Transformation Stories
              </h2>

              {/* Subtitle / Description */}
              <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm md:text-base leading-relaxed font-normal text-[#38BDF8] max-w-2xl">
                Rigorous strategy paired with structured operational execution. How strategic interventions solve systemic growth barriers.
              </p>

              {/* Modern Accent Bar */}
              <div className="mt-2.5 sm:mt-3 w-16 h-[3px] rounded-full bg-gradient-to-r from-[#38BDF8] to-[#334155]" />
            </div>

            <div className="shrink-0 hidden sm:block pb-0.5">
              <Button href="/case-studies" variant="secondary" size="md" icon="up-right">
                View All Case Studies
              </Button>
            </div>
          </div>
        </div>

        {/* Card Stacking Arena: Clean margin-top prevents header collision, content & image stretch to card bottom */}
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10 mt-4 sm:mt-5 lg:mt-6 flex items-center justify-center">
          <div className="relative w-full max-w-[1100px] h-[360px] sm:h-[390px] md:h-[410px]">
          {featuredCases.map((study, idx) => {
            const imageSrc = CASE_IMAGES[study.slug] || "/images/cards/crm-systems.jpg";
            const cardNum = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={study.slug}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="absolute inset-0 w-full will-change-transform"
                style={{ zIndex: idx + 1, transformOrigin: "center center" }}
              >
                <article className="w-full h-full rounded-2xl sm:rounded-3xl bg-[#0F172A] border border-slate-700/80 hover:border-[#38BDF8]/70 p-4 sm:p-5 md:p-5 shadow-[0_16px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(56,189,248,0.14)] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                  {/* Subtle top edge glow beam */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8]/80 to-transparent shadow-[0_0_14px_rgba(56,189,248,0.8)]" />

                  {/* Corner Accent Glow */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#38BDF8]/15 rounded-full blur-[60px] pointer-events-none" />

                  {/* Subtle card internal lining accent */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.25]"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)
                      `,
                      backgroundSize: "28px 28px",
                      maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, #000 40%, transparent 100%)",
                      WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, #000 40%, transparent 100%)",
                    }}
                  />

                  {/* Top Bar: Badge tags + Card sequence counter */}
                  <div className="flex items-center justify-between pb-2 sm:pb-2.5 mb-2 sm:mb-2.5 border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900/90 text-[#38BDF8] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/10 shrink-0">
                        {study.category}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 bg-slate-900/60 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/05 hidden sm:inline-block truncate">
                        {study.anonymised ? "Confidential" : study.sector}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest hidden sm:inline">
                        Transformation
                      </span>
                      <span className="text-base sm:text-xl font-mono font-extrabold text-[#38BDF8]">
                        {cardNum}
                        <span className="text-white/20 text-xs sm:text-sm font-normal"> / 03</span>
                      </span>
                    </div>
                  </div>

                  {/* Main Grid: Media Frame + Details stretched down to bottom */}
                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5 items-stretch min-h-0">
                    {/* Media Column (5 Cols) - Stretches fully down to card bottom */}
                    <div className="lg:col-span-5 h-32 sm:h-full flex flex-col min-h-0">
                      <div className="relative w-full h-full flex-1 overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950 border border-white/10 shadow-xl group/img">
                        <Image
                          src={imageSrc}
                          alt={study.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
                          className="object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                        {/* Floating Client Pill */}
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[9px] sm:text-[10px] font-mono bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-white">
                          <span className="font-semibold text-[#38BDF8] truncate mr-2">{study.clientName}</span>
                          <span className="text-slate-400 text-[8px] sm:text-[9px] truncate max-w-[120px] sm:max-w-[160px]">
                            {study.clientScale}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column (7 Cols) - Stretches cleanly down with action bar anchored at bottom */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-0">
                      <div className="flex flex-col justify-between flex-1 gap-1 sm:gap-1.5">
                        <div>
                          {/* Title with link */}
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-[21px] font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug mb-1 line-clamp-2">
                            <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                          </h3>

                          {/* Summary / Challenge Description */}
                          <p className="text-xs sm:text-[13px] md:text-sm text-slate-300 leading-relaxed mb-1.5 line-clamp-2">
                            {study.summary || study.challenge}
                          </p>

                          {/* Key Results Checklist */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 mb-1">
                            {study.results?.slice(0, 2).map((r, rIdx) => (
                              <div key={rIdx} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                                <span className="leading-tight">
                                  <strong className="text-white font-medium">{r.metric}:</strong>{" "}
                                  <span className="text-slate-300">{r.outcome}</span>
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Highlighted Outcome Box (Desktop/Tablet) */}
                        <div className="hidden sm:block p-2 sm:p-2.5 rounded-xl bg-[#0B101E] border border-slate-700/80">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#38BDF8] font-mono font-bold">
                              Key Outcome Metric
                            </span>
                          </div>
                          <p className="text-xs sm:text-[13px] md:text-sm text-white font-medium truncate sm:whitespace-normal">
                            {study.results?.[0]?.outcome || study.impactHighlight}
                          </p>
                        </div>
                      </div>

                      {/* Action Link Row - Solidly anchored at the bottom edge */}
                      <div className="flex items-center justify-between pt-2 border-t border-white/08 mt-auto shrink-0">
                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#38BDF8] hover:text-white transition-colors"
                        >
                          <span>Explore Case Study</span>
                        </Link>

                        <Link
                          href={`/case-studies/${study.slug}`}
                          aria-label={`Read ${study.title}`}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#334155] hover:bg-[#0A0F1A] flex items-center justify-center text-white shrink-0 shadow-md transition-transform duration-200 group-hover:scale-110"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
}

