"use client";

import React from "react";

export default function DarkSectionLining({
  className = "",
  showTopBeam = true,
  showBottomBeam = true,
  glowPosition = "center", // "center" | "split" | "top"
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {/* ── 1. Architectural Pinstripe Grid Lines Texture (Subtle Neon #CFFF04 Tint) ── */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(207, 255, 4, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(207, 255, 4, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 45%, #000 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 45%, #000 55%, transparent 100%)",
        }}
      />

      {/* ── 2. Subtle Angled Linear Tech Accent Pinstripes ── */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(207, 255, 4, 0.04) 40px,
              rgba(207, 255, 4, 0.04) 41px
            )
          `,
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 95%)",
        }}
      />

      {/* ── 3. High-Impact Electric Neon Glow Halos (#CFFF04) ── */}
      {glowPosition === "center" && (
        <>
          {/* Main Central Electric Neon Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[520px] bg-gradient-to-b from-[#CFFF04]/16 via-[#A3E635]/10 to-transparent rounded-full blur-[140px]" />
          {/* Top Left Floating Neon Highlight */}
          <div className="absolute top-5 left-1/5 w-[500px] h-[400px] bg-[#CFFF04]/14 rounded-full blur-[120px]" />
          {/* Bottom Right Deep Neon Accent */}
          <div className="absolute bottom-5 right-1/5 w-[550px] h-[450px] bg-[#84CC16]/12 rounded-full blur-[130px]" />
          {/* Core Spotlight Behind Content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-[#CFFF04]/15 rounded-full blur-[90px]" />
        </>
      )}

      {glowPosition === "split" && (
        <>
          {/* Left Side Vibrant Neon Cloud */}
          <div className="absolute top-1/3 -left-28 w-[700px] h-[600px] bg-gradient-to-br from-[#CFFF04]/18 via-[#84CC16]/10 to-transparent rounded-full blur-[140px]" />
          {/* Right Side Radiant Neon Cloud */}
          <div className="absolute bottom-1/4 -right-28 w-[700px] h-[600px] bg-gradient-to-tl from-[#CFFF04]/16 via-[#A3E635]/10 to-transparent rounded-full blur-[140px]" />
          {/* Center Stage Floating Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-[#CFFF04]/10 rounded-full blur-[110px]" />
          {/* Top Center Crest Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-[#CFFF04]/14 rounded-full blur-[90px]" />
        </>
      )}

      {glowPosition === "top" && (
        <>
          {/* Top Vibrant Neon Aura */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#CFFF04]/18 via-[#84CC16]/10 to-transparent rounded-full blur-[130px]" />
          {/* Bottom Right Accent Glow */}
          <div className="absolute bottom-5 right-10 w-[600px] h-[450px] bg-[#CFFF04]/12 rounded-full blur-[130px]" />
          {/* Bottom Left Subtle Accent */}
          <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-[#CFFF04]/12 rounded-full blur-[120px]" />
        </>
      )}

      {/* ── 4. Top Luminous Beam Line with Electric Neon Glow (#CFFF04) ── */}
      {showTopBeam && (
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#CFFF04]/70 to-transparent shadow-[0_0_20px_rgba(207,255,4,0.65)]" />
      )}

      {/* ── 5. Bottom Luminous Beam Line with Electric Neon Glow (#CFFF04) ── */}
      {showBottomBeam && (
        <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#CFFF04]/50 to-transparent shadow-[0_0_16px_rgba(207,255,4,0.45)]" />
      )}
    </div>
  );
}
