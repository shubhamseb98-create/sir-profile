import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import { speakingData } from "@/data/speaking";
import { Clock, MapPin, Users, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Keynote Speaking & Masterclasses | Dheeraj Aggarwal",
  description:
    "Book Dheeraj Aggarwal for keynotes, executive masterclasses, panel discussions and MSME growth workshops on business strategy, systems, and digital ROI.",
};

export default function SpeakingPage() {
  return (
    <>
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="KEYNOTES & MASTERCLASSES"
        title="Direct, Actionable Insights From Ground-Level Business Building."
        description="Dheeraj speaks at industry conclaves, business associations, and corporate offsites—sharing unfiltered insights on scaling enterprises, building operational systems, and digital ROI."
        breadcrumbs={[{ label: "Speaking Engagements" }]}
        imageSrc="/images/roles/keynote-speaker-showcase.jpg"
      />

      {/* 2. Signature Keynote Topics (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style balanced ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="01"
            eyebrow="CORE CURRICULUM"
            title="Signature Speaking Topics"
            description="Proven session frameworks delivered at industry conferences, entrepreneurial conclaves, and corporate annual meetings."
            light={true}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speakingData.signatureTopics.map((topic, idx) => (
              <div
                key={topic.title}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-black transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-black text-white border border-black shadow-sm">
                      Topic 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      {topic.focus}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-black transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {topic.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/contact?type=speaking&topic=${encodeURIComponent(topic.title)}`}
                    className="text-xs uppercase tracking-wider text-slate-900 font-mono font-bold flex items-center justify-between hover:text-black transition-colors"
                  >
                    <span>Request This Keynote</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Session Formats (DARK - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#000000] border-b border-white/10 relative overflow-hidden">
        {/* Subtle balanced neon lime glow aura */}
        <div className="absolute top-1/3 -left-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="02"
            eyebrow="ENGAGEMENT FORMATS"
            title="Tailored Delivery Formats"
            description="Whether addressing 500+ attendees at a national convention or leading an intensive 10-person executive offsite."
            align="center"
            light={false}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speakingData.formats.map((fmt) => (
              <div
                key={fmt.name}
                className="p-8 rounded-2xl bg-[#0A0D14]/90 border border-white/10 hover:border-[#CFFF04]/40 flex flex-col justify-between shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#CFFF04] font-bold">
                      {fmt.duration}
                    </span>
                    <Clock className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="font-sans text-2xl font-bold text-white mb-3">
                    {fmt.name}
                  </h3>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div>
                      <span className="text-[#CFFF04] font-mono font-semibold block mb-1">
                        Audience Setting:
                      </span>
                      <p className="text-slate-300">{fmt.audience}</p>
                    </div>

                    <div className="pt-2">
                      <span className="text-[#CFFF04] font-mono font-semibold block mb-1">
                        Format Focus:
                      </span>
                      <p className="text-white">{fmt.focus}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
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

      {/* 4. Ideal Audiences & Past Sessions (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style balanced ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Ideal Audiences */}
            <div className="lg:col-span-6">
              <SectionHeading
                number="03"
                eyebrow="AUDIENCE ALIGNMENT"
                title="Ideal Audiences"
                description="Environments where Dheeraj's operational experience creates the highest attendee value."
                className="mb-8"
                light={true}
              />

              <div className="space-y-3">
                {speakingData.idealAudiences.map((aud) => (
                  <div
                    key={aud}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3 text-sm text-slate-900 font-semibold hover:border-black transition-all"
                  >
                    <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white font-bold" />
                    </div>
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Past Sessions Showcase */}
            <div className="lg:col-span-6">
              <SectionHeading
                number="04"
                eyebrow="EVENT STAGES"
                title="Representative Sessions"
                description="Past keynote engagements and regional business forums."
                className="mb-8"
                light={true}
              />

              <div className="space-y-4">
                {speakingData.pastSessions.map((session) => (
                  <div
                    key={session.event}
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-black transition-all"
                  >
                    <div>
                      <h4 className="font-sans text-base font-bold text-slate-900 mb-1">
                        {session.event}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">{session.topic}</p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400 shrink-0">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{session.city}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>{session.audience}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Page Closing CTA (LIGHT - 80px padding) */}
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
