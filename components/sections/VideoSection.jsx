"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Share2,
  Volume2,
  VolumeX,
  Play,
  CheckCircle2,
  Music2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

// Inline Instagram SVG icon
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const reelsData = [
  {
    id: "reel-1",
    title: "Apne Business Ka X-Ray Karaya Hai? Diagnostic Bottleneck Audit",
    topic: "Business Diagnostic",
    metric: "Bottleneck Audit",
    videoSrc: "/videos/reels/reel-xray.mp4",
    poster: "/images/reels/reel-xray.jpg",
    likes: "24.6K",
    comments: "582",
    shares: "3.1K",
    instagramUrl:
      "https://www.instagram.com/reel/DgKGyFchEgJ/?utm_source=ig_web_button_share_sheet",
  },
  {
    id: "reel-2",
    title: "5 Ways to Get New Customers for Any Business (SEO, BNI & Collaboration)",
    topic: "Customer Acquisition",
    metric: "5 Growth Levers",
    videoSrc: "/videos/reels/reel-middle.mp4",
    poster: "/images/reels/reel-middle.jpg",
    likes: "28.4K",
    comments: "720",
    shares: "3.9K",
    instagramUrl:
      "https://www.instagram.com/reel/DgHyvA5vmGv/?utm_source=ig_web_button_share_sheet",
  },
  {
    id: "reel-3",
    title: "Bina Ads Ke Organic Leads? SEO & Google Listing Ka Secret!",
    topic: "Organic Leads & SEO",
    metric: "High-Intent Inquiries",
    videoSrc: "/videos/reels/reel-leads.mp4",
    poster: "/images/reels/reel-leads.jpg",
    likes: "19.8K",
    comments: "416",
    shares: "2.4K",
    instagramUrl:
      "https://www.instagram.com/reel/DfzKnWuJ-qQ/?utm_source=ig_web_button_share_sheet",
  },
];

