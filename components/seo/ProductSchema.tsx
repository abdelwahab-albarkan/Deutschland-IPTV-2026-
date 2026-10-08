import React from "react";
import JsonLd from "./JsonLd";
import { siteConfig } from "@/lib/site";

export default function ProductSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${siteConfig.url}/#product`,
        name: "IPTV Anbieter 4K Deutschland – Premium Abonnement",
        image: `${siteConfig.url}/images/og/default-og.jpg`,
        description:
          "Premium IPTV Abonnement in Deutschland mit über 24.000 Live-Sendern, Sky Sport Bundesliga in nativem 4K/60FPS, DAZN, Formel 1 und 120.000+ VOD Filmen & Serien mit Anti-Freeze 9.3 Technologie.",
        brand: {
          "@type": "Brand",
          name: siteConfig.name,
        },
        sku: "IPTV-4K-DE-PREMIUM",
        mpn: "IPTV-DE-4K-2026",
        offers: {
          "@type": "AggregateOffer",
          url: `${siteConfig.url}/preise`,
          priceCurrency: "EUR",
          lowPrice: "14.99",
          highPrice: "109.99",
          offerCount: "5",
          priceValidUntil: "2027-12-31",
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: ["DE", "AT", "CH"],
            returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 7,
            returnMethod: "https://schema.org/ReturnByMail",
            returnFees: "https://schema.org/FreeReturn",
          },
        },
      },
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/#service`,
        name: "IPTV 4K Streaming Dienst Deutschland",
        serviceType: "Internet Protocol Television (IPTV)",
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Germany",
          },
          {
            "@type": "Country",
            name: "Austria",
          },
          {
            "@type": "Country",
            name: "Switzerland",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "IPTV Abonnements",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "1 Monat IPTV Premium",
              },
              price: "14.99",
              priceCurrency: "EUR",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "12 Monate IPTV Bestseller",
              },
              price: "69.99",
              priceCurrency: "EUR",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "24 Monate IPTV Ultimate (2 Geräte)",
              },
              price: "109.99",
              priceCurrency: "EUR",
            },
          ],
        },
      },
    ],
  };

  return <JsonLd data={schemaData} />;
}
