import React from "react";
import Image from "next/image";

const ROW_A = [
  "/images/iptv-live-tv-wohnzimmer.jpg",
  "/images/bundesliga-stadion.jpg",
  "/images/iptv-heimkino.jpg",
  "/images/iptv-familie-fernsehen.jpg",
  "/images/iptv-sport-streaming.jpg",
  "/images/iptv-streaming-editorial.jpg",
];
const ROW_B = [
  "/images/iptv-4k-qualitaet.jpg",
  "/images/iptv-entertainment-dashboard.jpg",
  "/images/fussball-streaming.jpg",
  "/images/iptv-google-tv-dashboard.jpg",
  "/images/iptv-cloud-streaming.jpg",
  "/images/iptv-premium-abo.jpg",
];

function Row({ frames, reverse, className = "" }: { frames: string[]; reverse?: boolean; className?: string }) {
  // Duplicated once so the -50% translate loops seamlessly
  const loop = [...frames, ...frames];
  return (
    <div className={`film-strip ${className}`}>
      <div className={`film-track ${reverse ? "film-track-reverse" : ""}`}>
        {loop.map((src, i) => (
          <div key={i} className="film-frame">
            <Image src={src} alt="" fill sizes="240px" quality={45} fetchPriority="low" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Decorative cinematic background: drifting film strips, projector beam, vignette. */
export default function CinematicBackdrop() {
  return (
    <div aria-hidden="true" className="cinema-backdrop absolute inset-0 overflow-hidden pointer-events-none">
      <div className="cinema-tilt">
        <Row frames={ROW_A} />
        <Row frames={ROW_B} reverse />
        <Row frames={ROW_A.slice().reverse()} />
        <Row frames={ROW_B.slice().reverse()} reverse />
        <Row frames={ROW_A} />
      </div>
      <div className="cinema-beam" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06070a] via-[#06070a]/20 to-[#06070a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#06070a_95%)]" />
    </div>
  );
}
