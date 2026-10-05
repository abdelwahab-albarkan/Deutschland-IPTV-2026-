import React from "react";
import { siteConfig } from "@/lib/site";
import JsonLd from "./JsonLd";

export default function WebSiteSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: ["4K Anbieter IPTV", "4kanbieteriptv.de", "IPTV Anbieter 4K", "Deutschland IPTV"],
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["de", "en", "fr", "es", "it", "pt", "nl", "pl", "tr", "sq", "ar"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/de?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={schemaData} />;
}
