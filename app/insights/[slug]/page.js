import { notFound } from "next/navigation";
import Image from "next/image";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import SectionHeading from "@/components/ui/SectionHeading";
import { posts } from "@/data/posts";
import { siteConfig } from "@/data/site";
import { Clock, Calendar, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Insight Not Found" };
  }

  return {
    title: `${post.title} | Executive Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
  };
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
      url: siteConfig.domain,
    },
    publisher: {
      "@type": "Organization",
      name: "Dheeraj Aggarwal Advisory",
      url: siteConfig.domain,
    },
    datePublished: post.publishedDate,
    mainEntityOfPage: `${siteConfig.domain}/insights/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <BreadcrumbHero
        eyebrow={post.pillar || "EXECUTIVE INSIGHT"}
        title={post.question || post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: post.pillar },
        ]}
        imageSrc={post.image || "/images/inner/about-philosophy-clarity.jpg"}
      />

      {/* Article Long-Form Editorial Column (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[760px] w-full mx-auto px-4 sm:px-6 md:px-8">
          {/* Article Metadata Byline */}
          <div className="flex flex-wrap items-center gap-4 pb-6 mb-8 border-b border-slate-200 text-xs text-slate-500 font-medium">
            <span className="text-slate-900 font-semibold">By {post.author}</span>
            {post.publishedDate && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#1D4ED8]" />
                {post.publishedDate}
              </span>
            )}
            {post.readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                {post.readTime}
              </span>
            )}
          </div>

          {/* Featured Editorial Visual */}
          {post.image && (
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 mb-8 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 760px"
                className="object-cover"
              />
            </div>
          )}

          {/* Executive Brief Callout */}
          {post.quickAnswer && (
            <div className="p-6 rounded-2xl bg-[#EFF6FF] border-l-2 border-[#2563EB] mb-10">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#1D4ED8] font-bold block mb-2">
                Executive Summary
              </span>
              <p className="text-base sm:text-lg text-slate-900 font-semibold leading-relaxed">
                {post.quickAnswer}
              </p>
            </div>
          )}

          {/* Editorial Sections */}
          <div className="space-y-10 text-slate-700 leading-relaxed">
            {post.sections?.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 tracking-tight">
                  {section.heading}
                </h2>

                {section.content && (
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="border-t border-slate-200 divide-y divide-slate-200 pt-1">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="py-3 flex items-start gap-3 text-sm text-slate-800"
                      >
                        <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2.2} />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Author Dossier Strip with Portrait (OBSIDIAN & ROYAL BLUE - 60px padding) */}
      <section className="py-[60px] bg-[#04040A] border-b border-white/10 relative overflow-hidden font-sans">
        <DarkSectionLining variant="blue" />

        <div className="max-w-[760px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <SectionHeading
            eyebrow="AUTHOR DOSSIER"
            title="About Dheeraj Aggarwal"
            light={false}
            compact={true}
            animate={false}
            className="!mb-6"
          />

          <div className="p-6 sm:p-7 rounded-2xl bg-[#090F1E] border border-white/12 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#60A5FA]/50 shrink-0 bg-[#04040A]">
              <Image
                src="/images/hero/dd.png"
                alt="Dheeraj Aggarwal"
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Business Consultant, Founder of Web Tycoons (3,700+ web deliveries), Executive Advisor across clinical healthcare chains, and Co-Director of Happy Hospitality Club.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#93C5FD] hover:text-white transition-colors"
              >
                <span>View Full Executive Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Applying This Strategy to Your Organization?"
        description="Speak directly with Dheeraj Aggarwal regarding digital scaling, enterprise CRM workflows, and execution discipline."
        primaryAction={{
          label: "Book Strategy Call",
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
