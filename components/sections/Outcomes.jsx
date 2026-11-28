"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const OUTCOMES_CARDS = [
  {
    id: "roas-conversion",
    title: "Improve ROAS, Conversions & Sales Pipeline",
    image: "/images/cards/roas-analytics-real.jpg",
    href: "/consulting#digital-growth",
    gridClass: "md:col-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-1",
    accentBorder: "border-[#3B82F6]/45 hover:border-[#2563EB]",
    sizes: "(max-width: 1024px) 100vw, 40vw",
    priority: true,
    isTall: false,
  },
  {
    id: "brand-positioning",
    title: "Build a Clear Brand & Market Position",
    image: "/images/cards/brand-strategy-real.jpg",
    href: "/consulting#brand-strategy",
    gridClass: "lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-2",
    accentBorder: "border-slate-200 hover:border-[#3B82F6]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
    priority: true,
    isTall: true,
  },
  {
    id: "digital-visibility",
    title: "Create Stronger Digital Visibility & Lead Flow",
    image: "/images/cards/digital-growth-real.jpg",
    href: "/digital-growth",
    gridClass: "lg:col-start-2 lg:col-span-1 lg:row-start-2 lg:row-span-1",
    accentBorder: "border-slate-200 hover:border-[#3B82F6]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
    priority: false,
    isTall: false,
  },
  {
    id: "crm-systems",
    title: "Scale Operations with CRM & Process Discipline",
    image: "/images/cards/crm-operations-real.jpg",
    href: "/consulting#crm-systems",
    gridClass: "lg:col-start-2 lg:col-span-1 lg:row-start-3 lg:row-span-1",
    accentBorder: "border-slate-200 hover:border-[#3B82F6]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
    priority: false,
    isTall: false,
  },
  {
    id: "franchise-expansion",
    title: "Design Franchise & Multi-Location Expansion",
    image: "/images/cards/franchise-expansion-real.jpg",
    href: "/consulting#franchise-expansion",
    gridClass: "lg:col-start-1 lg:col-span-2 lg:row-start-4 lg:row-span-1",
    accentBorder: "border-slate-200 hover:border-[#3B82F6]",
    sizes: "(max-width: 1024px) 100vw, 40vw",
    priority: false,
    isTall: false,
  },
  {
    id: "strategic-alliances",
    title: "Create Strategic Partnerships & Ecosystem Alliances",
    image: "/images/cards/strategic-alliances-real.jpg",
    href: "/leadership-ventures",
    gridClass: "lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-2",
    accentBorder: "border-slate-200 hover:border-[#3B82F6]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
    priority: false,
    isTall: true,
  },
  {
    id: "leadership-teams",
    title: "Build Leadership Teams & Execution Discipline",
    image: "/images/cards/leadership-governance-real.jpg",
    href: "/consulting#business-growth",
    gridClass: "lg:col-start-3 lg:col-span-1 lg:row-start-3 lg:row-span-2",
    accentBorder: "border-slate-200 hover:border-[#3B82F6]",
    sizes: "(max-width: 1024px) 50vw, 20vw",
    priority: false,
    isTall: true,
  },
];

function BentoOutcomeCard({ card }) {
  return (
    <Link
      href={card.href}
      className={`group relative rounded-[20px] overflow-hidden bg-slate-900 border transition-all duration-300 flex flex-col justify-end p-3.5 sm:p-4 min-h-[168px] lg:min-h-0 shadow-[0_12px_28px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_38px_rgba(37,99,235,0.16)] hover:-translate-y-0.5 ${card.accentBorder} ${card.gridClass}`}
    >
      {/* Full-bleed Background Photography */}
      <Image
        src={card.image}
        alt={card.title}
        fill
        priority={card.priority}
        sizes={card.sizes}
        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
      />

      {/* Contrast Scrim for Crisp White Heading */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04040A]/94 via-[#04040A]/45 to-[#04040A]/20 group-hover:via-[#091538]/35 transition-colors duration-300" />

      {/* Top-Right Compact Glassy Arrow Action Circle */}
      <span className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/92 border border-white text-[#0F172A] group-hover:bg-[#2563EB] group-hover:border-[#60A5FA] group-hover:text-white flex items-center justify-center backdrop-blur-md shadow-sm transition-all duration-300 group-hover:rotate-12">
        <ArrowUpRight className="w-3.5 h-3.5" />
      </span>

      {/* Bottom Single Heading Clear of Arrow Button */}
      <h3
        className={`relative z-10 mt-auto pt-7 font-normal text-white leading-[1.3] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] group-hover:text-[#DBEAFE] transition-colors ${
          card.isTall ? "text-[15px] sm:text-base" : "text-[13.5px] sm:text-[14px]"
        }`}
      >
        {card.title}
      </h3>
    </Link>
  );
}

export default function Outcomes() {
  return (
    <section
      id="achieve-section"
      className="py-[60px] bg-[#FFFFFF] text-[#0F172A] relative font-sans border-b border-slate-200 overflow-hidden"
    >
      {/* Subtle White Blueprint Hairline Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37, 99, 235, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        {/* Split Layout: Left Editorial Title Block + Right Tall-Card 3x4 Mosaic Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Side Editorial Intro */}
          <ScrollReveal
            distance={24}
            delay={0.05}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <SectionHeading
              eyebrow="STRATEGIC VALUE CREATION"
              title="What I Help Businesses Achieve"
              description="Practical strategic advisory engineered to sharpen market position, multiply digital lead flow, systemize operations, and build disciplined teams."
              align="left"
              light={true}
              compact={false}
              animate={false}
              className="!mb-6"
            />

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#strategy-call"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#4F46E5] hover:brightness-110 text-white text-xs sm:text-[13px] font-medium shadow-[0_8px_22px_rgba(37,99,235,0.28)] transition-all hover:scale-[1.02]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book a Strategy Call</span>
              </a>

              <Link
                href="/consulting"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-[#3B82F6] text-xs sm:text-[13px] font-medium text-[#0F172A] transition-colors"
              >
                <span>Explore Consulting</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB]" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Side Compact 3x4 Mosaic Bento Grid with Taller Card Proportions */}
          <ScrollReveal
            distance={26}
            delay={0.12}
            scale={0.99}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[132px] gap-3">
              {OUTCOMES_CARDS.map((card) => (
                <BentoOutcomeCard key={card.id} card={card} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
