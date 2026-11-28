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
      "bg-gradient-to-r from-[#2563EB] to-[#4F46E5] hover:brightness-110 text-white font-semibold border border-[#93C5FD]/40 shadow-[0_8px_22px_rgba(37,99,235,0.32)] hover:shadow-[0_12px_28px_rgba(79,70,229,0.48)] hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-white border border-white/20 hover:border-[#60A5FA] hover:text-[#93C5FD] hover:bg-[#3B82F6]/[0.10]",
    outline:
      "bg-transparent text-[#93C5FD] border border-[#60A5FA]/45 hover:border-[#93C5FD]/75 hover:bg-[#3B82F6]/12",
    "light-primary":
      "bg-[#04040A] text-white font-semibold hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#4F46E5] border border-[#04040A] hover:border-[#2563EB] shadow-md hover:-translate-y-0.5",
    "light-secondary":
      "bg-white text-[#1E293B] border border-slate-300 hover:border-[#2563EB] hover:text-[#1D4ED8] hover:bg-[#EFF6FF]/50 shadow-sm hover:shadow hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-[#93C5FD] hover:text-white hover:bg-white/[0.06]",
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

