import React from "react";

/**
 * Small inline SVG flags. Emoji flags do not render on Windows, so the
 * language switcher draws its own (simplified) flags instead.
 */
const flags: Record<string, React.ReactNode> = {
  de: (
    <>
      <rect width="30" height="7" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
      <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
    </>
  ),
  en: (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0l30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0l30 20M30 0L0 20" stroke="#C8102E" strokeWidth="1.6" />
      <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0v20M0 10h30" stroke="#C8102E" strokeWidth="3.4" />
    </>
  ),
  fr: (
    <>
      <rect width="10" height="20" fill="#0055A4" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#EF4135" />
    </>
  ),
  es: (
    <>
      <rect width="30" height="20" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
    </>
  ),
  it: (
    <>
      <rect width="10" height="20" fill="#009246" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#CE2B37" />
    </>
  ),
  pt: (
    <>
      <rect width="12" height="20" fill="#006600" />
      <rect x="12" width="18" height="20" fill="#FF0000" />
      <circle cx="12" cy="10" r="4" fill="#FFCC00" />
      <circle cx="12" cy="10" r="2.2" fill="#FF0000" />
    </>
  ),
  nl: (
    <>
      <rect width="30" height="7" fill="#AE1C28" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#21468B" />
    </>
  ),
  pl: (
    <>
      <rect width="30" height="10" fill="#fff" />
      <rect y="10" width="30" height="10" fill="#DC143C" />
    </>
  ),
  tr: (
    <>
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11.5" cy="10" r="5" fill="#fff" />
      <circle cx="13" cy="10" r="4" fill="#E30A17" />
      <path d="M19.2 10l-2.6.9 1.6-2.2v2.6l-1.6-2.2z" fill="#fff" />
    </>
  ),
  sq: (
    <>
      <rect width="30" height="20" fill="#E41E20" />
      <path
        d="M15 4.5l1.6 1.2 2-.4-.6 1.9 1.4 1.4-1.5.5.2 1.8-1.7-.9-1.4 1.4-1.4-1.4-1.7.9.2-1.8-1.5-.5 1.4-1.4-.6-1.9 2 .4z M12 13l3 2.5 3-2.5-.8 3H12.8z"
        fill="#000"
      />
    </>
  ),
  ar: (
    <>
      <rect width="30" height="20" fill="#006C35" />
      <rect x="7" y="6.5" width="16" height="2" rx="1" fill="#fff" />
      <rect x="9" y="9.5" width="12" height="1.2" rx=".6" fill="#fff" />
      <rect x="8" y="13.5" width="14" height="1.2" rx=".6" fill="#fff" />
    </>
  ),
};

export default function FlagIcon({ code, className = "w-6 h-4" }: { code: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 30 20"
      className={`${className} rounded-[3px] shrink-0 ring-1 ring-white/15`}
      aria-hidden="true"
      focusable="false"
    >
      {flags[code] ?? <rect width="30" height="20" fill="#475569" />}
    </svg>
  );
}
