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
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {/* ── 1. Architectural Pinstripe Grid Lines Texture ── */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212,175,55, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212,175,55, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 45%, #000 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 45%, #000 55%, transparent 100%)",
        }}
      />

      {/* ── 2. Subtle Angled Linear Pinstripes ── */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(212,175,55, 0.035) 40px,
              rgba(212,175,55, 0.035) 41px
            )
          `,
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 95%)",
        }}
      />

      {/* ── 3. Crisp Metallic Gold Hairline Dividers (No Glow Blur) ── */}
      {showTopBeam && (
        <div className="absolute top-0 inset-x-0 h-[1px] bg-[linear-gradient(90deg,transparent_0%,#9A6B0C_25%,#D4AF37_50%,#9A6B0C_75%,transparent_100%)] opacity-45" />
      )}

      {showBottomBeam && (
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-[linear-gradient(90deg,transparent_0%,#9A6B0C_25%,#D4AF37_50%,#9A6B0C_75%,transparent_100%)] opacity-35" />
      )}
    </div>
  );
}
