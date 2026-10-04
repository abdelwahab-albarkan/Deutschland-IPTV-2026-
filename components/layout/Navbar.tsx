import React from "react";
import { getLocalizedHeaderNavLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { createWhatsAppLink } from "@/lib/utils";
import { getUiText } from "@/lib/ui-text";
import { getDictionary, DEFAULT_LOCALE } from "@/data/i18n";
import NavbarClient from "./NavbarClient";

/**
 * Server component: resolves dictionaries/links on the server so the client
 * bundle only receives the few strings it needs (not every language).
 */
export default function Navbar({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const dict = getDictionary(locale);
  const ui = getUiText(locale);
  const links = getLocalizedHeaderNavLinks(locale);
  const whatsappUrl = createWhatsAppLink(siteConfig.support.whatsapp, dict.whatsappGreeting);

  return (
    <NavbarClient
      locale={locale}
      siteName={siteConfig.name}
      links={links}
      whatsappUrl={whatsappUrl}
      ui={{
        mainNav: ui.mainNav,
        openMenu: ui.openMenu,
        closeMenu: ui.closeMenu,
        selectLanguage: ui.selectLanguage,
        languageHeading: ui.languageHeading,
        languages: ui.languages,
      }}
      nav={{
        serverStatus: dict.nav.serverStatus,
        moneyBackBadge: dict.nav.moneyBackBadge,
        instantActivation: dict.nav.instantActivation,
        support247: dict.nav.support247,
        testCta: dict.nav.testCta,
        buyCta: dict.nav.buyCta,
      }}
    />
  );
}
