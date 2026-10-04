import React from "react";
import type { Metadata } from "next";
import { seoPagesData } from "@/data/seo-pages";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContentSection from "@/components/content/ContentSection";
import TroubleshootingSection from "@/components/home/TroubleshootingSection";
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
  const pageData = dict.seoPages["iptv-funktioniert-nicht"] || seoPagesData["iptv-funktioniert-nicht"];

  return constructMetadata({
    locale: lang,
    slug: "iptv-funktioniert-nicht",
    title: pageData?.metaTitle || "IPTV Funktioniert Nicht & Ruckelt? Soforthilfe 2026",
    description: pageData?.metaDescription || dict.siteDescription,
    keywords: pageData?.keywords || dict.seoKeywords,
    canonicalUrl: `/${lang}/iptv-funktioniert-nicht`,
  });
}

export default async function LocalizedIptvTroubleshootingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);
  const pageData = dict.seoPages["iptv-funktioniert-nicht"] || seoPagesData["iptv-funktioniert-nicht"];

  return (
    <div className="space-y-12">
      <Breadcrumbs
        items={[{ name: "IPTV Troubleshooting & Hilfe", url: `/${locale}/iptv-funktioniert-nicht` }]}
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

      <TroubleshootingSection locale={locale} />

      <HomeFAQ locale={locale} />

      <CTASection
        locale={locale}
        title="Genug von Rucklern & Ausfällen?"
        subtitle="Wechseln Sie jetzt zu unseren stabilen Anti-Freeze 9.3 Servern in Frankfurt."
        primaryBtnText="24h Testline anfordern"
        primaryBtnHref={`/${locale}/iptv-test`}
        secondaryBtnText="IPTV Pakete wählen"
        secondaryBtnHref={`/${locale}/preise`}
      />
    </div>
  );
}
