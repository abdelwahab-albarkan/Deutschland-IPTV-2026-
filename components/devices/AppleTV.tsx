import React from "react";
import Image from "next/image";
import { Apple, Tv } from "lucide-react";

export default function AppleTV() {
  return (
    <div id="appletv" className="rounded-3xl bg-[#0e101a]/95 border border-purple-500/20 p-6 sm:p-8 scroll-mt-24 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/15 text-primary-300 flex items-center justify-center border border-purple-500/20 shrink-0">
            <Image src="/images/appletv.png" alt="Apple TV 4K" width={40} height={40} className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Apple TV 4K, iPhone & iPad (tvOS / iOS)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Hochauflösendes Streaming mit Apple TV und AirPlay Unterstützung.
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial Banner Image */}
      <div className="mb-6 relative rounded-2xl overflow-hidden border border-purple-500/20 aspect-[21/9] max-h-48 w-full">
        <Image src="/images/iptv-apple-tv-4k.jpg" alt="Apple TV 4K IPTV Setup" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-slate-300">
        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">1</span>
            Smarters Player Lite oder IPTVX installieren
          </h4>
          <p className="text-xs text-slate-400">
            Laden Sie <strong>Smarters Player Lite</strong> oder <strong>IPTVX</strong> direkt aus dem offiziellen Apple App Store herunter.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">2</span>
            Xtream Codes Login durchführen
          </h4>
          <p className="text-xs text-slate-400">
            Tragen Sie Ihre Server-URL, den Benutzernamen und das Passwort ein.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">3</span>
            Apple TV 4K HDR genießen
          </h4>
          <p className="text-xs text-slate-400">
            Erleben Sie flüssiges Streaming mit nativer Unterstützung für Apple TV Fernbedienung und Bild-in-Bild.
          </p>
        </div>
      </div>
    </div>
  );
}
