"use client";

import Counter from "@/components/ui/Counter";
import Marquee from "@/components/ui/Marquee";
import { siteConfig } from "@/data/site";

export default function TrustBar() {
  const credibilityEntities = [
    { name: "Web Tycoons", role: "Founder", desc: "15+ Years Digital Agency" },
    { name: "Karma Ayurveda", role: "Executive Consultant", desc: "Healthcare & CRM Strategy" },
    { name: "Happy Hospitality Club", role: "Co-Director", desc: "Hospitality Network" },
    { name: "BNI Regional Chapter", role: "Chapter President", desc: "Business Referral Ecosystem" },
    { name: "MSME & Business Forums", role: "Keynote Speaker", desc: "50+ Masterclasses & Summits" },
  ];

  return (
    <section id="credibility-bar" className="py-8 sm:py-12 bg-[#F1F5FB] border-b border-slate-200 relative font-sans">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 mb-6 sm:mb-8">
        {/* Top Key Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {siteConfig.metrics.map((m, idx) => (
            <div
              key={m.label}
              className="p-3.5 sm:p-5 md:p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-center shadow-sm hover:border-[#334155]/40 hover:shadow-md transition-all"
            >
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-1 sm:mb-2 flex items-baseline tracking-tight">
                <Counter value={m.value} suffix={m.suffix} duration={1800 + idx * 200} />
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm text-slate-500 font-medium leading-snug">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Strip: Strategic Ecosystems & Roles */}
      <div className="pt-2">
        <Marquee speed="slow">
          {credibilityEntities.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 px-6 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm"
            >
              <span className="text-sm font-semibold text-[#0F172A] whitespace-nowrap">
                {item.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#334155]" />
              <span className="text-xs uppercase tracking-wider text-[#334155] font-semibold whitespace-nowrap">
                {item.role}
              </span>
              <span className="text-xs text-slate-500 whitespace-nowrap hidden sm:inline">
                â€¢ {item.desc}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

