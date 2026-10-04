import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContentSection from "@/components/content/ContentSection";
import CommercialBuyHub from "@/components/home/CommercialBuyHub";
import PaymentMethods from "@/components/pricing/PaymentMethods";
import CustomerReviews from "@/components/home/CustomerReviews";
import HomeFAQ from "@/components/home/HomeFAQ";
import { constructMetadata } from "@/lib/seo";
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
  const pageData = dict.seoPages["preise"] || seoPagesData["preise"] || seoPagesData["iptv-kaufen"];

  return constructMetadata({
    locale: lang,
    slug: "preise",
    title: pageData?.metaTitle || "IPTV Preise & Jahresabo 2026",
    description: pageData?.metaDescription || dict.siteDescription,
    keywords: pageData?.keywords || dict.seoKeywords,
    canonicalUrl: `/${lang}/preise`,
  });
}

export default async function LocalizedPreisePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);
  const pageData = dict.seoPages["preise"] || seoPagesData["preise"] || seoPagesData["iptv-kaufen"];

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ name: dict.nav.pricing, url: `/${locale}/preise` }]} />

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

      <PaymentMethods />

      <CustomerReviews locale={locale} />

      <HomeFAQ locale={locale} />
    </div>
  );
}
