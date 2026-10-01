"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import PageCTA from "@/components/sections/PageCTA";
import { posts, insightPillars } from "@/data/posts";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

export default function InsightsPage() {
  const [selectedPillar, setSelectedPillar] = useState("All");

  const filteredPosts =
    selectedPillar === "All"
      ? posts
      : posts.filter((p) => p.pillar.toLowerCase().includes(selectedPillar.toLowerCase()));

  return (
    <>
      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#004671] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.24em] text-[#C6A15B] font-mono font-medium block mb-4">
              EXECUTIVE THOUGHT LEADERSHIP
            </span>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium text-[#F5F3EE] leading-[1.1] mb-6">
              Insights on Growth, Digital Strategy & Systems
            </h1>

            <p className="text-base sm:text-lg text-[#A9B0BE] leading-relaxed">
              Practical frameworks, diagnostic checklists, and leadership lessons drawn from 15+ years
              of advising promoter-led organizations, scaling agencies, and building ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Pillar Chips & Article Listing */}
      <section className="py-20 md:py-28 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          {/* Animated Category Filter Chips */}
          <div className="flex flex-wrap gap-2 pb-10 border-b border-white/08 mb-12">
            {insightPillars.map((pillar) => (
              <button
                type="button"
                key={pillar}
                onClick={() => setSelectedPillar(pillar)}
                className={`text-xs px-4 py-2.5 rounded-full border transition-all duration-200 cursor-pointer font-medium tracking-wide ${
                  selectedPillar === pillar
                    ? "bg-[#C6A15B] text-[#004671] font-semibold border-[#C6A15B] shadow-sm"
                    : "bg-[#004671]/60 text-[#A9B0BE] border-white/10 hover:border-[#C6A15B]/50 hover:text-[#F5F3EE]"
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
                className="p-8 rounded-2xl bg-[#151D30]/60 border border-white/08 hover:border-[#C6A15B]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] px-2.5 py-1 rounded bg-[#C6A15B]/10 border border-[#C6A15B]/20">
                      {post.pillar}
                    </span>
                    <span className="text-[11px] font-mono text-[#A9B0BE]/70 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C6A15B]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="font-editorial text-2xl font-medium text-[#F5F3EE] mb-3 leading-snug group-hover:text-[#E2C98F] transition-colors">
                    <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#A9B0BE] leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/06 flex items-center justify-between text-xs">
                  <span className="text-[#A9B0BE]/60 font-mono">
                    By {post.author}
                  </span>

                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-1.5 uppercase tracking-wider font-semibold text-[#C6A15B] group-hover:text-[#E2C98F] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 text-[#A9B0BE]">
              <p>No articles found for this pillar.</p>
              <button
                onClick={() => setSelectedPillar("All")}
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
      />
    </>
  );
}

