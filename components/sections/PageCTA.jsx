import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { MessageCircle, Mail } from "lucide-react";
import Link from "next/link";

export default function PageCTA({
  title = "Let's Build Something Meaningful.",
  eyebrow = "START THE CONVERSATION",
  description = "Whether you are navigating commercial bottlenecks, expanding multi-location operations, or scaling digital customer acquisition, let us structure a practical roadmap.",
  primaryAction = {
    label: "Book a Strategy Call",
    href: "/contact?type=strategy-call",
  },
  secondaryAction = {
    label: "Discuss a Collaboration",
    href: "/contact?type=collaboration",
  },
  showAlternatives = true,
  className = "",
}) {
  return (
    <section className={`min-h-screen py-10 sm:py-14 md:py-16 flex flex-col justify-center bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFF] to-[#DBEAFE] border-t border-slate-200 relative overflow-hidden font-sans ${className}`}>
      {/* Background ambient sky glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#2563EB] font-mono font-bold block mb-3 sm:mb-4">
          {eyebrow}
        </span>

        {/* H2 Title */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] max-w-3xl mx-auto leading-[1.15] tracking-tight">
          {title}
        </h2>

        {/* Supporting description */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Primary + Secondary Action Buttons */}
        <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Button href={primaryAction.href} variant="primary" size="md" className="sm:px-8 sm:py-3.5 sm:text-base">
            {primaryAction.label}
          </Button>

          <Button href={secondaryAction.href} variant="light-secondary" size="md" icon="right" className="sm:px-8 sm:py-3.5 sm:text-base">
            {secondaryAction.label}
          </Button>
        </div>

        {/* Alternative direct conversion channels */}
        {showAlternatives && (
          <div className="mt-12 pt-8 border-t border-slate-300/60 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-500">
            <Link
              href="/speaking"
              className="hover:text-[#2563EB] transition-colors flex items-center gap-1.5"
            >
              <span>Invite Me to Speak</span>
            </Link>

            <span className="text-slate-300">•</span>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563EB] transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Me</span>
            </a>

            <span className="text-slate-300">•</span>

            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="hover:text-[#2563EB] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Direct Email</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
