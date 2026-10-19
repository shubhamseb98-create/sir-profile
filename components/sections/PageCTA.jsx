import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RollingText from "@/components/ui/RollingText";

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
  light = true,
}) {
  return (
    <section
      className={`min-h-screen py-[80px] flex flex-col justify-center relative overflow-hidden font-sans ${
        light
          ? "bg-white border-t border-slate-200 text-slate-900"
          : "bg-black border-t border-white/10 text-white"
      } ${className}`}
    >
      {/* Subtle balanced ambient glow aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] rounded-full blur-[140px] pointer-events-none bg-[#CFFF04]/14"
      />

      <ScrollReveal
        distance={35}
        delay={0.1}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10 my-auto"
      >
        {/* Eyebrow */}
        <div className="mb-4">
          <span
            className={`text-[10px] sm:text-xs uppercase tracking-[0.24em] font-mono font-bold px-3.5 py-1 rounded-full border ${
              light
                ? "text-white bg-black border-black shadow-sm"
                : "text-[#CFFF04] bg-[#CFFF04]/10 border-[#CFFF04]/30"
            }`}
          >
            {eyebrow}
          </span>
        </div>

        {/* H2 Title */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-3xl mx-auto leading-[1.15] tracking-tight text-center ${
            light ? "text-slate-950" : "text-white"
          }`}
        >
          {typeof title === "string" ? <RollingText text={title} /> : title}
        </h2>

        {/* Supporting description */}
        <p
          className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-center font-normal ${
            light ? "text-slate-600" : "text-slate-300"
          }`}
        >
          {typeof description === "string" ? (
            <RollingText text={description} delay={0.2} duration={1.3} stagger={0.03} />
          ) : (
            description
          )}
        </p>

        {/* Primary + Secondary Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <Button
            href={primaryAction.href}
            variant={light ? "light-primary" : "primary"}
            size="md"
            className="sm:px-8 sm:py-3.5 sm:text-base font-bold shadow-md hover:shadow-xl"
          >
            {primaryAction.label}
          </Button>

          <Button
            href={secondaryAction.href}
            variant={light ? "light-secondary" : "secondary"}
            size="md"
            icon="right"
            className="sm:px-8 sm:py-3.5 sm:text-base"
          >
            {secondaryAction.label}
          </Button>
        </div>

        {/* Alternative direct conversion channels */}
        {showAlternatives && (
          <div
            className={`mt-12 pt-8 border-t max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs ${
              light
                ? "border-slate-200 text-slate-600"
                : "border-white/10 text-slate-400"
            }`}
          >
            <Link
              href="/speaking"
              className={`transition-colors flex items-center gap-1.5 font-medium ${
                light ? "hover:text-black" : "hover:text-[#CFFF04]"
              }`}
            >
              <span>Invite Me to Speak</span>
            </Link>

            <span className={light ? "text-slate-300" : "text-white/20"}>•</span>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors flex items-center gap-1.5 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Me</span>
            </a>

            <span className={light ? "text-slate-300" : "text-white/20"}>•</span>

            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className={`transition-colors flex items-center gap-1.5 font-medium ${
                light ? "hover:text-black" : "hover:text-[#CFFF04]"
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>Direct Email</span>
            </a>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
