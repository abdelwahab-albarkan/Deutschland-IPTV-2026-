"use client";

import React, { useState } from "react";
import { Trophy, Tv, Compass, Globe, CheckCircle2, Flame, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/data/i18n/types";

const icons = [
  <Trophy key="1" className="w-5 h-5 text-amber-400" />,
  <Tv key="2" className="w-5 h-5 text-primary-400" />,
  <Compass key="3" className="w-5 h-5 text-cyan-400" />,
  <Globe key="4" className="w-5 h-5 text-mauve-400" />,
];

export interface ChannelsDict {
  channels: Dictionary["channels"];
  nav: Pick<Dictionary["nav"], "testCta" | "sports" | "channels">;
}

export default function ChannelCategoriesClient({ locale, dict }: { locale: string; dict: ChannelsDict }) {
  const categories = dict.channels.categories;
  const [activeIdx, setActiveIdx] = useState(0);

  const activeCategory = categories[activeIdx] || categories[0];

  const categoryImages = [
    "/images/bundesliga-stadion.jpg",
    "/images/iptv-live-tv-wohnzimmer.jpg",
    "/images/iptv-4k-qualitaet.jpg",
    "/images/iptv-cloud-streaming.jpg",
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#06070a] border-y border-purple-500/15 relative overflow-hidden">
      {/* Background ambient mauve glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[400px] bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5 text-primary-400" />
            {dict.channels.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {dict.channels.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300">
            {dict.channels.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div role="tablist" aria-label={dict.channels.title} className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {categories.map((cat, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                id={`channel-tab-${idx}`}
                aria-selected={isActive}
                aria-controls="channel-panel"
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-[#171a2e] border-primary-500/60 text-white shadow-lg shadow-purple-500/20 ring-1 ring-primary-500/40"
                    : "bg-[#0e101a]/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                {icons[idx % icons.length]}
                <span>{cat.name}</span>
                <span
                  className={`text-[11px] sm:text-xs px-2 py-0.5 rounded-md font-mono ${
                    isActive
                      ? "bg-primary-500/20 text-primary-300 font-bold"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div role="tabpanel" id="channel-panel" aria-labelledby={`channel-tab-${activeIdx}`} className="card p-5 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-purple-500/15">
            <div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-primary-500/20 text-primary-300 border border-primary-500/30">
                  {activeCategory.count}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeCategory.name}
                </h3>
              </div>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm md:text-base">
                {activeCategory.highlight}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href={`/${locale}/iptv-test`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-purple-500/20"
              >
                {dict.nav.testCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Category Visual Media & Channels Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            {/* Image Preview Banner for Active Category */}
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-purple-500/20 aspect-[4/3] lg:aspect-auto min-h-[220px]">
              <Image
                src={categoryImages[activeIdx % categoryImages.length]}
                alt={activeCategory.name}
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover brightness-90 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                <span className="text-xs font-bold text-primary-300 uppercase tracking-wider">
                  4K / 60 FPS Streams
                </span>
                <span className="text-sm font-black text-white">
                  {activeCategory.name}
                </span>
              </div>
            </div>

            {/* Channels Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeCategory.channels.map((channel, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-[#080910] border border-purple-500/10 hover:border-purple-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {channel}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Sport 60fps Note */}
          <div className="mt-6 pt-5 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-400" aria-hidden="true" />
              <span>Anti-Freeze 9.3 • 50/60 FPS Ultra HD</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href={`/${locale}/iptv-bundesliga`} className="text-primary-400 hover:underline">
                {dict.nav.sports} →
              </Link>
              <Link href={`/${locale}/iptv-deutschland`} className="text-primary-400 hover:underline">
                {dict.nav.channels} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
