"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
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

export default function ContactForm() {
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

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      enquiryCategory: initialCategory,
      preferredContactMethod: "WhatsApp / Phone",
    },
  });

  useEffect(() => {
    setValue("enquiryCategory", selectedCategory);
  }, [selectedCategory, setValue]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setValue("enquiryCategory", category);
  };

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
            "Thank you. Your objective has been submitted. Dheeraj's office will review and respond promptly.",
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
    <div className="bg-[#0F1626] border border-white/08 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
      {/* Category Pills Selector */}
      <div className="mb-8">
        <label className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] block mb-3 font-semibold">
          Nature of Engagement (Select Category):
        </label>
        <div className="flex flex-wrap gap-2">
          {enquiryCategories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`text-xs px-3.5 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#C6A15B] text-[#0A0F1A] font-semibold border-[#C6A15B] shadow-sm"
                  : "bg-[#0A0F1A]/50 text-[#A9B0BE] border-white/10 hover:border-[#C6A15B]/50 hover:text-[#F5F3EE]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <input type="hidden" {...register("enquiryCategory")} value={selectedCategory} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Hidden Honeypot Field */}
        <input
          type="text"
          {...register("hp_field")}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#A9B0BE] font-mono block mb-2">
              Your Full Name <span className="text-[#C6A15B]">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Verma"
              {...register("name", { required: "Name is required" })}
              className="w-full bg-[#151D30] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#A9B0BE]/40 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all outline-none"
            />
            {errors.name && (
              <span className="text-[11px] text-red-400 mt-1 block">{errors.name.message}</span>
            )}
          </div>

          {/* Organisation */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#A9B0BE] font-mono block mb-2">
              Enterprise / Organisation
            </label>
            <input
              type="text"
              placeholder="e.g. Apex Health Ventures"
              {...register("organisation")}
              className="w-full bg-[#151D30] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#A9B0BE]/40 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all outline-none"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#A9B0BE] font-mono block mb-2">
              Designation / Role
            </label>
            <input
              type="text"
              placeholder="e.g. Founder, CEO, Director"
              {...register("designation")}
              className="w-full bg-[#151D30] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#A9B0BE]/40 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#A9B0BE] font-mono block mb-2">
              Phone / Mobile (with country code) <span className="text-[#C6A15B]">*</span>
            </label>
            <input
              type="tel"
              placeholder="+91 98000 00000"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full bg-[#151D30] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#A9B0BE]/40 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all outline-none"
            />
            {errors.phone && (
              <span className="text-[11px] text-red-400 mt-1 block">{errors.phone.message}</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#A9B0BE] font-mono block mb-2">
              Work / Direct Email <span className="text-[#C6A15B]">*</span>
            </label>
            <input
              type="email"
              placeholder="rahul@company.com"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
              })}
              className="w-full bg-[#151D30] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#A9B0BE]/40 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all outline-none"
            />
            {errors.email && (
              <span className="text-[11px] text-red-400 mt-1 block">{errors.email.message}</span>
            )}
          </div>

          {/* City / Location */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#A9B0BE] font-mono block mb-2">
              City / Headquarters Location
            </label>
            <input
              type="text"
              placeholder="e.g. New Delhi, Mumbai, Dubai"
              {...register("city")}
              className="w-full bg-[#151D30] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#A9B0BE]/40 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all outline-none"
            />
          </div>

          {/* Website or LinkedIn */}
          <div className="sm:col-span-2">
            <label className="text-xs uppercase tracking-wider text-[#A9B0BE] font-mono block mb-2">
              Company Website or Social Profile URL
            </label>
            <input
              type="url"
              placeholder="https://yourcompany.com"
              {...register("website")}
              className="w-full bg-[#151D30] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#A9B0BE]/40 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all outline-none"
            />
          </div>

          {/* Business Challenge / Objective */}
          <div className="sm:col-span-2">
            <label className="text-xs uppercase tracking-wider text-[#A9B0BE] font-mono block mb-2">
              Primary Business Objective & Bottlenecks <span className="text-[#C6A15B]">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Describe your current commercial constraints, conversion targets, systems need, or speaking event details..."
              {...register("businessChallenge", {
                required: "Please briefly describe your objective",
              })}
              className="w-full bg-[#151D30] border border-white/10 rounded-xl p-4 text-sm text-[#F5F3EE] placeholder:text-[#A9B0BE]/40 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all outline-none resize-y"
            />
            {errors.businessChallenge && (
              <span className="text-[11px] text-red-400 mt-1 block">
                {errors.businessChallenge.message}
              </span>
            )}
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#A9B0BE] font-mono block mb-2">
              Preferred Contact Method
            </label>
            <select
              {...register("preferredContactMethod")}
              className="w-full bg-[#151D30] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F3EE] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all outline-none"
            >
              <option value="WhatsApp / Phone">WhatsApp / Phone</option>
              <option value="Email">Email</option>
              <option value="Virtual Video Meeting">Virtual Video Meeting</option>
            </select>
          </div>

          {/* Preferred Timing */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#A9B0BE] font-mono block mb-2">
              Preferred Consultation Timing
            </label>
            <input
              type="text"
              placeholder="e.g. Weekday Afternoons, Flexible"
              {...register("preferredDateTime")}
              className="w-full bg-[#151D30] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#A9B0BE]/40 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all outline-none"
            />
          </div>
        </div>

        {/* Status Message */}
        {submitStatus && (
          <div
            className={`p-4 rounded-xl flex items-start gap-3 text-xs leading-relaxed ${
              submitStatus.success
                ? "bg-emerald-950/40 border border-emerald-500/30 text-emerald-200"
                : "bg-red-950/40 border border-red-500/30 text-red-200"
            }`}
          >
            {submitStatus.success ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            )}
            <span>{submitStatus.message}</span>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C6A15B] text-[#0A0F1A] font-semibold text-sm uppercase tracking-wider py-4 px-8 rounded-full hover:bg-[#E2C98F] transition-all duration-300 shadow-lg hover:shadow-[0_4px_24px_rgba(198,161,91,0.3)] disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Inquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Strategic Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Privacy Note */}
        <p className="text-[11px] text-[#A9B0BE]/70 leading-relaxed pt-2">
          Business information submitted through this form will be treated confidentially. See our{" "}
          <a href="/privacy-policy" className="text-[#C6A15B] hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}

