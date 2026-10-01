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
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import DarkSectionLining from "@/components/ui/DarkSectionLining";

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
    title: "Fixing conversion bottlenecks across 50+ pan-India clinics with automated CRM",
    founder: "Rajesh Sharma",
    role: "MD, Healthcare Enterprises",
    topic: "Enterprise CRM & SOPs",
    videoSrc: "/videos/reels/healthcare-crm.mp4?v=20261001",
    poster: "/images/supporting/testimonial-poster-1.jpg",
    metric: "+320% Lead Conversion",
    likes: "18.4K",
    comments: "482",
    shares: "1.2K",
    duration: "0:45",
    tags: ["CRM", "HealthcareScale", "SOPs"],
    instagramUrl: "https://www.instagram.com/indiandheeraj/",
  },
  {
    id: "reel-2",
    title: "Structuring ₹18Cr+ in commercial hospitality deals through high-trust ecosystems",
    founder: "Vikram Malhotra",
    role: "Founder & CEO, Luxury Hospitality",
    topic: "B2B Ecosystem Strategy",
    videoSrc: "/videos/reels/hospitality-deal.mp4?v=20261001",
    poster: "/images/supporting/testimonial-poster-2.jpg",
    metric: "₹18 Cr+ Deal Value",
    likes: "24.1K",
    comments: "819",
    shares: "3.4K",
    duration: "0:52",
    tags: ["Hospitality", "B2BDeals", "Networking"],
    instagramUrl: "https://www.instagram.com/indiandheeraj/",
  },
  {
    id: "reel-3",
    title: "From zero online inquiries to a steady stream of B2B institutional orders",
    founder: "Amit Singhal",
    role: "Director, B2B Manufacturing Corp",
    topic: "Google Dominance & Funnels",
    videoSrc: "/videos/reels/b2b-manufacturing.mp4?v=20261001",
    poster: "/images/supporting/testimonial-poster-3.jpg",
    metric: "4.8x Online RFQs",
    likes: "15.9K",
    comments: "394",
    shares: "980",
    duration: "0:38",
    tags: ["DigitalGrowth", "B2BFunnels", "SEO"],
    instagramUrl: "https://www.instagram.com/indiandheeraj/",
  },
];

