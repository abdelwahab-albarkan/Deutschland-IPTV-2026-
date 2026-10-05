"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, MessageCircle, ShieldCheck } from "lucide-react";
import type { NavLink } from "@/lib/navigation";
import { buttonClasses } from "@/components/ui/Button";
import { navBadgeClass } from "./navBadge";
import MobileMenu from "./MobileMenu";
import LanguageSelector from "./LanguageSelector";

export interface NavbarUi {
  mainNav: string;
  openMenu: string;
  closeMenu: string;
  selectLanguage: string;
  languageHeading: string;
  languages: string;
}
export interface NavbarText {
  serverStatus: string;
  moneyBackBadge: string;
  instantActivation: string;
  support247: string;
  testCta: string;
  buyCta: string;
}

interface Props {
  locale: string;
  siteName: string;
  links: NavLink[];
  whatsappUrl: string;
  ui: NavbarUi;
  nav: NavbarText;
}

export default function NavbarClient({ locale, siteName, links, whatsappUrl, ui, nav }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || `/${locale}`;

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setIsScrolled(window.scrollY > 20);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLinks = links.filter(
    (l) =>
      l.href !== `/${locale}` &&
      !l.href.includes("#") &&
      // buy + trial are already the two CTA buttons; devices live in the menu/footer
      !/\/(iptv-kaufen|iptv-test|iptv-installieren)$/.test(l.href)
  );

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-surface-card via-purple-950/40 to-surface-card border-b border-purple-500/10 py-2 px-4 text-xs text-slate-300">
        <div className="container mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-2 min-w-0">
            <span className="relative flex w-2 h-2 shrink-0" aria-hidden="true">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            <span className="truncate">{nav.serverStatus}</span>
          </div>

          <div className="flex items-center justify-center gap-4 mx-auto md:mx-0">
            <span className="flex items-center gap-1.5 text-primary-300 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />
              <span>{nav.moneyBackBadge}</span>
            </span>
            <span className="hidden lg:inline text-slate-400" aria-hidden="true">|</span>
            <span className="hidden lg:inline text-slate-300">{nav.instantActivation}</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-primary-300 hover:text-primary-200 transition-colors font-semibold shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-primary-400" aria-hidden="true" />
            <span>{nav.support247}</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#06070a]/90 backdrop-blur-xl border-b border-purple-500/20 shadow-xl shadow-black/60 py-1.5 sm:py-2"
            : "bg-[#06070a]/80 backdrop-blur-md border-b border-white/5 py-2 sm:py-2.5"
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between gap-3">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 sm:gap-2.5 group shrink-0 rounded-xl"
            aria-label={siteName}
          >
            <Image
              src="/images/logo-iptvanbieter4k.png"
              alt="4KAnbieterIPTV.de"
              width={2172}
              height={724}
              sizes="(min-width: 640px) 220px, 160px"
              priority
              className="h-10 sm:h-14 w-auto max-w-none object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.35)] group-hover:scale-[1.03] transition-transform"
            />
          </Link>

          <nav aria-label={ui.mainNav} className="hidden xl:flex items-center gap-1">
            {desktopLinks.map((link) => {
              const isActive = pathname === link.href || pathname === `${link.href}/`;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? "text-primary-300 bg-primary-500/10 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.title}</span>
                  {link.badge && (
                    <span
                      className={`text-[11px] leading-4 px-1.5 rounded-full font-bold uppercase tracking-wider border ${
                        navBadgeClass[link.badgeTone || "default"]
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-primary-400 to-mauve-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelector variant="navbar" currentLocale={locale} ui={ui} />

            <Link
              href={`/${locale}/iptv-test`}
              className={buttonClasses("secondary", "sm", "hidden sm:inline-flex whitespace-nowrap")}
            >
              <Sparkles className="w-4 h-4 text-primary-400" aria-hidden="true" />
              <span>{nav.testCta}</span>
            </Link>

            <Link
              href={`/${locale}/iptv-kaufen`}
              className={buttonClasses("primary", "sm", "hidden md:inline-flex whitespace-nowrap")}
            >
              {nav.buyCta}
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl xl:hidden text-slate-200 hover:text-white hover:bg-surface-elevated transition-colors border border-purple-500/25"
              aria-label={ui.openMenu}
              aria-haspopup="dialog"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <MobileMenu
          onClose={() => setMobileMenuOpen(false)}
          locale={locale}
          siteName={siteName}
          links={links}
          whatsappUrl={whatsappUrl}
          ui={ui}
          nav={nav}
        />
      )}
    </>
  );
}
