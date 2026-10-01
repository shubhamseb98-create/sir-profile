/**
 * Utility functions for Dheeraj Aggarwal Personal Brand & Business Platform
 */

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatNumber(num) {
  return new Intl.NumberFormat("en-IN").format(num);
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}
