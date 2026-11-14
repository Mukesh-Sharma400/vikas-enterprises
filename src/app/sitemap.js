import { business, routes } from "@/app/data/site";

// Generated at build time, so `lastModified` reflects the latest deploy.
export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${business.siteUrl}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.path === "/" ? 1 : 0.8,
  }));
}
