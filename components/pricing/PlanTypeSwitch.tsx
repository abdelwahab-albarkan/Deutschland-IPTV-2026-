import React from "react";
import Link from "next/link";
import { Tv, Store } from "lucide-react";
import { getUiText } from "@/lib/ui-text";

interface PlanTypeSwitchProps {
  locale: string;
  active: "clients" | "resellers";
}

/**
 * Makes the split between viewer subscriptions and B2B reseller credit
 * packages obvious. Both options are real routes (no JS required).
 */
export default function PlanTypeSwitch({ locale, active }: PlanTypeSwitchProps) {
  const ui = getUiText(locale);

  const items = [
    {
      key: "clients" as const,
      label: ui.planClients,
      hint: ui.clientsHint,
      href: `/${locale}/iptv-kaufen`,
      icon: Tv,
    },
    {
      key: "resellers" as const,
      label: ui.planResellers,
      hint: ui.resellersHint,
      href: `/${locale}/iptv-reseller#reseller-plans`,
      icon: Store,
    },
  ];

  return (
    <nav aria-label={ui.planTypeLabel} className="max-w-2xl mx-auto mb-8 sm:mb-10">
      <ul className="grid grid-cols-2 gap-1.5 p-1.5 rounded-2xl bg-[#0e101a] border border-purple-500/20">
        {items.map(({ key, label, hint, href, icon: Icon }) => {
          const isActive = key === active;
          return (
            <li key={key}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`flex flex-col items-center gap-0.5 rounded-xl px-3 py-3 text-center transition-colors min-h-[64px] justify-center ${
                  isActive
                    ? "bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-md shadow-purple-500/25"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-2 text-sm sm:text-base font-bold">
                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {label}
                </span>
                <span className={`hidden sm:block text-xs ${isActive ? "text-white/80" : "text-slate-400"}`}>
                  {hint}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
