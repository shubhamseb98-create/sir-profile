"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import { caseStudies, caseStudyCategories } from "@/data/caseStudies";

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  return (
    <>
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="PORTFOLIO & EVIDENCE"
        title="Measurable Business Transformations Across Sectors."
        description="Detailed reviews of how strategic diagnostics, custom CRM architecture, and disciplined digital campaigns drove bottom-line growth."
        breadcrumbs={[{ label: "Case Studies" }]}
        imageSrc="/images/hero/hero-analytics-dashboard.jpg"
      />

      {/* 2. Interactive Filter Chips & Listing (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style balanced ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="01"
            eyebrow="FIELD IMPACT"
            title="Transformation Portfolio"
            description="Filtered by specialized practice domain, operational challenge, and strategic intervention type."
            light={true}
            className="mb-10 sm:mb-14"
          />

          {/* Animated Category Filter Chips */}
          <div className="flex flex-wrap gap-2.5 pb-8 border-b border-slate-200 mb-10">
            {caseStudyCategories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2.5 rounded-full border transition-all duration-200 cursor-pointer font-medium tracking-wide ${
                  selectedCategory === cat
                    ? "bg-black text-white font-bold border-black shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:border-black hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <p>No case studies found in this specific category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-xs font-mono text-slate-900 font-bold uppercase underline cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Page Closing CTA (LIGHT - 80px padding) */}
      <PageCTA
        title="Ready to Engineer a Similar Transformation?"
        description="Every organization requires a customized diagnostic before strategic intervention. Book a preliminary review with Dheeraj Aggarwal."
        primaryAction={{
          label: "Book Diagnostic Call",
          href: "/contact?type=strategy-call",
        }}
        secondaryAction={{
          label: "Explore Consulting Services",
          href: "/consulting",
        }}
        light={true}
      />
    </>
  );
}

