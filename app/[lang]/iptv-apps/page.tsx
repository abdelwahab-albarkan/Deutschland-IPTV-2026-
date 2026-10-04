import React from "react";
import type { Metadata } from "next";
import { seoPagesData } from "@/data/seo-pages";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContentSection from "@/components/content/ContentSection";
import DeviceSupport from "@/components/home/DeviceSupport";
import CTASection from "@/components/content/CTASection";
import { Star } from "lucide-react";
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
  const pageData = dict.seoPages["iptv-apps"] || seoPagesData["iptv-apps"];

  return constructMetadata({
    locale: lang,
    slug: "iptv-apps",
    title: pageData?.metaTitle || "Beste IPTV Apps 2026",
    description: pageData?.metaDescription || dict.siteDescription,
    keywords: pageData?.keywords || dict.seoKeywords,
    canonicalUrl: `/${lang}/iptv-apps`,
  });
}

export default async function LocalizedIptvAppsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);
  const pageData = dict.seoPages["iptv-apps"] || seoPagesData["iptv-apps"];

  const popularApps = [
    {
      name: "TiviMate IPTV Player",
      rating: "4.9/5",
      badge: "Firestick & Android Top Choice",
      desc: "Advanced IPTV player app with modern EPG, multiview, catch-up, and ultra-fast zapping times.",
      supported: ["Amazon Fire TV Stick", "Android TV Box", "Nvidia Shield", "Google TV"],
    },
    {
      name: "IPTV Smarters Pro",
      rating: "4.8/5",
      badge: "Universal & User Friendly",
      desc: "Popular all-in-one player app for live TV and 4K VOD movies. Supports Xtream Codes API login.",
      supported: ["Samsung Smart TV", "LG webOS", "Android", "iOS / Apple TV", "Windows & Mac"],
    },
    {
      name: "IBO Player Pro",
      rating: "4.7/5",
      badge: "Smart TV Specialist",
      desc: "High performance on Samsung Tizen OS and LG webOS without needing an extra streaming stick.",
      supported: ["Samsung Smart TV", "LG Smart TV", "Firestick", "Apple TV"],
    },
    {
      name: "XCIPTV Player",
      rating: "4.7/5",
      badge: "Dual Player with ExoPlayer",
      desc: "Integrated dual player with ExoPlayer & VLC for maximum codec support and high stability.",
      supported: ["Android TV", "Fire TV Stick", "Android Smartphones"],
    },
  ];

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ name: dict.nav.apps, url: `/${locale}/iptv-apps` }]} />

      {pageData && (
        <ContentSection
          badge={pageData.badge}
          title={pageData.h1}
          description={pageData.intro}
          keyBenefits={pageData.keyBenefits}
          sections={pageData.sections}
        />
      )}

      {/* Featured Apps Showcase Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularApps.map((app, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0e101a] border border-purple-500/20 hover:border-primary-500/40 transition-all flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary-500/15 text-primary-300 font-bold border border-primary-500/30">
                      {app.badge}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{app.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {app.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {app.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-500/15 space-y-2 text-xs text-slate-400">
                  <div className="font-semibold text-slate-200">Compatible devices:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {app.supported.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#080910] text-slate-300 border border-purple-500/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Guides Hub */}
      <DeviceSupport locale={locale} />

      {/* CTA */}
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
