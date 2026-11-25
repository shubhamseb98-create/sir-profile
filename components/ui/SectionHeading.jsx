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
                : "bg-[#C8FF00]/10 border-[#C8FF00]/30 text-[#C8FF00] backdrop-blur-md shadow-[0_0_16px_rgba(200,255,0,0.12)]"
            )}
          >
            {number ? (
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-[10px] font-mono font-extrabold tracking-wider leading-none shrink-0",
                  light ? "bg-[#0F172A] text-white" : "bg-[#C8FF00] text-black"
                )}
              >
                {number}
              </span>
            ) : (
              <span
                className={cn(
                  "w-2 h-2 rounded-full shrink-0",
                  light ? "bg-[#0F172A]" : "bg-[#C8FF00]"
                )}
              />
            )}

            {eyebrow && (
              <span
                className={cn(
                  "text-[10px] sm:text-[11px] font-mono uppercase font-bold tracking-[0.14em] sm:tracking-[0.2em] leading-tight",
                  light ? "text-[#334155]" : "text-[#C8FF00]"
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

      {/* Modern Accent Bar */}
      <div
        className={cn(
          "w-16 h-[3px] rounded-full",
          compact ? "mt-2.5 sm:mt-3" : "mt-5",
          light
            ? "bg-gradient-to-r from-[#0F172A] to-[#C8FF00]"
            : "bg-gradient-to-r from-[#C8FF00] to-neutral-700",
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

