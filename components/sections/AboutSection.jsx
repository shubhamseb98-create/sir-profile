"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { Award, Briefcase } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about-us" className="min-h-screen py-6 sm:py-8 lg:py-10 flex items-center bg-[#FFFFFF] text-[#0F172A] relative font-sans border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Column: Clean Narrative & Core Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#334155]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#334155] font-bold">
                ABOUT DHEERAJ AGGARWAL
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-[#0F172A] leading-tight tracking-tight mb-2 sm:mb-3">
              Architecting Strategic Growth, Scalable Systems & High-Value Alliances.
            </h2>

            {/* Narrative Body */}
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-2">
              Dheeraj Aggarwal is a business consultant, growth specialist, and digital strategist with over 15 years of ground-level entrepreneurial experience. Having delivered 3,700+ digital platforms, advised promoter-driven enterprises, and built institutional industry communities, he bridges high-level strategic vision with disciplined operational execution.
            </p>

            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-2.5 sm:mb-3">
              Whether advising nationwide healthcare chains like Karma Ayurveda, scaling digital agency ecosystems at Web Tycoons, or uniting hospitality leaders through Happy Hospitality Club, his approach centers on unit economics, automated workflows, and building enterprises that operate seamlessly without founder bottlenecks.
            </p>

            {/* Guiding Principle Callout */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border-l-4 border-[#334155] mb-3 sm:mb-4">
              <p className="text-xs text-slate-700 italic leading-relaxed">
                &ldquo;Sustainable enterprise value is not created by ad-hoc marketing campaigns. It is engineered through unit economic clarity, repeatable SOPs, and ruthless operational accountability.&rdquo;
              </p>
              <div className="mt-1 text-[10px] font-mono font-bold text-[#334155]">
                â€” Dheeraj Aggarwal, Executive Advisor
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/about" variant="primary" size="sm">
                Read Full Biography
              </Button>
              <Button href="/consulting" variant="secondary" size="sm" icon="right">
                Explore Advisory Frameworks
              </Button>
            </div>
          </div>

          {/* Right Column: Executive Image with Floating Glassmorphic Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[300px] sm:h-[360px] md:h-[400px] lg:h-[420px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950 group">
              <Image
                src="/images/hero/hero-leader-suit.jpg"
                alt="Dheeraj Aggarwal - Business Consultant & Growth Specialist"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Badge Top Left: Years Experience */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/15 text-white shadow-lg">
                <Award className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wide">15+ Years Practitioner</span>
              </div>

              {/* Floating Badge Top Right: Ecosystem Deliveries */}
              <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 hidden sm:flex items-center gap-1.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#334155]/90 backdrop-blur-md border border-white/20 text-white shadow-lg">
                <Briefcase className="w-3.5 h-3.5" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold">3,700+ Deliveries</span>
              </div>

              {/* Bottom Credential Card Overlay */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/15 text-white shadow-2xl">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm sm:text-lg font-bold text-white">Dheeraj Aggarwal</h3>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#38BDF8] bg-blue-950/80 px-2 sm:px-2.5 py-0.5 rounded-full border border-blue-500/30">
                    Executive Advisor
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 mb-2 sm:mb-3">
                  Business Consultant â€¢ Digital Expert â€¢ Ecosystem Builder
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-medium text-slate-300">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/10">Karma Ayurveda</span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/10">Web Tycoons</span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/10">Happy Hospitality Club</span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/10">BNI President</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

