import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { MessageCircle, Mail } from "lucide-react";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
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
    label: "Explore Core Expertise",
    href: "#core-expertise",
  },
  tertiaryAction = null,
  showAlternatives = true,
  className = "",
  light = true,
}) {
  return (
    <section
      id="contact-cta"
      className={`py-[60px] relative overflow-hidden font-sans ${
        light
          ? "bg-white border-t border-slate-200 text-slate-900"
          : "bg-[#04040A] border-t border-white/10 text-white"
      } ${className}`}
    >
      {!light && (
        <DarkSectionLining variant="blue" glowPosition="center" showTopBeam={true} showBottomBeam={false} />
      )}
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
          compact={true}
          animate={false}
          className="!mb-0 mx-auto"
        />

        {/* Primary + Secondary Action Buttons */}
        <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button
            href={primaryAction.href}
            variant={light ? "light-primary" : "primary"}
            size="sm"
            className="sm:h-10 sm:px-6 sm:text-sm font-bold shadow-md hover:shadow-xl"
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

        {/* Alternative direct conversion channels */}
        {showAlternatives && (
          <div
            className={`mt-12 pt-8 border-t max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs ${
              light
                ? "border-slate-200 text-slate-600"
                : "border-white/10 text-slate-400"
            }`}
          >
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
                light ? "hover:text-[#1D4ED8]" : "hover:text-[#93C5FD]"
              }`}
            >
              <Mail className={`w-3.5 h-3.5 ${light ? "text-slate-500" : "text-[#93C5FD]/80"}`} />
              <span>Direct Email</span>
            </a>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
