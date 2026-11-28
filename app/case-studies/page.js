"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import { caseStudies, caseStudyCategories } from "@/data/caseStudies";
import { cn } from "@/lib/utils";

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  return (
    <>
      <BreadcrumbHero
        eyebrow="PORTFOLIO & EVIDENCE"
        title="Measurable Business Transformations Across Sectors."
        description="Detailed reviews of how strategic diagnostics, custom CRM architecture, and disciplined digital campaigns drove bottom-line growth."
        breadcrumbs={[{ label: "Case Studies" }]}
        imageSrc="/images/transformations/karma-clinic-ops.jpg"
      />

      {/* Interactive Filter & Case Portfolio Grid (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="FIELD IMPACT"
            title="Transformation Portfolio"
            description="Filtered by specialized practice domain, operational challenge, and strategic intervention type."
            light={true}
            compact={true}
            animate={false}
            className="!mb-6 sm:!mb-8"
          />

          {/* Clean Hairline Filter Tabs */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200 mb-8">
            {caseStudyCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "text-xs px-3.5 py-2 rounded-full border transition-colors cursor-pointer font-medium",
                    isActive
                      ? "bg-[#04040A] text-[#93C5FD] border-[#04040A] font-semibold"
                      : "bg-white text-slate-600 border-slate-200 hover:border-[#3B82F6]/60 hover:text-[#1D4ED8]"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-12 text-slate-500 border border-dashed border-slate-200 rounded-2xl">
              <p className="text-sm mb-3">No case studies found in this specific category.</p>
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className="text-xs text-[#1D4ED8] hover:text-[#2563EB] font-bold uppercase tracking-wider underline cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

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
