import React from "react";
import type { Metadata } from "next";
import { seoPagesData } from "@/data/seo-pages";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContentSection from "@/components/content/ContentSection";
import ProviderComparison from "@/components/home/ProviderComparison";
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
  const pageData = dict.seoPages["iptv-anbieter"] || seoPagesData["iptv-anbieter"];

  return constructMetadata({
    locale: lang,
    slug: "iptv-anbieter",
    title: pageData?.metaTitle || "Bester IPTV Anbieter 2026",
    description: pageData?.metaDescription || dict.siteDescription,
    keywords: pageData?.keywords || dict.seoKeywords,
    canonicalUrl: `/${lang}/iptv-anbieter`,
  });
}

export default async function LocalizedIptvAnbieterPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);
  const pageData = dict.seoPages["iptv-anbieter"] || seoPagesData["iptv-anbieter"];

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ name: pageData?.h1 || "IPTV Anbieter", url: `/${locale}/iptv-anbieter` }]} />

      {pageData && (
        <ContentSection
          badge={pageData.badge}
          title={pageData.h1}
          description={pageData.intro}
          keyBenefits={pageData.keyBenefits}
          sections={pageData.sections}
        />
      )}

      <ProviderComparison locale={locale} />

      <CommercialBuyHub locale={locale} />

      <HomeFAQ locale={locale} />

      <CTASection
        locale={locale}
        title={dict.hero.ctaPrimary}
        subtitle={dict.pricing.guaranteeText}
        primaryBtnText={dict.nav.testCta}
        primaryBtnHref={`/${locale}/iptv-test`}
        secondaryBtnText={dict.nav.pricing}
        secondaryBtnHref={`/${locale}/preise`}
      />
    </div>
  );
}
