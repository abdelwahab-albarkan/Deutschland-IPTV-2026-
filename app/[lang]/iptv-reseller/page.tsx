import React from "react";
import type { Metadata } from "next";
import { seoPagesData } from "@/data/seo-pages";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContentSection from "@/components/content/ContentSection";
import ResellerSection from "@/components/home/ResellerSection";
import ResellerPricing from "@/components/reseller/ResellerPricing";
import { siteConfig } from "@/lib/site";
import { createWhatsAppLink } from "@/lib/utils";
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
  const pageData = dict.seoPages["iptv-reseller"] || seoPagesData["iptv-reseller"];

  return constructMetadata({
    locale: lang,
    slug: "iptv-reseller",
    title: pageData?.metaTitle || "IPTV Reseller Panel Deutschland 2026",
    description: pageData?.metaDescription || dict.siteDescription,
    keywords: pageData?.keywords || dict.seoKeywords,
    canonicalUrl: `/${lang}/iptv-reseller`,
  });
}

export default async function LocalizedIptvResellerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);
  const pageData = dict.seoPages["iptv-reseller"] || seoPagesData["iptv-reseller"];

  return (
    <div className="space-y-12">
      <Breadcrumbs
        items={[{ name: dict.nav.reseller, url: `/${locale}/iptv-reseller` }]}
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

      <ResellerSection locale={locale} />

      <ResellerPricing locale={locale} />

      <HomeFAQ locale={locale} />

      <CTASection
        title="Jetzt eigenes IPTV Reseller Geschäft starten"
        subtitle="Sofortige Panel-Freischaltung & persönlicher VIP-Support für Ihren Erfolg."
        primaryBtnText="Reseller Panel anfragen"
        primaryBtnHref={createWhatsAppLink(
          siteConfig.support.whatsapp,
          "Hallo! Ich interessiere mich für das IPTV Reseller Panel und möchte Preise und Credits anfragen."
        )}
        secondaryBtnText={dict.nav.pricing}
        secondaryBtnHref={`/${locale}/preise`}
        locale={locale}
      />
    </div>
  );
}
