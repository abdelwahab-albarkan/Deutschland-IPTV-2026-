import React from "react";
import Image from "next/image";
import { Check, X, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getDictionary, DEFAULT_LOCALE } from "@/data/i18n";

export default function ProviderComparison({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const dict = getDictionary(locale);

  return (
    <section className="py-16 sm:py-20 bg-[#06070a] relative overflow-hidden border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-primary-400" />
            {dict.comparison.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {dict.comparison.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300">
            {dict.comparison.subtitle}
          </p>
        </div>

        {/* Comparison Visual Infographic Header */}
        <div className="mb-8 rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl relative">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full max-h-64 overflow-hidden">
            <Image src="/images/iptv-vs-kabel-infografik.jpg" alt="IPTV Comparison Infographic" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent p-6 sm:p-8 flex flex-col justify-center max-w-lg">
              <span className="text-xs font-bold text-primary-300 uppercase tracking-wider mb-1">
                4K Ultra HD & Anti-Freeze 9.3
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {dict.comparison.ourBrandCol}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {dict.comparison.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-purple-500/20 shadow-2xl bg-[#0e101a]/90">
          <table className="w-full text-start border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-purple-500/20 bg-[#121422] text-xs sm:text-sm">
                <th className="py-5 px-6 font-semibold text-slate-300 w-1/3">
                  {dict.comparison.featureCol}
                </th>
                <th className="py-5 px-6 font-black text-primary-300 bg-primary-500/10 border-x border-primary-500/30 w-1/3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary-400" />
                    <span>{dict.comparison.ourBrandCol}</span>
                  </div>
                </th>
                <th className="py-5 px-6 font-semibold text-slate-400 w-1/3">
                  {dict.comparison.othersCol}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-500/10 text-xs sm:text-sm">
              {dict.comparison.rows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-purple-950/20 transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-slate-200">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 font-bold text-primary-200 bg-primary-500/5 border-x border-primary-500/20">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary-400 shrink-0" />
                      <span>{row.us}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-400/80 shrink-0" />
                      <span>{row.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Table CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#0e101a] to-[#0e101a] border border-purple-500/25 shadow-xl">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {dict.trial.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {dict.trial.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href={`/${locale}/iptv-test`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 via-mauve-600 to-indigo-600 hover:from-primary-500 hover:via-mauve-500 hover:to-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-purple-500/25"
            >
              {dict.nav.testCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
