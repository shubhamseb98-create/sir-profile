"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Preloader() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let hasLoaded = false;
    try {
      hasLoaded = Boolean(sessionStorage.getItem("da_preloader_seen"));
    } catch {
      // Ignore storage access errors
    }

    if (!hasLoaded) {
      const enterTimer = setTimeout(() => {
        setVisible(true);
      }, 10);

      const leaveTimer = setTimeout(() => {
        setLeaving(true);
      }, 1100);

      const endTimer = setTimeout(() => {
        setVisible(false);
        try {
          sessionStorage.setItem("da_preloader_seen", "true");
        } catch {
          // Ignore
        }
      }, 1600);

      return () => {
        clearTimeout(enterTimer);
        clearTimeout(leaveTimer);
        clearTimeout(endTimer);
      };
    }
  }, [prefersReducedMotion]);

  if (!visible || prefersReducedMotion) return null;

  return (
    <aside
      aria-label="Site introduction"
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-[#004671] transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        leaving ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="flex flex-col items-center justify-center text-center px-4">
        {/* Monogram */}
        <div className="w-16 h-16 rounded-full border border-[#C6A15B]/40 flex items-center justify-center mb-4 bg-[#C6A15B]/05 shadow-[0_0_25px_rgba(198,161,91,0.15)] animate-pulse">
          <span className="font-editorial text-2xl font-semibold tracking-wider text-[#C6A15B]">
            DA
          </span>
        </div>

        {/* Name in Serif */}
        <h1 className="font-editorial text-2xl md:text-3xl text-[#F5F3EE] font-normal tracking-wide">
          Dheeraj Aggarwal
        </h1>

        <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono">
          Building Brands. Creating Impact.
        </p>

        {/* Animated Hairline Rule */}
        <div className="mt-6 w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#C6A15B] w-full animate-[preloaderLine_1.2s_cubic-bezier(0.22,1,0.36,1)_forwards]" />
        </div>
      </div>
    </aside>
  );
}

