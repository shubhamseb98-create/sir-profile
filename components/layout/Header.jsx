"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ArrowUpRight, Briefcase, Building2, Users, Globe, Mic, Calendar, Compass } from "lucide-react";
import { siteConfig } from "@/data/site";
import MobileMenu from "./MobileMenu";
import { trackStrategyCallClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const getChildIcon = (label = "") => {
  const l = label.toLowerCase();
  if (l.includes("karma")) return Building2;
  if (l.includes("hhc") || l.includes("hospitality")) return Users;
  if (l.includes("web tycoons") || l.includes("digital")) return Globe;
  if (l.includes("speaking") || l.includes("keynote")) return Mic;
  if (l.includes("strategy call")) return Calendar;
  if (l.includes("consulting")) return Compass;
  return Briefcase;
};

const isRouteMatch = (pathname, href) => {
  if (!href) return false;
  const cleanHref = href.split("?")[0].split("#")[0];
  if (cleanHref === "/") return pathname === "/";
  return pathname === cleanHref || pathname.startsWith(cleanHref + "/");
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 30);

      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current + 8) {
          setIsVisible(false);
          setOpenDropdown(null);
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
          "fixed left-0 right-0 z-50 transition-[top,padding] duration-300 font-sans",
          isVisible ? "top-0" : "-top-32 pointer-events-none",
          isScrolled ? "py-2" : "py-3 sm:py-3.5"
        )}
      >
        {/* Separate background layer so <header> does not create a Backdrop Root blocking dropdown blur */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 -z-10 transition-all duration-300",
            isScrolled
              ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-900/5"
              : "bg-transparent border-b border-transparent"
          )}
        />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Permanent Brand Signature Logo */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none shrink-0"
            aria-label="Dheeraj Aggarwal - Home"
          >
            <Image
              src="/cl-logo/dheeraj-gold-logo.png"
              alt="Dheeraj Aggarwal"
              width={240}
              height={82}
              unoptimized
              className={cn(
                "h-11 sm:h-13 md:h-14 lg:h-[58px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]",
                isScrolled
                  ? "drop-shadow-[0_1px_1px_rgba(0,0,0,0.42)]"
                  : "drop-shadow-[0_2px_10px_rgba(59,130,246,0.22)]"
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation - Transparent over Banner, Frosted White on Scroll */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink-0">
            {siteConfig.navLinks.map((item) => {
              const isActive = isRouteMatch(pathname, item.href);
              const displayLabel = item.label === "Leadership & Ventures" ? "Ventures" : item.label;

              if (item.children) {
                const isThisOpen = openDropdown === item.label;
                const isChildActive =
                  isActive || item.children.some((c) => isRouteMatch(pathname, c.href));

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                      }
                      aria-expanded={isThisOpen}
                      className={cn(
                        "flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-medium tracking-wide rounded-full transition-all whitespace-nowrap cursor-pointer",
                        isThisOpen || isChildActive
                          ? isScrolled
                            ? "bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] font-semibold shadow-xs"
                            : "bg-[#3B82F6]/15 backdrop-blur-md text-[#93C5FD] font-semibold border border-[#60A5FA]/45"
                          : isScrolled
                            ? "text-slate-700 hover:text-[#1D4ED8] hover:bg-slate-100"
                            : "text-slate-200 hover:text-white hover:bg-white/[0.08]"
                      )}
                    >
                      <span>{displayLabel}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          isThisOpen
                            ? isScrolled
                              ? "rotate-180 text-[#2563EB]"
                              : "rotate-180 text-[#60A5FA]"
                            : isChildActive
                            ? isScrolled
                              ? "text-[#1D4ED8]"
                              : "text-[#93C5FD]"
                            : "text-slate-400"
                        )}
                        strokeWidth={2}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isThisOpen && (
                      <div className="absolute top-full left-0 w-[356px] pt-2.5 -mt-1 z-50">
                        <div className="relative overflow-hidden bg-[#04040A]/90 border border-white/12 backdrop-blur-2xl backdrop-saturate-150 rounded-2xl p-2 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.14)] animate-in fade-in slide-in-from-top-2 duration-200">
                          {/* Mini header tag */}
                          <div className="px-3 py-1.5 mb-1.5 border-b border-white/10 flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-neutral-200">
                              {item.label} Directory
                            </span>
                            <span className="text-[10px] font-mono font-bold text-[#93C5FD]">
                              {item.children.length} Sections
                            </span>
                          </div>

                          <div className="space-y-1">
                            {item.children.map((child) => {
                              const isChildCurrent = isRouteMatch(pathname, child.href);
                              const Icon = getChildIcon(child.label);

                              return (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={cn(
                                    "group relative flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 cursor-pointer overflow-hidden",
                                    isChildCurrent
                                      ? "bg-[#2563EB]/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(147,197,253,0.25)]"
                                      : "hover:bg-white/[0.08] hover:backdrop-blur-md hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(147,197,253,0.18)] hover:translate-x-0.5"
                                  )}
                                >
                                  {/* Subtle top specular glass reflection on hover */}
                                  <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#60A5FA]/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

                                  {/* Left royal-blue bar on hover */}
                                  <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-[#3B82F6] to-[#6366F1] rounded-r opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                                  {/* Icon Badge */}
                                  <div
                                    className={cn(
                                      "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5",
                                      isChildCurrent
                                        ? "bg-[#2563EB] text-white shadow-xs"
                                        : "bg-white/10 text-neutral-200 group-hover:bg-[#3B82F6]/20 group-hover:text-[#93C5FD] group-hover:shadow-[inset_0_1px_0_rgba(96,165,250,0.3)] group-hover:scale-105"
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
                                            ? "text-[#93C5FD]"
                                            : "text-white group-hover:text-white"
                                        )}
                                      >
                                        {child.label}
                                      </span>
                                      <ArrowUpRight
                                        className={cn(
                                          "w-3.5 h-3.5 shrink-0 transition-all duration-200",
                                          isChildCurrent
                                            ? "text-[#93C5FD] opacity-100"
                                            : "text-neutral-300 opacity-0 group-hover:opacity-100 group-hover:text-[#93C5FD] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        )}
                                      />
                                    </div>
                                    <p
                                      className={cn(
                                        "text-[11px] leading-snug mt-1 transition-colors duration-200",
                                        isChildCurrent
                                          ? "text-neutral-100 font-normal"
                                          : "text-neutral-200/85 group-hover:text-neutral-100"
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
                    "px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-medium tracking-wide rounded-full transition-all whitespace-nowrap",
                    isActive
                      ? isScrolled
                        ? "bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] font-semibold"
                        : "bg-[#3B82F6]/15 text-[#93C5FD] font-semibold border border-[#60A5FA]/45"
                      : isScrolled
                        ? "text-slate-600 hover:text-[#1D4ED8] hover:bg-slate-100"
                        : "text-slate-200 hover:text-white hover:bg-white/[0.08]"
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
              className={cn(
                "hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium tracking-wide text-white transition-all whitespace-nowrap cursor-pointer",
                isScrolled
                  ? "bg-[#1D4ED8] hover:bg-[#2563EB] border border-[#1E40AF]/40 shadow-[0_6px_16px_rgba(29,78,216,0.22)]"
                  : "bg-gradient-to-r from-[#0F2557] via-[#1D4ED8] to-[#2563EB] hover:from-[#1D4ED8] hover:to-[#3B82F6] border border-[#60A5FA]/45 shadow-[0_6px_20px_rgba(29,78,216,0.32)]"
              )}
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open navigation menu"
              className={cn(
                "p-2 lg:hidden rounded-lg transition-colors",
                isScrolled
                  ? "text-slate-700 hover:text-[#1D4ED8] hover:bg-slate-100"
                  : "text-white hover:text-[#93C5FD] hover:bg-white/10"
              )}
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

