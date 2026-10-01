"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Direct messaging contact"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("FloatingWidget")}
        aria-label="Connect with Dheeraj Aggarwal on WhatsApp"
        className="flex items-center gap-2.5 bg-[#0F1626]/90 hover:bg-[#151D30] text-[#F5F3EE] hover:text-[#E2C98F] border border-white/12 hover:border-[#C6A15B]/50 px-3.5 py-2.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
      >
        <span className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm">
          <MessageCircle className="w-4 h-4 fill-white" />
        </span>
        <span className="text-xs font-medium tracking-wide hidden sm:inline-block pr-1">
          WhatsApp Direct
        </span>
      </a>
    </aside>
  );
}

