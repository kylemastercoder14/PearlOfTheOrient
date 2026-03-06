import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL ?? "https://pearlchaplaincy.org";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
