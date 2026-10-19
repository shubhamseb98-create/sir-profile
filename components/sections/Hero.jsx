"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  TrendingUp,
  Users,
  Award,
  Briefcase,
  Sparkles,
  Globe,
  Search,
  Palette,
  Cpu,
  Megaphone,
} from "lucide-react";
import { initGSAP, gsap } from "@/lib/gsap";

// Dynamically import Three.js scene to avoid SSR evaluation
const HeroThreeScene = dynamic(() => import("@/components/ui/HeroThreeScene"), {
  ssr: false,
});

// Cycling executive expertise titles
const EXECUTIVE_ROLES = [
  "BUSINESS CONSULTANT",
  "DIGITAL GROWTH SPECIALIST",
  "SYSTEMS & CRM ARCHITECT",
  "15+ YEARS ENTERPRISE ADVISOR",
];

// Ultra-luxury Floating Domain Badges around Dheeraj Aggarwal's portrait
const FLOATING_TAGS = [
  {
    id: "website",
    title: "Website Development",
    icon: Globe,
    position: "top-[6%] -left-2 sm:-left-8 md:-left-20 lg:-left-28",
    badge: "3,700+ Delivered",
    animationDelay: "0s",
  },
  {
    id: "seo",
    title: "SEO & Growth",
    icon: Search,
    position: "top-[36%] -left-4 sm:-left-12 md:-left-28 lg:-left-36",
    badge: "Organic Rank #1",
    animationDelay: "1.4s",
  },
  {
    id: "crm",
    title: "CRM & Systems SOPs",
    icon: Cpu,
    position: "top-[66%] -left-2 sm:-left-8 md:-left-20 lg:-left-28",
    badge: "Automated Scale",
    animationDelay: "2.8s",
  },
  {
    id: "graphics",
    title: "Graphics & UI/UX",
    icon: Palette,
    position: "top-[8%] -right-2 sm:-right-8 md:-right-20 lg:-right-28",
    badge: "Brand Identity",
    animationDelay: "0.8s",
  },
  {
    id: "marketing",
    title: "Digital Marketing & Ads",
    icon: Megaphone,
    position: "top-[38%] -right-4 sm:-right-12 md:-right-28 lg:-right-36",
    badge: "+340% ROAS Lift",
    animationDelay: "2.2s",
  },
  {
    id: "consulting",
    title: "Enterprise Advisory",
    icon: Sparkles,
    position: "top-[68%] -right-2 sm:-right-8 md:-right-20 lg:-right-28",
    badge: "15+ Years Mandate",
    animationDelay: "1.8s",
  },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const imgCardRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Smoothly cycle executive roles in badge
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % EXECUTIVE_ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // GSAP Cinematic Parallax Scroll Effect
  useEffect(() => {
    const { ScrollTrigger: st } = initGSAP();
    if (!st || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.2,
        },
      });

      // Top title and headline fade out & slide up
      tl.to(
        ".hero-top-content",
        {
          y: -45,
          opacity: 0,
          ease: "none",
        },
        0
      );

      // Floating badges drift out & fade
      tl.to(
        ".hero-floating-badge",
        {
          y: -55,
          opacity: 0.15,
          scale: 0.94,
          ease: "none",
        },
        0
      );

      // Giant background name moves up faster (parallax depth layer)
      tl.to(
        ".hero-bg-name",
        {
          y: -95,
          opacity: 0.15,
          ease: "none",
        },
        0
      );

      // Foreground portrait cutout moves down slightly & scales gracefully
      if (imgCardRef.current) {
        tl.to(
          imgCardRef.current,
          {
            y: 40,
            scale: 0.96,
            ease: "none",
          },
          0
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#000000] font-sans pt-24 sm:pt-28 md:pt-32 pb-4 sm:pb-6 select-none"
    >
      {/* ── 1. THREE.JS 3D WEBGL BACKGROUND (FIXED POSITION) ── */}
      <HeroThreeScene />

      {/* ── 2. AMBIENT LIGHTING GLOWS ── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-[#CFFF04]/12 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#84CC16]/10 blur-[160px] pointer-events-none rounded-full" />

      {/* ── 3. GIANT 3D NAME BEHIND THE PERSON (ANIMATED AMBIENT PULSE) ── */}
      <div className="hero-bg-name absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-[1] overflow-hidden">
        <div className="flex flex-col items-center justify-center opacity-85 animate-[pulse_6s_ease-in-out_infinite]">
          <span
            className="font-black tracking-tighter uppercase leading-[0.82] text-transparent"
            style={{
              fontSize: "clamp(68px, 14vw, 195px)",
              WebkitTextStroke: "1.5px rgba(207, 255, 4, 0.30)",
              textShadow:
                "0 0 35px rgba(207,255,4,0.22), 2px 2px 0px #0a0a0a, 4px 4px 0px #050505, 8px 8px 26px rgba(0,0,0,0.95)",
            }}
          >
            DHEERAJ
          </span>
          <span
            className="font-black tracking-tighter uppercase leading-[0.82] text-transparent"
            style={{
              fontSize: "clamp(56px, 12vw, 170px)",
              WebkitTextStroke: "1.5px rgba(207, 255, 4, 0.22)",
              textShadow:
                "0 0 35px rgba(207,255,4,0.18), 2px 2px 0px #0a0a0a, 4px 4px 0px #050505, 8px 8px 26px rgba(0,0,0,0.95)",
            }}
          >
            AGGARWAL
          </span>
        </div>
      </div>

      {/* ── 4. TOP TITLE & DYNAMIC CYCLING BADGE ── */}
      <div className="hero-top-content relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center flex flex-col items-center mt-1">
        {/* Animated Executive Laser Border Beam Badge with Role Ticker */}
        <div className="relative inline-flex items-center justify-center p-[1.5px] overflow-hidden rounded-full mb-3 group shadow-[0_0_30px_rgba(207,255,4,0.3)] hover:shadow-[0_0_45px_rgba(207,255,4,0.6)] transition-all duration-300">
          {/* Continuously Rotating Conic Laser Beam */}
          <span className="absolute inset-[-1000%] animate-laser-rotate bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#CFFF04_50%,transparent_100%)] pointer-events-none" />

          {/* Inner Badge Body */}
          <div className="relative inline-flex items-center gap-2.5 bg-[#000000]/95 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full backdrop-blur-xl border border-[#CFFF04]/40">
            {/* Live Status Ping Beacon */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CFFF04] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CFFF04]" />
            </span>

            <Sparkles className="w-3.5 h-3.5 text-[#CFFF04] animate-pulse" />

            {/* Dynamic Cycling Role Text */}
            <div className="h-4 flex items-center overflow-hidden min-w-[210px] sm:min-w-[250px] justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CFFF04] via-white to-[#CFFF04] animate-text-shimmer"
                >
                  {EXECUTIVE_ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-white leading-tight">
          Building Brands.{" "}
          <span className="bg-gradient-to-r from-[#CFFF04] via-[#E2FF6E] to-[#CFFF04] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(207,255,4,0.4)]">
            Creating Impact.
          </span>
        </h1>
      </div>

      {/* ── 5. CENTER 3D STAGE: PERSON CUTOUT + FLOATING SERVICE CARDS ── */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 my-auto flex items-center justify-center">
        <div
          className="relative flex items-center justify-center"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* ── INTERACTIVE FLOATING DOMAIN TAGS AROUND PORTRAIT ── */}
          {FLOATING_TAGS.map((tag) => {
            const Icon = tag.icon;
            return (
              <div
                key={tag.id}
                className={cn(
                  "hero-floating-badge absolute z-30 pointer-events-auto select-none",
                  tag.position
                )}
              >
                <div
                  className="animate-subtle-float relative overflow-hidden flex items-center gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-black/40 hover:bg-black/70 backdrop-blur-xl border border-white/10 hover:border-[#CFFF04]/50 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(207,255,4,0.18)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
                  style={{ animationDelay: tag.animationDelay }}
                >
                  {/* Subtle Top Specular Glass Reflection */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#CFFF04]/60 transition-all duration-500 pointer-events-none" />

                  {/* Clean Minimalist Icon */}
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 text-[#CFFF04] group-hover:bg-[#CFFF04]/10 group-hover:border-[#CFFF04]/30 transition-all duration-300">
                    <Icon className="w-4 h-4 text-[#CFFF04]" />
                  </div>

                  {/* Clean Typography */}
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-[13px] font-semibold text-white/95 tracking-tight group-hover:text-white transition-colors whitespace-nowrap">
                      {tag.title}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#CFFF04] font-medium tracking-wide mt-0.5 whitespace-nowrap">
                      {tag.badge}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ── CENTER FREESTANDING 3D PORTRAIT STAGE ── */}
          <div
            ref={imgCardRef}
            className="relative select-none flex items-center justify-center pointer-events-none"
            style={{
              width: "clamp(350px, 46vw, 620px)",
              height: "clamp(420px, 58vh, 650px)",
            }}
          >
            {/* Ambient Cyber Neon Halo Orbit Ring behind portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] md:w-[480px] h-[340px] sm:h-[440px] md:h-[480px] rounded-full border border-[#CFFF04]/20 pointer-events-none animate-[spin_30s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#CFFF04] blur-[3px]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#84CC16] blur-[3px]" />
            </div>

            {/* Ambient Backlight Aura behind the cutout person */}
            <div className="absolute inset-x-8 bottom-0 h-3/4 rounded-full bg-gradient-to-t from-[#CFFF04]/25 via-[#84CC16]/12 to-transparent blur-3xl pointer-events-none" />

            {/* Pedestal Glow at bottom */}
            <div className="absolute bottom-0 inset-x-12 h-8 bg-[#CFFF04]/25 blur-xl rounded-full pointer-events-none" />

            {/* Glowing Pedestal Bottom Line */}
            <div className="absolute bottom-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#CFFF04] to-transparent shadow-[0_0_15px_#CFFF04]" />

            {/* Natural High-Definition Portrait */}
            <div className="relative w-full h-full pointer-events-none">
              <Image
                src="/images/hero/dd.png"
                alt="Dheeraj Aggarwal - Business Consultant"
                fill
                priority
                sizes="(max-width: 640px) 380px, (max-width: 1024px) 520px, 620px"
                className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
              />
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
 

        {/* Scroll Indicator */}
        <a
          href="#achieve-section"
          className="flex flex-col items-center gap-0.5 text-[9px] font-mono tracking-widest uppercase text-slate-400 hover:text-[#CFFF04] transition-colors pointer-events-auto"
        >
          <span>Scroll Down</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#CFFF04]" />
        </a>
      </div>
    </section>
  );
}