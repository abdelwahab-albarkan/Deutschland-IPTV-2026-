import React from "react";
import { siteConfig } from "@/lib/site";
import JsonLd from "./JsonLd";

export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: ["4K Anbieter IPTV", "4kanbieteriptv.de", "IPTV Anbieter 4K", "Deutschland IPTV"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-iptvanbieter4k.png`,
    image: `${siteConfig.url}/images/logo-iptvanbieter4k.png`,
    description: siteConfig.description,
    email: siteConfig.support.email,
    telephone: siteConfig.support.whatsapp,
    priceRange: "€€",
    currenciesAccepted: "EUR, USD, CHF, GBP",
    paymentAccepted: "Credit Card, PayPal, Revolut, Giropay, Sofortüberweisung, Paysafecard, Cryptocurrency",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.support.whatsapp,
        contactType: "customer support",
        email: siteConfig.support.email,
        areaServed: ["DE", "AT", "CH", "EU"],
        availableLanguage: ["German", "English", "French", "Arabic", "Turkish"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
  };

  return <JsonLd data={schemaData} />;
}
