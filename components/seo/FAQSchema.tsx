import React from "react";
import { FAQItemType } from "@/types/faq";
import JsonLd from "./JsonLd";

interface FAQSchemaProps {
  faqs: FAQItemType[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={schemaData} />;
}
