"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import PageCTA from "@/components/sections/PageCTA";
import SafeImage from "@/components/ui/SafeImage";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import VideoSection from "@/components/sections/VideoSection";
import { videoTestimonials, writtenTestimonials } from "@/data/testimonials";
import {
  Play,
  Quote,
  Award,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { trackVideoPlay } from "@/lib/analytics";

export default function MediaPage() {
  const [activeVideo, setActiveVideo] = useState(null);
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
      caption: "Delivering the opening address on digital systems, profitability, and scalable business operations.",
    },
    {
      id: "media-2",
      title: "BNI Regional Leadership Forum",
      category: "Leadership & Governance",
      image: "/images/roles/bni-showcase.jpg",
      caption: "Leading the executive roundtable on structured referral systems, regional growth, and member excellence.",
    },
    {
      id: "media-3",
      title: "Happy Hospitality Club Executive Soirée",
      category: "Hospitality Network",
      image: "/images/roles/hhc-showcase.jpg",
      caption: "Co-directing the monthly executive networking meet for hoteliers, restaurateurs, and Star Vendors.",
    },
    {
      id: "media-4",
      title: "Healthcare Advisory & Multi-Clinic Expansion",
      category: "Healthcare Mandate",
      image: "/images/roles/karma-ayurveda-showcase.jpg",
      caption: "Standardizing clinic counseling playbooks, CRM routing, and multi-branch healthcare expansion.",
    },
    {
      id: "media-5",
      title: "Web Tycoons Digital Leadership Summit",
      category: "Digital Agency",
      image: "/images/roles/web-tycoons-showcase.jpg",
      caption: "Overseeing digital strategy, Google search dominance, and conversion architecture across 3,700+ websites.",
    },
    {
      id: "media-6",
      title: "Promoter Advisory & Strategic Boardroom Review",
      category: "Boardroom Advisory",
      image: "/images/supporting/testimonial-poster-2.jpg",
      caption: "One-on-one strategic advisory diagnostic discussing business bottlenecks, profitability, and expansion roadmaps.",
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

  return (
    <>
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="TESTIMONIALS & RECOGNITION"
        title="Media, Proof & Industry Footprint"
        description="Visual documentation of speaking engagements, executive leadership moments, video conversations with founders, and documented client endorsements."
        breadcrumbs={[{ label: "Media & Testimonials" }]}
        imageSrc="/images/hero/hero-corporate-skyline.jpg"
      />

      {/* 2. Direct Founder Video Conversations (Exact Home Page Instagram Reel Showcase - DARK) */}
      <VideoSection
        id="video-endorsements"
        eyebrow="Instagram Reels • @indiandheeraj"
        title="Founder Video Conversations"
        description="Hover over any reel to auto-play instant insights on fixing bottlenecks, deal ecosystems, and B2B growth. Click any card to watch directly on Instagram."
      />

      {/* 3. Written Client Testimonials (LIGHT THEME - Black borders, Compact 100vh fit, Luxury 2-card slider) */}
      <section className="py-6 sm:py-8 bg-[#FFFFFF] border-b border-black/10 relative overflow-hidden font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Row: Title, Trust Badge & Carousel Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-4 sm:mb-5 pb-3 border-b border-black/10">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border border-black/20 bg-black/5 text-neutral-800">
                  02
                </span>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-neutral-700 uppercase">
                  CLIENT TESTIMONIALS
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> 100% Verified Mandates
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Written Endorsements
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 max-w-xl">
                Verified board and executive leadership feedback across advisory mandates, CRM operations, and ecosystem scaling.
              </p>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2 shrink-0 self-start sm:self-end">
              <span className="text-[11px] font-mono text-neutral-500 font-bold mr-1">
                <span className="text-black font-extrabold">{testimonialSlide + 1}</span> / {totalTestimonialSlides}
              </span>
              <button
                type="button"
                onClick={() =>
                  setTestimonialSlide((prev) =>
                    prev === 0 ? totalTestimonialSlides - 1 : prev - 1
                  )
                }
                className="w-8 h-8 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-all flex items-center justify-center text-black shadow-xs cursor-pointer"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setTestimonialSlide((prev) => (prev + 1) % totalTestimonialSlides)
                }
                className="w-8 h-8 rounded-full border-2 border-black bg-black text-white hover:bg-neutral-800 transition-all flex items-center justify-center shadow-xs cursor-pointer"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cards Grid with Framer Motion slide transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialSlide}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
            >
              {currentTestimonials.map((t) => {
                const monogram =
                  t.id === "quote-1"
                    ? "KA"
                    : t.id === "quote-2"
                    ? "HHC"
                    : t.id === "quote-3"
                    ? "RC"
                    : "BNI";

                return (
                  <div
                    key={t.id}
                    className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-black flex flex-col justify-between relative shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden min-h-[220px]"
                  >
                    {/* Top hover accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CFFF04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Subtle watermark quote icon */}
                    <Quote className="absolute top-3 right-4 w-12 h-12 text-black/[0.04] pointer-events-none group-hover:text-black/[0.08] transition-colors" />

                    <div>
                      {/* Top Row: 5 Gold Stars & Verified Mandate Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2.5 relative z-10">
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                              />
                            ))}
                          </div>
                          <span className="text-[11px] font-mono font-bold text-neutral-900">
                            5.0
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-white bg-black px-2.5 py-0.5 rounded-full shadow-xs shrink-0">
                          <ShieldCheck className="w-3 h-3 text-[#CFFF04]" />
                          Verified Mandate
                        </span>
                      </div>

                      {/* Quote text */}
                      <p className="text-xs sm:text-[13px] text-neutral-800 leading-relaxed font-normal relative z-10">
                        &ldquo;{t.text}&rdquo;
                      </p>

                      {/* Result / Outcome Highlight Callout */}
                      {t.resultHighlight && (
                        <div className="mt-2.5 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200/90 flex items-start gap-2 relative z-10">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="text-[11px] font-medium text-neutral-800 leading-snug">
                            <span className="font-bold text-black">Outcome:</span>{" "}
                            {t.resultHighlight}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Footer Row: Monogram Avatar, Author Info & Engagement Type */}
                    <div className="pt-3 mt-3 border-t border-neutral-200 flex items-center justify-between gap-3 relative z-10">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-black text-[#CFFF04] flex items-center justify-center font-mono font-black text-xs shrink-0 shadow-xs border border-black">
                          {monogram}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-neutral-900 truncate">
                            {t.author}
                          </h4>
                          <p className="text-[11px] text-neutral-600 truncate">
                            {t.designation} • {t.organisation}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 shrink-0 hidden sm:inline-block">
                        {t.engagementType}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-3.5">
            {Array.from({ length: totalTestimonialSlides }).map((_, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setTestimonialSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  testimonialSlide === idx
                    ? "w-8 bg-black"
                    : "w-2.5 bg-neutral-300 hover:bg-neutral-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Media Gallery (DARK THEME - PURE IMAGES ONLY) */}
      <section className="py-8 sm:py-10 md:py-12 bg-[#000000] border-b border-white/10 relative overflow-hidden font-sans">
        {/* Subtle balanced neon lime glow aura */}
        <div className="absolute top-1/3 -left-32 w-[440px] h-[440px] bg-[#CFFF04]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[440px] h-[440px] bg-[#CFFF04]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            number="03"
            eyebrow="VISUAL RECORD"
            title="Media Gallery"
            description="Keynotes, panels, business meetings, and leadership moments captured across national stages and forums."
            light={false}
            className="mb-5 sm:mb-6"
          />

          {/* Show ONLY Images (No Cards) with sleek hover zoom and lightbox */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
            {mediaGallery.map((m, idx) => (
              <div
                key={m.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 hover:border-[#CFFF04] transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[0_0_25px_rgba(207,255,4,0.18)] hover:-translate-y-1 bg-[#0A0D14]"
              >
                <SafeImage
                  src={m.image}
                  alt={m.title}
                  fill={true}
                  placeholderLabel="Media Snapshot"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay on hover with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 sm:p-4 pointer-events-none">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#CFFF04] font-bold block mb-0.5">
                    {m.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight line-clamp-1">
                    {m.title}
                  </h4>
                </div>

                {/* Hover zoom icon badge */}
                <div className="absolute top-3 right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-300 pointer-events-none">
                  <Maximize2 className="w-3.5 h-3.5 text-[#CFFF04]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recognition & Credentials Strip (LIGHT THEME - Black borders) */}
      <section className="py-8 sm:py-10 md:py-12 bg-[#FFFFFF] border-b border-black/10 relative overflow-hidden font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            number="04"
            eyebrow="ENTERPRISE STANDING"
            title="Recognition & Authority"
            description="Foundational credentials verifying 15+ years of active contribution to Indian business ecosystems."
            light={true}
            className="mb-5 sm:mb-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {recognitionMilestones.map((rec) => (
              <div
                key={rec.title}
                className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-black hover:shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center mb-3 shadow-sm font-bold">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 leading-snug">
                    {rec.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {rec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Modal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        title={activeVideo ? `${activeVideo.name} — ${activeVideo.organisation}` : ""}
      >
        {activeVideo && (
          <div>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black mb-4">
              <iframe
                src={activeVideo.videoUrl}
                title={activeVideo.topic}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-slate-300 italic">
              &ldquo;{activeVideo.quote}&rdquo;
            </p>
          </div>
        )}
      </Modal>

      {/* Bespoke Fullscreen Luxury Lightbox */}
      {lightboxIndex !== null && mediaGallery[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-in fade-in duration-200 select-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto z-20">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="px-3 py-1 rounded-full bg-[#CFFF04] text-black font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-sm">
                {mediaGallery[lightboxIndex].category}
              </span>
              <h3 className="text-white font-bold text-sm sm:text-base md:text-lg truncate max-w-[200px] sm:max-w-md">
                {mediaGallery[lightboxIndex].title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-400 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                {lightboxIndex + 1} / {mediaGallery.length}
              </span>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Center Main Stage (Edge-to-Edge 16:9 - No Letterboxing) */}
          <div className="relative w-full max-w-5xl my-auto flex items-center justify-center">
            {/* Previous Arrow */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) => (prev - 1 + mediaGallery.length) % mediaGallery.length)
              }
              aria-label="Previous image"
              className="absolute left-2 sm:-left-6 md:-left-12 lg:-left-16 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/80 hover:bg-[#CFFF04] hover:text-black border border-white/20 text-white flex items-center justify-center transition-all shadow-2xl cursor-pointer hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <div className="relative w-full h-[52vh] sm:h-[62vh] md:h-[68vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/90 bg-[#0A0D14]">
              <Image
                src={mediaGallery[lightboxIndex].image}
                alt={mediaGallery[lightboxIndex].title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center"
              />
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={() => setLightboxIndex((prev) => (prev + 1) % mediaGallery.length)}
              aria-label="Next image"
              className="absolute right-2 sm:-right-6 md:-right-12 lg:-right-16 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/80 hover:bg-[#CFFF04] hover:text-black border border-white/20 text-white flex items-center justify-center transition-all shadow-2xl cursor-pointer hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Caption + Interactive Thumbnails */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center z-20 pt-2">
            <p className="text-center text-xs sm:text-sm text-slate-300 max-w-2xl font-light leading-relaxed mb-3">
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
                      ? "border-[#CFFF04] scale-105 shadow-md shadow-[#CFFF04]/25"
                      : "border-white/20 opacity-40 hover:opacity-100"
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

      {/* Page Closing CTA */}
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
        light={false}
      />
    </>
  );
}
