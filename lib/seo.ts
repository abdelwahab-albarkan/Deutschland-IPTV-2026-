import { Metadata } from "next";
import { siteConfig } from "./site";
import {
  Locale,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  LOCALES_INFO,
  getLocaleInfo,
} from "@/data/i18n";

export interface GenerateMetadataProps {
  locale?: string;
  slug?: string;
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

export function constructMetadata({
  locale = DEFAULT_LOCALE,
  slug = "",
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = "/images/og/default-og.jpg",
}: GenerateMetadataProps): Metadata {
  const locInfo = getLocaleInfo(locale);
  // Append the brand only when it is not already in the title and the result stays SERP-friendly
  const brandSuffix = ` | ${siteConfig.name}`;
  const hasBrand = title.toLowerCase().includes(siteConfig.name.toLowerCase());
  const fullTitle = hasBrand || (title + brandSuffix).length > 60 ? title : `${title}${brandSuffix}`;

  // Clean slug
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  const pathPart = cleanSlug ? `/${cleanSlug}` : "";

  const canonical = canonicalUrl
    ? `${siteConfig.url}${canonicalUrl.startsWith("/") ? canonicalUrl : `/${canonicalUrl}`}`
    : `${siteConfig.url}/${locInfo.code}${pathPart}`;

  // Build hreflang alternates for all supported languages + x-default
  const hreflangLanguages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    hreflangLanguages[loc] = `${siteConfig.url}/${loc}${pathPart}`;
  }
  hreflangLanguages["x-default"] = `${siteConfig.url}/de${pathPart}`;

  return {
    title: fullTitle,
    description: description,
    keywords: keywords.length > 0 ? keywords : [
      "IPTV Deutschland",
      "IPTV kaufen",
      "IPTV Test 24h",
      "IPTV Smart TV",
      "IPTV Firestick",
      "IPTV M3U",
      "Bester IPTV Anbieter",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical,
      languages: hreflangLanguages,
    },
    openGraph: {
      type: "website",
      locale: locInfo.ogLocale,
      url: canonical,
      title: fullTitle,
      description: description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${siteConfig.url}${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description,
      images: [ogImage.startsWith("http") ? ogImage : `${siteConfig.url}${ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
