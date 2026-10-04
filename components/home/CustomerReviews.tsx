import React from "react";
import Image from "next/image";
import { Star, CheckCircle, ThumbsUp } from "lucide-react";
import { getDictionary, DEFAULT_LOCALE } from "@/data/i18n";

export default function CustomerReviews({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const dict = getDictionary(locale);

  return (
    <section className="py-16 sm:py-20 bg-[#06070a] relative overflow-hidden border-t border-purple-500/15">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ThumbsUp className="w-3.5 h-3.5 text-amber-400" />
            {dict.reviews.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {dict.reviews.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300">
            {dict.reviews.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {dict.reviews.items.map((review, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#0e101a]/95 border border-purple-500/15 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Header with Avatar and Rating */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image src={review.avatar || `/images/revriw/avatars/avatar-${(idx % 6) + 1}.webp`}
                        alt={review.name} width={48} height={48} className="w-12 h-12 rounded-2xl object-cover border-2 border-purple-500/30 shadow-md" />
                      <span className="absolute -bottom-1 -end-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0e101a] flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </span>
                    </div>

                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{review.name}</span>
                      </div>
                      <div className="text-[11px] text-slate-400">{review.city}</div>
                    </div>
                  </div>

                  <div className="text-end">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(review.rating)].map((_, rIdx) => (
                        <Star key={rIdx} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono block mt-0.5">{review.date}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  "{review.review}"
                </p>
              </div>

              <div className="pt-3.5 border-t border-purple-500/15 flex items-center justify-between text-xs">
                <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {review.verified}
                </span>
                <div className="text-[11px] px-2.5 py-1 rounded-lg bg-primary-500/15 text-primary-300 font-bold border border-primary-500/25">
                  {review.device}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
