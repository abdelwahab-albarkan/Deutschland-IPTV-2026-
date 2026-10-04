import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import VodShowcase from "@/components/home/VodShowcase";
import ChannelCategories from "@/components/home/ChannelCategories";
import DeviceSupport from "@/components/home/DeviceSupport";
import CommercialBuyHub from "@/components/home/CommercialBuyHub";
import ProviderComparison from "@/components/home/ProviderComparison";
import CustomerReviews from "@/components/home/CustomerReviews";
import HomeFAQ from "@/components/home/HomeFAQ";
import CTASection from "@/components/content/CTASection";
import SeoPillarGuide from "@/components/home/SeoPillarGuide";
import { constructMetadata } from "@/lib/seo";
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
  return constructMetadata({
    locale: lang,
    title: dict.siteTitle,
    description: dict.siteDescription,
    keywords: dict.seoKeywords,
    canonicalUrl: `/${lang}`,
  });
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <Hero locale={locale} />

      {/* Pricing right after the hero so visitors see the plans first */}
      <CommercialBuyHub locale={locale} />

      {/* 2. Premium Core Features */}
      <Features locale={locale} />

      {/* 3. Live TMDB & OMDb VOD Mediathek */}
      <VodShowcase locale={locale} />

      {/* 4. Live Sport & German Channel Matrix */}
      <ChannelCategories locale={locale} />

      {/* 5. Device Support Ecosystem */}
      <DeviceSupport locale={locale} />

      {/* 7. Provider Comparison Table */}
      <ProviderComparison locale={locale} />

      {/* 8. Customer Reviews */}
      <CustomerReviews locale={locale} />

      {/* 9. Comprehensive FAQ Section */}
      <HomeFAQ locale={locale} />

      {/* 10. SEO Pillar Guide for DACH Search Engines */}
      {locale === "de" && <SeoPillarGuide />}

      {/* 11. Bottom High-Conversion CTA */}
      <CTASection
        locale={locale}
        title={dict.hero.ctaPrimary}
        subtitle={dict.pricing.guaranteeText}
        primaryBtnText={dict.hero.ctaPrimary}
        primaryBtnHref={`/${locale}/iptv-kaufen`}
        secondaryBtnText={dict.hero.ctaSecondary}
        secondaryBtnHref={`/${locale}/iptv-test`}
      />
    </div>
  );
}
