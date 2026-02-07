import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

/**
 * robots.txt: allow all crawlers (including Googlebot) on the site and sitemap.
 * Only /api/ is disallowed. Do not add Disallow: / or Disallow: /sitemap.xml.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
