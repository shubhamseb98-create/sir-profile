"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import RollingText from "@/components/ui/RollingText";

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 md:mb-16 font-sans",
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2.5 mb-3.5",
          isCenter && "justify-center"
        )}
      >
        {number && (
          <span
            className={cn(
              "text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full tracking-wider border",
              light
                ? "text-[#334155] border-[#334155]/20 bg-[#334155]/05"
                : "text-[#CFFF04] border-[#CFFF04]/40 bg-[#CFFF04]/10"
            )}
          >
            {number}
          </span>
        )}

        {eyebrow && (
          <span
            className={cn(
              "text-xs uppercase font-semibold tracking-[0.2em]",
              light ? "text-[#334155]" : "text-[#CFFF04]"
            )}
          >
            {eyebrow}
          </span>
        )}
      </div>

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.18] tracking-tight",
          light ? "text-[#1E293B]" : "text-white"
        )}
      >
        {typeof title === "string" ? <RollingText text={title} /> : title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-normal",
            light ? "text-[#475569]" : "text-slate-300"
          )}
        >
          {typeof description === "string" ? (
            <RollingText text={description} delay={0.25} duration={1.3} stagger={0.03} />
          ) : (
            description
          )}
        </p>
      )}

      {/* Modern Accent Bar */}
      <div
        className={cn(
          "mt-6 w-16 h-[3px] rounded-full",
          light
            ? "bg-gradient-to-r from-slate-300 to-[#CFFF04]"
            : "bg-gradient-to-r from-[#CFFF04] to-neutral-700",
          isCenter && "mx-auto"
        )}
      />
    </motion.div>
  );
}

