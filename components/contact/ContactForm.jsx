"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { Check, Loader2, AlertCircle, ShieldCheck } from "lucide-react";
import { trackFormSubmission } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const enquiryCategories = [
  "Business Consulting",
  "Digital Growth / Web Tycoons",
  "CRM & SOPs",
  "Franchise & Expansion",
  "Strategic Partnership",
  "HHC / Hospitality Collaboration",
  "Invite Dheeraj to Speak",
  "General Inquiry",
];

export default function ContactForm({ light = false }) {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const getInitialCategory = (typeStr) => {
    const t = typeStr.toLowerCase();
    if (t.includes("speak")) return "Invite Dheeraj to Speak";
    if (t.includes("crm") || t.includes("sop")) return "CRM & SOPs";
    if (t.includes("franchise")) return "Franchise & Expansion";
    if (t.includes("digital") || t.includes("web")) return "Digital Growth / Web Tycoons";
    if (t.includes("collab") || t.includes("partner")) return "Strategic Partnership";
    if (t.includes("hhc") || t.includes("hospitality")) return "HHC / Hospitality Collaboration";
    return "Business Consulting";
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      enquiryCategory: getInitialCategory(initialType),
      preferredContactMethod: "WhatsApp / Phone",
    },
  });

  useEffect(() => {
    if (initialType) {
      setValue("enquiryCategory", getInitialCategory(initialType));
    }
  }, [initialType, setValue]);

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
          type: "success",
          message:
            result.message ||
            "Your brief has been logged. Our executive team will respond within 24 business hours.",
        });
        trackFormSubmission(data.enquiryCategory);
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Unable to submit request cleanly. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "A network error occurred. Please check your connection or use the WhatsApp desk.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelClass = cn(
    "text-xs font-semibold block",
    light ? "text-slate-700" : "text-slate-200"
  );

  const inputClass = cn(
    "w-full rounded-xl px-4 py-2.5 text-sm border focus:outline-none transition-colors",
    light
      ? "bg-[#F8FAFC] border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:bg-white"
      : "bg-[#04040A] border-white/15 text-white placeholder:text-slate-500 focus:border-[#60A5FA]"
  );

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 font-sans transition-all",
        light
          ? "bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.05)]"
          : "bg-[#090F1E] border border-white/12 shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
      )}
    >
      {/* Form Header */}
      <div
        className={cn(
          "pb-4 mb-6 border-b flex items-center justify-between gap-4",
          light ? "border-slate-200" : "border-white/10"
        )}
      >
        <div>
          <span
            className={cn(
              "text-[11px] font-bold uppercase tracking-[0.16em] block mb-0.5",
              light ? "text-[#1D4ED8]" : "text-[#93C5FD]"
            )}
          >
            Confidential Consultation Brief
          </span>
          <h3 className={cn("text-lg font-normal", light ? "text-slate-900" : "text-white")}>
            Submit Inquiry Parameters
          </h3>
        </div>
        <span
          className={cn(
            "text-[11px] font-medium inline-flex items-center gap-1.5 px-3 py-1 rounded-full border",
            light
              ? "bg-slate-50 border-slate-200 text-slate-600"
              : "bg-white/5 border-white/15 text-slate-300"
          )}
        >
          <ShieldCheck className={cn("w-3.5 h-3.5", light ? "text-[#1D4ED8]" : "text-[#60A5FA]")} />
          24h Partner Review
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className={labelClass}>
              Full Name <span className="text-[#3B82F6]">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g., Rajesh Sharma"
              {...register("name", { required: "Full name is required" })}
              className={cn(inputClass, errors.name && "!border-red-500")}
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="organisation" className={labelClass}>
              Company / Organisation
            </label>
            <input
              id="organisation"
              type="text"
              placeholder="e.g., Horizon Hospitality"
              {...register("organisation")}
              className={inputClass}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="phone" className={labelClass}>
              Phone / WhatsApp <span className="text-[#3B82F6]">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 98XXX XXXXX"
              {...register("phone", { required: "Phone number is required" })}
              className={cn(inputClass, errors.phone && "!border-red-500")}
            />
            {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className={labelClass}>
              Business Email <span className="text-[#3B82F6]">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={cn(inputClass, errors.email && "!border-red-500")}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="enquiryCategory" className={labelClass}>
              Advisory Focus Area <span className="text-[#3B82F6]">*</span>
            </label>
            <select
              id="enquiryCategory"
              {...register("enquiryCategory", { required: "Please select an inquiry type" })}
              className={cn(inputClass, "appearance-none cursor-pointer")}
            >
              {enquiryCategories.map((c) => (
                <option key={c} value={c} className={light ? "bg-white text-slate-900" : "bg-[#04040A] text-white"}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="designation" className={labelClass}>
              Role / Designation
            </label>
            <input
              id="designation"
              type="text"
              placeholder="Founder / MD / Director"
              {...register("designation")}
              className={inputClass}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="businessChallenge" className={labelClass}>
            Primary Growth Bottleneck / Objective <span className="text-[#3B82F6]">*</span>
          </label>
          <textarea
            id="businessChallenge"
            rows={4}
            placeholder="Outline your priority operational objective, timeline, or desired consulting scope..."
            {...register("businessChallenge", {
              required: "Please briefly describe your primary objective",
            })}
            className={cn(inputClass, "resize-none leading-relaxed", errors.businessChallenge && "!border-red-500")}
          />
          {errors.businessChallenge && (
            <p className="text-xs text-red-500">{errors.businessChallenge.message}</p>
          )}
        </div>

        <input
          type="text"
          {...register("hp_field")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {submitStatus && (
          <div
            className={cn(
              "p-3.5 rounded-xl flex items-start gap-2.5 text-xs font-medium border",
              submitStatus.type === "success"
                ? light
                  ? "bg-[#EFF6FF] border-[#3B82F6] text-slate-800"
                  : "bg-[#04040A] border-[#3B82F6] text-white"
                : "bg-red-50 border-red-200 text-red-700"
            )}
          >
            {submitStatus.type === "success" ? (
              <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            )}
            <p className="leading-snug">{submitStatus.message}</p>
          </div>
        )}

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full sm:w-auto px-8 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60",
              light
                ? "bg-[#04040A] hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#4F46E5] text-white shadow-md"
                : "bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#6366F1] text-white hover:brightness-110 shadow-[0_0_24px_rgba(37,99,235,0.4)]"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit Consultation Brief</span>
            )}
          </button>

          <p className={cn("text-[11px] flex items-center gap-1.5", light ? "text-slate-500" : "text-slate-400")}>
            <ShieldCheck className={cn("w-3.5 h-3.5", light ? "text-[#1D4ED8]" : "text-[#60A5FA]")} />
            Confidentiality NDA Respected
          </p>
        </div>
      </form>
    </div>
  );
}
