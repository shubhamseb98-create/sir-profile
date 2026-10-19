"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  User,
  Building2,
  Phone,
  Mail,
  Briefcase,
  BadgeCheck,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { trackFormSubmission } from "@/lib/analytics";

const enquiryCategories = [
  "Business Consulting",
  "Digital Growth / Web Tycoons",
  "CRM & SOPs",
  "Franchise & Expansion",
  "Invite Dheeraj to Speak",
  "Strategic Partnership",
  "HHC / Hospitality Collaboration",
  "Media / Podcast",
];

export default function ContactForm({ light = false }) {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  const initialCategory = (() => {
    if (!typeParam) return "Business Consulting";
    if (typeParam.includes("speak")) return "Invite Dheeraj to Speak";
    if (typeParam.includes("crm") || typeParam.includes("sop")) return "CRM & SOPs";
    if (typeParam.includes("franchise")) return "Franchise & Expansion";
    if (typeParam.includes("digital") || typeParam.includes("web")) return "Digital Growth / Web Tycoons";
    if (typeParam.includes("collab") || typeParam.includes("partner")) return "Strategic Partnership";
    if (typeParam.includes("hhc") || typeParam.includes("hospitality")) return "HHC / Hospitality Collaboration";
    return "Business Consulting";
  })();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      enquiryCategory: initialCategory,
      preferredContactMethod: "WhatsApp / Phone",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          success: true,
          message:
            result.message ||
            "Thank you. Your objective has been received. Dheeraj's office will review and respond promptly.",
        });
        trackFormSubmission(data.enquiryCategory);
        reset();
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || "Unable to send your inquiry. Please try again or reach out on WhatsApp.",
        });
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: "Network error. Please connect directly via WhatsApp or email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 md:p-9 transition-all relative overflow-hidden font-sans ${
        light
          ? "bg-white border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-[#0A0D14] border border-white/10 shadow-2xl"
      }`}
    >
      {/* Top accent hairline glow */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neutral-900 via-[#CFFF04] to-neutral-900" />

      {/* Form Card Header Plaque */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#CFFF04] ring-4 ring-[#CFFF04]/25 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900">
            Executive Briefing Desk
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100/80 border border-neutral-200/80 text-[10px] font-mono font-semibold text-neutral-600">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          Direct Partner Review
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
        {/* Hidden Honeypot Field */}
        <input
          type="text"
          {...register("hp_field")}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Full Name */}
          <div>
            <label className="text-[11px] uppercase tracking-wider font-mono block mb-1.5 font-bold text-neutral-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-black transition-colors pointer-events-none">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="e.g. Rahul Verma"
                {...register("name", { required: "Name is required" })}
                className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl bg-neutral-50/80 hover:bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-200 font-medium"
              />
            </div>
            {errors.name && (
              <span className="text-[10px] text-red-500 mt-1 block">{errors.name.message}</span>
            )}
          </div>

          {/* Enterprise / Brand */}
          <div>
            <label className="text-[11px] uppercase tracking-wider font-mono block mb-1.5 font-bold text-neutral-700">
              Enterprise / Brand
            </label>
            <div className="relative group">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-black transition-colors pointer-events-none">
                <Building2 className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="e.g. Apex Health Ventures"
                {...register("organisation")}
                className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl bg-neutral-50/80 hover:bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-200 font-medium"
              />
            </div>
          </div>

          {/* Direct Phone / WhatsApp */}
          <div>
            <label className="text-[11px] uppercase tracking-wider font-mono block mb-1.5 font-bold text-neutral-700">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-black transition-colors pointer-events-none">
                <Phone className="w-4 h-4" />
              </div>
              <input
                type="tel"
                placeholder="+91 98000 00000"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl bg-neutral-50/80 hover:bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-200 font-medium"
              />
            </div>
            {errors.phone && (
              <span className="text-[10px] text-red-500 mt-1 block">{errors.phone.message}</span>
            )}
          </div>

          {/* Work Email */}
          <div>
            <label className="text-[11px] uppercase tracking-wider font-mono block mb-1.5 font-bold text-neutral-700">
              Work Email <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-black transition-colors pointer-events-none">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                placeholder="rahul@company.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                })}
                className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl bg-neutral-50/80 hover:bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-200 font-medium"
              />
            </div>
            {errors.email && (
              <span className="text-[10px] text-red-500 mt-1 block">{errors.email.message}</span>
            )}
          </div>

          {/* Engagement Category Dropdown */}
          <div>
            <label className="text-[11px] uppercase tracking-wider font-mono block mb-1.5 font-bold text-neutral-700">
              Engagement Focus
            </label>
            <div className="relative group">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-black transition-colors pointer-events-none">
                <Briefcase className="w-4 h-4" />
              </div>
              <select
                {...register("enquiryCategory")}
                className="appearance-none w-full pl-10 pr-10 py-3 sm:py-3.5 rounded-xl bg-neutral-50/80 hover:bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 text-xs sm:text-sm text-neutral-900 outline-none transition-all duration-200 font-medium cursor-pointer"
              >
                {enquiryCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Role / Designation */}
          <div>
            <label className="text-[11px] uppercase tracking-wider font-mono block mb-1.5 font-bold text-neutral-700">
              Role / Designation
            </label>
            <div className="relative group">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-black transition-colors pointer-events-none">
                <BadgeCheck className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="e.g. Founder, CEO, Director"
                {...register("designation")}
                className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl bg-neutral-50/80 hover:bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-200 font-medium"
              />
            </div>
          </div>

          {/* Strategic Objective or Bottleneck (Increased Height Textarea) */}
          <div className="sm:col-span-2">
            <label className="text-[11px] uppercase tracking-wider font-mono block mb-1.5 font-bold text-neutral-700">
              Strategic Objective / Bottleneck <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <div className="absolute left-3.5 top-3.5 text-neutral-400 group-focus-within:text-black transition-colors pointer-events-none">
                <MessageSquare className="w-4 h-4" />
              </div>
              <textarea
                rows={4}
                placeholder="Briefly describe your commercial bottleneck, expansion targets, CRM system requirements, or keynote topic..."
                {...register("businessChallenge", {
                  required: "Please briefly describe your objective",
                })}
                className="w-full pl-10 pr-4 py-3 sm:py-3.5 min-h-[115px] rounded-xl bg-neutral-50/80 hover:bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-200 font-medium resize-none leading-relaxed"
              />
            </div>
            {errors.businessChallenge && (
              <span className="text-[10px] text-red-500 mt-1 block">
                {errors.businessChallenge.message}
              </span>
            )}
          </div>
        </div>

        {/* Status Message */}
        {submitStatus && (
          <div
            className={`p-4 rounded-xl flex items-start gap-2.5 text-xs leading-relaxed ${
              submitStatus.success
                ? "bg-emerald-50 border border-emerald-300 text-emerald-900"
                : "bg-red-50 border border-red-300 text-red-900"
            }`}
          >
            {submitStatus.success ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            )}
            <span>{submitStatus.message}</span>
          </div>
        )}

        {/* Submit Action Row */}
        <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-neutral-100">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-50 group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Submitting Inquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Strategic Inquiry</span>
                <div className="w-5 h-5 rounded-full bg-[#CFFF04] text-black flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </div>
              </>
            )}
          </button>

          <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Strict NDA • 24h Executive Response</span>
          </div>
        </div>
      </form>
    </div>
  );
}
