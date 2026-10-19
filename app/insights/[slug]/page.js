import { notFound } from "next/navigation";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import { posts } from "@/data/posts";
import { siteConfig } from "@/data/site";
import { ArrowLeft, Clock, Calendar, Check, HelpCircle, ArrowRight } from "lucide-react";

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

  // Article JSON-LD Schema
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

      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="EXECUTIVE INSIGHT"
        title={post.question || post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: post.pillar },
        ]}
        imageSrc="/images/hero/hero-strategy-glass.jpg"
      />

      {/* 2. Article Body (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[840px] w-full mx-auto px-6 sm:px-8 space-y-10 my-auto relative z-10">
          {/* Executive Quick Answer Box */}
          {post.quickAnswer && (
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black font-bold mb-3">
                <HelpCircle className="w-4 h-4 text-black" />
                <span>Executive Summary & Quick Answer</span>
              </div>
              <p className="text-lg sm:text-xl text-slate-900 font-semibold leading-snug">
                {post.quickAnswer}
              </p>
            </div>
          )}

          {/* Article Body Sections */}
          <div className="space-y-10 text-slate-700 leading-relaxed text-base pt-2">
            {post.sections?.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {section.heading}
                </h2>

                {section.content && (
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <div className="space-y-2.5 pt-2">
                    {section.list.map((item) => (
                      <div
                        key={item}
                        className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 text-xs sm:text-sm text-slate-800"
                      >
                        <Check className="w-4 h-4 text-black font-bold shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strategic Author Box (DARK - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#000000] border-b border-white/10 relative overflow-hidden">
        {/* Homepage style ambient glow */}
        <div className="absolute top-1/3 -left-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[840px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="AUTHOR"
            eyebrow="STRATEGIC PERSPECTIVE"
            title="About the Author"
            description="Insights authored directly by Dheeraj Aggarwal based on real operational engagements."
            light={false}
            className="mb-10 sm:mb-14"
          />

          <div className="p-8 sm:p-10 rounded-2xl bg-[#0A0D14] border border-white/10 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
            <div className="w-16 h-16 rounded-full border border-[#CFFF04]/40 bg-[#CFFF04]/10 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(207,255,4,0.15)]">
              <span className="text-2xl text-[#CFFF04] font-bold font-mono">DA</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#CFFF04] font-mono font-semibold block mb-1">
                Executive Profile
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Dheeraj Aggarwal
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Business Consultant, Founder of Web Tycoons, and Strategic Advisor to Karma Ayurveda &
                Happy Hospitality Club. Advising founders on systems, digital performance, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Page Closing CTA (LIGHT - 80px padding) */}
      <PageCTA
        light={true}
        title="Need Hands-On Guidance Implementing This?"
        description="Every strategy must be customized to your unit economics, sales team capabilities, and operational systems."
        primaryAction={{
          label: "Book Strategy Call",
          href: "/contact?type=strategy-call",
        }}
        secondaryAction={{
          label: "View Consulting Mandates",
          href: "/consulting",
        }}
      />
    </>
  );
}
