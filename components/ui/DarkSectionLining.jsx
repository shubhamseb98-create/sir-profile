"use client";

import React from "react";

export default function DarkSectionLining({
  className = "",
  showTopBeam = true,
  showBottomBeam = true,
}) {
  return (
    <div
      aria-hidden="true"
      style={{ contain: "strict", transform: "translateZ(0)" }}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {/* ── 1. Architectural Pinstripe Grid Lines Texture ── */}
      <div
        className="absolute inset-0 opacity-[0.8]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212,175,55, 0.13) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212,175,55, 0.13) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 92% 84% at 50% 45%, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 92% 84% at 50% 45%, #000 60%, transparent 100%)",
        }}
      />

      {/* ── 2. Subtle Angled Linear Pinstripes ── */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(212,175,55, 0.07) 40px,
              rgba(212,175,55, 0.07) 41px
            )
          `,
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, #000 45%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, #000 45%, transparent 95%)",
        }}
      />

      {/* ── 3. Deep Midnight Navy Richness + Subtle Gold Radial Depth ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 75% 65% at 50% 40%, rgba(16, 34, 68, 0.55) 0%, rgba(10, 22, 40, 0.25) 55%, transparent 85%), radial-gradient(ellipse 62% 52% at 50% 42%, rgba(212,175,55,0.06) 0%, rgba(154,107,12,0.02) 45%, transparent 78%)",
        }}
      />

      {/* ── 3b. Visible Side-Margin Ambient Glow Orbs (Smooth GPU Gradient — No Blur Repaint Jitter) ── */}
      <div
        className="absolute top-[6%] -left-24 sm:-left-16 w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] rounded-full transform-gpu"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(245,215,127,0.22) 0%, rgba(212,175,55,0.14) 24%, rgba(30,64,135,0.12) 48%, transparent 72%)",
        }}
      />
      <div
        className="absolute bottom-[4%] -right-24 sm:-right-16 w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] rounded-full transform-gpu"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(245,215,127,0.22) 0%, rgba(212,175,55,0.14) 24%, rgba(30,64,135,0.12) 48%, transparent 72%)",
        }}
      />

      {/* ── 4. Crisp Metallic Gold Hairline Dividers with Soft Sheen ── */}
      {showTopBeam && (
        <div className="absolute top-0 inset-x-0 h-[1px] bg-[linear-gradient(90deg,transparent_0%,#9A6B0C_20%,#D4AF37_50%,#9A6B0C_80%,transparent_100%)] opacity-75 shadow-[0_0_10px_rgba(212,175,55,0.28)]" />
      )}

      {showBottomBeam && (
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-[linear-gradient(90deg,transparent_0%,#9A6B0C_20%,#D4AF37_50%,#9A6B0C_80%,transparent_100%)] opacity-60 shadow-[0_0_8px_rgba(212,175,55,0.22)]" />
      )}
    </div>
  );
}
