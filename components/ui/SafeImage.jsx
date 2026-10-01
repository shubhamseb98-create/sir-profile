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
          "relative overflow-hidden bg-gradient-to-b from-[#151D30] to-[#0F1626] border border-white/08 flex flex-col items-center justify-center p-6 text-center select-none group",
          aspectRatio,
          className
        )}
      >
        <div className="w-12 h-12 rounded-full border border-[#C6A15B]/30 flex items-center justify-center mb-3 bg-[#C6A15B]/05">
          <span className="font-editorial text-lg text-[#C6A15B] font-semibold">DA</span>
        </div>
        <p className="text-xs uppercase tracking-widest text-[#A9B0BE]/70 font-mono">
          {alt || "Executive Portrait"}
        </p>
        <span className="mt-2 text-[10px] tracking-wider uppercase text-[#C6A15B]/60 font-mono bg-[#004671]/60 px-2 py-0.5 rounded border border-[#C6A15B]/15">
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

