import { business } from "@/app/data/site";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${business.siteUrl}/sitemap.xml`,
  };
}
