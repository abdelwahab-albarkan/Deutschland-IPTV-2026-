import React from "react";
import Image from "next/image";
import { Smartphone } from "lucide-react";

export default function Android() {
  return (
    <div id="android" className="rounded-3xl bg-[#0e101a]/95 border border-purple-500/20 p-6 sm:p-8 scroll-mt-24 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center border border-indigo-500/20 shrink-0">
            <Image src="/images/androidtvbox.png" alt="Android TV Box" width={40} height={40} className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Android TV, TV-Boxen & Smartphones
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Kompatibel mit Nvidia Shield, Xiaomi Mi Box, Google TV und allen Android-Smartphones.
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial Banner Image */}
      <div className="mb-6 relative rounded-2xl overflow-hidden border border-purple-500/20 aspect-[21/9] max-h-48 w-full">
        <Image src="/images/iptv-android-tv-setup.jpg" alt="Android TV IPTV Setup" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-slate-300">
        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">1</span>
            TiviMate oder IPTV Smarters aus dem Play Store laden
          </h4>
          <p className="text-xs text-slate-400">
            Öffnen Sie den Google Play Store auf Ihrem Gerät und installieren Sie die App <strong>TiviMate</strong> oder <strong>IPTV Smarters Pro</strong>.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">2</span>
            Xtream Codes API Login auswählen
          </h4>
          <p className="text-xs text-slate-400">
            Starten Sie die App, wählen Sie „Login with Xtream Codes API“ und geben Sie Server-URL, Benutzername und Passwort ein.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">3</span>
            Synchronisation abwarten & 4K genießen
          </h4>
          <p className="text-xs text-slate-400">
            Die App lädt innerhalb von 5 Sekunden alle Senderkategorien, EPG TV-Guide und Filme.
          </p>
        </div>
      </div>
    </div>
  );
}
