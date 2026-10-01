"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export default function Marquee({
  children,
  speed = "normal", // "slow" | "normal" | "fast"
  pauseOnHover = true,
  className = "",
}) {
  const prefersReducedMotion = useReducedMotion();

  const durationClass = {
    slow: "duration-[60s]",
    normal: "duration-[40s]",
    fast: "duration-[25s]",
  }[speed];

  if (prefersReducedMotion) {
    return (
      <div className={cn("overflow-x-auto flex gap-8 py-4 no-scrollbar", className)}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full flex select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-8 min-w-full animate-marquee-slow",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around gap-8 min-w-full animate-marquee-slow",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
