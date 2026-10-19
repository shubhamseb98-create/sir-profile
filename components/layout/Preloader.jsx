"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Check if session already completed preloader
    let seen = false;
    try {
      seen = sessionStorage.getItem("da_preloader_seen") === "true";
    } catch {
      // storage unavailable
    }

    if (seen && process.env.NODE_ENV === "production") {
      setIsMounted(false);
      return;
    }

    // Logo entrance & hold duration (~1.4s total)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1400);

    const finishTimer = setTimeout(() => {
      setIsMounted(false);
      try {
        sessionStorage.setItem("da_preloader_seen", "true");
      } catch {
        // ignore
      }
    }, 2200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <aside
      aria-label="Loading site presentation"
      className={`fixed inset-0 z-[9999] select-none overflow-hidden font-sans bg-[#000000] transition-all duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      }`}
    >
      {/* ── CENTER ONLY SIGNATURE LOGO STAGE ── */}
      <div
        className={`relative z-20 h-full w-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isExiting ? "-translate-y-16 opacity-0 scale-95" : "translate-y-0 opacity-100 scale-100"
        }`}
      >
        <div className="relative flex items-center justify-center">
          {/* Ambient Glow Aura */}
          <div className="absolute w-80 sm:w-[480px] h-36 sm:h-48 rounded-full bg-[#CFFF04]/20 blur-[80px] pointer-events-none" />

          {/* Official Signature Logo */}
          <div className="relative w-72 sm:w-96 md:w-[460px] h-24 sm:h-32 md:h-36 flex items-center justify-center">
            <Image
              src="/cl-logo/pr-logo.png"
              alt="Dheeraj Aggarwal Signature"
              fill
              priority
              sizes="(max-width: 768px) 288px, 460px"
              style={{
                filter: "brightness(0) invert(1) drop-shadow(0 0 25px rgba(207,255,4,0.75)) drop-shadow(0 0 55px rgba(207,255,4,0.3))",
              }}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
