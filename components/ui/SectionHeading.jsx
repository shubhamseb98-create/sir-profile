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
      {(number || eyebrow) && (
        <div
          className={cn(
            "flex",
            isCenter && "justify-center",
            compact ? "mb-2" : "mb-3.5"
          )}
        >
          <div
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full border max-w-full",
              light
                ? "bg-slate-100/90 border-slate-200 text-[#0F172A] shadow-xs"
                : "bg-gradient-to-r from-[#D4AF37]/12 via-[#FCF6BA]/8 to-[#9A6B0C]/12 border-[#D4AF37]/40 backdrop-blur-md"
            )}
          >
            {number ? (
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-[10px] font-mono font-extrabold tracking-wider leading-none shrink-0",
                  light ? "bg-[#0F172A] text-white" : "bg-gold-metallic text-black shadow-xs"
                )}
              >
                {number}
              </span>
            ) : (
              <span
                className={cn(
                  "w-2 h-2 rounded-full shrink-0",
                  light ? "bg-[#0F172A]" : "bg-gold-metallic"
                )}
              />
            )}

            {eyebrow && (
              <span
                className={cn(
                  "text-[10px] sm:text-[11px] font-mono uppercase font-bold tracking-[0.14em] sm:tracking-[0.2em] leading-tight",
                  light ? "text-[#334155]" : "text-gold-metallic"
                )}
              >
                {eyebrow}
              </span>
            )}
          </div>
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.18] tracking-tight",
          light ? "text-[#0F172A]" : "text-white"
        )}
      >
        {typeof title === "string" ? <RollingText text={title} /> : title}
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

      {/* Modern Metallic Accent Bar */}
      <div
        className={cn(
          "w-16 h-[3px] rounded-full",
          compact ? "mt-2.5 sm:mt-3" : "mt-5",
          light
            ? "bg-gradient-to-r from-[#0F172A] via-[#9A6B0C] to-[#FCF6BA]"
            : "bg-[linear-gradient(90deg,#9A6B0C_0%,#FCF6BA_42%,#D4AF37_75%,#F7DF84_100%)]",
          isCenter && "mx-auto"
        )}
      />
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

