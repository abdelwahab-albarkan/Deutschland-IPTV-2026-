import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbItem } from "@/types/seo";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getDictionary, SUPPORTED_LOCALES, DEFAULT_LOCALE, Locale } from "@/data/i18n";
import { getUiText } from "@/lib/ui-text";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Structured data keeps its original shape (SEO untouched).
  const fullItems = [{ name: "Startseite", url: "/" }, ...items];

  // Visible trail: derive the locale from the page URL so the home link and
  // label are localized and avoid a redirect hop through "/".
  const firstSegment = items[0]?.url.split("/").filter(Boolean)[0];
  const locale = (SUPPORTED_LOCALES.includes(firstSegment as Locale) ? firstSegment : DEFAULT_LOCALE) as Locale;
  const homeLabel = getDictionary(locale).nav.home;
  const ui = getUiText(locale);

  const trail = [{ name: homeLabel, url: `/${locale}` }, ...items];

  return (
    <>
      <BreadcrumbSchema items={fullItems} />
      <nav aria-label={ui.breadcrumb} className="py-4 text-sm text-slate-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <ol className="flex items-center flex-wrap gap-x-2 gap-y-1">
            {trail.map((item, index) => {
              const isLast = index === trail.length - 1;
              return (
                <li key={item.url} className="flex items-center gap-2 min-w-0">
                  {index > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 rtl:rotate-180" aria-hidden="true" />
                  )}
                  {isLast ? (
                    <span aria-current="page" className="text-primary-300 font-medium truncate max-w-[220px] sm:max-w-none">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.url}
                      className="hover:text-white transition-colors flex items-center gap-1.5 py-1 rounded"
                    >
                      {index === 0 && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
