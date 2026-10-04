import React from "react";
import { getDictionary, DEFAULT_LOCALE } from "@/data/i18n";
import ChannelCategoriesClient from "./ChannelCategoriesClient";

export default function ChannelCategories({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const d = getDictionary(locale);
  return (
    <ChannelCategoriesClient
      locale={locale}
      dict={{
        channels: d.channels,
        nav: { testCta: d.nav.testCta, sports: d.nav.sports, channels: d.nav.channels },
      }}
    />
  );
}