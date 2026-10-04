import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContentSection from "@/components/content/ContentSection";
import TrialSection from "@/components/home/TrialSection";
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
  const pageData = dict.seoPages["iptv-test"] || seoPagesData["iptv-test"];

  return constructMetadata({
    locale: lang,
    slug: "iptv-test",
    title: pageData.metaTitle,
    description: pageData.metaDescription,
    keywords: pageData.keywords,
    canonicalUrl: `/${lang}/iptv-test`,
  });
}

export default async function LocalizedIptvTestPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);
  const pageData = dict.seoPages["iptv-test"] || seoPagesData["iptv-test"];

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ name: dict.nav.test, url: `/${locale}/iptv-test` }]} />

      <ContentSection
        badge={pageData.badge}
        title={pageData.h1}
        description={pageData.intro}
        keyBenefits={pageData.keyBenefits}
        sections={pageData.sections}
      />

      <TrialSection locale={locale} />

      <CustomerReviews locale={locale} />

      <HomeFAQ locale={locale} />
    </div>
  );
}
