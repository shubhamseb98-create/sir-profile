"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ArrowUpRight, Briefcase, Building2, Users, Globe } from "lucide-react";
import { siteConfig } from "@/data/site";
import MobileMenu from "./MobileMenu";
import { trackStrategyCallClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const getChildIcon = (href) => {
  if (href.includes("karma")) return Building2;
  if (href.includes("hhc")) return Users;
  if (href.includes("digital-growth")) return Globe;
  return Briefcase;
};

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
            ? "py-2 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-900/5"
            : "py-2.5 sm:py-3 bg-white border-b border-slate-200/90 shadow-sm"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Permanent Brand Signature Logo */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none shrink-0"
            aria-label="Dheeraj Aggarwal - Home"
          >
            <Image
              src="/cl-logo/pr-logo.png"
              alt="Dheeraj Aggarwal"
              width={240}
              height={68}
              className="h-11 sm:h-13 md:h-14 lg:h-[58px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
              priority
            />
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
                        "flex items-center gap-1.5 px-3 py-1.5 text-xs xl:text-[13px] font-medium tracking-wide rounded-full transition-all whitespace-nowrap cursor-pointer",
                        dropdownOpen || isChildActive
                          ? "bg-black text-white font-semibold shadow-xs"
                          : "text-slate-700 hover:text-black hover:bg-slate-100"
                      )}
                    >
                      <span>{displayLabel}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          dropdownOpen
                            ? "rotate-180 text-[#CFFF04]"
                            : isChildActive
                            ? "text-white"
                            : "text-slate-400"
                        )}
                        strokeWidth={2}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-[350px] pt-2.5 -mt-1 z-50">
                        <div className="bg-white border-2 border-black rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                          {/* Mini header tag */}
                          <div className="px-3 py-1.5 mb-1 border-b border-neutral-100 flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-neutral-500">
                              Ventures & Leadership
                            </span>
                            <span className="text-[10px] font-mono font-bold text-neutral-400">
                              4 Mandates
                            </span>
                          </div>

                          <div className="space-y-1">
                            {item.children.map((child) => {
                              const isChildCurrent = pathname === child.href;
                              const Icon = getChildIcon(child.href);

                              return (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setDropdownOpen(false)}
                                  className={cn(
                                    "group relative flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 cursor-pointer overflow-hidden",
                                    isChildCurrent
                                      ? "bg-neutral-100 border border-neutral-200"
                                      : "hover:bg-black hover:shadow-lg hover:translate-x-0.5"
                                  )}
                                >
                                  {/* Left neon lime accent bar on hover */}
                                  <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#CFFF04] rounded-r opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                                  {/* Icon Badge */}
                                  <div
                                    className={cn(
                                      "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5",
                                      isChildCurrent
                                        ? "bg-black text-[#CFFF04]"
                                        : "bg-neutral-100 text-neutral-700 group-hover:bg-neutral-900 group-hover:text-[#CFFF04] group-hover:scale-105"
                                    )}
                                  >
                                    <Icon className="w-4 h-4" />
                                  </div>

                                  {/* Text Content */}
                                  <div className="flex-1 min-w-0 pr-1">
                                    <div className="flex items-center justify-between gap-1">
                                      <span
                                        className={cn(
                                          "text-xs font-bold leading-tight transition-colors duration-200",
                                          isChildCurrent
                                            ? "text-black"
                                            : "text-neutral-900 group-hover:text-white"
                                        )}
                                      >
                                        {child.label}
                                      </span>
                                      <ArrowUpRight
                                        className={cn(
                                          "w-3.5 h-3.5 shrink-0 transition-all duration-200",
                                          isChildCurrent
                                            ? "text-black opacity-100"
                                            : "text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:text-[#CFFF04] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        )}
                                      />
                                    </div>
                                    <p
                                      className={cn(
                                        "text-[11px] leading-snug mt-1 transition-colors duration-200",
                                        isChildCurrent
                                          ? "text-neutral-600 font-normal"
                                          : "text-neutral-500 group-hover:text-neutral-300"
                                      )}
                                    >
                                      {child.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
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
                      ? "bg-slate-100 text-slate-900 font-semibold"
                      : "text-slate-600 hover:text-[#334155] hover:bg-slate-100"
                  )}
                >
                  {displayLabel}
                </Link>
              );
            })}
          </nav>

          {/* Right Action + Mobile Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                trackStrategyCallClick("HeaderCTA");
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-lead-modal"));
                }
              }}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black hover:bg-neutral-900 text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow-md hover:shadow-black/25 transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 text-slate-700 hover:text-[#334155] lg:hidden rounded-lg hover:bg-slate-100 transition-colors"
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

