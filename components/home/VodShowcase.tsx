import React from "react";
import { getDictionary, DEFAULT_LOCALE } from "@/data/i18n";
import { getTrendingAll, fallbackVodList } from "@/lib/tmdb";
import VodShowcaseClient from "./VodShowcaseClient";

export default async function VodShowcase({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const d = getDictionary(locale);

  // Fetched on the server (cached via fetch revalidate) instead of on every page view in the browser
  let initialItems = fallbackVodList;
  try {
    const trending = await getTrendingAll();
    if (Array.isArray(trending) && trending.length > 0) initialItems = trending;
  } catch {
    /* offline fallback */
  }

  return (
    <VodShowcaseClient
      locale={locale}
      dict={{ vod: d.vod, hero: { ctaSecondary: d.hero.ctaSecondary, description: d.hero.description } }}
      initialItems={initialItems}
    />
  );
}