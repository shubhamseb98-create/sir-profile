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
  compact = false,
  animate = true,
  accent = "blue",
  className = "",
}) {
  const isCenter = align === "center";
  const isDeepIndigo = !light && accent === "indigo";

  const content = (
    <>
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-3 max-w-full",
            isCenter && "justify-center",
            compact ? "mb-2.5" : "mb-3.5"
          )}
        >
          {isCenter && (
            <span
              aria-hidden="true"
              className={cn(
                "hidden sm:inline-block h-px w-10 md:w-14 shrink-0",
                light
                  ? "bg-gradient-to-l from-[#3B82F6]/65 to-transparent"
                  : "bg-gradient-to-l from-[#60A5FA]/60 to-transparent"
              )}
            />
          )}
          <span
            className={cn(
              "text-[10px] sm:text-[11px] uppercase font-medium tracking-[0.2em] leading-none truncate",
              light
                ? "text-[#1D4ED8]"
                : isDeepIndigo
                ? "text-[#E0E7FF]"
                : "text-slate-200"
            )}
          >
            {eyebrow}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "hidden sm:inline-block h-px w-12 md:w-16 shrink-0",
              light
                ? "bg-gradient-to-r from-[#3B82F6]/65 to-transparent"
                : "bg-gradient-to-r from-[#60A5FA]/60 to-transparent"
            )}
          />
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.18] tracking-tight",
          light ? "text-[#0F172A]" : "text-white"
        )}
      >
        {typeof title === "string" ? (
          <RollingText
            text={title}
            highlightCount={2}
            highlightClassName={
              light
                ? "text-[#3B82F6] font-normal"
                : isDeepIndigo
                ? "text-[#3B82F6] font-normal drop-shadow-[0_0_16px_rgba(99,102,241,0.4)]"
                : "text-[#3B82F6] font-normal drop-shadow-[0_0_16px_rgba(59,130,246,0.38)]"
            }
          />
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "leading-relaxed font-normal",
            compact ? "mt-1.5 text-xs sm:text-sm" : "mt-3 text-sm sm:text-base",
            light ? "text-slate-600" : "text-slate-300"
          )}
        >
          {typeof description === "string" ? (
            <RollingText text={description} delay={0.25} duration={1.3} stagger={0.03} />
          ) : (
            description
          )}
        </p>
      )}
    </>
  );

  const wrapperClassName = cn(
    compact ? "mb-6 md:mb-8 font-sans" : "mb-10 md:mb-12 font-sans",
    isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
    className
  );

  if (!animate) {
    return <div className={wrapperClassName}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={wrapperClassName}
    >
      {content}
    </motion.div>
  );
}

