"use client";

import React from "react";

export default function DarkSectionLining({
  className = "",
  showTopBeam = true,
  showBottomBeam = true,
  variant = "blue",
}) {
  const isBlue = variant === "blue";

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
          backgroundImage: isBlue
            ? `
            linear-gradient(to right, rgba(96,165,250, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(96,165,250, 0.10) 1px, transparent 1px)
          `
            : `
            linear-gradient(to right, rgba(99,102,241, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99,102,241, 0.10) 1px, transparent 1px)
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
              ${isBlue ? "rgba(99,102,241, 0.075)" : "rgba(59,130,246, 0.075)"} 40px,
              ${isBlue ? "rgba(99,102,241, 0.075)" : "rgba(59,130,246, 0.075)"} 41px
            )
          `,
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, #000 45%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, #000 45%, transparent 95%)",
        }}
      />

      {/* ── 3. Rich Obsidian / Midnight Radial Depth ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isBlue
            ? "radial-gradient(ellipse 75% 65% at 50% 44%, rgba(37, 99, 235, 0.22) 0%, rgba(15, 23, 52, 0.25) 50%, transparent 82%), radial-gradient(ellipse 56% 48% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 72%)"
            : "radial-gradient(ellipse 75% 65% at 50% 44%, rgba(79, 70, 229, 0.20) 0%, rgba(15, 23, 52, 0.25) 50%, transparent 82%), radial-gradient(ellipse 56% 48% at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 72%)",
        }}
      />

      {/* ── 3b. Visible Side-Margin Ambient Glow Orbs ── */}
      <div
        className="absolute top-[6%] -left-24 sm:-left-16 w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] rounded-full transform-gpu"
        style={{
          backgroundImage: isBlue
            ? "radial-gradient(circle, rgba(96,165,250,0.22) 0%, rgba(79,70,229,0.16) 28%, rgba(30,58,138,0.10) 52%, transparent 74%)"
            : "radial-gradient(circle, rgba(129,140,248,0.20) 0%, rgba(37,99,235,0.14) 28%, rgba(30,58,138,0.10) 52%, transparent 74%)",
        }}
      />
      <div
        className="absolute bottom-[4%] -right-24 sm:-right-16 w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] rounded-full transform-gpu"
        style={{
          backgroundImage: isBlue
            ? "radial-gradient(circle, rgba(129,140,248,0.22) 0%, rgba(59,130,246,0.16) 28%, rgba(30,58,138,0.10) 52%, transparent 74%)"
            : "radial-gradient(circle, rgba(96,165,250,0.20) 0%, rgba(99,102,241,0.14) 28%, rgba(30,58,138,0.10) 52%, transparent 74%)",
        }}
      />

      {/* ── 4. Crisp Hairline Dividers with Soft Sheen ── */}
      {showTopBeam && (
        <div
          className={`absolute top-0 inset-x-0 h-[1px] opacity-75 ${
            isBlue
              ? "bg-[linear-gradient(90deg,transparent_0%,#1D4ED8_20%,#60A5FA_50%,#6366F1_80%,transparent_100%)] shadow-[0_0_12px_rgba(59,130,246,0.45)]"
              : "bg-[linear-gradient(90deg,transparent_0%,#4F46E5_20%,#818CF8_50%,#3B82F6_80%,transparent_100%)] shadow-[0_0_12px_rgba(99,102,241,0.38)]"
          }`}
        />
      )}

      {showBottomBeam && (
        <div
          className={`absolute bottom-0 inset-x-0 h-[1px] opacity-60 ${
            isBlue
              ? "bg-[linear-gradient(90deg,transparent_0%,#1D4ED8_20%,#60A5FA_50%,#6366F1_80%,transparent_100%)] shadow-[0_0_10px_rgba(59,130,246,0.35)]"
              : "bg-[linear-gradient(90deg,transparent_0%,#4F46E5_20%,#818CF8_50%,#3B82F6_80%,transparent_100%)] shadow-[0_0_10px_rgba(99,102,241,0.30)]"
          }`}
        />
      )}
    </div>
  );
}
