"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import MobileMenu from "./MobileMenu";
import { trackStrategyCallClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 30);

      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current + 8) {
          setIsVisible(false);
          setDropdownOpen(false);
        } else if (currentScrollY < lastScrollY.current - 8) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isScrolled
            ? "py-3 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-900/5"
            : "py-4 bg-white border-b border-slate-200/90 shadow-sm"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none shrink-0"
            aria-label="Dheeraj Aggarwal - Home"
          >
            {/* Geometric Modern Icon */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-600/25 group-hover:scale-105 transition-transform">
              DA
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#2563EB] transition-colors leading-tight">
                Dheeraj Aggarwal
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-[#2563EB] font-bold hidden sm:block">
                Business Consultant
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean White Theme */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
            {siteConfig.navLinks.map((item) => {
              const isActive = pathname === item.href;
              const displayLabel = item.label === "Leadership & Ventures" ? "Ventures" : item.label;

              if (item.children) {
                const isChildActive = item.children.some((c) => pathname === c.href);
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={dropdownOpen}
                      className={cn(
                        "flex items-center gap-1 px-3 py-1.5 text-xs xl:text-[13px] font-medium tracking-wide rounded-full transition-all whitespace-nowrap",
                        isChildActive
                          ? "bg-blue-50 text-[#2563EB] font-semibold"
                          : "text-slate-600 hover:text-[#2563EB] hover:bg-slate-100"
                      )}
                    >
                      <span>{displayLabel}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200 text-slate-400",
                          dropdownOpen && "rotate-180 text-[#2563EB]"
                        )}
                        strokeWidth={2}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 -mt-1 z-50">
                        <div className="bg-white border border-slate-200 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setDropdownOpen(false)}
                              className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                              <div className="flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-[#2563EB]">
                                <span>{child.label}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#2563EB]" />
                              </div>
                              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                                {child.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 text-xs xl:text-[13px] font-medium tracking-wide rounded-full transition-all whitespace-nowrap",
                    isActive
                      ? "bg-blue-50 text-[#2563EB] font-semibold"
                      : "text-slate-600 hover:text-[#2563EB] hover:bg-slate-100"
                  )}
                >
                  {displayLabel}
                </Link>
              );
            })}
          </nav>

          {/* Right Action + Mobile Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              href="/contact?type=strategy-call"
              onClick={() => trackStrategyCallClick("HeaderCTA")}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow-md hover:shadow-blue-600/25 transition-all whitespace-nowrap"
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 text-slate-700 hover:text-[#2563EB] lg:hidden rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Menu className="w-6 h-6" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
