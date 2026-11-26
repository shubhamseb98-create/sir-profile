import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import { speakingData } from "@/data/speaking";
import { Clock, MapPin, Calendar, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 border-t border-slate-200">
            {speakingData.signatureTopics.map((topic, idx) => (
              <article
                key={topic.title}
                className="group py-6 border-b border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-[#9A6B0C]">
                      {String(idx + 1).padStart(2, "0")} • {topic.focus}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#9A6B0C] transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {topic.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/contact?type=speaking&topic=${encodeURIComponent(topic.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-[#9A6B0C] transition-colors"
                  >
                    <span>Request This Keynote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tailored Delivery Formats (DARK MIDNIGHT NAVY - 60px padding) */}
      <section className="py-[60px] bg-[#060D1A] border-b border-white/10 relative overflow-hidden font-sans">
        <DarkSectionLining />

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
                className={`p-6 sm:p-7 rounded-2xl bg-[#0B1528] border border-white/12 hover:border-[#D4AF37]/60 flex flex-col justify-between transition-colors ${
                  idx < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <span className="text-xs uppercase tracking-[0.14em] text-[#D4AF37] font-bold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {fmt.duration}
                    </span>
                    <span className="text-xs font-bold text-slate-500 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
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
                      <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-[#F5E2A3] block mb-0.5">
                        Format Focus
                      </span>
                      <p className="text-slate-100">{fmt.focus}</p>
                    </div>
                  </div>
                </div>

                <Button
                  href={`/contact?type=speaking&format=${encodeURIComponent(fmt.name)}`}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Discuss {fmt.name}
                </Button>
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
                    <Check className="w-4 h-4 text-[#9A6B0C] shrink-0" strokeWidth={2.2} />
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
                      <h4 className="text-base font-bold text-slate-900">
                        {session.event}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600">{session.topic}</p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500 shrink-0">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#9A6B0C]" />
                        <span>{session.location}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 tabular-nums">
                        <Calendar className="w-3.5 h-3.5 text-[#9A6B0C]" />
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
