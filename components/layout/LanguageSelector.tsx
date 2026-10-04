"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";
import { SUPPORTED_LOCALES, LOCALES_INFO, Locale } from "@/data/i18n/types";
import { getLocaleInfo, getLocalizedUrl } from "@/data/i18n/locales";
import type { NavbarUi } from "./NavbarClient";
import FlagIcon from "@/components/ui/FlagIcon";

export interface LanguageSelectorProps {
  variant?: "navbar" | "mobile" | "footer";
  currentLocale?: string;
  /** Called right after a language was chosen (e.g. to close the mobile drawer). */
  onNavigate?: () => void;
  ui: Pick<NavbarUi, "selectLanguage" | "languageHeading" | "languages">;
}

export default function LanguageSelector({
  variant = "navbar",
  currentLocale,
  onNavigate,
  ui,
}: LanguageSelectorProps) {
  const pathname = usePathname() || "/de";
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  const pathLocale = pathname.split("/").filter(Boolean)[0];
  const detectedLocale = (
    SUPPORTED_LOCALES.includes(pathLocale as Locale) ? pathLocale : currentLocale || "de"
  ) as Locale;

  const currentInfo = getLocaleInfo(detectedLocale);

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const changeLanguage = (newLocale: Locale) => {
    setIsOpen(false);
    if (newLocale !== detectedLocale) {
      router.push(getLocalizedUrl(pathname, newLocale));
    }
    onNavigate?.();
  };

  if (variant === "mobile") {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
          <Globe className="w-4 h-4 text-primary-400" aria-hidden="true" />
          <span>{ui.languageHeading}</span>
        </div>
        <div className="grid grid-cols-2 gap-2" role="group" aria-label={ui.selectLanguage}>
          {SUPPORTED_LOCALES.map((code) => {
            const info = LOCALES_INFO[code];
            const isSelected = detectedLocale === code;
            return (
              <button
                key={code}
                type="button"
                lang={code}
                onClick={() => changeLanguage(code)}
                aria-current={isSelected ? "true" : undefined}
                className={`flex items-center gap-2 px-3 min-h-[44px] rounded-xl text-sm font-medium transition-colors border ${
                  isSelected
                    ? "bg-primary-500/20 text-white border-primary-500/50 font-bold"
                    : "bg-[#080910] text-slate-200 hover:text-white border-purple-500/15 hover:border-purple-500/40"
                }`}
              >
                <FlagIcon code={info.code} className="w-7 h-[18px]" />
                <span className="truncate">{info.nativeName}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-primary-400 ms-auto shrink-0" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className={`flex items-center gap-1.5 rounded-xl transition-colors border ${
          variant === "footer"
            ? "px-3 min-h-[40px] text-xs text-slate-200 bg-[#080910] border-purple-500/25 hover:border-purple-500/50"
            : "px-2.5 sm:px-3 min-h-[44px] text-sm font-semibold text-slate-200 hover:text-white bg-[#0e101a] hover:bg-[#171a2e] border-purple-500/25"
        }`}
        aria-label={`${ui.selectLanguage}: ${currentInfo.nativeName}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={listId}
      >
        <FlagIcon code={currentInfo.code} className="w-6 h-4" />
        <span className="font-bold uppercase tracking-wider text-xs text-primary-300">
          {currentInfo.code}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          id={listId}
          className={`absolute end-0 w-64 max-w-[calc(100vw-2rem)] rounded-2xl bg-[#0e101a] border border-purple-500/30 shadow-2xl p-2 z-50 animate-fadeIn ${
            variant === "footer" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <div className="px-3 py-2 border-b border-purple-500/15 mb-1 flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
              <Globe className="w-3.5 h-3.5 text-primary-400" aria-hidden="true" />
              {ui.languageHeading}
            </span>
            <span className="text-[11px] text-primary-300 font-mono whitespace-nowrap shrink-0">
              {SUPPORTED_LOCALES.length} {ui.languages}
            </span>
          </div>

          <ul className="max-h-72 overflow-y-auto space-y-1 custom-scrollbar">
            {SUPPORTED_LOCALES.map((code) => {
              const info = LOCALES_INFO[code];
              const isSelected = detectedLocale === code;
              return (
                <li key={code}>
                  <button
                    type="button"
                    lang={code}
                    onClick={() => changeLanguage(code)}
                    aria-current={isSelected ? "true" : undefined}
                    className={`w-full flex items-center justify-between gap-3 px-3 min-h-[44px] rounded-xl text-sm text-start transition-colors border ${
                      isSelected
                        ? "bg-primary-500/20 text-white font-bold border-primary-500/40"
                        : "text-slate-200 hover:text-white hover:bg-[#171a2e] border-transparent"
                    }`}
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      <FlagIcon code={info.code} className="w-7 h-[18px]" />
                      <span className="truncate font-semibold">{info.nativeName}</span>
                    </span>
                    {isSelected && <Check className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