function InstagramReelCard({ reel }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Auto-play on hover
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

  // Update progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  // Open Instagram reel URL when clicking card
  const handleCardClick = () => {
    const url = reel.instagramUrl || "https://www.instagram.com/indiandheeraj/";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="group relative w-full max-w-[290px] sm:max-w-[310px] lg:max-w-[325px] mx-auto h-[450px] sm:h-[475px] lg:h-[495px] aspect-[9/16] rounded-[24px] overflow-hidden bg-[#0A0F1A] border border-white/10 hover:border-[#38BDF8] shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none flex flex-col justify-between"
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
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── 2. Top & Bottom Contrast Gradients ── */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none z-[4]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/95 via-black/60 to-transparent pointer-events-none z-[5]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/85 via-45% to-transparent pointer-events-none z-[5]" />

      {/* ── 3. Top Instagram Header Bar ── */}
      <div className="relative z-10 p-3.5 pt-3.5 flex items-center justify-between text-white">
        {/* Creator Info (links to profile) - NO RED */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            window.open("https://www.instagram.com/indiandheeraj/", "_blank", "noopener,noreferrer");
          }}
          className="flex items-center gap-2 cursor-pointer group/author"
        >
          {/* Avatar ring in cyan / blue theme */}
          <div className="relative w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-[#38BDF8] to-[#0284c7] group-hover/author:scale-105 transition-transform shadow-[0_0_12px_rgba(56,189,248,0.35)]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
              <Image
                src="/images/hero/dd.png"
                alt="Dheeraj Aggarwal"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-white tracking-tight group-hover/author:text-[#38BDF8] transition-colors">
                indiandheeraj
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] fill-[#38BDF8]/20" />
            </div>
            <div className="flex items-center gap-1 text-[9px] text-slate-300 font-mono">
              <Music2 className="w-2.5 h-2.5 text-[#38BDF8]" />
              <span className="truncate max-w-[110px]">Original audio</span>
            </div>
          </div>
        </div>

        {/* Audio Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#38BDF8] hover:text-[#0A0F1A] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#38BDF8]" />}
        </button>
      </div>

      {/* ── 4. Center Play/Hover State Indicator ── */}
      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-black/55 border border-white/25 flex items-center justify-center text-white backdrop-blur-md shadow-2xl group-hover:scale-110 transition-transform mb-2">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
          <span className="text-[9px] font-mono tracking-wider uppercase text-white/90 bg-black/70 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-md">
            Hover to play &bull; Click to open
          </span>
        </div>
      )}

      {/* ── 5. Right Action Rail (Instagram Style) - Anchored Near Bottom (NO RED) ── */}
      <div className="absolute right-3 bottom-5 z-20 flex flex-col items-center gap-3 text-white">
        {/* Like */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="flex flex-col items-center gap-0.5 group/btn"
        >
          <div className={`w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-md transition-transform group-hover/btn:scale-110 ${isLiked ? "text-[#38BDF8] border-[#38BDF8]/40" : "text-white"}`}>
            <Heart className={`w-4 h-4 ${isLiked ? "fill-[#38BDF8] text-[#38BDF8]" : ""}`} />
          </div>
          <span className="text-[8px] font-mono font-bold">{isLiked ? "18.5K" : reel.likes}</span>
        </button>

        {/* Comment */}
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-md">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <span className="text-[8px] font-mono font-bold">{reel.comments}</span>
        </div>

        {/* Share */}
        <div className="flex flex-col items-center gap-0.5">
          <div className="w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-md">
            <Share2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-[8px] font-mono font-bold">{reel.shares}</span>
        </div>

        {/* Instagram Direct Link Icon (Theme Cyan/Dark) */}
        <div className="w-8 h-8 rounded-full bg-[#0F172A]/90 border border-[#38BDF8]/40 flex items-center justify-center backdrop-blur-md text-[#38BDF8] group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(56,189,248,0.25)]">
          <InstagramIcon className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* ── 6. Bottom Reel Caption & Progress Bar (Glued to Bottom Edge - NO GAP) ── */}
      <div className="mt-auto relative z-10 w-full pointer-events-none">
        <div className="p-3.5 pr-14 text-white pb-2.5 pointer-events-auto">
          {/* Key Impact Metric Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#0F172A]/90 border border-[#38BDF8]/50 px-2.5 py-0.5 rounded-full mb-1.5 backdrop-blur-md shadow-md">
            <TrendingUp className="w-3 h-3 text-[#38BDF8]" />
            <span className="text-[9px] font-mono font-bold text-[#38BDF8]">{reel.metric}</span>
          </div>

          {/* Founder Tag */}
          <div className="text-[11px] text-slate-200 font-semibold mb-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            {reel.founder} &bull; <span className="text-[#38BDF8] font-bold">{reel.role}</span>
          </div>

          {/* Reel Title/Caption */}
          <p className="text-xs font-semibold text-white line-clamp-2 leading-snug mb-1 drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)]">
            {reel.title}
          </p>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-1 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
            {reel.tags.map((tag) => (
              <span key={tag} className="text-[8.5px] font-mono text-slate-300">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── 7. Scrubbing Bottom Progress Bar ── */}
        <div className="relative z-20 w-full h-[2px] bg-white/20 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#38BDF8] to-[#0284c7] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function VideoSection() {
  return (
    <section
      id="founder-conversations"
      className="relative min-h-screen py-12 sm:py-16 lg:py-20 bg-[#0A0F1A] border-b border-slate-800/50 font-sans overflow-hidden flex flex-col justify-center"
    >
      {/* ── Background Lining Texture & Subtle Glow ── */}
      <DarkSectionLining glowPosition="center" showTopBeam={true} showBottomBeam={false} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
        {/* ── Section Header (Compact for 100vh) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-4 sm:mb-5">
          <div>
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0F172A] border border-[#38BDF8]/40 rounded-full px-3 py-0.5 mb-1.5 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
              <span className="text-[9.5px] font-mono uppercase tracking-[0.22em] font-bold text-[#38BDF8]">
                Instagram Reels &bull; @indiandheeraj
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-3.5xl font-extrabold text-white tracking-tight leading-tight">
              Short-Form{" "}
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#7dd3fc] to-[#38BDF8] bg-clip-text text-transparent">
                Founder Perspectives.
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mt-1 leading-relaxed">
              Hover over any reel to auto-play instant insights on fixing bottlenecks, deal ecosystems, and B2B growth. Click any card to watch directly on Instagram.
            </p>
          </div>

          {/* Instagram Follow CTA Link */}
          <a
            href="https://www.instagram.com/indiandheeraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0F172A]/90 border border-[#38BDF8]/40 hover:border-[#38BDF8] text-white hover:text-[#38BDF8] transition-all text-xs font-semibold backdrop-blur-md group self-start md:self-auto shadow-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] shrink-0"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#38BDF8] group-hover:scale-110 transition-transform" />
            <span>Watch More @indiandheeraj</span>
            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* ── 3-Column Instagram Reels Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center items-center">
          {reelsData.map((reel) => (
            <InstagramReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}
