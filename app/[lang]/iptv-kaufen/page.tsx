import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContentSection from "@/components/content/ContentSection";
import CommercialBuyHub from "@/components/home/CommercialBuyHub";
import ProviderComparison from "@/components/home/ProviderComparison";
import CustomerReviews from "@/components/home/CustomerReviews";
import HomeFAQ from "@/components/home/HomeFAQ";
import CTASection from "@/components/content/CTASection";
import { constructMetadata } from "@/lib/seo";
import ProductSchema from "@/components/seo/ProductSchema";
import {
  SUPPORTED_LOCALES,
  getDictionary,
  DEFAULT_LOCALE,
  Locale,
} from "@/data/i18n";
import { seoPagesData } from "@/data/seo-pages";

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
  const pageData = dict.seoPages["iptv-kaufen"] || seoPagesData["iptv-kaufen"];

  return constructMetadata({
    locale: lang,
    slug: "iptv-kaufen",
    title: pageData.metaTitle,
    description: pageData.metaDescription,
    keywords: pageData.keywords,
    canonicalUrl: `/${lang}/iptv-kaufen`,
  });
}

export default async function LocalizedIptvKaufenPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);
  const pageData = dict.seoPages["iptv-kaufen"] || seoPagesData["iptv-kaufen"];

  return (
    <>
      <ProductSchema />
      <div className="space-y-12">
      <Breadcrumbs items={[{ name: dict.nav.buy, url: `/${locale}/iptv-kaufen` }]} />

      {/* Main Commercial Content Section */}
      <ContentSection
        badge={pageData.badge}
        title={pageData.h1}
        description={pageData.intro}
        keyBenefits={pageData.keyBenefits}
        sections={pageData.sections}
      />

      {/* Interactive Commercial Plan Hub */}
      <CommercialBuyHub locale={locale} />

      {/* Comparison against other providers */}
      <ProviderComparison locale={locale} />

      {/* Customer Reviews */}
      <CustomerReviews locale={locale} />

      {/* FAQs */}
      <HomeFAQ locale={locale} />

      {/* Bottom CTA */}
      <CTASection
        locale={locale}
        title={dict.hero.ctaPrimary}
        subtitle={dict.pricing.guaranteeText}
        primaryBtnText={dict.hero.ctaPrimary}
        primaryBtnHref="#kaufen-hub"
        secondaryBtnText={dict.hero.ctaSecondary}
        secondaryBtnHref={`/${locale}/iptv-test`}
      />
    </div>
    </>
  );
}
