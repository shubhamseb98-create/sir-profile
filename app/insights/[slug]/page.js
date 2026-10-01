import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
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

      {/* 1. Article Header */}
      <article className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[840px] mx-auto px-6 sm:px-8">
          {/* Breadcrumb back */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-[#C6A15B] hover:text-[#E2C98F] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] px-3 py-1 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/20">
              {post.pillar}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs text-[#A9B0BE] font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{post.readTime}</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs text-[#A9B0BE] font-mono">
              By {post.author}
            </span>
          </div>

          {/* H1 Headline */}
          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-[#F5F3EE] leading-[1.12] mb-6 text-balance-editorial">
            {post.question || post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#A9B0BE] leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* 2. Executive Quick Answer Box */}
          {post.quickAnswer && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1626] border border-[#C6A15B]/40 shadow-xl mb-12">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C6A15B] font-semibold mb-3">
                <HelpCircle className="w-4 h-4 text-[#C6A15B]" />
                <span>Executive Summary & Quick Answer</span>
              </div>
              <p className="font-editorial text-xl sm:text-2xl text-[#F5F3EE] leading-snug">
                {post.quickAnswer}
              </p>
            </div>
          )}

          {/* 3. Article Body Sections */}
          <div className="space-y-10 text-[#A9B0BE] leading-relaxed text-base pt-4">
            {post.sections?.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-[#F5F3EE]">
                  {section.heading}
                </h2>

                {section.content && (
                  <p className="text-sm sm:text-base leading-relaxed text-[#A9B0BE]">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <div className="space-y-2.5 pt-2">
                    {section.list.map((item) => (
                      <div
                        key={item}
                        className="p-3.5 rounded-xl bg-[#0F1626] border border-white/06 flex items-start gap-3 text-xs sm:text-sm text-[#F5F3EE]"
                      >
                        <Check className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* 4. Strategic Author Box */}
          <div className="mt-16 p-8 rounded-2xl bg-[#0F1626] border border-white/10 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-[#C6A15B]/40 bg-[#C6A15B]/10 flex items-center justify-center shrink-0">
              <span className="font-editorial text-2xl text-[#C6A15B] font-semibold">DA</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-mono block mb-1">
                About the Author
              </span>
              <h3 className="font-editorial text-xl font-medium text-[#F5F3EE]">
                Dheeraj Aggarwal
              </h3>
              <p className="text-xs text-[#A9B0BE] mt-1 leading-relaxed">
                Business Consultant, Founder of Web Tycoons, and Strategic Advisor to Karma Ayurveda &
                Happy Hospitality Club. Advising founders on systems, digital performance, and growth.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Page Closing CTA */}
      <PageCTA
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
