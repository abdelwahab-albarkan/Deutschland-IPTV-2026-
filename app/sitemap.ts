import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { SUPPORTED_LOCALES } from "@/data/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url || "https://4kanbieteriptv.de";
  const now = new Date().toISOString();

  const baseRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/iptv-kaufen", priority: 0.95, changeFrequency: "daily" as const },
    { path: "/iptv-test", priority: 0.95, changeFrequency: "daily" as const },
    { path: "/preise", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/iptv-anbieter", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/iptv-bundesliga", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/iptv-sport", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/iptv-deutschland", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/iptv-apps", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/iptv-installieren", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/iptv-fire-tv", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/iptv-samsung", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/iptv-m3u", priority: 0.75, changeFrequency: "weekly" as const },
    { path: "/iptv-kodi", priority: 0.75, changeFrequency: "weekly" as const },
    { path: "/iptv-funktioniert-nicht", priority: 0.75, changeFrequency: "weekly" as const },
    { path: "/iptv-reseller", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/impressum", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/datenschutz", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/agb", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/widerruf", priority: 0.3, changeFrequency: "monthly" as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of SUPPORTED_LOCALES) {
    for (const route of baseRoutes) {
      const isPrimaryGerman = locale === "de";
      const adjustedPriority = isPrimaryGerman
        ? route.priority
        : Math.max(0.4, Number((route.priority * 0.9).toFixed(2)));

      const languagesMap: Record<string, string> = {};
      for (const loc of SUPPORTED_LOCALES) {
        languagesMap[loc] = `${baseUrl}/${loc}${route.path}`;
      }
      languagesMap["x-default"] = `${baseUrl}/de${route.path}`;

      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: adjustedPriority,
        alternates: {
          languages: languagesMap,
        },
      });
    }
  }

  return sitemapEntries;
}

