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
      "bg-[linear-gradient(135deg,#B38728_0%,#FCF6BA_25%,#D4AF37_52%,#9A6B0C_78%,#F7DF84_100%)] bg-[length:200%_auto] hover:bg-right text-black font-bold border border-[#FCF6BA]/45 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-white border border-white/20 hover:border-[#D4AF37] hover:text-[#FCF6BA] hover:bg-[#D4AF37]/[0.08]",
    outline:
      "bg-transparent text-[#E5C665] border border-[#D4AF37]/45 hover:border-[#FCF6BA]/70 hover:bg-[#D4AF37]/12",
    "light-primary":
      "bg-black text-white font-semibold hover:bg-neutral-900 border border-black shadow-md hover:-translate-y-0.5",
    "light-secondary":
      "bg-white text-[#1E293B] border border-slate-300 hover:border-black hover:text-black shadow-sm hover:shadow hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-[#E5C665] hover:text-[#FCF6BA] hover:bg-white/[0.05]",
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

