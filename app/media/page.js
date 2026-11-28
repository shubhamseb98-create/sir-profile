"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import PageCTA from "@/components/sections/PageCTA";
import SafeImage from "@/components/ui/SafeImage";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import VideoSection from "@/components/sections/VideoSection";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import { writtenTestimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

export default function MediaPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [testimonialSlide, setTestimonialSlide] = useState(0);

  const testimonialsPerSlide = 2;
  const totalTestimonialSlides = Math.ceil(
    writtenTestimonials.length / testimonialsPerSlide
  );
  const currentTestimonials = writtenTestimonials.slice(
    testimonialSlide * testimonialsPerSlide,
    testimonialSlide * testimonialsPerSlide + testimonialsPerSlide
  );

  const mediaGallery = [
    {
      id: "media-1",
      title: "Keynote Address: MSME Growth Conclave",
      category: "Speaking & Keynotes",
      image: "/images/roles/keynote-speaker-showcase.jpg",
      caption:
        "Delivering the opening address on digital systems, profitability, and scalable business operations.",
    },
    {
      id: "media-2",
      title: "BNI Regional Leadership Forum",
      category: "Leadership & Governance",
      image: "/images/roles/bni-showcase.jpg",
      caption:
        "Leading the executive roundtable on structured referral systems, regional growth, and member excellence.",
    },
    {
      id: "media-3",
      title: "Happy Hospitality Club Executive Soirée",
      category: "Hospitality Network",
      image: "/images/transformations/hhc-hospitality-roundtable.jpg",
      caption:
        "Co-directing the executive roundtable connecting hoteliers, restaurateurs, and curated Star Partners.",
    },
    {
      id: "media-4",
      title: "Healthcare Advisory & Multi-Clinic Operations",
      category: "Healthcare Mandate",
      image: "/images/transformations/karma-clinic-ops.jpg",
      caption:
        "Standardizing clinic counseling playbooks, CRM routing, and multi-branch healthcare expansion.",
    },
    {
      id: "media-5",
      title: "Web Tycoons Digital Engineering Studio",
      category: "Digital Agency",
      image: "/images/transformations/webtycoons-studio.jpg",
      caption:
        "Overseeing digital strategy, Google search dominance, and conversion architecture across 3,700+ websites.",
    },
    {
      id: "media-6",
      title: "Promoter Advisory & Governance Review",
      category: "Boardroom Advisory",
      image: "/images/cards/leadership-governance-real.jpg",
      caption:
        "One-on-one strategic advisory diagnostic reviewing commercial profitability and operational KPIs.",
    },
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + mediaGallery.length) % mediaGallery.length);
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % mediaGallery.length);
      }
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, mediaGallery.length]);

  const recognitionMilestones = [
    {
      title: "15+ Years in Digital & Business Leadership",
      desc: "Unbroken entrepreneurial track record across internet technologies, digital growth, and executive advisory.",
    },
    {
      title: "Founder of Web Tycoons Agency",
      desc: "Architected and delivered 3,700+ websites and web applications across 15+ industry sectors.",
    },
    {
      title: "BNI Chapter President & Long-Term Member",
      desc: "Executive governance in professional referral networking, driving high-trust commercial growth.",
    },
    {
      title: "Co-Director of Happy Hospitality Club",
      desc: "Co-founding and scaling India's premier multi-chapter hospitality and vendor ecosystem.",
    },
    {
      title: "Keynote Speaker at National Business Forums",
      desc: "Delivered 50+ keynotes and masterclasses for MSME federations, trade associations, and corporate summits.",
    },
  ];

  const mediaFormats = [
    {
      index: "01",
      image: "/images/supporting/testimonial-poster-2.jpg",
      tag: "@indiandheeraj • Instagram Reels",
      title: "Short-Form Business Diagnostics",
      desc: "60-second straight-talk breakdowns on auditing operational bottlenecks, capturing high-intent Google demand, and scaling customer acquisition without ad waste.",
      href: "#video-endorsements",
      cta: "Watch Reels Below",
    },
    {
      index: "02",
      image: "/images/inner/speaking-panel-moderation.jpg",
      tag: "50+ National Sessions",
      title: "Keynotes, Conclaves & Workshops",
      desc: "Actionable stage talks and closed-door promoter roundtables covering CRM systems, documented SOPs, unit economics, and repeatable branch expansion.",
      href: "/speaking",
      cta: "Explore Speaking Topics",
    },
    {
      index: "03",
      image: "/images/transformations/karma-clinic-ops.jpg",
      tag: "Operating Ventures & Advisories",
      title: "Live Ecosystem Case Briefings",
      desc: "Documented transformation notes from pan-India healthcare clinics, a 15+ year digital engineering agency, and founder-led hospitality networks.",
      href: "/case-studies",
      cta: "View Case Studies",
    },
  ];

  return (
    <>
      <BreadcrumbHero
        eyebrow="TESTIMONIALS & RECOGNITION"
        title="Media, Proof & Industry Footprint"
        description="Visual documentation of speaking engagements, executive leadership moments, video conversations with founders, and documented client endorsements."
        breadcrumbs={[{ label: "Media & Testimonials" }]}
        imageSrc="/images/roles/keynote-speaker-showcase.jpg"
      />

      {/* 1.5 White Editorial Media Overview & Verified Footprint */}
      <section className="py-[60px] bg-[#FFFFFF] text-[#0F172A] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Brief + Verified Proof Metrics */}
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="PUBLIC BRIEFING & PROOF"
                title="Measured Impact Beyond the Stage"
                description="Every reel, keynote, and executive briefing comes directly from active advisory work across healthcare chains, digital systems, and founder ecosystems."
                light={true}
                compact={true}
                animate={false}
                className="!mb-6"
              />

              <div className="grid grid-cols-2 gap-3.5 mb-6">
                {siteConfig.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/90"
                  >
                    <div className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-[#04040A] tabular-nums">
                      {m.value.toLocaleString()}
                      <span className="text-[#2563EB]">{m.suffix}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600 leading-snug">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#video-endorsements"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#04040A] hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#4F46E5] text-white text-xs font-semibold tracking-wide transition-all"
                >
                  <span>Watch Founder Reels</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#93C5FD]" />
                </a>
                <Link
                  href="/contact?type=speaking"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-slate-300 bg-white hover:border-[#2563EB] hover:text-[#1D4ED8] text-slate-800 text-xs font-semibold tracking-wide transition-colors"
                >
                  <span>Media &amp; Speaking Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Curated Editorial Formats List */}
            <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200 bg-white">
              {mediaFormats.map((item) => {
                const isHash = item.href.startsWith("#");
                return (
                  <div
                    key={item.index}
                    className="py-5 sm:py-6 first:pt-5 last:pb-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 max-w-xl">
                      <div className="relative w-full sm:w-32 aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 140px"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold tracking-wider text-[#1D4ED8]">
                            {item.index}
                          </span>
                          <span className="h-3 w-px bg-slate-300" />
                          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-normal text-[#04040A] mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {isHash ? (
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] hover:text-[#04040A] whitespace-nowrap sm:pt-1 shrink-0 transition-colors"
                      >
                        <span>{item.cta}</span>
                        <ArrowDown className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] hover:text-[#04040A] whitespace-nowrap sm:pt-1 shrink-0 transition-colors"
                      >
                        <span>{item.cta}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Instagram Reels Showcase (Unified Homepage VideoSection - DARK MIDNIGHT NAVY) */}
      <VideoSection
        id="video-endorsements"
        eyebrow="Instagram Reels • @indiandheeraj"
        title="Founder Video Conversations"
        description="Hover over any reel to auto-play instant insights on fixing bottlenecks, deal ecosystems, and B2B growth. Click any card to watch directly on Instagram."
      />

      {/* 3. Written Client Endorsements Slider (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-slate-200">
            <SectionHeading
              eyebrow="CLIENT TESTIMONIALS"
              title="Written Endorsements"
              description="Verified board and executive leadership feedback across advisory mandates, CRM operations, and ecosystem scaling."
              light={true}
              compact={true}
              animate={false}
              className="!mb-0 max-w-xl"
            />

            <div className="flex items-center gap-2 shrink-0 self-start sm:self-end">
              <span className="text-xs font-semibold text-slate-500 tabular-nums mr-2">
                {testimonialSlide + 1} / {totalTestimonialSlides}
              </span>
              <button
                type="button"
                onClick={() =>
                  setTestimonialSlide((prev) =>
                    prev === 0 ? totalTestimonialSlides - 1 : prev - 1
                  )
                }
                className="w-9 h-9 rounded-full border border-slate-300 bg-white hover:border-[#2563EB] hover:bg-[#04040A] hover:text-white transition-colors flex items-center justify-center text-slate-700 cursor-pointer"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setTestimonialSlide((prev) => (prev + 1) % totalTestimonialSlides)
                }
                className="w-9 h-9 rounded-full bg-[#04040A] text-white hover:bg-[#2563EB] transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialSlide}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentTestimonials.map((t) => (
                <article
                  key={t.id}
                  className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#3B82F6]/65 flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#2563EB] text-[#2563EB]"
                          />
                        ))}
                      </div>

                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1D4ED8]">
                        {t.engagementType}
                      </span>
                    </div>

                    <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed mb-4">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    {t.resultHighlight && (
                      <div className="p-3.5 rounded-xl bg-white border-l-2 border-[#2563EB] flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                        <span className="text-xs font-medium text-slate-700 leading-snug">
                          <strong className="text-slate-900">Outcome:</strong>{" "}
                          {t.resultHighlight}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-200 flex items-center justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-normal text-slate-900">
                        {t.author}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {t.designation} • {t.organisation}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: totalTestimonialSlides }).map((_, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setTestimonialSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  testimonialSlide === idx
                    ? "w-8 bg-[#2563EB]"
                    : "w-2 bg-slate-300 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Visual Media Gallery (OBSIDIAN & ROYAL BLUE - 60px padding) */}
      <section className="py-[60px] bg-[#04040A] border-b border-white/10 relative overflow-hidden font-sans">
        <DarkSectionLining variant="blue" />

        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <SectionHeading
            eyebrow="VISUAL RECORD"
            title="Media Gallery"
            description="Keynotes, panels, business meetings, and leadership moments captured across national stages and forums."
            light={false}
            compact={true}
            animate={false}
            className="!mb-8"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mediaGallery.map((m, idx) => (
              <div
                key={m.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/12 hover:border-[#60A5FA]/70 transition-all duration-300 cursor-pointer bg-[#090F1E]"
              >
                <SafeImage
                  src={m.image}
                  alt={m.title}
                  fill={true}
                  placeholderLabel="Media Snapshot"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#04040A]/90 via-[#04040A]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-[#93C5FD] font-bold block mb-0.5">
                    {m.category}
                  </span>
                  <h4 className="text-sm font-normal text-white leading-tight line-clamp-1">
                    {m.title}
                  </h4>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#04040A]/80 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <Maximize2 className="w-3.5 h-3.5 text-[#60A5FA]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recognition & Credentials Ledger (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="ENTERPRISE STANDING"
            title="Recognition & Authority"
            description="Foundational credentials verifying 15+ years of active contribution to Indian business ecosystems."
            light={true}
            compact={true}
            animate={false}
            className="!mb-8"
          />

          <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
            {recognitionMilestones.map((rec, idx) => (
              <div
                key={rec.title}
                className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
              >
                <div className="md:col-span-5 flex items-baseline gap-4">
                  <span className="text-sm font-bold text-[#1D4ED8] tabular-nums shrink-0">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-normal text-slate-900">
                    {rec.title}
                  </h3>
                </div>
                <p className="md:col-span-7 text-sm text-slate-600 leading-relaxed">
                  {rec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && mediaGallery[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-[#04040A]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none"
        >
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto z-20">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider">
                {mediaGallery[lightboxIndex].category}
              </span>
              <h3 className="text-white font-normal text-sm sm:text-base md:text-lg truncate max-w-[200px] sm:max-w-md">
                {mediaGallery[lightboxIndex].title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/10 tabular-nums">
                {lightboxIndex + 1} / {mediaGallery.length}
              </span>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-5xl mx-auto my-auto flex items-center justify-center">
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) => (prev - 1 + mediaGallery.length) % mediaGallery.length)
              }
              aria-label="Previous image"
              className="absolute left-2 sm:-left-6 md:-left-12 z-30 w-11 h-11 rounded-full bg-[#04040A]/90 hover:bg-[#3B82F6] hover:text-white border border-white/20 hover:border-[#60A5FA] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="relative w-full h-[52vh] sm:h-[62vh] md:h-[66vh] rounded-2xl overflow-hidden border border-white/15 bg-[#090F1E]">
              <Image
                src={mediaGallery[lightboxIndex].image}
                alt={mediaGallery[lightboxIndex].title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center"
              />
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex((prev) => (prev + 1) % mediaGallery.length)}
              aria-label="Next image"
              className="absolute right-2 sm:-right-6 md:-right-12 z-30 w-11 h-11 rounded-full bg-[#04040A]/90 hover:bg-[#3B82F6] hover:text-white border border-white/20 hover:border-[#60A5FA] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="w-full max-w-4xl mx-auto flex flex-col items-center z-20 pt-2">
            <p className="text-center text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed mb-3">
              {mediaGallery[lightboxIndex].caption}
            </p>

            <div className="flex items-center justify-center gap-2 overflow-x-auto max-w-full pb-1">
              {mediaGallery.map((thumb, idx) => (
                <button
                  type="button"
                  key={thumb.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-14 h-9 sm:w-16 sm:h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                    lightboxIndex === idx
                      ? "border-[#60A5FA] scale-105"
                      : "border-white/20 opacity-45 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={thumb.image}
                    alt={thumb.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <PageCTA
        title="Schedule a Strategic Consultation"
        description="Discuss your growth barriers, team alignment, or keynote invitations directly with Dheeraj Aggarwal."
        primaryAction={{
          label: "Book Strategy Call",
          href: "/contact?type=strategy-call",
        }}
        secondaryAction={{
          label: "View Case Studies",
          href: "/case-studies",
        }}
        light={true}
      />
    </>
  );
}
