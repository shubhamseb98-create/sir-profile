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
      {/* ── 1. Architectural Pinstripe Grid Lines Texture (Crisp Cyan/Slate Tint) ── */}
      <div
        className="absolute inset-0 opacity-[0.65]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.10) 1px, transparent 1px)
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
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(56, 189, 248, 0.07) 40px,
              rgba(56, 189, 248, 0.07) 41px
            )
          `,
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 95%)",
        }}
      />

      {/* ── 3. High-Impact Ambient Glowing Orbs ── */}
      {glowPosition === "center" && (
        <>
          {/* Main Central Electric Cyan/Blue Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#38BDF8]/25 via-[#2563EB]/20 to-transparent rounded-full blur-[130px]" />
          {/* Top Left Floating Cyan Highlight */}
          <div className="absolute top-5 left-1/5 w-[500px] h-[400px] bg-[#38BDF8]/20 rounded-full blur-[110px]" />
          {/* Bottom Right Deep Cobalt Glow */}
          <div className="absolute bottom-5 right-1/5 w-[550px] h-[450px] bg-[#1D4ED8]/24 rounded-full blur-[120px]" />
          {/* Core Spotlight Behind Content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-[#0284c7]/22 rounded-full blur-[80px]" />
        </>
      )}

      {glowPosition === "split" && (
        <>
          {/* Left Side Vibrant Cyan Radiant Cloud */}
          <div className="absolute top-1/3 -left-28 w-[700px] h-[600px] bg-gradient-to-br from-[#38BDF8]/26 via-[#0284c7]/20 to-transparent rounded-full blur-[130px]" />
          {/* Right Side Rich Cobalt Radiant Cloud */}
          <div className="absolute bottom-1/4 -right-28 w-[700px] h-[600px] bg-gradient-to-tl from-[#2563EB]/28 via-[#1E40AF]/22 to-transparent rounded-full blur-[140px]" />
          {/* Center Stage Floating Cyan Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-r from-[#38BDF8]/18 via-[#0ea5e9]/16 to-[#2563EB]/16 rounded-full blur-[100px]" />
          {/* Top Center Crest Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-[#38BDF8]/22 rounded-full blur-[90px]" />
        </>
      )}

      {glowPosition === "top" && (
        <>
          {/* Top Vibrant Glow Aura */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#38BDF8]/28 via-[#2563EB]/18 to-transparent rounded-full blur-[120px]" />
          {/* Bottom Right Accent Glow */}
          <div className="absolute bottom-5 right-10 w-[600px] h-[450px] bg-[#1E40AF]/24 rounded-full blur-[130px]" />
          {/* Bottom Left Subtle Accent */}
          <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-[#38BDF8]/16 rounded-full blur-[110px]" />
        </>
      )}

      {/* ── 4. Top Luminous Beam Line with Enhanced Glow Halo ── */}
      {showTopBeam && (
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8]/60 to-transparent shadow-[0_0_20px_rgba(56,189,248,0.5)]" />
      )}

      {/* ── 5. Bottom Luminous Beam Line with Enhanced Glow Halo ── */}
      {showBottomBeam && (
        <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8]/45 to-transparent shadow-[0_0_16px_rgba(56,189,248,0.35)]" />
      )}
    </div>
  );
}
