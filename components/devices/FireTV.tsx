import React from "react";
import Image from "next/image";
import { Flame } from "lucide-react";

export default function FireTV() {
  return (
    <div id="firetv" className="rounded-3xl bg-[#0e101a]/95 border border-purple-500/20 p-6 sm:p-8 scroll-mt-24 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center border border-amber-500/20 shrink-0">
            <Image src="/images/firestick.png" alt="Firestick 4K" width={40} height={40} className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Amazon Fire TV Stick 4K & Fire TV Cube
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Die beliebteste und schnellste Variante für IPTV in Deutschland.
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial Banner Image */}
      <div className="mb-6 relative rounded-2xl overflow-hidden border border-purple-500/20 aspect-[21/9] max-h-48 w-full">
        <Image src="/images/iptv-fire-tv-stick.jpg" alt="Fire TV Stick IPTV Installation" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-slate-300">
        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">1</span>
            Downloader App aus dem Amazon Store laden
          </h4>
          <p className="text-xs text-slate-400">
            Suchen Sie nach „Downloader“ im Fire TV Menü und installieren Sie die kostenlose orangefarbene App.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">2</span>
            Entwickleroptionen für Downloader freigeben
          </h4>
          <p className="text-xs text-slate-400">
            Unter Einstellungen -&gt; Mein Fire TV -&gt; Entwickleroptionen die Option „Unbekannte Apps installieren“ für den Downloader aktivieren.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">3</span>
            Downloader Code eingeben
          </h4>
          <p className="text-xs text-slate-400">
            Geben Sie im URL-Feld des Downloaders den Code <code className="text-primary-300 bg-[#121424] px-2 py-0.5 rounded font-mono border border-purple-500/30">78522</code> (für IPTV Smarters Pro) oder <code className="text-primary-300 bg-[#121424] px-2 py-0.5 rounded font-mono border border-purple-500/30">278077</code> (für TiviMate) ein.
          </p>
        </div>
      </div>
    </div>
  );
}
