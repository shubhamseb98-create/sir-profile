"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Sparkles, CheckCircle2, ArrowRight, MessageSquare, Phone, Mail, User, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

const practices = [
  "Business Consulting",
  "Digital Growth",
  "CRM & SOP Systems",
  "Franchise Scale",
  "Speaking",
];

export default function PopupLeadForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState("Business Consulting");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
    setIsSubmitted(false);
    setErrorMsg("");
    if (typeof window !== "undefined" && window.location.hash !== "#strategy-call") {
      window.history.pushState(null, "", "#strategy-call");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined" && (window.location.hash === "#strategy-call" || window.location.hash === "#strategy-modal")) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  // Global event listener to trigger modal from any CTA link or button
  useEffect(() => {
    // Check if initial URL already has #strategy-call or #strategy-modal
    if (typeof window !== "undefined") {
      if (window.location.hash === "#strategy-call" || window.location.hash === "#strategy-modal") {
        queueMicrotask(() => setIsOpen(true));
      }
    }

    const onHashChange = () => {
      if (window.location.hash === "#strategy-call" || window.location.hash === "#strategy-modal") {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("open-lead-modal", handleOpen);

    // Capture phase listener: stops Next.js router from navigating to /contact
    const handleLinkClick = (e) => {
      const target = e.target.closest("a");
      if (target) {
        const href = target.getAttribute("href") || "";
        if (
          href.includes("contact?type=strategy-call") ||
          href.includes("type=strategy-call") ||
          href === "#strategy-modal" ||
          href === "#strategy-call" ||
          href === "#book-call"
        ) {
          e.preventDefault();
          e.stopPropagation();
          handleOpen();
        }
      }
    };

    document.addEventListener("click", handleLinkClick, true);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("open-lead-modal", handleOpen);
      document.removeEventListener("click", handleLinkClick, true);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg("Please provide your name and phone/WhatsApp number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || "not-provided@lead.com",
        organisation: "Direct Inquiry",
        enquiryCategory: selectedPractice,
        businessChallenge: formData.note || `Strategy call for ${selectedPractice}`,
        preferredContactMethod: "WhatsApp / Phone",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success !== false) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data.error || "Submission failed. Please message on WhatsApp directly.");
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Modal Overlay & Card ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            />

            {/* Split Modal: Left = Image, Right = Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="relative w-full max-w-3xl lg:max-w-[780px] bg-[#070B16] rounded-2xl border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_32px_rgba(59,130,246,0.14)] overflow-hidden my-auto z-10 font-sans grid grid-cols-1 md:grid-cols-12 max-h-[92vh]"
            >
              {/* Subtle Top Accent Glow Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#60A5FA]/65 to-transparent z-30" />

              {/* Close Button (Top Right) */}
              <button
                onClick={handleClose}
                aria-label="Close modal"
                className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-black/60 border border-white/15 hover:border-[#60A5FA] hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-150 z-30 shadow-md"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {/* ── LEFT SIDE: EXECUTIVE PORTRAIT IMAGE (5 Columns) ── */}
              <div className="hidden md:flex md:col-span-5 relative bg-gradient-to-b from-[#090F1E] via-[#050811] to-black flex-col justify-end p-5 overflow-hidden border-r border-white/10 min-h-[460px]">
                {/* Background Image of Dheeraj Aggarwal */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/hero/ddab.png"
                    alt="Dheeraj Aggarwal - Business Consultant & Growth Specialist"
                    fill
                    priority
                    sizes="350px"
                    className="object-cover object-top opacity-90"
                  />
                  {/* Subtle Dark Fade Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-black/20" />
                </div>

                {/* Left Bottom: Credibility Card Overlay */}
                <div className="relative z-10 space-y-2">
                  <div className="p-3 rounded-xl bg-black/85 border border-white/15 backdrop-blur-md shadow-lg">
                    <div className="text-xs font-bold text-white leading-tight">
                      Dheeraj Aggarwal
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                      Founder, Web Tycoons &bull; Senior Strategist
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/10">
                      <div>
                        <div className="text-[8.5px] font-mono text-slate-400 uppercase">Scale</div>
                        <div className="text-[11px] font-extrabold text-[#93C5FD]">₹50 Cr+</div>
                      </div>
                      <div>
                        <div className="text-[8.5px] font-mono text-slate-400 uppercase">Track</div>
                        <div className="text-[11px] font-extrabold text-white">15+ Yrs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── RIGHT SIDE: FORM (7 Columns) ── */}
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-center overflow-y-auto">
                {isSubmitted ? (
                  /* ── Success State ── */
                  <div className="text-center py-6 flex flex-col items-center my-auto">
                    <div className="w-13 h-13 rounded-full bg-[#3B82F6]/15 border border-[#60A5FA]/45 flex items-center justify-center text-[#93C5FD] mb-3 shadow-[0_0_20px_rgba(59,130,246,0.25)]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <h3 className="text-lg font-normal text-white mb-1.5">
                      Request Received!
                    </h3>

                    <p className="text-xs text-slate-400 max-w-xs mx-auto mb-5 leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Dheeraj Aggarwal&apos;s executive office will connect within 24 hours.
                    </p>

                    <div className="flex flex-col gap-2.5 w-full">
                      <a
                        href={siteConfig.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs transition-all shadow-md"
                      >
                        <MessageSquare className="w-4 h-4 fill-black" />
                        <span>Chat on WhatsApp Directly</span>
                      </a>

                      <button
                        onClick={handleClose}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-all"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                ) : (
                  /* ── Form State ── */
                  <>
                    {/* Header */}
                    <div className="mb-3.5 pr-6">
                      <div className="inline-flex items-center gap-1 text-[9.5px] font-mono font-semibold tracking-wider text-[#93C5FD] uppercase mb-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>Direct Advisory</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-normal text-white tracking-tight leading-snug">
                        Book a Strategy Call
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                        1-on-1 strategic consultation with Dheeraj Aggarwal
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-2.5">
                      {/* Focus Area Selector */}
                      <div>
                        <label className="block text-[9px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                          Select Focus Area:
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {practices.map((practice) => (
                            <button
                              type="button"
                              key={practice}
                              onClick={() => setSelectedPractice(practice)}
                              className={`text-[9.5px] sm:text-[10px] px-2.5 py-1 rounded-lg border transition-all duration-150 ${
                                selectedPractice === practice
                                  ? "bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white font-bold border-[#93C5FD]/50 shadow-sm"
                                  : "bg-white/[0.03] text-slate-300 border-white/10 hover:border-white/25 hover:text-white"
                              }`}
                            >
                              {practice}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Your Name */}
                      <div>
                        <label className="block text-[10px] font-medium text-slate-300 mb-0.5">
                          Your Name <span className="text-[#60A5FA]">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Rahul Sharma"
                            className="w-full pl-8.5 pr-3 py-1.5 text-xs rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/50 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Phone & Email Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-medium text-slate-300 mb-0.5">
                            Phone / WhatsApp <span className="text-[#60A5FA]">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              className="w-full pl-8.5 pr-3 py-1.5 text-xs rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/50 transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-medium text-slate-300 mb-0.5">
                            Work Email
                          </label>
                          <div className="relative">
                            <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="name@company.com"
                              className="w-full pl-8.5 pr-3 py-1.5 text-xs rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/50 transition-colors"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Optional Note */}
                      <div>
                        <label className="block text-[10px] font-medium text-slate-300 mb-0.5">
                          Current Challenge or Goal <span className="text-slate-500 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="note"
                          value={formData.note}
                          onChange={handleChange}
                          placeholder="e.g. Scaling franchise, CAC reduction, CRM setup"
                          className="w-full px-3 py-1.5 text-xs rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/50 transition-colors"
                        />
                      </div>

                      {/* Error Banner */}
                      {errorMsg && (
                        <p className="text-[11px] text-rose-400 bg-rose-950/40 border border-rose-900/50 p-2 rounded-lg">
                          {errorMsg}
                        </p>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-1.5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#6366F1] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#93C5FD]/40 shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-150 active:scale-98 disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <span>Request Strategy Session</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      {/* Footer Info */}
                      <div className="pt-0.5 flex items-center justify-between text-[9.5px] text-slate-400">
                        <span className="inline-flex items-center gap-1 text-slate-500">
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          100% Confidential
                        </span>

                        <a
                          href={siteConfig.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-slate-300 hover:text-[#25D366] transition-colors"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>Or WhatsApp directly</span>
                        </a>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
