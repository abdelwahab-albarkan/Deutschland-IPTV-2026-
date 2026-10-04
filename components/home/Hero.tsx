import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Tv,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { stripLeadingSymbols } from "@/lib/utils";
import { getDictionary, DEFAULT_LOCALE } from "@/data/i18n";
import { ButtonLink } from "@/components/ui/Button";
import CinematicBackdrop from "./CinematicBackdrop";

export default function Hero({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const dict = getDictionary(locale);

  const stats = [
    { value: dict.hero.stat1Value, label: dict.hero.stat1Label },
    { value: dict.hero.stat2Value, label: dict.hero.stat2Label },
    { value: dict.hero.stat3Value, label: dict.hero.stat3Label },
    { value: dict.hero.stat4Value, label: dict.hero.stat4Label },
  ];

  return (
    <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden bg-[#06070a]">
      <CinematicBackdrop />
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] lg:w-[900px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-primary-600/25 via-mauve-500/20 to-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="badge !normal-case !text-xs sm:!text-sm !px-4 !py-1.5 !bg-slate-900/90 shadow-glow-sm">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse shrink-0" aria-hidden="true" />
            <span>{stripLeadingSymbols(dict.hero.badge)}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-mauve-400 to-indigo-300">
              {dict.hero.titleHighlight}
            </span>{" "}
            <br className="hidden sm:inline" />
            <span className="text-slate-100">{dict.hero.titleLine2}</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {dict.hero.description}
          </p>

          {/* Primary CTA = buy, secondary = free trial */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none mx-auto">
            <ButtonLink href={`/${locale}/iptv-kaufen`} variant="primary" size="lg" className="group">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
              <span>{dict.hero.ctaPrimary}</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </ButtonLink>

            <ButtonLink href={`/${locale}/iptv-test`} variant="secondary" size="lg">
              {dict.hero.ctaSecondary}
            </ButtonLink>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300 pt-1">
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
              {dict.nav.moneyBackBadge}
            </li>
            <li className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
              {dict.nav.serverStatus}
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
              {dict.nav.instantActivation}
            </li>
          </ul>

          {/* Showcase visual */}
          <div className="pt-6 sm:pt-10 max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 bg-[#0e101a] shadow-2xl shadow-purple-500/20 group">
              <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden">
                <Image
                  src="/images/iptv-deutschland-hero.jpg"
                  alt="IPTV 4K Ultra HD Streaming"
                  fill
                  priority
                  sizes="(min-width: 1280px) 1024px, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-black/30" />

                <div className="absolute top-3 start-3 sm:top-6 sm:start-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-primary-200 font-bold text-xs sm:text-sm border border-primary-500/40 flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-red-500" aria-hidden="true" />
                    <span>Live 4K Ultra HD</span>
                  </span>
                </div>

                <div className="absolute bottom-3 inset-x-3 sm:bottom-6 sm:inset-x-6 p-3 sm:p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-between gap-3 text-start">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center border border-primary-500/30 shrink-0">
                      <Tv className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-white truncate">4K / 60FPS Live Streams</div>
                      <div className="text-xs text-slate-300 truncate">24.000+ Channels &amp; 120.000+ VODs</div>
                    </div>
                  </div>
                  <ButtonLink href={`/${locale}/iptv-test`} variant="primary" size="sm" className="shrink-0">
                    {dict.nav.testCta}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-3xl bg-[#0c0e18]/80 border border-purple-500/20 shadow-2xl backdrop-blur-xl text-start">
            {stats.map((s) => (
              <li key={s.label} className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white">{s.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-primary-300 mt-0.5">{s.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
