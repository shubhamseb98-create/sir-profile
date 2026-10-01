import { siteConfig } from "@/data/site";
import { caseStudies } from "@/data/caseStudies";
import { posts } from "@/data/posts";

export default function sitemap() {
  const baseUrl = siteConfig.domain;

  const staticRoutes = [
    "",
    "/about",
    "/consulting",
    "/digital-growth",
    "/leadership-ventures",
    "/karma-ayurveda",
    "/hhc",
    "/speaking",
    "/case-studies",
    "/insights",
    "/media",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...postRoutes];
}
