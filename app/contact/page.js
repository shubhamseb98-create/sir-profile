import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import { siteConfig } from "@/data/site";
import { MessageCircle, Calendar, ArrowUpRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact & Book a Strategy Call | Dheeraj Aggarwal",
  description:
    "Whether you need a growth roadmap, stronger digital performance, business systems, a strategic partnership or an impactful speaker, share your objective and let's explore the right way forward.",
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbHero
        eyebrow="INITIATE CONVERSATION"
        title="Book a Strategy Consultation"
        description="Whether you need a growth roadmap, stronger digital performance, business systems, a strategic partnership or an impactful speaker, share your objective and let's explore the right way forward."
        breadcrumbs={[{ label: "Contact & Book Call" }]}
        imageSrc="/images/transformations/hhc-hospitality-roundtable.jpg"
      />

      {/* Main Executive Inquiry Desk (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="DIRECT ACCESS"
            title="Executive Inquiry Desk"
            description="Complete the brief below or connect directly for immediate calendar scheduling."
            light={true}
            compact={true}
            animate={false}
            className="!mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Form (7 Cols) */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-8 rounded-2xl border border-slate-200 text-sm text-slate-500">
                    Loading consultation desk...
                  </div>
                }
              >
                <ContactForm light={true} />
              </Suspense>
            </div>

            {/* Priority Channels Sidebar (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-5">
                <div className="pb-4 border-b border-slate-200">
                  <span className="text-[11px] uppercase font-bold tracking-[0.16em] text-[#1D4ED8] block mb-1">
                    Priority Channels
                  </span>
                  <h3 className="text-lg font-normal text-slate-900">
                    Direct Corporate Access
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    Prefer direct scheduling? Connect via executive calendar booking or WhatsApp desk.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={siteConfig.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#04040A] hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#4F46E5] text-white transition-all flex items-center justify-between text-xs font-bold uppercase tracking-[0.1em]"
                  >
                    <span className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-[#93C5FD]" />
                      <span>Book 30-Min Diagnostic</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#93C5FD]" />
                  </a>

                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl border border-slate-300 hover:border-[#2563EB] hover:text-[#1D4ED8] bg-white text-slate-900 transition-colors flex items-center justify-between text-xs font-bold uppercase tracking-[0.1em]"
                  >
                    <span className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-[#2563EB]" />
                      <span>Chat on WhatsApp</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-500 block mb-0.5">
                      Executive Inbox
                    </span>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-sm font-semibold text-slate-900 hover:text-[#1D4ED8] transition-colors truncate block"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                  <span className="text-[11px] font-medium text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200 shrink-0">
                    Within 24h
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">Executive Confidentiality:</strong> All commercial diagnostics, pipeline metrics, and disclosures remain strictly protected under mutual NDA guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
