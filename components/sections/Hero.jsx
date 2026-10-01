"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { ChevronDown, TrendingUp, Users, Award, Briefcase, Sparkles } from "lucide-react";

// Dynamically import Three.js scene to avoid SSR evaluation
const HeroThreeScene = dynamic(() => import("@/components/ui/HeroThreeScene"), {
  ssr: false,
});

export default function Hero() {
  const sectionRef = useRef(null);
  const imgCardRef = useRef(null);

  // 3D Parallax Tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Spotlight color reveal state
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [hoveringImg, setHoveringImg] = useState(false);

  // Spotlight radius (38px = 76px compact focused circle)
  const SPOTLIGHT_RADIUS = 38;

  // Track mouse across the whole hero for 3D parallax tilt
  const handleSectionMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setTilt({ x, y });
  }, []);

  const handleSectionMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHoveringImg(false);
  }, []);

  // Spotlight tracking on portrait (instantaneous 1:1 tracking)
  const onPortraitMouseMove = useCallback((e) => {
    const rect = imgCardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#0A0F1A] font-sans pt-20 pb-5 select-none"
    >
      {/* ── 1. THREE.JS 3D WEBGL BACKGROUND ── */}
      <HeroThreeScene />

      {/* ── 2. AMBIENT LIGHTING GLOWS ── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-[#38BDF8]/12 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#2563EB]/15 blur-[160px] pointer-events-none rounded-full" />

      {/* ── 3. GIANT 3D NAME BEHIND THE PERSON (PARALLAX DEPTH) ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-[1] overflow-hidden"
        style={{
          transform: `translate3d(${-tilt.x * 30}px, ${-tilt.y * 18}px, 0)`,
          transition: "transform 0.12s ease-out",
        }}
      >
        <div className="flex flex-col items-center justify-center opacity-85">
          <span
            className="font-black tracking-tighter uppercase leading-[0.82] text-transparent"
            style={{
              fontSize: "clamp(68px, 14vw, 195px)",
              WebkitTextStroke: "1.5px rgba(56, 189, 248, 0.28)",
              textShadow:
                "0 0 35px rgba(56,189,248,0.25), 2px 2px 0px #0c1a30, 4px 4px 0px #081120, 8px 8px 26px rgba(0,0,0,0.85)",
            }}
          >
            DHEERAJ
          </span>
          <span
            className="font-black tracking-tighter uppercase leading-[0.82] text-transparent"
            style={{
              fontSize: "clamp(56px, 12vw, 170px)",
              WebkitTextStroke: "1.5px rgba(56, 189, 248, 0.20)",
              textShadow:
                "0 0 35px rgba(56,189,248,0.20), 2px 2px 0px #0c1a30, 4px 4px 0px #081120, 8px 8px 26px rgba(0,0,0,0.85)",
            }}
          >
            AGGARWAL
          </span>
        </div>
      </div>

      {/* ── 4. TOP TITLE & BADGE ── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center flex flex-col items-center mt-1">
        {/* Pulsing Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-[#0F172A]/85 border border-[#38BDF8]/30 rounded-full px-4 py-1 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.15)] mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#38BDF8] font-bold">
            {siteConfig.designation}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-white leading-tight">
          Building Brands.{" "}
          <span className="bg-gradient-to-r from-[#38BDF8] via-[#7dd3fc] to-[#38BDF8] bg-clip-text text-transparent">
            Creating Impact.
          </span>
        </h1>
      </div>

      {/* ── 5. CENTER 3D STAGE: PERSON CUTOUT (NO BOX BG) + FLOATING CARDS ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 my-auto flex items-center justify-center">
        <div
          className="relative flex items-center justify-center"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* ── LEFT FLOATING STAT CARDS ── */}
          <div
            className="hidden md:flex flex-col gap-6 absolute -left-20 lg:-left-36 top-1/2 -translate-y-1/2 z-20 pointer-events-auto"
            style={{
              transform: `translate3d(${tilt.x * 22}px, ${tilt.y * 22}px, 60px)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            {/* Card 1: Revenue */}
            <div className="group bg-[#0F172A]/85 hover:bg-[#0F172A] border border-[#38BDF8]/30 hover:border-[#38BDF8] backdrop-blur-xl rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 w-48">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-4 h-4 text-[#38BDF8]" />
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Revenue Impact</div>
                  <div className="text-sm font-extrabold text-white">₹50 Cr+</div>
                </div>
              </div>
            </div>

            {/* Card 2: Experience */}
            <div className="group bg-[#0F172A]/85 hover:bg-[#0F172A] border border-orange-500/30 hover:border-orange-500 backdrop-blur-xl rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 w-48">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Industry Exp.</div>
                  <div className="text-sm font-extrabold text-white">15+ Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CENTER FREESTANDING 3D PORTRAIT (TRANSPARENT PNG, NO CARD BOX BG) ── */}
          <div
            ref={imgCardRef}
            onMouseMove={onPortraitMouseMove}
            onMouseEnter={() => setHoveringImg(true)}
            onMouseLeave={() => {
              setHoveringImg(false);
              setPos({ x: -1000, y: -1000 });
            }}
            className="relative cursor-crosshair select-none flex items-center justify-center"
            style={{
              width: "clamp(340px, 42vw, 550px)",
              height: "clamp(440px, 66vh, 650px)",
              transform: `translate3d(${tilt.x * 12}px, ${tilt.y * 12}px, 0)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            {/* Ambient Backlight Aura behind the cutout person */}
            <div className="absolute inset-x-8 bottom-0 h-3/4 rounded-full bg-gradient-to-t from-[#38BDF8]/25 via-[#2563EB]/10 to-transparent blur-3xl pointer-events-none" />

            {/* Pedestal Glow at bottom */}
            <div className="absolute bottom-0 inset-x-12 h-8 bg-[#38BDF8]/30 blur-xl rounded-full pointer-events-none" />

            {/* ── LAYER 1: BASE BLACK & WHITE PNG (Requested: Black and white everywhere) ── */}
            <div className="relative w-full h-full pointer-events-none">
              <Image
                src="/images/hero/dd.png"
                alt="Dheeraj Aggarwal - Business Consultant"
                fill
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 550px"
                className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
                style={{
                  filter: "grayscale(100%) contrast(115%) brightness(92%)",
                }}
              />
            </div>

            {/* ── LAYER 2: SPOTLIGHT COLOR REVEAL (Only where mouse hovers!) ── */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                clipPath: hoveringImg
                  ? `circle(${SPOTLIGHT_RADIUS}px at ${pos.x}px ${pos.y}px)`
                  : `circle(0px at ${pos.x}px ${pos.y}px)`,
                transition: hoveringImg ? "none" : "clip-path 0.4s ease-out",
              }}
            >
              <Image
                src="/images/hero/dd.png"
                alt="Dheeraj Aggarwal - Full Color Reveal"
                fill
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 550px"
                className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
              />

              {/* Glowing Cyber Spotlight Border Ring (Exactly matches small radius) */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  width: SPOTLIGHT_RADIUS * 2,
                  height: SPOTLIGHT_RADIUS * 2,
                  left: pos.x - SPOTLIGHT_RADIUS,
                  top: pos.y - SPOTLIGHT_RADIUS,
                  boxShadow:
                    "0 0 14px rgba(56,189,248,0.7), inset 0 0 8px rgba(56,189,248,0.5)",
                  border: "1.5px solid #38bdf8",
                  transition: "none",
                }}
              />
            </div>

            {/* Interactive Hint Chip */}
            <div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                opacity: hoveringImg ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            >
              <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest uppercase text-white/70 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-ping" />
                Hover to reveal color
              </span>
            </div>
          </div>

          {/* ── RIGHT FLOATING STAT CARDS ── */}
          <div
            className="hidden md:flex flex-col gap-6 absolute -right-20 lg:-right-36 top-1/2 -translate-y-1/2 z-20 pointer-events-auto"
            style={{
              transform: `translate3d(${tilt.x * 22}px, ${tilt.y * 22}px, 60px)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            {/* Card 3: BNI Gold Club */}
            <div className="group bg-[#0F172A]/85 hover:bg-[#0F172A] border border-emerald-500/30 hover:border-emerald-500 backdrop-blur-xl rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 w-48">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">BNI Gold Club</div>
                  <div className="text-sm font-extrabold text-white">Active Member</div>
                </div>
              </div>
            </div>

            {/* Card 4: Clients */}
            <div className="group bg-[#0F172A]/85 hover:bg-[#0F172A] border border-violet-500/30 hover:border-violet-500 backdrop-blur-xl rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 w-48">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Clients Guided</div>
                  <div className="text-sm font-extrabold text-white">200+ Brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 6. BOTTOM ACTION BAR & CTA ── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 flex flex-col items-center gap-3 mt-1">
        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pointer-events-auto">
          <Button href="/contact?type=strategy-call" variant="primary" size="md">
            Book a Strategy Call
          </Button>
          <Button href="#achieve-section" variant="secondary" size="md" icon="right">
            Explore Work
          </Button>
        </div>

        {/* Mobile Stat Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-lg md:hidden pt-1">
          <div className="bg-[#0F172A]/80 border border-white/10 rounded-xl p-2 text-center">
            <div className="text-xs font-bold text-[#38BDF8]">₹50 Cr+</div>
            <div className="text-[9px] text-slate-400">Revenue Gen.</div>
          </div>
          <div className="bg-[#0F172A]/80 border border-white/10 rounded-xl p-2 text-center">
            <div className="text-xs font-bold text-orange-400">15+ Yrs</div>
            <div className="text-[9px] text-slate-400">Experience</div>
          </div>
          <div className="bg-[#0F172A]/80 border border-white/10 rounded-xl p-2 text-center">
            <div className="text-xs font-bold text-emerald-400">BNI Gold</div>
            <div className="text-[9px] text-slate-400">Member</div>
          </div>
          <div className="bg-[#0F172A]/80 border border-white/10 rounded-xl p-2 text-center">
            <div className="text-xs font-bold text-violet-400">200+</div>
            <div className="text-[9px] text-slate-400">Clients</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#achieve-section"
          className="flex flex-col items-center gap-0.5 text-[9px] font-mono tracking-widest uppercase text-slate-400 hover:text-[#38BDF8] transition-colors pointer-events-auto"
        >
          <span>Scroll Down</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#38BDF8]" />
        </a>
      </div>
    </section>
  );
}