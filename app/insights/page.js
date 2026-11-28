"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import { posts as insights, insightPillars } from "@/data/posts";
import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InsightsPage() {
  const [selectedPillar, setSelectedPillar] = useState("All");

  const filteredPosts =
    selectedPillar === "All"
      ? insights
      : insights.filter((p) => p.pillar === selectedPillar);

  const showLeadFeature = selectedPillar === "All" && filteredPosts.length > 0;
  const leadPost = showLeadFeature ? filteredPosts[0] : null;
  const gridPosts = showLeadFeature ? filteredPosts.slice(1) : filteredPosts;

  return (
    <>
      <BreadcrumbHero
        eyebrow="STRATEGIC PERSPECTIVES & PLAYBOOKS"
        title="Unfiltered Insights on Scaling, Systems & Digital ROI."
        description="Essays, operational playbooks, and strategic frameworks drawn from 15+ years of founding companies, advising promoters, and building digital ecosystems."
        breadcrumbs={[{ label: "Insights & Perspectives" }]}
        imageSrc="/images/inner/about-philosophy-clarity.jpg"
      />

      {/* Interactive Essay Publication Index (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="CURATED ESSAYS"
            title="Strategic Articles & Playbooks"
            description="Explore frameworks organized by growth mechanics, digital visibility, systems engineering, and ecosystem governance."
            light={true}
            compact={true}
            animate={false}
            className="!mb-6 sm:!mb-8"
          />

          {/* Clean Hairline Filter Tabs */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200 mb-8">
            {insightPillars.map((pillar) => {
              const isActive = selectedPillar === pillar;
              return (
                <button
                  type="button"
                  key={pillar}
                  onClick={() => setSelectedPillar(pillar)}
                  className={cn(
                    "text-xs px-3.5 py-2 rounded-full border transition-colors cursor-pointer font-medium",
                    isActive
                      ? "bg-[#04040A] text-[#93C5FD] border-[#04040A] font-semibold"
                      : "bg-white text-slate-600 border-slate-200 hover:border-[#3B82F6]/60 hover:text-[#1D4ED8]"
                  )}
                >
                  {pillar}
                </button>
              );
            })}
          </div>

          {/* Editorial Lead Essay Feature (when All selected) */}
          {leadPost && (
            <article className="group mb-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#3B82F6]/65 transition-colors overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[260px] bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden">
                <Image
                  src={leadPost.image || "/images/inner/about-sop-systems.jpg"}
                  alt={leadPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                    <span className="uppercase tracking-[0.14em] font-bold text-[#1D4ED8]">
                      Featured Playbook • {leadPost.pillar}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {leadPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 mb-3 leading-snug">
                    <Link href={`/insights/${leadPost.slug}`} className="hover:text-[#1D4ED8] transition-colors">
                      {leadPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-6">
                    {leadPost.excerpt}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/insights/${leadPost.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#04040A] hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#4F46E5] text-white text-xs font-semibold transition-all"
                  >
                    <span>Read Full Essay</span>
                    <ArrowUpRight className="w-4 h-4 text-[#93C5FD]" />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Structured Essay Grid */}
          {gridPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#3B82F6]/65 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-[0_14px_30px_rgba(37,99,235,0.08)] overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                      <Image
                        src={post.image || "/images/inner/about-philosophy-clarity.jpg"}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="p-6 pb-0">
                      <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100">
                        <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#1D4ED8] truncate">
                          {post.pillar}
                        </span>
                        <span className="text-[11px] text-slate-500 flex items-center gap-1 shrink-0">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h2 className="text-lg sm:text-xl font-normal text-slate-900 mb-2.5 leading-snug group-hover:text-[#1D4ED8] transition-colors">
                        <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-slate-200/80 flex items-center justify-between text-xs bg-[#F8FAFC]/80">
                    <span className="text-slate-500 font-medium">
                      {post.publishedDate || `By ${post.author}`}
                    </span>

                    <Link
                      href={`/insights/${post.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-slate-900 group-hover:text-[#1D4ED8] transition-colors"
                    >
                      <span>Read</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 text-slate-500 border border-dashed border-slate-200 rounded-2xl">
              <p className="text-sm mb-3">No essays published under this specific pillar yet.</p>
              <button
                type="button"
                onClick={() => setSelectedPillar("All")}
                className="text-xs text-[#1D4ED8] hover:text-[#2563EB] font-bold uppercase tracking-wider underline cursor-pointer"
              >
                View All Essays
              </button>
            </div>
          )}
        </div>
      </section>

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
