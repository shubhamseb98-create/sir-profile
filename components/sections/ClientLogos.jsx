"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/ui/Marquee";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const CLIENT_LOGOS = [
  {
    name: "Karma Ayurveda",
    logo: "/cl-logo/karmalogo.webp",
    role: "Healthcare Network",
    href: "/karma-ayurveda",
    width: 140,
    height: 40,
  },
  {
    name: "Web Tycoons",
    logo: "/cl-logo/logo-new.png",
    role: "Digital Engineering",
    href: "/digital-growth",
    width: 180,
    height: 40,
  },
  {
    name: "Happy Hospitality Club",
    logo: "/cl-logo/logo.png",
    role: "Hospitality Alliance",
    href: "/hhc",
    width: 160,
    height: 40,
  },
  {
    name: "BNI Regional Chapter",
    logo: "/cl-logo/BNI_logo.png",
    role: "Executive Network",
    href: "/about#bni-leadership",
    width: 110,
    height: 36,
  },
  {
    name: "MSME Business Forum",
    logo: "/cl-logo/logotm.webp",
    role: "Industry Conclaves",
    href: "/speaking",
    width: 120,
    height: 40,
  },
  {
    name: "Vedic Gram Ayurveda Hospital",
    logo: "/logos/vedic-gram.svg",
    role: "Clinical Wellness",
    href: "/case-studies",
    width: 170,
    height: 40,
  },
  {
    name: "Bada Business",
    logo: "/logos/bada-business.svg",
    role: "Keynote & Growth",
    href: "/speaking",
    width: 170,
    height: 40,
  },
];

export default function ClientLogos() {
  return (
    <section
      id="client-logos"
      className="py-[60px] bg-[#FFFFFF] border-y border-slate-200 relative font-sans overflow-hidden select-none"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-10 relative z-10">
        <ScrollReveal distance={20} delay={0.1}>
          <SectionHeading
            eyebrow="CLIENTS & PARTNER ECOSYSTEMS"
            title="Trusted Across Brands & Sectors"
            description="Selected healthcare networks, digital ventures, hospitality alliances, and national business platforms advised or built."
            align="center"
            light={true}
            animate={false}
            className="!mb-0"
          />
        </ScrollReveal>
      </div>

      {/* Horizontal Continuous Logo Carousel */}
      <div className="relative z-10">
        <Marquee speed="slow">
          {CLIENT_LOGOS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-slate-200/90 bg-white hover:border-[#3B82F6] hover:shadow-lg transition-all duration-300 shadow-xs group select-none min-w-[210px] sm:min-w-[240px] md:min-w-[260px] h-[98px] sm:h-[108px] md:h-[114px]"
            >
              <div className="h-9 sm:h-10 md:h-11 w-full flex items-center justify-center px-2">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className="max-h-7 sm:max-h-8 md:max-h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-600 font-semibold px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 group-hover:border-[#BFDBFE] group-hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
                {item.role}
              </span>
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
