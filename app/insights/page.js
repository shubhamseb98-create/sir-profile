"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import { posts as insights, insightPillars } from "@/data/posts";
import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";

export default function InsightsPage() {
  const [selectedPillar, setSelectedPillar] = useState("All");

  const filteredPosts =
    selectedPillar === "All"
      ? insights
      : insights.filter((p) => p.pillar === selectedPillar);

  return (
    <>
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="STRATEGIC PERSPECTIVES & PLAYBOOKS"
        title="Unfiltered Insights on Scaling, Systems & Digital ROI."
        description="Essays, operational playbooks, and strategic frameworks drawn from 15+ years of founding companies, advising promoters, and building digital ecosystems."
        breadcrumbs={[{ label: "Insights & Perspectives" }]}
        imageSrc="/images/hero/hero-business-strategy.jpg"
      />

      {/* 2. Interactive Pillar Chips & Article Listing (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style balanced ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="01"
            eyebrow="CURATED ESSAYS"
            title="Strategic Articles & Playbooks"
            description="Explore frameworks organized by growth mechanics, digital visibility, systems engineering, and ecosystem governance."
            light={true}
            className="mb-10 sm:mb-14"
          />

          {/* Animated Category Filter Chips */}
          <div className="flex flex-wrap gap-2.5 pb-8 border-b border-slate-200 mb-10">
            {insightPillars.map((pillar) => (
              <button
                type="button"
                key={pillar}
                onClick={() => setSelectedPillar(pillar)}
                className={`text-xs px-4 py-2.5 rounded-full border transition-all duration-200 cursor-pointer font-medium tracking-wide ${
                  selectedPillar === pillar
                    ? "bg-black text-white font-bold border-black shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:border-black hover:text-black"
                }`}
              >
                {pillar}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-black transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-white px-3 py-1 rounded-full bg-black border border-black font-bold">
                      {post.pillar}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5 font-medium">
                      <Clock className="w-3 h-3 text-slate-700" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-black transition-colors">
                    <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono font-medium">
                    By {post.author}
                  </span>

                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-1.5 uppercase tracking-wider font-bold text-slate-900 hover:text-black transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <p>No articles found for this pillar.</p>
              <button
                onClick={() => setSelectedPillar("All")}
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
        title="Put These Frameworks Into Practice"
        description="Book a strategic diagnostic session to assess how these operational principles apply to your business."
        primaryAction={{
          label: "Book Strategy Call",
          href: "/contact?type=strategy-call",
        }}
        secondaryAction={{
          label: "Explore Case Studies",
          href: "/case-studies",
        }}
        light={true}
      />
    </>
  );
}
