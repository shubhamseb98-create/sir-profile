/**
 * Analytics tracking helper for Dheeraj Aggarwal Website
 * Safe client-side event tracking for GA4 / custom analytics
 */

export const trackEvent = (action, category = "Engagement", label = "", value = 0) => {
  if (typeof window !== "undefined") {
    // Console log in development for immediate verification
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Event] ${category} -> ${action}: ${label} (${value})`);
    }

    if (window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }
};

export const trackStrategyCallClick = (source = "Header") => {
  trackEvent("click_strategy_call", "Conversion", source);
};

export const trackWhatsAppClick = (source = "FloatingButton") => {
  trackEvent("click_whatsapp", "Conversion", source);
};

export const trackProfileDownload = (profileType = "Professional") => {
  trackEvent("download_profile", "Lead Magnet", profileType);
};

export const trackFormSubmission = (enquiryType) => {
  trackEvent("submit_contact_form", "Lead", enquiryType);
};

export const trackVideoPlay = (videoTitle) => {
  trackEvent("play_testimonial_video", "Engagement", videoTitle);
};
