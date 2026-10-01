import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { MessageCircle, Mail, Calendar, Linkedin, Download, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact & Book a Strategy Call | Dheeraj Aggarwal",
  description:
    "Whether you need a growth roadmap, stronger digital performance, business systems, a strategic partnership or an impactful speaker, share your objective and let's explore the right way forward.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#0A0F1A] border-b border-white/08 relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <SectionHeading
          number="01"
          eyebrow="INITIATE CONVERSATION"
          title="Book a Strategy Consultation"
          description="Whether you need a growth roadmap, stronger digital performance, business systems, a strategic partnership or an impactful speaker, share your objective and let's explore the right way forward."
          className="max-w-3xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Main Form (8 Cols) */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="p-8 text-[#A9B0BE]">Loading contact interface...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Direct Channels & Trust Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Strategy Call Card */}
            <div className="p-6 rounded-2xl bg-[#0F1626] border border-white/08 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/10 border border-[#C6A15B]/25 flex items-center justify-center text-[#C6A15B] mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-2xl font-medium text-[#F5F3EE] mb-2">
                Direct Calendar Booking
              </h3>
              <p className="text-xs text-[#A9B0BE] leading-relaxed mb-4">
                Schedule a confirmed 30-minute strategic introductory diagnostic directly on Dheeraj&apos;s executive calendar.
              </p>
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-[#C6A15B] text-[#0A0F1A] font-semibold text-xs uppercase tracking-wider hover:bg-[#E2C98F] transition-colors"
              >
                Open Booking Calendar
              </a>
            </div>

            {/* Instant WhatsApp Connect */}
            <div className="p-6 rounded-2xl bg-[#0F1626] border border-white/08 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/25 flex items-center justify-center text-[#25D366] mb-3">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-2xl font-medium text-[#F5F3EE] mb-2">
                WhatsApp Executive Desk
              </h3>
              <p className="text-xs text-[#A9B0BE] leading-relaxed mb-4">
                For prompt corporate communications, event invites, or high-priority advisory inquiries.
              </p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl border border-white/12 text-[#F5F3EE] hover:border-[#C6A15B] hover:text-[#E2C98F] font-medium text-xs tracking-wider transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Executive Direct Inbox */}
            <div className="p-6 rounded-2xl bg-[#0F1626] border border-white/08">
              <h4 className="text-xs uppercase tracking-wider font-mono text-[#C6A15B] mb-2">
                Direct Email Correspondence
              </h4>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-sm font-medium text-[#F5F3EE] hover:text-[#E2C98F] transition-colors break-all"
              >
                {siteConfig.contactEmail}
              </a>
              <span className="text-[11px] text-[#A9B0BE] block mt-1">
                Typical response time: Within 24 business hours.
              </span>
            </div>

            {/* Confidentiality Commitment */}
            <div className="p-5 rounded-2xl bg-[#151D30]/40 border border-white/06 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
              <p className="text-xs text-[#A9B0BE] leading-relaxed">
                <strong className="text-[#F5F3EE]">Executive Confidentiality:</strong> All commercial diagnostics, revenue figures, and corporate data shared remain strictly confidential under mutual NDA guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

