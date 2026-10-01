"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import PageCTA from "@/components/sections/PageCTA";
import { caseStudies, caseStudyCategories } from "@/data/caseStudies";

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter(
          (cs) =>
            cs.category === selectedCategory ||
            cs.secondaryCategories?.includes(selectedCategory)
        );

  return (
    <>
      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.24em] text-[#C6A15B] font-mono font-medium block mb-4">
              PROVEN RESULTS & INTERVENTIONS
            </span>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium text-[#F5F3EE] leading-[1.1] mb-6">
              Case Studies & Transformation Stories
            </h1>

            <p className="text-base sm:text-lg text-[#A9B0BE] leading-relaxed">
              Explore documented transformations across digital growth, enterprise CRM implementation,
              multi-city SOP architectures, and industry ecosystem building.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Chips & Listing */}
      <section className="py-20 md:py-28 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          {/* Animated Category Filter Chips */}
          <div className="flex flex-wrap gap-2 pb-10 border-b border-white/08 mb-12">
            {caseStudyCategories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2.5 rounded-full border transition-all duration-200 cursor-pointer font-medium tracking-wide ${
                  selectedCategory === cat
                    ? "bg-[#C6A15B] text-[#0A0F1A] font-semibold border-[#C6A15B] shadow-sm"
                    : "bg-[#0A0F1A]/60 text-[#A9B0BE] border-white/10 hover:border-[#C6A15B]/50 hover:text-[#F5F3EE]"
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
            <div className="text-center py-16 text-[#A9B0BE]">
              <p>No case studies found in this specific category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-xs font-mono text-[#C6A15B] uppercase underline"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Page Closing CTA */}
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
      />
    </>
  );
}
