import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PageCTA({
  title = "Let's Build Something Meaningful.",
  eyebrow = "READY FOR STRATEGIC CLARITY?",
  description = "Whether you are navigating commercial bottlenecks, expanding multi-location operations, or scaling digital customer acquisition, let us structure a practical roadmap.",
  primaryAction = {
    label: "Book a Strategy Call",
    href: "/contact?type=strategy-call",
  },
  secondaryAction = {
    label: "Explore Core Expertise",
    href: "#core-expertise",
  },
  tertiaryAction = null,
  className = "",
  light = true,
}) {
  return (
    <section
      id="contact-cta"
      className={`relative overflow-hidden font-sans py-[60px] ${
        light
          ? "bg-[#FFFFFF] border-t border-slate-200 text-slate-900"
          : "bg-[#04040A] text-white"
      } ${className}`}
    >
      {/* Crystal-Clear Vector Volumetric Sapphire Light Rays Backdrop */}
      {!light ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none overflow-hidden bg-[#04040A]"
        >
          {/* Ambient Deep Sapphire Top-Right Illumination */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 62% 78% at 88% 12%, rgba(29,78,216,0.38) 0%, rgba(30,58,138,0.18) 42%, transparent 74%)",
            }}
          />

          {/* Sharp 4K Vector Aurora Beams & Specular Light Crests */}
          <svg
            viewBox="0 0 1440 400"
            fill="none"
            preserveAspectRatio="xMaxYMid slice"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              {/* Volumetric Ribbon Fills */}
              <linearGradient id="auroraBody1" x1="0.35" y1="0" x2="0.98" y2="0.85">
                <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0" />
                <stop offset="28%" stopColor="#2563EB" stopOpacity="0.34" />
                <stop offset="68%" stopColor="#3B82F6" stopOpacity="0.52" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.28" />
              </linearGradient>

              <linearGradient id="auroraBody2" x1="0.3" y1="0" x2="1" y2="0.9">
                <stop offset="0%" stopColor="#0F172A" stopOpacity="0" />
                <stop offset="35%" stopColor="#1D4ED8" stopOpacity="0.26" />
                <stop offset="72%" stopColor="#4F46E5" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.24" />
              </linearGradient>

              <linearGradient id="auroraBody3" x1="0.5" y1="0" x2="1" y2="0.6">
                <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.25" />
              </linearGradient>

              {/* Crisp Highlight Crests */}
              <linearGradient id="crestPrimary" x1="0.32" y1="0" x2="1" y2="0.8">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                <stop offset="32%" stopColor="#93C5FD" stopOpacity="0.72" />
                <stop offset="72%" stopColor="#E0F2FE" stopOpacity="0.96" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.65" />
              </linearGradient>

              <linearGradient id="crestSecondary" x1="0.42" y1="0" x2="1" y2="0.65">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="38%" stopColor="#BAE6FD" stopOpacity="0.62" />
                <stop offset="78%" stopColor="#FFFFFF" stopOpacity="0.88" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.45" />
              </linearGradient>

              <linearGradient id="crestFine" x1="0.52" y1="0" x2="1" y2="0.45">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                <stop offset="45%" stopColor="#DBEAFE" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.35" />
              </linearGradient>

              {/* Soft Optical Silk Feathering for Ribbon Bodies */}
              <filter id="silkGlowWide" x="-10%" y="-25%" width="120%" height="150%">
                <feGaussianBlur stdDeviation="16" />
              </filter>
              <filter id="silkGlowMed" x="-10%" y="-25%" width="120%" height="150%">
                <feGaussianBlur stdDeviation="8" />
              </filter>

              {/* Tight Crisp Specular Bloom (Keeps Line Core Razor-Sharp) */}
              <filter id="crestBloomCrisp" x="-10%" y="-25%" width="120%" height="150%">
                <feGaussianBlur stdDeviation="2.6" result="softHalo" />
                <feMerge>
                  <feMergeNode in="softHalo" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Broad Volumetric Sapphire Shaft 1 */}
            <path
              d="M 430 -25 C 720 135, 1080 225, 1470 265 L 1470 350 C 1060 305, 700 205, 360 -25 Z"
              fill="url(#auroraBody1)"
              filter="url(#silkGlowWide)"
            />

            {/* Secondary Indigo-Cobalt Depth Ribbon */}
            <path
              d="M 590 -25 C 860 110, 1170 185, 1470 205 L 1470 265 C 1150 235, 830 155, 515 -25 Z"
              fill="url(#auroraBody2)"
              filter="url(#silkGlowMed)"
            />

            {/* Upper-Right Silky Corner Ray */}
            <path
              d="M 790 -25 C 1020 65, 1260 112, 1470 128 L 1470 168 C 1245 148, 995 95, 735 -25 Z"
              fill="url(#auroraBody3)"
              filter="url(#silkGlowMed)"
            />

            {/* Crisp Unblurred Core Crests (Crystal-Clear Optical Edges) */}
            <path
              d="M 455 -12 C 745 152, 1095 245, 1465 282"
              stroke="url(#crestPrimary)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#crestBloomCrisp)"
            />

            <path
              d="M 605 -12 C 880 122, 1180 194, 1465 214"
              stroke="url(#crestSecondary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#crestBloomCrisp)"
            />

            <path
              d="M 800 -12 C 1030 78, 1260 122, 1465 136"
              stroke="url(#crestFine)"
              strokeWidth="1.1"
              strokeLinecap="round"
              filter="url(#crestBloomCrisp)"
            />

            <path
              d="M 390 -6 C 680 175, 1045 278, 1465 322"
              stroke="url(#crestFine)"
              strokeWidth="1"
              strokeOpacity="0.7"
              strokeLinecap="round"
            />
          </svg>

          {/* Protective Center Vignette for Pure Centered Typography Contrast */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 56% 72% at 50% 48%, rgba(4,4,10,0.76) 0%, rgba(4,4,10,0.36) 58%, transparent 100%)",
            }}
          />

          {/* Seamless Bottom Fade Into Pure #04040A Footer Canvas */}
          <div
            className="absolute inset-x-0 bottom-0 h-[28%]"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(4,4,10,0.6) 58%, #04040A 100%)",
            }}
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 65% 75% at 88% 12%, rgba(219,234,254,0.82) 0%, rgba(239,246,255,0.36) 45%, transparent 78%)",
            }}
          />
          <svg
            viewBox="0 0 1440 400"
            fill="none"
            preserveAspectRatio="xMaxYMid slice"
            className="absolute inset-0 w-full h-full opacity-75"
          >
            <path
              d="M 520 -12 C 810 145, 1140 232, 1465 268"
              stroke="#93C5FD"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
            <path
              d="M 690 -12 C 940 112, 1210 175, 1465 194"
              stroke="#BFDBFE"
              strokeWidth="1.25"
              strokeOpacity="0.75"
            />
          </svg>
        </div>
      )}

      <ScrollReveal
        distance={28}
        delay={0.08}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10"
      >
        <div className="max-w-2xl mx-auto text-center">
          {eyebrow && (
            <span
              className={`block text-[11px] uppercase tracking-[0.2em] font-medium mb-3 ${
                light ? "text-[#1D4ED8]" : "text-[#93C5FD]/85"
              }`}
            >
              {eyebrow}
            </span>
          )}

          <h2
            className={`text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-normal tracking-[-0.025em] leading-[1.12] ${
              light ? "text-[#0F172A]" : "text-white"
            }`}
          >
            {title}
          </h2>

          {description && (
            <p
              className={`mt-4 text-sm sm:text-[15px] leading-relaxed max-w-xl mx-auto font-normal ${
                light ? "text-slate-600" : "text-slate-300/85"
              }`}
            >
              {description}
            </p>
          )}

          {/* Theme Pill Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={primaryAction.href}
              variant={light ? "light-primary" : "primary"}
              size="sm"
              className="sm:h-10 sm:px-6 sm:text-sm"
            >
              {primaryAction.label}
            </Button>

            <Button
              href={secondaryAction.href}
              variant={light ? "light-secondary" : "secondary"}
              size="sm"
              icon="right"
              className="sm:h-10 sm:px-6 sm:text-sm"
            >
              {secondaryAction.label}
            </Button>

            {tertiaryAction && (
              <Button
                href={tertiaryAction.href}
                variant={light ? "light-secondary" : "secondary"}
                size="sm"
                icon="right"
                className="sm:h-10 sm:px-6 sm:text-sm"
              >
                {tertiaryAction.label}
              </Button>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
