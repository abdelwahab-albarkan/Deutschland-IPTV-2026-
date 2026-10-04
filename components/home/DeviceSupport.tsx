import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Tv,
  Monitor,
  Smartphone,
  Apple,
  Radio,
  Laptop,
  ArrowRight,
} from "lucide-react";

export default function DeviceSupport({ locale = "de" }: { locale?: string }) {
  const devices = [
    {
      name: "Amazon Fire TV Stick & Cube",
      desc: "Firestick 4K Max, HD, Lite & Fire TV Cube",
      image: "/images/firestick.png",
      href: `/${locale}/iptv-fire-tv`,
      tag: "Top Empfehlung",
      badge: "Downloader Ready",
    },
    {
      name: "Samsung Smart TV (Tizen)",
      desc: "Samsung QLED, Neo QLED & Crystal UHD",
      image: "/images/samsungsmarttv.png",
      href: `/${locale}/iptv-samsung`,
      tag: "Direkt im Smart Hub",
      badge: "IBO / Smart IPTV",
    },
    {
      name: "LG Smart TV (webOS)",
      desc: "LG OLED, QNED & NanoCell",
      image: "/images/LG TV (webOS).png",
      href: `/${locale}/iptv-installieren`,
      tag: "LG Content Store",
      badge: "Flix / Smarters",
    },
    {
      name: "Apple TV 4K, iPhone & iPad",
      desc: "Apple tvOS 17+, iOS & iPadOS",
      image: "/images/appletv.png",
      href: `/${locale}/iptv-installieren#appletv`,
      tag: "AirPlay 2 & 4K HDR",
      badge: "IPTVX / GSE",
    },
    {
      name: "Android TV & Nvidia Shield",
      desc: "Nvidia Shield Pro, Google TV & Xiaomi",
      image: "/images/nvidiashield.png",
      href: `/${locale}/iptv-installieren#android`,
      tag: "Google Play Store",
      badge: "TiviMate 60FPS",
    },
    {
      name: "Windows PC & Mac OS",
      desc: "Windows 11/10 & Apple macOS",
      image: "/images/windowspc.png",
      href: `/${locale}/iptv-kodi`,
      tag: "Desktop & Web Player",
      badge: "VLC / Kodi",
    },
    {
      name: "Formuler Z & MAG Receiver",
      desc: "Formuler MyTVOnline & Linux Enigma2",
      image: "/images/Formuler.png",
      href: `/${locale}/iptv-installieren#receiver`,
      tag: "Stalker & MAC Login",
      badge: "MOL3 Ready",
    },
    {
      name: "PlayStation & Xbox Konsolen",
      desc: "PS5, PS4, Xbox Series X/S & One",
      image: "/images/PlayStation.png",
      href: `/${locale}/iptv-kodi`,
      tag: "Gaming & Mediacenter",
      badge: "Kodi Addon",
    },
  ];

  const brandLogos = [
    { name: "Samsung", file: "/images/samsungsmarttv.png" },
    { name: "Sony", file: "/images/Sony TV (Google TV).png" },
    { name: "Hisense", file: "/images/Hisense TV.png" },
    { name: "TCL", file: "/images/TCL TV.png" },
    { name: "Apple", file: "/images/appletv.png" },
    { name: "Fire TV", file: "/images/firestick.png" },
    { name: "Android TV", file: "/images/androidtvbox.png" },
    { name: "Roku", file: "/images/roku.png" },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#06070a] border-t border-purple-500/15">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-bold uppercase tracking-wider">
            <span>100% Geräte-Kompatibilität</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            Auf all Ihren Lieblingsgeräten & Fernsehern streamen
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg">
            Ein einziges Abonnement – nahtlos nutzbar auf Ihrem Smart TV, Streaming-Stick, Smartphone, Tablet oder Computer in nativer 4K/60FPS Qualität.
          </p>
        </div>

        {/* Interactive Device Grid with Real Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {devices.map((device, idx) => (
            <Link
              key={idx}
              href={device.href}
              className="p-5 sm:p-6 rounded-3xl bg-[#0e101a]/95 border border-purple-500/15 hover:border-primary-500/50 hover:bg-[#121424] transition-all duration-300 group flex flex-col justify-between shadow-2xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-primary-500/15 text-primary-300 font-bold uppercase tracking-wider border border-primary-500/25">
                    {device.tag}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {device.badge}
                  </span>
                </div>

                {/* Device Render Image */}
                <div className="relative h-32 sm:h-36 my-3 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={device.image}
                    alt={device.name}
                    fill
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 40vw, 90vw"
                    className="object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)]"
                  />
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-primary-300 transition-colors mt-2">
                  {device.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {device.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs text-primary-400 font-bold mt-4">
                <span>Setup Anleitung</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Supported Brand Logos Grid */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[#0e101a] border border-purple-500/20 shadow-2xl">
          <div className="text-center text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
            Unterstützte TV-Hersteller & Streaming-Plattformen:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {brandLogos.map((brand, bIdx) => (
              <div
                key={bIdx}
                className="p-3 rounded-2xl bg-[#080910] border border-purple-500/10 flex flex-col items-center justify-center gap-2 hover:border-purple-500/40 transition-colors"
              >
                <div className="relative h-10 w-full">
                  <Image
                    src={brand.file}
                    alt={brand.name}
                    fill
                    sizes="120px"
                    className="object-contain opacity-80"
                  />
                </div>
                <span className="text-[11px] font-semibold text-slate-300">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
