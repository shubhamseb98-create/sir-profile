"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isCaseStudy, setIsCaseStudy] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const clickable = target.closest("a, button, input, textarea, select, [data-cursor='pointer']");
      const caseStudyCard = target.closest("[data-cursor='view']");

      setIsHovered(!!clickable);
      setIsCaseStudy(!!caseStudyCard);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, prefersReducedMotion]);

  if (!isVisible || prefersReducedMotion) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#C6A15B] transition-opacity duration-200"
        style={{
          width: isCaseStudy ? "0px" : "6px",
          height: isCaseStudy ? "0px" : "6px",
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Follower Ring / View Label */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-[#C6A15B]/50 transition-all duration-150 ease-out flex items-center justify-center backdrop-blur-[1px]"
        style={{
          width: isCaseStudy ? "72px" : isHovered ? "48px" : "28px",
          height: isCaseStudy ? "72px" : isHovered ? "48px" : "28px",
          backgroundColor: isCaseStudy
            ? "rgba(198, 161, 91, 0.95)"
            : isHovered
            ? "rgba(198, 161, 91, 0.12)"
            : "transparent",
          borderColor: isCaseStudy ? "#C6A15B" : isHovered ? "#E2C98F" : "rgba(198, 161, 91, 0.4)",
          transform: `translate3d(${pos.x - (isCaseStudy ? 36 : isHovered ? 24 : 14)}px, ${
            pos.y - (isCaseStudy ? 36 : isHovered ? 24 : 14)
          }px, 0)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {isCaseStudy && (
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#004671]">
            View
          </span>
        )}
      </div>
    </>
  );
}

