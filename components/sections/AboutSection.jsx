"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RollingText from "@/components/ui/RollingText";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about-us" className="min-h-screen py-6 sm:py-8 lg:py-10 flex items-center bg-[#FFFFFF] text-[#0F172A] relative font-sans border-b border-slate-200 overflow-hidden">

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Column: Slides in smoothly from the left side */}
          <ScrollReveal direction="right" distance={80} duration={1.05} delay={0.08} className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeading
              number="01"
              eyebrow="ABOUT DHEERAJ AGGARWAL"
              title="Architecting Strategic Growth, Scalable Systems & High-Value Alliances."
              light={true}
              compact={true}
              animate={false}
              className="!mb-3 sm:!mb-4 max-w-none"
            />

            {/* Narrative Body */}
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-2">
              <RollingText
                text="Dheeraj Aggarwal is a business consultant, growth specialist, and digital strategist with over 15 years of ground-level entrepreneurial experience. Having delivered 3,700+ digital platforms, advised promoter-driven enterprises, and built institutional industry communities, he bridges high-level strategic vision with disciplined operational execution."
                delay={0.2}
                duration={1.3}
                stagger={0.025}
              />
            </p>

            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-2.5 sm:mb-3">
              <RollingText
                text="Whether advising nationwide healthcare chains like Karma Ayurveda, scaling digital agency ecosystems at Web Tycoons, or uniting hospitality leaders through Happy Hospitality Club, his approach centers on unit economics, automated workflows, and building enterprises that operate seamlessly without founder bottlenecks."
                delay={0.35}
                duration={1.3}
                stagger={0.025}
              />
            </p>

            {/* Guiding Principle Callout */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border-l-4 border-[#334155] mb-3 sm:mb-4">
              <p className="text-xs text-slate-700 italic leading-relaxed">
                &ldquo;Sustainable enterprise value is not created by ad-hoc marketing campaigns. It is engineered through unit economic clarity, repeatable SOPs, and ruthless operational accountability.&rdquo;
              </p>
              <div className="mt-1 text-[10px] font-mono font-bold text-[#334155]">
                — Dheeraj Aggarwal, Executive Advisor
              </div>
            </div>

            {/* Actions (Smooth Scroll & Strategy Call Modal — No Inner Page URLs) */}
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact?type=strategy-call" variant="light-primary" size="sm">
                Book a Strategy Call
              </Button>
              <Button href="#core-expertise" variant="light-secondary" size="sm" icon="right">
                Explore Advisory Frameworks
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Column: Slides in smoothly from the right side */}
          <ScrollReveal direction="left" distance={80} duration={1.05} delay={0.18} scale={0.97} className="lg:col-span-5 relative">
            <div className="relative h-[300px] sm:h-[360px] md:h-[400px] lg:h-[420px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950 group">
              <Image
                src="/images/hero/ddab.png"
                alt="Dheeraj Aggarwal - Business Consultant & Growth Specialist"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Bottom Credential Card Overlay */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/15 text-white shadow-2xl">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm sm:text-lg font-bold text-white">Dheeraj Aggarwal</h3>
                  <span className="text-[9px] sm:text-[10px] font-mono text-white bg-black/95 px-2 sm:px-2.5 py-0.5 rounded-full border border-white/20">
                    Executive Advisor
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

