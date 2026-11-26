import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Map all case study slugs accurately to real photography
const caseStudyImages = {
  "karma-ayurveda-systems-expansion": "/images/transformations/karma-clinic-ops.jpg",
  "web-tycoons-agency-scale": "/images/transformations/webtycoons-studio.jpg",
  "happy-hospitality-club-community": "/images/transformations/hhc-hospitality-roundtable.jpg",
  "high-growth-d2c-roas-optimization": "/images/cards/roas-analytics-real.jpg",
  "national-manufacturing-google-visibility": "/images/cards/digital-growth-real.jpg",
  "wellness-franchise-expansion-blueprint": "/images/cards/franchise-expansion-real.jpg",
};

export default function CaseStudyCard({ study, className = "", dark = false }) {
  const isAnonymised = study.anonymised;
  const imageSrc =
    caseStudyImages[study.slug] || "/images/transformations/karma-clinic-ops.jpg";

  return (
    <article
      className={cn(
        "group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between font-sans",
        dark
          ? "bg-[#0B1528] border-white/12 hover:border-[#D4AF37]/60 shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
          : "bg-white border-slate-200/90 hover:border-[#D4AF37]/70 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]",
        className
      )}
    >
      <div>
        {/* Crisp Editorial Thumbnail Frame */}
        <div
          className={cn(
            "relative h-52 sm:h-56 w-full overflow-hidden border-b",
            dark ? "bg-[#060D1A] border-white/10" : "bg-slate-100 border-slate-200"
          )}
        >
          <Image
            src={imageSrc}
            alt={study.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/70 via-transparent to-transparent pointer-events-none" />

          {/* Clean Sector Metadata */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 text-xs text-white">
            <span className="font-semibold tracking-wide truncate">
              {isAnonymised ? "Confidential Mandate" : study.clientName}
            </span>
            <span className="text-[11px] text-slate-200 truncate">
              {study.sector}
            </span>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={cn(
                "text-[10px] uppercase font-bold tracking-[0.16em]",
                dark ? "text-[#F5E2A3]" : "text-[#9A6B0C]"
              )}
            >
              {study.category}
            </span>
            <span
              className={cn(
                "text-[11px]",
                dark ? "text-slate-400" : "text-slate-500"
              )}
            >
              {study.clientScale}
            </span>
          </div>

          <Link href={`/case-studies/${study.slug}`} className="block group/title">
            <h3
              className={cn(
                "text-lg sm:text-xl font-bold leading-snug mb-2.5 transition-colors line-clamp-2",
                dark
                  ? "text-white group-hover/title:text-[#F5E2A3]"
                  : "text-slate-900 group-hover/title:text-[#9A6B0C]"
              )}
            >
              {study.title}
            </h3>
          </Link>

          <p
            className={cn(
              "text-sm leading-relaxed mb-5 line-clamp-2",
              dark ? "text-slate-300" : "text-slate-600"
            )}
          >
            {study.summary}
          </p>

          {/* Structured Key Outcome Callout */}
          <div
            className={cn(
              "pt-4 border-t",
              dark ? "border-white/10" : "border-slate-200/80"
            )}
          >
            <span
              className={cn(
                "text-[11px] uppercase tracking-[0.14em] font-semibold block mb-1",
                dark ? "text-[#D4AF37]" : "text-[#9A6B0C]"
              )}
            >
              {study.results?.[0]?.metric || "Measured Outcome"}
            </span>
            <p
              className={cn(
                "text-xs sm:text-[13px] font-medium line-clamp-2",
                dark ? "text-slate-100" : "text-slate-800"
              )}
            >
              {study.results?.[0]?.outcome || "Structured operational impact delivered"}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Read Dossier Link */}
      <div
        className={cn(
          "px-6 py-3.5 border-t flex items-center justify-between text-xs font-semibold",
          dark
            ? "border-white/10 bg-[#081020] text-slate-300 group-hover:text-[#F5E2A3]"
            : "border-slate-200/80 bg-[#FAF9F6] text-slate-700 group-hover:text-[#9A6B0C]"
        )}
      >
        <Link
          href={`/case-studies/${study.slug}`}
          className="inline-flex items-center justify-between w-full transition-colors"
        >
          <span>Read Transformation Dossier</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
