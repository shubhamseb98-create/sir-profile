import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] rounded-full blur-[140px] pointer-events-none bg-[#C8FF00]/14"
      />

      <ScrollReveal
        distance={35}
        delay={0.1}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10 my-auto"
      >
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          light={light}
          animate={false}
          className="!mb-0 mx-auto"
        />

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
                light ? "hover:text-black" : "hover:text-[#C8FF00]"
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
                light ? "hover:text-black" : "hover:text-[#C8FF00]"
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
