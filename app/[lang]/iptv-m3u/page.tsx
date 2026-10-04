import React from "react";
import type { Metadata } from "next";
import { seoPagesData } from "@/data/seo-pages";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContentSection from "@/components/content/ContentSection";
import CommercialBuyHub from "@/components/home/CommercialBuyHub";
import HomeFAQ from "@/components/home/HomeFAQ";
import CTASection from "@/components/content/CTASection";
import {
  SUPPORTED_LOCALES,
  getDictionary,
  DEFAULT_LOCALE,
  Locale,
} from "@/data/i18n";

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const pageData = dict.seoPages["iptv-m3u"] || seoPagesData["iptv-m3u"];

  return constructMetadata({
    locale: lang,
    slug: "iptv-m3u",
    title: pageData?.metaTitle || "IPTV M3U Playlist & Xtream Codes 2026",
    description: pageData?.metaDescription || dict.siteDescription,
    keywords: pageData?.keywords || dict.seoKeywords,
    canonicalUrl: `/${lang}/iptv-m3u`,
  });
}

export default async function LocalizedIptvM3uPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);
  const pageData = dict.seoPages["iptv-m3u"] || seoPagesData["iptv-m3u"];

  return (
    <div className="space-y-12">
      <Breadcrumbs
        items={[{ name: "M3U Playlist & Xtream Codes", url: `/${locale}/iptv-m3u` }]}
      />

      {pageData && (
        <ContentSection
          badge={pageData.badge}
          title={pageData.h1}
          description={pageData.intro}
          keyBenefits={pageData.keyBenefits}
          sections={pageData.sections}
        />
      )}

      <CommercialBuyHub locale={locale} />

      <HomeFAQ locale={locale} />

      <CTASection
        locale={locale}
        title={dict.hero.ctaPrimary}
        subtitle={dict.pricing.guaranteeText}
        primaryBtnText={dict.nav.testCta}
        primaryBtnHref={`/${locale}/iptv-test`}
        secondaryBtnText={dict.nav.buyCta}
        secondaryBtnHref={`/${locale}/iptv-kaufen`}
      />
    </div>
  );
}
