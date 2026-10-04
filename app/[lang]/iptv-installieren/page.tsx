import React from "react";
import type { Metadata } from "next";
import { seoPagesData } from "@/data/seo-pages";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContentSection from "@/components/content/ContentSection";
import FireTV from "@/components/devices/FireTV";
import SmartTV from "@/components/devices/SmartTV";
import Android from "@/components/devices/Android";
import AppleTV from "@/components/devices/AppleTV";
import Receiver from "@/components/devices/Receiver";
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
  const pageData = dict.seoPages["iptv-installieren"] || seoPagesData["iptv-installieren"];

  return constructMetadata({
    locale: lang,
    slug: "iptv-installieren",
    title: pageData?.metaTitle || "IPTV Installieren & Einrichten 2026",
    description: pageData?.metaDescription || dict.siteDescription,
    keywords: pageData?.keywords || dict.seoKeywords,
    canonicalUrl: `/${lang}/iptv-installieren`,
  });
}

export default async function LocalizedIptvInstallierenPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);
  const pageData = dict.seoPages["iptv-installieren"] || seoPagesData["iptv-installieren"];

  return (
    <div className="space-y-12">
      <Breadcrumbs
        items={[{ name: dict.nav.devices, url: `/${locale}/iptv-installieren` }]}
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

      {/* Device Tutorials List */}
      <section className="py-6">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <FireTV />
          <SmartTV />
          <Android />
          <AppleTV />
          <Receiver />
        </div>
      </section>

      {/* Bottom CTA */}
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
