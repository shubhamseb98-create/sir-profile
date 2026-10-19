"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { initGSAP, gsap } from "@/lib/gsap";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const { ScrollTrigger: st } = initGSAP();

    // Initialize Lenis with optimal fluid momentum
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
      infinite: false,
    });

    lenisRef.current = lenis;
    if (typeof window !== "undefined") {
      window.lenis = lenis;
    }

    // Sync Lenis scroll with GSAP ScrollTrigger
    if (st) {
      lenis.on("scroll", st.update);
    }

    // Drive Lenis from GSAP Ticker for frame-perfect lockstep
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(500, 33);

    // Global smooth anchor link glide (#about-us, #credibility-bar, etc.)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href*="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;
      const hash = href.slice(hashIndex);
      if (hash === "#" || hash.length <= 1) return;

      const element = document.querySelector(hash);
      if (element) {
        e.preventDefault();
        lenis.scrollTo(element, { offset: -70, duration: 1.2 });
      }
    };

    document.addEventListener("click", handleAnchorClick, { passive: false });

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
      if (typeof window !== "undefined" && window.lenis === lenis) {
        delete window.lenis;
      }
    };
  }, []);

  return <>{children}</>;
}

