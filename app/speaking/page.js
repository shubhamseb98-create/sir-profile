import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import { speakingData } from "@/data/speaking";
import { Clock, MapPin, Calendar, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const TOPIC_IMAGES = [
  "/images/cards/brand-strategy-real.jpg",
  "/images/cards/digital-growth-real.jpg",
  "/images/hero/hero-corporate-boardroom-clean.jpg",
  "/images/cards/roas-analytics-real.jpg",
  "/images/cards/crm-operations-real.jpg",
  "/images/inner/about-sop-systems.jpg",
  "/images/transformations/karma-clinic-ops.jpg",
  "/images/roles/bni-showcase.jpg",
  "/images/supporting/testimonial-poster-1.jpg",
  "/images/inner/hhc-gala-networking.jpg",
];

const FORMAT_IMAGES = [
  "/images/roles/keynote-speaker-showcase.jpg",
  "/images/inner/speaking-executive-workshop.jpg",
  "/images/hero/hero-panoramic-boardroom.jpg",
  "/images/inner/speaking-panel-moderation.jpg",
  "/images/supporting/testimonial-poster-3.jpg",
];

export const metadata = {
  title: "Keynote Speaking & Masterclasses | Dheeraj Aggarwal",
  description:
    "Book Dheeraj Aggarwal for keynotes, executive masterclasses, panel discussions and MSME growth workshops on business strategy, systems, and digital ROI.",
};

export default function SpeakingPage() {
  return (
    <>
      <BreadcrumbHero
        eyebrow="KEYNOTES & MASTERCLASSES"
        title="Direct, Actionable Insights From Ground-Level Business Building."
        description="Dheeraj speaks at industry conclaves, business associations, and corporate offsites—sharing unfiltered insights on scaling enterprises, building operational systems, and digital ROI."
        breadcrumbs={[{ label: "Speaking Engagements" }]}
        imageSrc="/images/roles/keynote-speaker-showcase.jpg"
      />

      {/* 2. Signature Keynote Topic Catalogue (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="CORE CURRICULUM"
            title="Signature Speaking Topics"
            description="Proven session frameworks delivered at industry conferences, entrepreneurial conclaves, and corporate annual meetings."
            light={true}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {speakingData.signatureTopics.map((topic, idx) => (
              <article
                key={topic.title}
                className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#3B82F6]/65 overflow-hidden flex flex-col sm:flex-row transition-all duration-300 shadow-[0_2px_10px_rgba(15,23,42,0.03)]"
              >
                <div className="relative h-44 sm:h-auto sm:w-44 md:w-48 shrink-0 bg-slate-100 border-b sm:border-b-0 sm:border-r border-slate-100 overflow-hidden">
                  <Image
                    src={TOPIC_IMAGES[idx % TOPIC_IMAGES.length]}
                    alt={topic.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 220px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#1D4ED8]">
                        {String(idx + 1).padStart(2, "0")} • {topic.focus}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-normal text-slate-900 mb-2 leading-snug group-hover:text-[#1D4ED8] transition-colors">
                      {topic.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4">
                      {topic.description}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={`/contact?type=speaking&topic=${encodeURIComponent(topic.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-[#1D4ED8] transition-colors"
                    >
                      <span>Request This Keynote</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tailored Delivery Formats (OBSIDIAN & ROYAL BLUE - 60px padding) */}
      <section className="py-[60px] bg-[#04040A] border-b border-white/10 relative overflow-hidden font-sans">
        <DarkSectionLining variant="blue" />

        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <SectionHeading
            eyebrow="ENGAGEMENT FORMATS"
            title="Tailored Delivery Formats"
            description="Whether addressing 500+ attendees at a national convention or leading an intensive 10-person executive offsite."
            align="center"
            light={false}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {speakingData.formats.map((fmt, idx) => (
              <div
                key={fmt.name}
                className={`group rounded-2xl overflow-hidden bg-[#090F1E] border border-white/12 hover:border-[#60A5FA]/60 flex flex-col justify-between transition-colors ${
                  idx < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#04040A] border-b border-white/10">
                    <Image
                      src={FORMAT_IMAGES[idx % FORMAT_IMAGES.length]}
                      alt={fmt.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090F1E]/85 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="p-6 sm:p-7 pb-0">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <span className="text-xs uppercase tracking-[0.14em] text-[#60A5FA] font-bold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {fmt.duration}
                      </span>
                      <span className="text-xs font-bold text-slate-400 tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-normal text-white mb-3">
                      {fmt.name}
                    </h3>

                    <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed mb-6">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-slate-400 block mb-0.5">
                          Audience Setting
                        </span>
                        <p className="text-slate-300">{fmt.audience}</p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-[#93C5FD] block mb-0.5">
                          Format Focus
                        </span>
                        <p className="text-slate-100">{fmt.focus}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <Button
                    href={`/contact?type=speaking&format=${encodeURIComponent(fmt.name)}`}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Discuss {fmt.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ideal Audiences & Representative Sessions (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Ideal Audiences */}
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="AUDIENCE ALIGNMENT"
                title="Ideal Audiences"
                description="Environments where Dheeraj's operational experience creates the highest attendee value."
                light={true}
                compact={true}
                animate={false}
                className="!mb-6"
              />

              <ul className="border-t border-slate-200 divide-y divide-slate-200">
                {speakingData.idealAudiences.map((aud) => (
                  <li key={aud} className="py-3.5 flex items-center gap-3 text-sm text-slate-800 font-medium">
                    <Check className="w-4 h-4 text-[#2563EB] shrink-0" strokeWidth={2.2} />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Past Sessions Ledger (fixed location & year mapping) */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="EVENT STAGES"
                title="Representative Sessions"
                description="Past keynote engagements and regional business forums."
                light={true}
                compact={true}
                animate={false}
                className="!mb-6"
              />

              <div className="border-t border-slate-200 divide-y divide-slate-200">
                {speakingData.pastSessions.map((session) => (
                  <div
                    key={session.event}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4"
                  >
                    <div>
                      <h4 className="text-base font-normal text-slate-900">
                        {session.event}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600">{session.topic}</p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500 shrink-0">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#1D4ED8]" />
                        <span>{session.location}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 tabular-nums">
                        <Calendar className="w-3.5 h-3.5 text-[#1D4ED8]" />
                        <span>{session.year}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Page Closing CTA (LIGHT - 60px padding) */}
      <PageCTA
        title="Invite Dheeraj to Address Your Audience"
        description="Submit your event dates, conclave theme, and audience profile for keynote confirmation and session customization."
        primaryAction={{
          label: "Book Keynote Engagement",
          href: "/contact?type=speaking",
        }}
        secondaryAction={{
          label: "View Consulting Mandates",
          href: "/consulting",
        }}
        light={true}
      />
    </>
  );
}
