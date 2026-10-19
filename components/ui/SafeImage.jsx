"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function SafeImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  className = "",
  placeholderLabel = "Photo pending",
  aspectRatio = "aspect-[4/5]",
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-gradient-to-b from-[#0A0D14] to-black border border-white/10 flex flex-col items-center justify-center p-6 text-center select-none group",
          aspectRatio,
          className
        )}
      >
        <div className="w-12 h-12 rounded-full border border-[#CFFF04]/30 flex items-center justify-center mb-3 bg-[#CFFF04]/10">
          <span className="font-mono text-base text-[#CFFF04] font-bold">DA</span>
        </div>
        <p className="text-xs uppercase tracking-widest text-slate-400 font-mono">
          {alt || "Executive Portrait"}
        </p>
        <span className="mt-2 text-[10px] tracking-wider uppercase text-[#CFFF04] font-mono bg-black/60 px-2 py-0.5 rounded border border-[#CFFF04]/20">
          {placeholderLabel}
        </span>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", fill && "w-full h-full", className)}>
      <Image
        src={src}
        alt={alt || "Dheeraj Aggarwal"}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        sizes={sizes || (fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined)}
        onError={() => setError(true)}
        className={cn(
          "transition-all duration-700 object-cover",
          fill ? "absolute inset-0 w-full h-full" : ""
        )}
      />
    </div>
  );
}
