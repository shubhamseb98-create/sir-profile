"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { trackStrategyCallClick, trackWhatsAppClick } from "@/lib/analytics";

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-300"
    >
      {/* Header bar inside menu */}
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <Link
          href="/"
          onClick={onClose}
          className="focus:outline-none"
          aria-label="Dheeraj Aggarwal - Home"
        >
          <Image
            src="/cl-logo/pr-logo.png"
            alt="Dheeraj Aggarwal"
            width={200}
            height={60}
            className="h-11 sm:h-12 w-auto object-contain brightness-0 invert"
            priority
          />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="my-auto py-8 overflow-y-auto no-scrollbar">
        <ul className="flex flex-col gap-4 sm:gap-5">
          {siteConfig.navLinks.map((item, idx) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between text-2xl sm:text-3xl font-bold text-white hover:text-[#CFFF04] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-slate-500 group-hover:text-[#CFFF04]">
                  0{idx + 1}
                </span>
              </Link>

              {/* Sub-links if available */}
              {item.children && (
                <div className="ml-4 mt-2.5 pl-3 border-l border-[#CFFF04]/30 flex flex-col gap-2">
                  {item.children.slice(1).map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={onClose}
                      className="text-sm font-sans text-slate-300 hover:text-[#CFFF04] transition-colors flex items-center gap-1.5"
                    >
                      <span>{child.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#CFFF04]" />
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Action Drawer */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={() => {
            trackStrategyCallClick("MobileMenu");
            onClose();
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("open-lead-modal"));
            }
          }}
          className="w-full text-center bg-[#CFFF04] text-black font-bold py-3.5 px-6 rounded-full text-sm hover:bg-[#E2FF6E] shadow-lg shadow-[0_0_20px_rgba(207,255,4,0.25)] transition-all cursor-pointer"
        >
          Book a Strategy Call
        </button>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackWhatsAppClick("MobileMenu");
            onClose();
          }}
          className="w-full flex items-center justify-center gap-2 border border-white/15 text-white py-3.5 px-6 rounded-full text-sm hover:border-[#25D366] hover:text-[#25D366] transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>Connect on WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
