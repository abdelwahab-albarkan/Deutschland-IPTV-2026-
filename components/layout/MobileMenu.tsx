"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ShieldCheck, Zap, MessageCircle, Sparkles } from "lucide-react";
import type { NavLink } from "@/lib/navigation";
import type { NavbarUi, NavbarText } from "./NavbarClient";
import { buttonClasses } from "@/components/ui/Button";
import { navBadgeClass } from "./navBadge";
import LanguageSelector from "./LanguageSelector";

interface MobileMenuProps {
  onClose: () => void;
  locale: string;
  siteName: string;
  links: NavLink[];
  whatsappUrl: string;
  ui: NavbarUi;
  nav: NavbarText;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileMenu({ onClose, locale, siteName, links: navLinks, whatsappUrl, ui, nav: dictNav }: MobileMenuProps) {
  const pathname = usePathname() || `/${locale}`;
  const panelRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Close whenever the route changes (e.g. after tapping a link)
  const openedAt = useRef(pathname);
  useEffect(() => {
    if (pathname !== openedAt.current) onCloseRef.current();
  }, [pathname]);

  // Scroll lock, Escape to close, simple focus trap, restore focus on close
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  const detectedLocale = locale;

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-50 xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={ui.mainNav}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={panelRef}
        className="fixed inset-y-0 end-0 w-full max-w-sm bg-[#0c0e18] border-s border-purple-500/20 shadow-2xl p-5 sm:p-6 flex flex-col overflow-y-auto overscroll-contain animate-fadeIn"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-purple-500/15">
          <Link
            href={`/${detectedLocale}`}
            onClick={onClose}
            className="flex items-center gap-2 text-lg font-black text-white tracking-tight font-display rounded-xl"
          >
            <Image
              src="/images/logo-iptvanbieter4k.png"
              alt="4KAnbieterIPTV.de"
              width={2172}
              height={724}
              sizes="(min-width: 640px) 180px, 150px"
              
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-slate-300 hover:text-white hover:bg-surface-elevated transition-colors border border-purple-500/25"
            aria-label={ui.closeMenu}
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Primary CTAs first: they are the next step for most visitors */}
        <div className="grid grid-cols-2 gap-2.5 mt-5">
          <Link
            href={`/${detectedLocale}/iptv-kaufen`}
            onClick={onClose}
            className={buttonClasses("primary", "md", "px-3")}
          >
            {dictNav.buyCta}
          </Link>
          <Link
            href={`/${detectedLocale}/iptv-test`}
            onClick={onClose}
            className={buttonClasses("secondary", "md", "px-3")}
          >
            <Sparkles className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
            <span>{dictNav.testCta}</span>
          </Link>
        </div>

        {/* Links */}
        <nav aria-label={ui.mainNav} className="mt-5 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive =
              !link.href.includes("#") && (pathname === link.href || pathname === `${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center justify-between gap-3 px-4 min-h-[48px] rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "bg-primary-500/15 text-primary-300 border border-primary-500/30 font-semibold"
                    : "text-slate-200 hover:text-white hover:bg-surface-elevated border border-transparent"
                }`}
              >
                <span>{link.title}</span>
                {link.badge && (
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border ${
                      navBadgeClass[link.badgeTone || "default"]
                    }`}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Language Selector */}
        <div className="mt-6 pt-6 border-t border-purple-500/15">
          <LanguageSelector variant="mobile" currentLocale={detectedLocale} onNavigate={onClose} ui={ui} />
        </div>

        {/* Quick Info + Support */}
        <div className="mt-auto pt-6">
          <div className="mt-6 pt-6 border-t border-purple-500/15 space-y-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
              <span>{dictNav.serverStatus}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
              <span>{dictNav.moneyBackBadge}</span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("whatsapp", "md", "w-full mt-5")}
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>{dictNav.support247}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
