/**
 * Central SEO config – base URL and default OG image for metadata.
 *
 * siteUrl: B2B site only (brands.toycycle.co). Use for ALL canonicals,
 * sitemap, robots, openGraph.url, and metadataBase. Never point these at mainBrandUrl.
 *
 * mainBrandUrl: Consumer site (https://toycycle.co). Use ONLY in JSON-LD
 * (Organization.url, sameAs, WebSite.publisher) so the main site is not affected
 * and search engines see one primary brand URL across both sites.
 */
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://brands.toycycle.co";
export const siteUrl = base.startsWith("http") ? base : `https://${base}`;
export const mainBrandUrl = "https://toycycle.co";
export const defaultOgImage = `${siteUrl}/images/partners/Hero_Home.webp`;
