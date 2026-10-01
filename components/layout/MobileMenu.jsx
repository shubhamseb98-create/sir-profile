"use client";

import { useEffect } from "react";
import Link from "next/link";
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
      className="fixed inset-0 z-[100] bg-[#0A0F1A]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-300"
    >
      {/* Header bar inside menu */}
      <div className="flex items-center justify-between border-b border-white/08 pb-5">
        <Link
          href="/"
          onClick={onClose}
          className="font-editorial text-2xl font-medium tracking-wide text-[#F5F3EE]"
        >
          Dheeraj Aggarwal
        </Link>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-[#A9B0BE] hover:text-[#F5F3EE] rounded-full hover:bg-white/06 transition-colors"
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
                className="group flex items-center justify-between text-2xl sm:text-3xl font-editorial font-medium text-[#F5F3EE] hover:text-[#E2C98F] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#C6A15B]/60 group-hover:text-[#C6A15B]">
                  0{idx + 1}
                </span>
              </Link>

              {/* Sub-links if available */}
              {item.children && (
                <div className="ml-4 mt-2.5 pl-3 border-l border-[#C6A15B]/30 flex flex-col gap-2">
                  {item.children.slice(1).map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={onClose}
                      className="text-sm font-sans text-[#A9B0BE] hover:text-[#E2C98F] transition-colors flex items-center gap-1.5"
                    >
                      <span>{child.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Action Drawer */}
      <div className="pt-6 border-t border-white/08 flex flex-col sm:flex-row gap-3">
        <Link
          href="/contact?type=strategy-call"
          onClick={() => {
            trackStrategyCallClick("MobileMenu");
            onClose();
          }}
          className="w-full text-center bg-[#C6A15B] text-[#0A0F1A] font-semibold py-3.5 px-6 rounded-full text-sm hover:bg-[#E2C98F] transition-colors"
        >
          Book a Strategy Call
        </Link>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackWhatsAppClick("MobileMenu");
            onClose();
          }}
          className="w-full flex items-center justify-center gap-2 border border-white/12 text-[#F5F3EE] py-3.5 px-6 rounded-full text-sm hover:border-[#C6A15B]/60 hover:text-[#E2C98F] transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>Connect on WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
