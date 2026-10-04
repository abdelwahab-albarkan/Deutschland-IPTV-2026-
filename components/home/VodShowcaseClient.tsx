"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Film,
  Tv,
  Sparkles,
  Star,
  Search,
  Play,
  CheckCircle2,
  Flame,
  ArrowRight,
  Volume2,
  Loader2,
  X,
} from "lucide-react";
import { getUiText } from "@/lib/ui-text";
import { buttonClasses } from "@/components/ui/Button";
import type { VodItem } from "@/lib/tmdb";
import { createWhatsAppLink } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import type { Dictionary } from "@/data/i18n/types";

export interface VodDict {
  vod: Dictionary["vod"];
  hero: Pick<Dictionary["hero"], "ctaSecondary" | "description">;
}

export default function VodShowcaseClient({
  locale,
  dict,
  initialItems,
}: {
  locale: string;
  dict: VodDict;
  initialItems: VodItem[];
}) {
  const [items, setItems] = useState<VodItem[]>(initialItems);
  const firstRun = useRef(true);
  const [activeTab, setActiveTab] = useState<"trending" | "movies" | "series">("trending");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedVod, setSelectedVod] = useState<VodItem | null>(null);

  // Single data effect: tab fetch when idle, debounced search otherwise.
  // Aborts stale requests so slow responses can't overwrite newer results.
  useEffect(() => {
    const query = searchQuery.trim();
    // Initial list is server-rendered: skip the redundant first request
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const controller = new AbortController();

    const load = () => {
      setLoading(true);
      const url = query
        ? `/api/vod?q=${encodeURIComponent(query)}`
        : `/api/vod?type=${activeTab}`;
      fetch(url, { signal: controller.signal })
        .then((res) => res.json())
        .then((json) => {
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            setItems(json.data);
          } else if (query) {
            setItems([]);
          }
        })
        .catch((err) => {
          if (err?.name !== "AbortError") setItems(initialItems);
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoading(false);
        });
    };

    const timer = setTimeout(load, query ? 350 : 0);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [searchQuery, activeTab, initialItems]);

  // Close the detail dialog with Escape and lock page scroll while open
  useEffect(() => {
    if (!selectedVod) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVod(null);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selectedVod]);
  const getWhatsAppVodUrl = (title: string) => {
    return createWhatsAppLink(
      siteConfig.support.whatsapp,
      `Hallo! Ich möchte IPTV testen und interessiere mich für den VOD-Bereich (${title}). Bitte senden Sie mir die 24h Testdaten.`
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-[#06070a] border-t border-purple-500/15 relative overflow-hidden" id="vod-mediathek">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[750px] h-[400px] sm:h-[450px] bg-gradient-to-tr from-purple-700/15 via-mauve-600/15 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 end-10 w-72 h-72 bg-mauve-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Film className="w-3.5 h-3.5 text-primary-400" />
            {dict.vod.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {dict.vod.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300">
            {dict.vod.subtitle}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0e101a] border border-purple-500/20 w-full md:w-auto overflow-x-auto scrollbar-none" role="group" aria-label={dict.vod.title}>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("trending");
              }}
              aria-pressed={activeTab === "trending" && !searchQuery}
              className={`flex items-center gap-2 px-4 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                activeTab === "trending" && !searchQuery
                  ? "bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-md shadow-purple-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Flame className="w-4 h-4 text-amber-400" />
              <span>{dict.vod.allTab}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("movies");
              }}
              aria-pressed={activeTab === "movies" && !searchQuery}
              className={`flex items-center gap-2 px-4 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                activeTab === "movies" && !searchQuery
                  ? "bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-md shadow-purple-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Film className="w-4 h-4 text-primary-400" />
              <span>{dict.vod.moviesTab}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("series");
              }}
              aria-pressed={activeTab === "series" && !searchQuery}
              className={`flex items-center gap-2 px-4 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                activeTab === "series" && !searchQuery
                  ? "bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-md shadow-purple-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Tv className="w-4 h-4 text-mauve-400" />
              <span>{dict.vod.seriesTab}</span>
            </button>
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute start-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" aria-hidden="true" />
            <input
              type="search"
              aria-label={dict.vod.searchPlaceholder}
              placeholder={dict.vod.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="field-input rounded-2xl ps-10 pe-10"
            />
            {loading && (
              <Loader2 className="w-4 h-4 absolute end-3.5 top-1/2 -translate-y-1/2 text-primary-400 animate-spin" aria-hidden="true" />
            )}
          </div>
        </div>

        {/* Search status indicator */}
        {searchQuery && (
          <div role="status" className="mb-6 px-4 py-2 rounded-xl bg-[#0e101a] border border-purple-500/20 inline-flex items-center gap-2 text-sm text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-primary-400" />
            <span>
              Results for: <strong className="text-white">"{searchQuery}"</strong> ({items.length} items)
            </span>
          </div>
        )}

        {/* VOD Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-5">
          {items.map((vod, vodIdx) => (
            <button
              type="button"
              key={vod.id}
              style={{ animationDelay: `${Math.min(vodIdx, 11) * 60}ms` }}
              onClick={() => setSelectedVod(vod)}
              aria-haspopup="dialog"
              className="vod-card group relative bg-[#0e101a]/95 border border-purple-500/15 hover:border-primary-500/60 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between text-start w-full"
            >
              {/* Poster Container */}
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={vod.posterPath}
                  alt={vod.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover vod-poster"
                />

                {/* Quality & Rating Badges */}
                <div className="absolute top-2 start-2 flex flex-col gap-1">
                  <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-primary-300 text-[11px] sm:text-[11px] font-black tracking-wider uppercase border border-primary-500/30">
                    4K UHD
                  </span>
                  {vod.audio && (
                    <span className="px-1.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-slate-300 text-[11px] sm:text-[11px] font-semibold border border-white/10 flex items-center gap-0.5">
                      <Volume2 className="w-2.5 h-2.5 text-mauve-400" />
                      <span>{vod.audio}</span>
                    </span>
                  )}
                </div>

                <div className="absolute top-2 end-2">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-amber-400 text-[11px] font-bold border border-amber-500/30">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{vod.rating}</span>
                  </div>
                </div>

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-center">
                  <span className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary-600 to-indigo-600 text-white flex items-center justify-center mx-auto mb-2 shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white translate-x-0.5" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-white">{dict.vod.playNow}</span>
                </div>
              </div>

              {/* Card Meta Info */}
              <div className="p-3 sm:p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-white truncate group-hover:text-primary-300 transition-colors" title={vod.title}>
                    {vod.title}
                  </span>
                  <span className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                    <span>{vod.releaseYear}</span>
                    <span className="text-primary-400 font-semibold">{vod.genres[0] || "VOD"}</span>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Movie / Series Detail Modal */}
        {selectedVod && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedVod(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="vod-dialog-title"
              className="bg-[#0e101a] border border-purple-500/30 rounded-3xl max-w-2xl w-full max-h-[calc(100dvh-2rem)] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-start"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                autoFocus
                onClick={() => setSelectedVod(null)}
                className="absolute top-3 end-3 inline-flex items-center justify-center w-11 h-11 text-slate-300 hover:text-white rounded-xl bg-surface-elevated border border-white/10"
                aria-label={getUiText(locale).close}
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src={selectedVod.posterPath}
                  alt={selectedVod.title}
                  className="w-36 sm:w-44 aspect-[2/3] object-cover rounded-2xl shadow-xl border border-purple-500/20 shrink-0 mx-auto sm:mx-0"
                />

                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-primary-500/20 text-primary-300 text-xs font-bold border border-primary-500/30">
                      4K UHD HDR
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-mauve-500/20 text-mauve-300 text-xs font-bold border border-mauve-500/30">
                      {selectedVod.mediaType === "tv" ? "TV Series" : "Movie"}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{selectedVod.rating} / 10</span>
                    </div>
                  </div>

                  <h3 id="vod-dialog-title" className="text-xl sm:text-2xl font-black text-white pe-10">
                    {selectedVod.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span>Year: <strong className="text-white">{selectedVod.releaseYear}</strong></span>
                    <span>•</span>
                    <span>Genres: <strong className="text-primary-300">{selectedVod.genres.join(", ")}</strong></span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-h-36 overflow-y-auto pe-2">
                    {selectedVod.overview}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      4K Ultra HD & Dolby Atmos
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href={getWhatsAppVodUrl(selectedVod.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClasses("primary", "md")}
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>{dict.hero.ctaSecondary}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedVod(null)}
                      className={buttonClasses("secondary", "md")}
                    >
                      {getUiText(locale).close}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Feature Highlights Strip */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[#0e101a]/90 border border-purple-500/20 shadow-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-mauve-400">
              120.000+
            </div>
            <div className="text-xs sm:text-sm font-bold text-white">VOD Movies & Series</div>
            <div className="text-[11px] text-slate-400">Daily Updates</div>
          </div>

          <div className="space-y-1 sm:border-x sm:border-purple-500/15 sm:px-4">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">
              4K UHD & HDR
            </div>
            <div className="text-xs sm:text-sm font-bold text-white">Crystal Clear Streams</div>
            <div className="text-[11px] text-slate-400">Dolby Atmos & 5.1 Sound</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-mauve-400">
              Multi-Audio
            </div>
            <div className="text-xs sm:text-sm font-bold text-white">Multiple Languages & Subtitles</div>
            <div className="text-[11px] text-slate-400">Original Audio Included</div>
          </div>
        </div>

        {/* Bottom Conversion Banner */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#0e101a] to-[#0e101a] border border-purple-500/25 shadow-xl">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {dict.vod.instantAccessCta}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              {dict.hero.description}
            </p>
          </div>
          <Link
            href={`/${locale}/iptv-test`}
            className={buttonClasses("primary", "md", "w-full sm:w-auto shrink-0")}
          >
            <span>{dict.hero.ctaSecondary}</span>
            <ArrowRight className="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
