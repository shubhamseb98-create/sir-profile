"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger, initGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * GreenSock SplitText (words) animation component
 * Reference: https://codepen.io/GreenSock/pen/RNNabZr
 * Features:
 * - perspective: 500px container
 * - type: "words" split
 * - aria: "hidden" on visual animated words
 * - .sr-only accessible text
 * - ease: "sine.out"
 * - duration: ~1.8s, stagger: 0.08s
 * - ScrollTrigger activated per section
 */
export default function RollingText({
  text,
  className = "",
  stagger = 0.08,
  duration = 1.6,
  delay = 0.05,
  once = true,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    initGSAP();

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const words = el.querySelectorAll(".animate-word");
      if (!words || words.length === 0) return;

      // Exact animation inspired by GreenSock pen RNNabZr:
      // words staggered entrance with ease: "sine.out", opacity: 0 to 1, in 500px perspective
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 12,
          rotateX: -18,
          transformOrigin: "50% 100%",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: duration,
          stagger: {
            each: stagger,
            from: "start",
          },
          ease: "sine.out",
          delay: delay,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: once,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text, stagger, duration, delay, once]);

  if (typeof text !== "string") {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <span
      ref={containerRef}
      className={cn("animate-me inline select-none", className)}
    >
      {/* Screen-reader accessible full text */}
      <span className="sr-only">{text}</span>

      {/* Visual animated words with aria-hidden="true" matching CodePen reference */}
      <span aria-hidden="true" className="inline">
        {words.map((word, idx) => (
          <span key={`word-${idx}`} className="inline">
            <span
              className="inline-block"
              style={{ perspective: "500px" }}
            >
              <span
                className="animate-word inline-block will-change-transform"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {word}
              </span>
            </span>
            {idx < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </span>
  );
}
