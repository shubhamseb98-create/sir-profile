"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import PageCTA from "@/components/sections/PageCTA";
import SafeImage from "@/components/ui/SafeImage";
import { videoTestimonials, writtenTestimonials } from "@/data/testimonials";
import { Play, Quote, Award, Camera, Mic, Users, CheckCircle2 } from "lucide-react";
import { trackVideoPlay } from "@/lib/analytics";

export default function MediaPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const mediaGallery = [
    {
      id: "media-1",
      title: "Keynote Address: MSME Growth Conclave",
      category: "Speaking & Keynotes",
      image: "/images/dheeraj/speaking-01.jpg",
      caption: "Delivering the opening address on digital systems and scalable business operations.",
    },
    {
      id: "media-2",
      title: "BNI Regional Leadership Forum",
      category: "Leadership & Governance",
      image: "/images/dheeraj/bni-01.jpg",
      caption: "Leading the executive roundtable on structured referral systems and member growth.",
    },
    {
      id: "media-3",
      title: "Happy Hospitality Club Executive Soirée",
      category: "Hospitality Network",
      image: "/images/dheeraj/hhc-event-01.jpg",
      caption: "Co-directing the monthly executive networking meet for hoteliers and Star Vendors.",
    },
    {
      id: "media-4",
      title: "Enterprise CRM & Process Workshop",
      category: "Consulting & Masterclasses",
      image: "/images/supporting/karma-ayurveda.jpg",
      caption: "Interactive clinic counseling and conversion training session for branch leadership.",
    },
    {
      id: "media-5",
      title: "Executive Panel on Digital Disruption",
      category: "Industry Panels",
      image: "/images/supporting/speaker-stage.jpg",
      caption: "Panel discussion on Google AI search algorithms and performance marketing economics.",
    },
    {
      id: "media-6",
      title: "Promoter Advisory & Strategic Planning Session",
      category: "Boardroom Advisory",
      image: "/images/supporting/b2b-case.jpg",
      caption: "Facilitating multi-unit franchise expansion modeling with leadership teams.",
    },
  ];

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
      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.24em] text-[#C6A15B] font-mono font-medium block mb-4">
              TESTIMONIALS & RECOGNITION
            </span>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium text-[#F5F3EE] leading-[1.1] mb-6">
              Media, Proof & Industry Footprint
            </h1>

            <p className="text-base sm:text-lg text-[#A9B0BE] leading-relaxed">
              Visual documentation of speaking engagements, executive leadership moments, video
              conversations with founders, and documented client endorsements.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Video Testimonials (30-90 sec) */}
      <section className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="01"
            eyebrow="FOUNDER VOICES"
            title="Video Endorsements"
            description="Direct conversations with managing directors and promoters detailing the impact of Dheeraj Aggarwal&apos;s strategic interventions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((v) => (
              <div
                key={v.id}
                onClick={() => {
                  setActiveVideo(v);
                  trackVideoPlay(v.topic);
                }}
                className="group rounded-2xl bg-[#151D30]/60 border border-white/08 hover:border-[#C6A15B]/50 overflow-hidden transition-all duration-300 shadow-xl cursor-pointer"
              >
                <div className="relative aspect-video bg-gradient-to-br from-[#151D30] to-[#0A0F1A] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[#0A0F1A]/40 group-hover:bg-[#0A0F1A]/20 transition-colors" />

                  <div className="w-14 h-14 rounded-full bg-[#C6A15B] text-[#0A0F1A] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 z-10">
                    <Play className="w-6 h-6 fill-[#0A0F1A] ml-0.5" />
                  </div>

                  <span className="absolute bottom-3 right-3 text-[10px] font-mono bg-[#0A0F1A]/80 px-2 py-0.5 rounded text-[#F5F3EE] border border-white/10 z-10">
                    {v.duration}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C6A15B] block mb-1">
                    {v.topic}
                  </span>
                  <h3 className="font-editorial text-xl font-medium text-[#F5F3EE] mb-1">
                    {v.name}
                  </h3>
                  <p className="text-xs text-[#A9B0BE] mb-3">
                    {v.designation}, {v.organisation}
                  </p>
                  <p className="text-xs text-[#A9B0BE]/90 italic leading-relaxed">
                    &ldquo;{v.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Written Client Testimonials */}
      <section className="py-24 md:py-32 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="02"
            eyebrow="CLIENT TESTIMONIALS"
            title="Written Endorsements"
            description="Verified feedback regarding advisory mandates, CRM implementations, and executive leadership."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {writtenTestimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-2xl bg-[#0F1626] border border-white/08 flex flex-col justify-between relative shadow-lg"
              >
                <div>
                  <Quote className="w-10 h-10 text-[#C6A15B]/20 mb-4" />
                  <p className="font-editorial text-xl text-[#F5F3EE] leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/06 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-editorial text-lg font-medium text-[#F5F3EE]">
                      {t.author}
                    </h4>
                    <p className="text-xs text-[#A9B0BE]">
                      {t.designation} • {t.organisation}
                    </p>
                    <span className="text-[11px] font-mono text-[#C6A15B] block mt-1">
                      {t.engagementType}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded shrink-0">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Media Gallery (Grid with Lightbox) */}
      <section className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="03"
            eyebrow="VISUAL RECORD"
            title="Media Gallery"
            description="Keynotes, panels, business meetings, and leadership moments captured across national stages and forums."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaGallery.map((m) => (
              <div
                key={m.id}
                onClick={() => setLightboxImage(m)}
                className="group relative rounded-2xl bg-[#0A0F1A] border border-white/08 hover:border-[#C6A15B]/40 overflow-hidden transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SafeImage
                    src={m.image}
                    alt={m.title}
                    width={400}
                    height={300}
                    placeholderLabel="Media Snapshot"
                    aspectRatio="aspect-[4/3]"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C6A15B] block mb-1">
                    {m.category}
                  </span>
                  <h3 className="font-editorial text-lg font-medium text-[#F5F3EE] mb-1">
                    {m.title}
                  </h3>
                  <p className="text-xs text-[#A9B0BE] line-clamp-2">
                    {m.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recognition & Credentials Strip */}
      <section className="py-24 md:py-32 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="04"
            eyebrow="ENTERPRISE STANDING"
            title="Recognition & Authority"
            description="Foundational credentials verifying 15+ years of active contribution to Indian business ecosystems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognitionMilestones.map((rec) => (
              <div
                key={rec.title}
                className="p-6 rounded-2xl bg-[#0F1626] border border-white/08 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/10 border border-[#C6A15B]/25 flex items-center justify-center text-[#C6A15B] mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-editorial text-xl font-medium text-[#F5F3EE] mb-2 leading-snug">
                    {rec.title}
                  </h3>
                  <p className="text-xs text-[#A9B0BE] leading-relaxed">
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
            <p className="text-sm text-[#A9B0BE] italic">
              &ldquo;{activeVideo.quote}&rdquo;
            </p>
          </div>
        )}
      </Modal>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        title={lightboxImage ? lightboxImage.title : ""}
      >
        {lightboxImage && (
          <div>
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black mb-4">
              <SafeImage
                src={lightboxImage.image}
                alt={lightboxImage.title}
                width={800}
                height={600}
                aspectRatio="aspect-[4/3]"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-[#F5F3EE] mb-1 font-medium">{lightboxImage.title}</p>
            <p className="text-xs text-[#A9B0BE]">{lightboxImage.caption}</p>
          </div>
        )}
      </Modal>

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
      />
    </>
  );
}
