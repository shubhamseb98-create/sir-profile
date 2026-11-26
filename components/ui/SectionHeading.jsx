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
  className = "",
}) {
  const isCenter = align === "center";

  const content = (
    <>
      {eyebrow && (
        <div
          className={cn(
            "flex",
            isCenter && "justify-center",
            compact ? "mb-2.5" : "mb-3.5"
          )}
        >
          <div
            className={cn(
              "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border max-w-full transition-all shadow-sm",
              light
                ? "bg-[#FFF8E7] border-[#F2D792] text-[#976409]"
                : "bg-[#0B172C] border-[#D4AF37]/45 text-[#F6E3A8]"
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "w-1.5 h-1.5 rounded-full shrink-0",
                light ? "bg-[#B4821E]" : "bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"
              )}
            />
            <span
              className={cn(
                "text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.16em] sm:tracking-[0.20em] leading-none",
                light ? "text-[#976409]" : "text-[#F6E3A8]"
              )}
            >
              {eyebrow}
            </span>
          </div>
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.18] tracking-tight",
          light ? "text-[#0F172A]" : "text-white"
        )}
      >
        {typeof title === "string" ? (
          <RollingText
            text={title}
            highlightCount={2}
            highlightClassName={
              light
                ? "text-[#B4821E] font-extrabold"
                : "text-[#F5D57A] font-extrabold drop-shadow-[0_0_15px_rgba(212,175,55,0.35)]"
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

