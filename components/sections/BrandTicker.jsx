"use client";

import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RollingText from "@/components/ui/RollingText";

export default function BrandTicker() {
  const brandLogos = [
    {
      name: "Karma Ayurveda",
      logo: "/cl-logo/karmalogo.webp",
      role: "Executive Consultant",
      width: 140,
      height: 40,
    },
    {
      name: "Web Tycoons",
      logo: "/cl-logo/logo-new.png",
      role: "Founder & CEO",
      width: 180,
      height: 40,
    },
    {
      name: "Happy Hospitality Club",
      logo: "/cl-logo/logo.png",
      role: "Co-Director",
      width: 160,
      height: 40,
    },
    {
      name: "BNI Regional Chapter",
      logo: "/cl-logo/BNI_logo.png",
      role: "Chapter President",
      width: 110,
      height: 36,
    },
    {
      name: "MSME Business Forum",
      logo: "/cl-logo/logotm.webp",
      role: "Keynote Speaker",
      width: 120,
      height: 40,
    },
  ];

  // Duplicate logos so the infinite marquee strip runs seamlessly on any screen width
  const tickerItems = [...brandLogos, ...brandLogos];

  return (
    <section id="brand-ticker" className="py-16 sm:py-20 md:py-24 bg-[#FFFFFF] border-y border-slate-200 relative font-sans overflow-hidden select-none">
      {/* Subtle Ambient Light Glows */}
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[420px] h-[420px] bg-[#CFFF04]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[420px] h-[420px] bg-[#CFFF04]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-12 relative z-10">
        <ScrollReveal distance={20} delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 mb-3.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#15803D]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-slate-700 uppercase">
              STRATEGIC VENTURES &amp; LEADERSHIP ALLIANCES
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            <RollingText text="Trusted Ecosystems & Enterprise Networks" />
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto mt-2.5 leading-relaxed">
            <RollingText
              text="Leading organizations, corporate alliances, and national business forums spearheaded or advised by Dheeraj Aggarwal."
              delay={0.2}
              duration={1.3}
              stagger={0.035}
            />
          </p>
        </ScrollReveal>
      </div>

      {/* Infinite Logo Marquee Strip with Sleek, Perfectly Sized Logo Cards */}
      <div className="relative z-10">
        <Marquee speed="slow">
          {tickerItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-400 hover:shadow-lg transition-all duration-300 shadow-xs group select-none cursor-default min-w-[210px] sm:min-w-[240px] md:min-w-[260px] h-[98px] sm:h-[108px] md:h-[114px]"
            >
              {/* Perfectly Proportioned Brand Logo Container */}
              <div className="h-9 sm:h-10 md:h-11 w-full flex items-center justify-center px-2">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className="max-h-7 sm:max-h-8 md:max-h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Leadership Role Tag */}
              <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-600 font-semibold px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 group-hover:border-slate-300 group-hover:text-[#0F172A] transition-colors whitespace-nowrap">
                {item.role}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

