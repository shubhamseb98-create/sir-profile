"use client";

import { useEffect } from "react";
import { initGSAP, gsap, ScrollTrigger } from "@/lib/gsap";

export default function GSAPSectionRevealer() {
  useEffect(() => {
    const { ScrollTrigger: st } = initGSAP();

    // Use gsap.context for clean cleanup on page navigation / re-renders
    const ctx = gsap.context(() => {
      // Find all sections on the page
      const sections = document.querySelectorAll("section");

      sections.forEach((sec) => {
        // Skip hero since it's already above the fold
        if (
          sec.id === "hero" ||
          sec.getBoundingClientRect().top < window.innerHeight * 0.5
        ) {
          return;
        }

        // Pinned scroller containers should animate their inner content, not the outer pin track
        if (sec.id === "core-expertise" || sec.id === "transformations") {
          return;
        }

        // Subtle, elegant GSAP scroll-triggered entrance
        gsap.fromTo(
          sec,
          {
            opacity: 0.15,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
    });

    // Refresh ScrollTrigger after DOM has fully settled
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return null;
}