function InstagramReelCard({ reel }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Play on hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  };

  // Pause on mouse leave
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setProgress(0);
    }
  };

  // Time progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  // Mute / Unmute
  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  // Click card to open on Instagram
  const handleCardClick = () => {
    window.open(reel.instagramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="group relative snap-center shrink-0 w-[84vw] max-w-[320px] xs:max-w-[340px] md:w-full md:max-w-[340px] mx-auto h-[500px] rounded-[24px] overflow-hidden bg-[#090F1E] border border-white/12 hover:border-[#60A5FA] shadow-[0_22px_55px_rgba(0,0,0,0.7),0_0_24px_rgba(59,130,246,0.12)] transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none flex flex-col"
    >
      {/* ── 1. Video Element ── */}
      <video
        ref={videoRef}
        src={reel.videoSrc}
        poster={reel.poster}
        muted={isMuted}
        playsInline
        loop
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
      />

      {/* ── 2. Top & Bottom Contrast Gradients ── */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none z-[4]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#04040A]/95 via-[#04040A]/55 to-transparent pointer-events-none z-[5]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#04040A]/95 via-[#04040A]/75 to-transparent pointer-events-none z-[5]" />

      {/* ── 3. Top Instagram Header Bar ── */}
      <div className="relative z-10 p-4 flex items-center justify-between text-white">
        {/* Creator Info */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            window.open("https://www.instagram.com/indiandheeraj/", "_blank", "noopener,noreferrer");
          }}
          className="flex items-center gap-2.5 cursor-pointer group/author"
        >
          {/* Avatar ring in electric blue */}
          <div className="relative w-9 h-9 rounded-full p-0.5 bg-gradient-to-tr from-[#3B82F6] to-[#93C5FD] group-hover/author:scale-105 transition-transform shadow-md">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
              <Image
                src="/images/hero/dd.png"
                alt="Dheeraj Aggarwal"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white tracking-tight group-hover/author:text-[#93C5FD] transition-colors">
                indiandheeraj
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#60A5FA] fill-[#60A5FA]/20" />
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-300 font-mono">
              <Music2 className="w-2.5 h-2.5 text-[#60A5FA]" />
              <span className="truncate max-w-[130px]">Original audio</span>
            </div>
          </div>
        </div>

        {/* Audio Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          className="w-9 h-9 rounded-full bg-black/60 hover:bg-[#3B82F6] hover:text-white border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors shadow-lg"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#93C5FD]" />}
        </button>
      </div>

      {/* ── 4. Center Play/Hover State Indicator ── */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-black/65 border border-[#60A5FA]/50 flex items-center justify-center text-white backdrop-blur-md shadow-2xl group-hover:scale-110 group-hover:border-[#60A5FA] transition-all">
            <Play className="w-6 h-6 fill-white ml-0.5 text-white" />
          </div>
        </div>
      )}

      {/* ── 5. Right Action Rail (Instagram Style) ── */}
      <div className="absolute right-3.5 bottom-12 z-20 flex flex-col items-center gap-3 text-white">
        {/* Like */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="flex flex-col items-center gap-0.5 group/btn"
        >
          <div className={`w-9 h-9 rounded-full bg-black/55 border border-white/15 flex items-center justify-center backdrop-blur-md transition-transform group-hover/btn:scale-110 ${isLiked ? "text-[#60A5FA] border-[#60A5FA]" : "text-white"}`}>
            <Heart className={`w-4 h-4 ${isLiked ? "fill-[#60A5FA] text-[#60A5FA]" : ""}`} />
          </div>
          <span className="text-[9px] font-mono font-bold">{isLiked ? "Liked" : reel.likes}</span>
        </button>

        {/* Comment */}
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-9 h-9 rounded-full bg-black/55 border border-white/15 flex items-center justify-center backdrop-blur-md">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <span className="text-[9px] font-mono font-bold">{reel.comments}</span>
        </div>

        {/* Share */}
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-9 h-9 rounded-full bg-black/55 border border-white/15 flex items-center justify-center backdrop-blur-md">
            <Share2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-[9px] font-mono font-bold">{reel.shares}</span>
        </div>

        {/* Instagram Direct Link Icon */}
        <div className="w-9 h-9 rounded-full bg-black/85 border border-[#60A5FA]/60 flex items-center justify-center backdrop-blur-md text-[#93C5FD] group-hover:scale-110 transition-transform shadow-md">
          <InstagramIcon className="w-4 h-4" />
        </div>
      </div>

      {/* ── 6. Bottom Reel Title & Caption Info (Aligned flush at bottom) ── */}
      <div className="mt-auto relative z-10 w-full flex flex-col justify-end">
        <div className="px-4 pb-3.5 pr-16 text-white flex flex-col gap-1.5 pointer-events-none">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#3B82F6]/20 border border-[#60A5FA]/50 text-[#DBEAFE] backdrop-blur-md">
              {reel.topic}
            </span>
            <span className="text-[10px] text-slate-300 font-mono">
              {reel.metric}
            </span>
          </div>

          <h3 className="text-xs sm:text-sm font-normal text-white/95 leading-snug line-clamp-2 drop-shadow-md min-h-[2.5rem] flex items-center">
            {reel.title}
          </h3>

          <span className="text-[11px] text-[#93C5FD] font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-0.5">
            Watch on Instagram <ExternalLink className="w-3 h-3" />
          </span>
        </div>

        {/* ── 7. Clean Bottom Progress Bar ── */}
        <div className="relative z-20 w-full pointer-events-none">
          <div className="w-full h-[3px] bg-white/20 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#818CF8] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoSection({
  id = "founder-conversations",
  number = "01",
  eyebrow = "Instagram Reels • @indiandheeraj",
  title = "Short-Form Founder Perspectives.",
  description = "Hover over any reel to auto-play instant insights on fixing bottlenecks, deal ecosystems, and B2B growth. Click any card to watch directly on Instagram.",
  className = "",
}) {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const ratio = scrollLeft / maxScroll;
    const idx = Math.round(ratio * (reelsData.length - 1));
    setActiveSlide(Math.min(Math.max(0, idx), reelsData.length - 1));
  };

  const scrollToSlide = (idx) => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.children[idx];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActiveSlide(idx);
    }
  };

  return (
    <section
      id={id}
      className={`relative py-[60px] bg-[#04040A] border-b border-white/10 font-sans overflow-hidden ${className}`}
    >
      {/* ── Background Lining Texture & Subtle Blue Glow ── */}
      <DarkSectionLining variant="blue" glowPosition="center" showTopBeam={true} showBottomBeam={false} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center my-auto">
        {/* ── Section Header ── */}
        <ScrollReveal distance={28} delay={0.1} className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 sm:mb-6">
          <SectionHeading
            number={number}
            eyebrow={eyebrow}
            title={title}
            description={description}
            light={false}
            compact={true}
            animate={false}
            className="!mb-0 max-w-2xl"
          />

          {/* Instagram CTA Link */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto shrink-0">
            <a
              href="https://www.instagram.com/indiandheeraj/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/90 border border-[#60A5FA]/40 hover:border-[#60A5FA] text-white hover:text-[#93C5FD] transition-all text-xs font-semibold backdrop-blur-md group shadow-lg"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#60A5FA] group-hover:scale-110 transition-transform" />
              <span>Watch More @indiandheeraj</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#93C5FD] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

        {/* ── Mobile Horizontal Swipe Carousel / Desktop 3-Column Grid ── */}
        <ScrollReveal distance={35} delay={0.2} scale={0.98}>
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 gap-4 sm:gap-7 justify-start md:justify-center items-center"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {reelsData.map((reel) => (
              <InstagramReelCard key={reel.id} reel={reel} />
            ))}
          </div>

          {/* ── Mobile Carousel Pagination Dots & Nav Controls ── */}
          <div className="flex md:hidden items-center justify-center gap-3 mt-5">
            <button
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              aria-label="Previous reel"
              className="w-8 h-8 rounded-full bg-[#090F1E] border border-white/20 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center active:scale-95 transition-all shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {reelsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Go to reel ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSlide === idx
                      ? "w-6 bg-[#60A5FA] shadow-[0_0_8px_#3B82F6]"
                      : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToSlide(Math.min(reelsData.length - 1, activeSlide + 1))}
              disabled={activeSlide === reelsData.length - 1}
              aria-label="Next reel"
              className="w-8 h-8 rounded-full bg-[#090F1E] border border-white/20 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center active:scale-95 transition-all shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
