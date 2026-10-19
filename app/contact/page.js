import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import { siteConfig } from "@/data/site";
import { MessageCircle, Mail, Calendar, Linkedin, Download, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact & Book a Strategy Call | Dheeraj Aggarwal",
  description:
    "Whether you need a growth roadmap, stronger digital performance, business systems, a strategic partnership or an impactful speaker, share your objective and let's explore the right way forward.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="INITIATE CONVERSATION"
        title="Book a Strategy Consultation"
        description="Whether you need a growth roadmap, stronger digital performance, business systems, a strategic partnership or an impactful speaker, share your objective and let's explore the right way forward."
        breadcrumbs={[{ label: "Contact & Book Call" }]}
        imageSrc="/images/hero/hero-corporate-boardroom-clean.jpg"
      />

      {/* 2. Main Form & Direct Channels (LIGHT - Compact Viewport Fit) */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden font-sans">
        {/* Ambient glow */}
        <div className="absolute top-1/4 -left-28 w-[380px] h-[380px] bg-[#CFFF04]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 w-[380px] h-[380px] bg-[#CFFF04]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            number="01"
            eyebrow="DIRECT ACCESS"
            title="Executive Inquiry Desk"
            description="Complete the brief below or connect directly for immediate calendar scheduling."
            light={true}
            className="mb-5 sm:mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
            {/* Main Form (7 Cols) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-6 text-slate-500">Loading contact interface...</div>}>
                <ContactForm light={true} />
              </Suspense>
            </div>

            {/* Direct Channels & Trust Sidebar (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Direct Priority Channels Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] space-y-4.5 relative overflow-hidden">
                {/* Top hairline accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neutral-900 via-[#CFFF04] to-neutral-900" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-200">
                      Priority Access
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Slots Open
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                    Direct Corporate Channels
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mt-1">
                    Prefer direct engagement? Connect immediately via confirmed executive calendar booking or WhatsApp desk.
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  {/* Calendar Booking */}
                  <a
                    href={siteConfig.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-black hover:bg-neutral-900 text-white transition-all flex items-center justify-between font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                  >
                    <span className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-neutral-800 flex items-center justify-center text-[#CFFF04]">
                        <Calendar className="w-3.5 h-3.5" />
                      </div>
                      <span>Book 30-Min Diagnostic</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#CFFF04] group-hover:translate-x-0.5 transition-transform">
                      Calendar ↗
                    </span>
                  </a>

                  {/* WhatsApp Connect */}
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl border border-neutral-200 hover:border-black bg-neutral-50/80 hover:bg-white text-neutral-900 transition-all flex items-center justify-between font-bold text-xs uppercase tracking-wider shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                  >
                    <span className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center border border-[#25D366]/30">
                        <MessageCircle className="w-3.5 h-3.5" />
                      </div>
                      <span>Chat on WhatsApp</span>
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 group-hover:text-black group-hover:translate-x-0.5 transition-transform">
                      Instant ↗
                    </span>
                  </a>
                </div>

                {/* Direct Email */}
                <div className="pt-3.5 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block mb-0.5">
                      Executive Direct Inbox
                    </span>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-xs font-bold text-neutral-900 hover:text-black hover:underline transition-colors truncate block"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full border border-neutral-200 shrink-0">
                    Within 24h
                  </span>
                </div>
              </div>

              {/* Confidentiality & Mutual NDA */}
              <div className="p-4.5 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  <strong className="text-neutral-900 font-bold">Executive Confidentiality:</strong> All commercial diagnostics, pipeline metrics, and disclosures remain strictly protected under mutual NDA guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

