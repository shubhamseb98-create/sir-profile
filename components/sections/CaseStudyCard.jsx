import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Map study slugs to representative image cards
const caseStudyImages = {
  "karma-ayurveda-systems-expansion": "/images/cards/crm-systems.jpg",
  "web-tycoons-agency-scale": "/images/cards/digital-visibility.jpg",
  "happy-hospitality-club-community": "/images/cards/hhc-hospitality.svg",
  "ad-spend-roas-optimization": "/images/cards/roas-conversion.jpg",
  "multi-location-franchise-model": "/images/cards/franchise-expansion.jpg",
  "brand-repositioning-enterprise": "/images/cards/brand-positioning.jpg",
};

export default function CaseStudyCard({ study, className = "" }) {
  const isAnonymised = study.anonymised;
  const imageSrc = caseStudyImages[study.slug] || "/images/cards/crm-systems.jpg";

  return (
    <article
      data-cursor="view"
      className={cn(
        "rounded-2xl bg-[#1E293B] border border-slate-700/60 hover:border-[#38BDF8]/60 p-3.5 sm:p-4 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group font-sans",
        className
      )}
    >
      <div>
        {/* 1. Inset Image with rounded corners and exactly 300px height */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-slate-950 mb-3.5">
          <Image
            src={imageSrc}
            alt={study.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-900/80 text-[#38BDF8] px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-md">
            {study.category}
          </span>
          <span className="absolute bottom-2 right-2.5 text-[10px] font-mono text-[#CBD5E1] bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
            {isAnonymised ? "Confidential" : study.sector}
          </span>
        </div>

        {/* 2. Title + Circular Action Button Row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug line-clamp-2">
            <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
          </h3>
          <Link
            href={`/case-studies/${study.slug}`}
            aria-label={study.title}
            className="w-9 h-9 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105 mt-0.5"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3. Subtitle / Summary */}
        <p className="text-xs text-[#94A3B8] leading-relaxed mt-2.5 line-clamp-2">
          {study.summary || study.challenge}
        </p>

        {/* 4. Key Outcome Metric Pill */}
        <div className="mt-3.5 p-2.5 rounded-xl bg-[#0F172A]/80 border border-slate-700/60">
          <span className="text-[10px] uppercase tracking-wider text-[#38BDF8] font-mono font-bold block mb-0.5">
            Key Outcome
          </span>
          <p className="text-xs text-white font-medium line-clamp-1">
            {study.results[0]?.outcome || study.impactHighlight}
          </p>
        </div>
      </div>
    </article>
  );
}
