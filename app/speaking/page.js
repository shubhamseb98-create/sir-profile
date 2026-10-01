import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import SafeImage from "@/components/ui/SafeImage";
import { speakingData } from "@/data/speaking";
import { Mic, Clock, Users, ArrowUpRight, Check, Download, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Speaking & Workshops | Dheeraj Aggarwal",
  description:
    "Invite Dheeraj Aggarwal to speak at your business conclave, MSME summit, leadership offsite, or corporate workshop. High-impact keynotes on digital growth, branding, and systems.",
};

export default function SpeakingPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs uppercase tracking-[0.24em] text-[#C6A15B] font-mono font-medium">
                  KEYNOTE SPEAKER & BUSINESS EDUCATOR
                </span>
                <span className="text-white/20">â€¢</span>
                <span className="text-xs text-[#A9B0BE] font-mono">50+ Sessions Delivered</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium text-[#F5F3EE] leading-[1.1] mb-6">
                Actionable Masterclasses on Growth, Digital Strategy & Systems
              </h1>

              <p className="text-base sm:text-lg text-[#A9B0BE] leading-relaxed mb-8">
                {speakingData.intro}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact?type=speaking" variant="primary" size="lg">
                  Invite Dheeraj to Speak
                </Button>
                <Button
                  href="/public/downloads/Dheeraj-Aggarwal-Speaker-Profile.pdf"
                  variant="secondary"
                  size="lg"
                  icon="none"
                  download
                >
                  <Download className="w-4 h-4 mr-2 text-[#C6A15B]" />
                  <span>Download Speaker Kit (PDF)</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[360px] rounded-2xl overflow-hidden border border-white/12 shadow-2xl">
                <SafeImage
                  src="/images/dheeraj/speaking-01.jpg"
                  alt="Dheeraj Aggarwal Keynote Presentation"
                  width={450}
                  height={550}
                  priority={true}
                  placeholderLabel="Keynote Stage Photo"
                  aspectRatio="aspect-[4/5]"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#0F1626] border-t border-white/08 text-center">
                  <span className="font-editorial text-lg text-[#F5F3EE] block">
                    Keynote & Workshop Stage
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-mono">
                    MSME & Corporate Forums
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Signature Keynote Topics */}
      <section className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="01"
            eyebrow="CORE CURRICULUM"
            title="Signature Speaking Topics"
            description="Proven session frameworks delivered at industry conferences, entrepreneurial conclaves, and corporate annual meetings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speakingData.signatureTopics.map((topic, idx) => (
              <div
                key={topic.title}
                className="p-8 rounded-2xl bg-[#151D30]/60 border border-white/08 hover:border-[#C6A15B]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#C6A15B] font-semibold px-2.5 py-0.5 rounded bg-[#C6A15B]/10">
                      Topic 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-[#A9B0BE]/70">
                      {topic.focus}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-[#F5F3EE] mb-3 leading-snug group-hover:text-[#E2C98F] transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A9B0BE] leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/06">
                  <Link
                    href={`/contact?type=speaking&topic=${encodeURIComponent(topic.title)}`}
                    className="text-xs uppercase tracking-wider text-[#C6A15B] font-mono flex items-center justify-between group-hover:text-[#E2C98F] transition-colors"
                  >
                    <span>Request This Keynote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Session Formats */}
      <section className="py-24 md:py-32 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="02"
            eyebrow="ENGAGEMENT FORMATS"
            title="Tailored Delivery Formats"
            description="Whether addressing 500+ attendees at a national convention or leading an intensive 10-person executive offsite."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {speakingData.formats.map((fmt) => (
              <div
                key={fmt.name}
                className="p-8 rounded-2xl bg-[#0F1626] border border-white/08 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B]">
                      {fmt.duration}
                    </span>
                    <Clock className="w-4 h-4 text-[#A9B0BE]" />
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-[#F5F3EE] mb-3">
                    {fmt.name}
                  </h3>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div>
                      <span className="text-[#C6A15B] font-mono block mb-1">
                        Audience Setting:
                      </span>
                      <p className="text-[#A9B0BE]">{fmt.audience}</p>
                    </div>

                    <div className="pt-2">
                      <span className="text-[#C6A15B] font-mono block mb-1">
                        Format Focus:
                      </span>
                      <p className="text-[#F5F3EE]">{fmt.focus}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/06">
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

      {/* 4. Ideal Audiences & Past Sessions */}
      <section className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Ideal Audiences */}
            <div className="lg:col-span-6">
              <SectionHeading
                number="03"
                eyebrow="TARGET AUDIENCE"
                title="Ideal Audiences"
                description="Tailored session material calibrated for decision-makers and founders."
                className="mb-8"
              />

              <div className="space-y-3">
                {speakingData.idealAudiences.map((aud) => (
                  <div
                    key={aud}
                    className="p-4 rounded-xl bg-[#151D30]/60 border border-white/06 flex items-center gap-3 text-sm text-[#F5F3EE]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#C6A15B]" />
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
              />

              <div className="space-y-4">
                {speakingData.pastSessions.map((session) => (
                  <div
                    key={session.event}
                    className="p-5 rounded-xl bg-[#0A0F1A]/60 border border-white/06 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="font-editorial text-lg text-[#F5F3EE] mb-1 font-medium">
                        {session.event}
                      </h4>
                      <p className="text-xs text-[#C6A15B] font-mono">
                        Topic: {session.topic}
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-xs text-[#A9B0BE] block">
                        {session.location}
                      </span>
                      <span className="text-[11px] font-mono text-[#A9B0BE]/60">
                        {session.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Closing CTA */}
      <PageCTA
        title="Invite Dheeraj to Address Your Audience"
        description="Submit your event date, expected audience size, and primary theme to receive Dheeraj's keynote availability and session brief."
        primaryAction={{
          label: "Submit Speaker Invite",
          href: "/contact?type=speaking",
        }}
        secondaryAction={{
          label: "Discuss Custom Workshop",
          href: "/contact?type=speaking-workshop",
        }}
      />
    </>
  );
}

