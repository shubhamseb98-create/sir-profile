"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary", // "primary" | "secondary" | "outline" | "light-primary" | "light-secondary" | "ghost"
  size = "md", // "sm" | "md" | "lg"
  icon = "up-right", // "up-right" | "right" | "none"
  className = "",
  type = "button",
  disabled = false,
  target,
  rel,
  ariaLabel,
  download,
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium font-sans transition-all duration-300 rounded-full select-none cursor-pointer tracking-wide group disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5 h-9",
    md: "text-sm px-6 py-2.5 gap-2 h-11",
    lg: "text-base px-8 py-3.5 gap-2.5 h-13",
  };

  const variantStyles = {
    primary:
      "bg-[#CFFF04] text-black font-bold hover:bg-[#bef264] shadow-[0_4px_20px_rgba(207,255,4,0.3)] hover:shadow-[0_6px_28px_rgba(207,255,4,0.5)] hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-white border border-white/20 hover:border-[#CFFF04] hover:text-[#CFFF04] hover:bg-white/[0.04]",
    outline:
      "bg-transparent text-[#CFFF04] border border-[#CFFF04]/40 hover:border-[#CFFF04] hover:bg-[#CFFF04]/10",
    "light-primary":
      "bg-black text-white font-semibold hover:bg-neutral-900 border border-black shadow-md hover:-translate-y-0.5",
    "light-secondary":
      "bg-white text-[#1E293B] border border-slate-300 hover:border-black hover:text-black shadow-sm hover:shadow hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-[#CFFF04] hover:text-white hover:bg-white/[0.05]",
  };

  const iconElement =
    icon === "up-right" ? (
      <ArrowUpRight
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current shrink-0"
        strokeWidth={2}
      />
    ) : icon === "right" ? (
      <ArrowRight
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-current shrink-0"
        strokeWidth={2}
      />
    ) : null;

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    const isStrategyModal =
      href.includes("contact?type=strategy-call") ||
      href.includes("type=strategy-call") ||
      href === "#strategy-modal" ||
      href === "#strategy-call" ||
      href === "#book-call";
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

    if (isStrategyModal) {
      return (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("open-lead-modal"));
            }
            if (onClick) onClick(e);
          }}
          className={combinedClasses}
          aria-label={ariaLabel || "Book a Strategy Call"}
        >
          <span>{children}</span>
          {iconElement}
        </button>
      );
    }

    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        aria-label={ariaLabel}
        onClick={onClick}
        download={download}
      >
        <span>{children}</span>
        {iconElement}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      {iconElement}
    </button>
  );
}

