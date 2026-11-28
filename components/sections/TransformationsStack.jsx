"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, initGSAP } from "@/lib/gsap";
import { caseStudies } from "@/data/caseStudies";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

// Representative real-world photography for the 3 featured transformation cases
const CASE_IMAGES = {
  "karma-ayurveda-systems-expansion": "/images/transformations/karma-clinic-ops.jpg",
  "web-tycoons-agency-scale": "/images/transformations/webtycoons-studio.jpg",
  "happy-hospitality-club-community": "/images/transformations/hhc-hospitality-roundtable.jpg",
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

    // Step 1: Card 0 rotates/scales down & fades cleanly behind Card 1 (no bleed-through)
    tl.to(
      cards[0],
      {
        scale: scaleTarget,
        rotation: -rotationAmount,
        opacity: 0.15,
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

    // Step 2: Card 1 rotates/scales down, Card 0 hides completely, Card 2 glides up to center
    tl.to(
      cards[1],
      {
        scale: scaleTarget,
        rotation: rotationAmount,
        opacity: 0.15,
        duration: 0.45,
        ease: "none",
      },
      0.45
    );
    tl.to(
      cards[0],
      {
        scale: scaleTarget * 0.9,
        rotation: -rotationAmount * 1.35,
        opacity: 0,
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

    // 3. Sync timeline directly with ScrollTrigger & Lenis
    const stInstance = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      animation: tl,
    });

    return () => {
      stInstance.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transformations"
      suppressHydrationWarning
      className="relative h-[280vh] bg-[#04040A] border-b border-white/10 font-sans select-none"
    >
      {/* Sticky 100vh viewport lock with unified 60px top/bottom padding */}
      <div className="sticky top-0 min-h-screen w-full flex flex-col justify-center overflow-hidden py-[60px]">
        {/* Background lining texture */}
        <DarkSectionLining variant="blue" showTopBeam={true} showBottomBeam={true} />

        {/* Section Header: Unified 1:1 with site standard max-w-[1240px] layout */}
        <ScrollReveal distance={28} delay={0.1} className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 z-20 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
            <SectionHeading
              number="05"
              eyebrow="MEASURABLE IMPACT"
              title="Featured Transformation Stories"
              description="Rigorous strategy paired with structured operational execution. How strategic interventions solve systemic growth barriers."
              light={false}
              compact={true}
              animate={false}
              className="!mb-0 max-w-2xl"
            />

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#4F46E5] border border-white/15 hover:border-[#60A5FA] text-[#DBEAFE] hover:text-white text-xs font-semibold transition-all self-start md:self-auto shrink-0"
            >
              <span>All Case Studies</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Card Stacking Arena: Clean margin-top prevents header collision, content & image stretch to card bottom */}
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10 mt-4 sm:mt-5 lg:mt-6 flex items-center justify-center">
          <div className="relative w-full max-w-[1100px] h-[400px] xs:h-[390px] sm:h-[390px] md:h-[410px]">
          {featuredCases.map((study, idx) => {
            const imageSrc =
              CASE_IMAGES[study.slug] || "/images/transformations/karma-clinic-ops.jpg";
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
                <article className="w-full h-full rounded-2xl sm:rounded-3xl bg-[#090F1E] bg-gradient-to-br from-[#0E1833] to-[#050811] border border-[#1E3256] hover:border-[#60A5FA]/65 p-3.5 sm:p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.65)] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                  {/* Subtle top electric-blue hairline */}
                  <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-[linear-gradient(90deg,transparent_0%,#1D4ED8_25%,#60A5FA_50%,#6366F1_75%,transparent_100%)] opacity-65" />

                  {/* Subtle card internal lining accent */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.2]"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(96,165,250, 0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(96,165,250, 0.08) 1px, transparent 1px)
                      `,
                      backgroundSize: "28px 28px",
                      maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, #000 40%, transparent 100%)",
                      WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, #000 40%, transparent 100%)",
                    }}
                  />

                  {/* Top Bar: Badge tags + Card sequence counter */}
                  <div className="flex items-center justify-between pb-2 sm:pb-2.5 mb-2 sm:mb-2.5 border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 text-[#93C5FD] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#60A5FA]/35 shrink-0">
                        {study.category}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 bg-neutral-900/80 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/05 hidden sm:inline-block truncate">
                        {study.anonymised ? "Confidential" : study.sector}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest hidden sm:inline">
                        Transformation
                      </span>
                      <span className="text-base sm:text-xl font-mono font-extrabold text-[#60A5FA]">
                        {cardNum}
                        <span className="text-white/20 text-xs sm:text-sm font-normal"> / 03</span>
                      </span>
                    </div>
                  </div>

                  {/* Main Grid: Media Frame + Details stretched down to bottom */}
                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-4 md:gap-5 items-stretch min-h-0">
                    {/* Media Column (5 Cols) */}
                    <div className="lg:col-span-5 h-24 xs:h-28 sm:h-full flex flex-col min-h-0">
                      <div className="relative w-full h-full flex-1 overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-950 border border-white/10 shadow-xl group/img">
                        <Image
                          src={imageSrc}
                          alt={study.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
                          className="object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                        {/* Floating Client Pill */}
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[9px] sm:text-[10px] font-mono bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-white">
                          <span className="font-semibold text-[#93C5FD] truncate mr-2">{study.clientName}</span>
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
                          {/* Title Linked to Case Study Dossier */}
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-[21px] font-normal text-white leading-snug mb-1 line-clamp-2">
                            <Link
                              href={`/case-studies/${study.slug}`}
                              className="hover:text-[#93C5FD] transition-colors"
                            >
                              {study.title}
                            </Link>
                          </h3>

                          {/* Summary / Challenge Description */}
                          <p className="text-xs sm:text-[13px] md:text-sm text-slate-300 leading-relaxed mb-1.5 line-clamp-2">
                            {study.summary || study.challenge}
                          </p>

                          {/* Key Results Checklist */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 mb-1">
                            {study.results?.slice(0, 2).map((r, rIdx) => (
                              <div key={rIdx} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#60A5FA] shrink-0 mt-0.5" />
                                <span className="leading-tight">
                                  <strong className="text-white font-medium">{r.metric}:</strong>{" "}
                                  <span className="text-slate-300">{r.outcome}</span>
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Highlighted Outcome Box & Dossier Link */}
                        <div className="p-2 sm:p-2.5 rounded-xl bg-[#050A14] border border-[#1E3256] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
                              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#93C5FD] font-mono font-bold">
                                Key Outcome Metric
                              </span>
                            </div>
                            <p className="text-xs sm:text-[13px] md:text-sm text-white font-medium truncate sm:whitespace-normal">
                              {study.results?.[0]?.outcome || study.impactHighlight}
                            </p>
                          </div>

                          <Link
                            href={`/case-studies/${study.slug}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#4F46E5] border border-white/10 hover:border-[#60A5FA] text-[#DBEAFE] hover:text-white text-[11px] font-semibold whitespace-nowrap shrink-0 transition-all self-start sm:self-center"
                          >
                            <span>Read Case Dossier</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
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

