import { Dictionary } from "./types";
import { seoPagesData } from "../seo-pages";

export const de: Dictionary = {
  locale: "de",
  siteName: "Deutschland IPTV",
  siteTitle: "Deutschland IPTV 2026 » Bester IPTV Anbieter mit 24.000+ Sendern & 4K",
  siteDescription:
    "Premium IPTV für Deutschland, Österreich und die Schweiz. Über 24.000 Live-Sender (Sky, DAZN, Bundesliga), 120.000+ VODs in 4K & Anti-Freeze 9.3 Server. 24h Test kostenlos anfordern!",
  whatsappGreeting: "Hallo! Ich interessiere mich für Ihren Deutschland IPTV Service und benötige Beratung.",

  nav: {
    home: "Startseite",
    buy: "IPTV Kaufen",
    test: "24h Test",
    pricing: "Preise",
    channels: "Senderliste",
    apps: "IPTV Apps",
    sports: "Bundesliga & Sport",
    reseller: "Reseller Panel",
    devices: "Geräte",
    help: "Hilfe",
    freeTestBadge: "Kostenlos",
    liveBadge: "Live",
    popularBadge: "Beliebt",
    buyCta: "IPTV Kaufen",
    testCta: "24h Test",
    support247: "24/7 Live WhatsApp Support",
    serverStatus: "Server-Status: 100% Online (Anti-Freeze 9.3)",
    moneyBackBadge: "7 Tage Geld-zurück-Garantie",
    instantActivation: "Aktivierung in 5 Min. per WhatsApp",
  },

  hero: {
    badge: "⭐ #1 Bester IPTV Anbieter in Deutschland 2026",
    titleLine1: "Premium IPTV Deutschland",
    titleHighlight: "24.000+ Live Sender",
    titleLine2: "& 120.000+ VODs in 4K UHD",
    description:
      "Erleben Sie unterbrechungsfreies Streaming mit nativer 4K/60FPS Qualität für Bundesliga, Sky Sport, DAZN, Formel 1 und alle deutschen Sender. Keine Pufferung dank Anti-Freeze 9.3 Technologie.",
    ctaPrimary: "Jetzt IPTV Kaufen",
    ctaSecondary: "Kostenlosen 24h Test anfordern",
    stat1Value: "24.000+",
    stat1Label: "Live Sender (DACH & Welt)",
    stat2Value: "120.000+",
    stat2Label: "4K VOD Filme & Serien",
    stat3Value: "99.9%",
    stat3Label: "Anti-Freeze Uptime",
    stat4Value: "< 5 Min.",
    stat4Label: "Blitz-Aktivierung",
  },

  features: {
    badge: "Warum Deutschland IPTV?",
    title: "Technologische Spitzenleistung für Ihr Fernseherlebnis",
    subtitle: "Entdecken Sie die Vorteile unseres Premium-Servernetzwerks im Vergleich zu herkömmlichen Anbietern.",
    items: [
      {
        title: "Anti-Freeze 9.3 Server",
        description: "Dedizierte 10-Gbit/s-Server in Frankfurt garantieren ruckelfreies Streaming auch bei Top-Spielen.",
        badge: "Stabilität",
      },
      {
        title: "Echte 4K UHD & 60 FPS",
        description: "Kristallklare Bildqualität für alle Sportübertragungen und Blockbuster ohne Kompressionsverlust.",
        badge: "Bildqualität",
      },
      {
        title: "Alle deutschen & Int. Sender",
        description: "Komplettes Paket für Deutschland, Österreich, Schweiz sowie über 60 weitere Länder weltweit.",
        badge: "Vielfalt",
      },
      {
        title: "100% Kompatibel mit allen Geräten",
        description: "Funktioniert auf Fire TV Stick, Smart TVs (Samsung/LG), Android Boxen, Apple TV & TiviMate.",
        badge: "Flexibilität",
      },
      {
        title: "Tagesaktueller EPG TV-Guide",
        description: "Automatischer 7-Tage elektronischer Programmführer für alle deutschen und internationalen Sender.",
        badge: "Komfort",
      },
      {
        title: "7 Tage Geld-zurück-Garantie",
        description: "Testen Sie ohne Risiko. Nicht zufrieden? Wir erstatten Ihren Betrag unkompliziert zurück.",
        badge: "Sicherheit",
      },
    ],
  },

  vod: {
    badge: "120.000+ VOD Mediathek",
    title: "Filme, Serien & Blockbuster auf Abruf in 4K",
    subtitle: "Täglich aktualisierte Mediathek mit deutschen Tonspuren und Untertiteln.",
    searchPlaceholder: "Film oder Serie suchen (z.B. Dune, Stranger Things, Avatar)...",
    allTab: "Alle Highlights",
    moviesTab: "Top Filme",
    seriesTab: "Beliebte Serien",
    rating: "Bewertung",
    watchTrailer: "Trailer ansehen",
    playNow: "Sofort Streamen",
    instantAccessCta: "Jetzt IPTV Paket sichern & ganze Mediathek freischalten",
  },

  channels: {
    badge: "Senderübersicht",
    title: "Über 24.000 Live-Sender in bester Qualität",
    subtitle: "Von Bundesliga und Champions League bis hin zu exklusiven Pay-TV Sendern und Weltfernsehen.",
    categories: [
      {
        name: "Live-Sport & Bundesliga (4K/60FPS)",
        count: "150+ Kanäle",
        highlight: "Sky Sport UHD, DAZN 1-2, MagentaSport, Sky Sport F1, Eurosport",
        channels: [
          "Sky Sport Bundesliga 1–10 UHD/FHD (60 FPS)",
          "Sky Sport 1–10 UHD/FHD & Sky Sport Premier League",
          "DAZN 1 & DAZN 2 HD/FHD 60FPS",
          "MagentaSport 1–6 (3. Liga, DEL Eishockey, BBL)",
          "Sky Sport F1 UHD (Alle Formel 1 Rennen live)",
          "Sky Sport Austria 1–7 & Blue Sport Schweiz 1–6",
        ],
      },
      {
        name: "Deutsche Hauptsender & Pay-TV",
        count: "450+ Kanäle",
        highlight: "ARD, ZDF, RTL, ProSieben, Sky Cinema, Warner TV in nativem HD/4K",
        channels: [
          "ARD HD, ZDF HD, RTL HD, Sat.1 HD, ProSieben HD, VOX HD",
          "Sky Cinema Premiere HD, Sky Cinema Action HD, Sky Atlantic HD",
          "Warner TV Film, 13th Street HD, SYFY HD, Discovery Channel HD",
          "Disney Channel, Super RTL, KiKA HD, Cartoon Network",
        ],
      },
      {
        name: "Österreich & Schweiz (DACH)",
        count: "180+ Kanäle",
        highlight: "ORF 1-3, ServusTV, Puls 4, SRF 1-2, Blue Sport ohne Geoblocking",
        channels: [
          "ORF 1 HD, ORF 2 HD (alle 9 Bundesland-Heute Regionalprogramme)",
          "ORF III HD, ORF Sport+ HD, ServusTV Österreich HD, Puls 4 HD",
          "SRF 1 HD, SRF zwei HD, SRF info HD, 3+ HD, TV24 HD",
          "Blue Sport Schweiz 1–6 HD & Sky Sport Austria",
        ],
      },
      {
        name: "Internationale Sender (60+ Länder)",
        count: "23.000+ Kanäle",
        highlight: "Türkei, Balkan, UK, Frankreich, Italien, Spanien, Arabisch, Polen",
        channels: [
          "Türkei: beIN Sports 1–5, Exxen, TRT, ATV, Show TV, Star TV",
          "Balkan: Arena Sport 1–10, Sport Klub 1–10, RTS, HRT, Pink",
          "UK & USA: Sky Sports UK, TNT Sports 1–4, BBC 1–4, HBO, NBC",
          "Arabische Welt: beIN Sports MENA 1–16, OSN Cinema, MBC 1–5",
        ],
      },
    ],
  },

  pricing: {
    badge: "Faire & Transparente Preise",
    title: "Wählen Sie Ihr passendes IPTV Abonnement",
    subtitle: "Keine versteckten Gebühren, keine automatische Vertragsverlängerung. Sofortige Aktivierung.",
    toggle1Device: "1 Gerät / Verbindung",
    toggle2Device: "2 Geräte / Verbindungen",
    toggleDiscount: "Spare bis zu 60%",
    guaranteeText: "Alle Pakete beinhalten unsere 7 Tage Geld-zurück-Garantie und 24/7 WhatsApp Support.",
    plans: [
      {
        id: "1-month",
        duration: "1 Monat",
        periodLabel: "Monatsabo",
        price: 14.99,
        originalPrice: 24.99,
        monthlyEquivalent: 14.99,
        connections: 1,
        features: [
          "Über 24.000 Live-Sender (DACH & Welt)",
          "120.000+ VOD Filme & Serien in 4K/HD",
          "Alle Bundesliga, Sky & DAZN Sender",
          "Anti-Freeze 9.3 Server Frankfurt",
          "Automatischer EPG TV-Guide",
          "Kompatibel mit allen Apps & Geräten",
          "Sofortige Aktivierung in 5 Min.",
        ],
        ctaText: "1 Monat Kaufen",
      },
      {
        id: "3-months",
        duration: "3 Monate",
        periodLabel: "Quartalsabo",
        price: 29.99,
        originalPrice: 49.99,
        monthlyEquivalent: 9.99,
        discountBadge: "33% Rabatt",
        connections: 1,
        features: [
          "Über 24.000 Live-Sender (DACH & Welt)",
          "120.000+ VOD Filme & Serien in 4K/HD",
          "Alle Bundesliga, Sky & DAZN Sender",
          "Anti-Freeze 9.3 Server Frankfurt",
          "Automatischer EPG TV-Guide",
          "Kompatibel mit allen Apps & Geräten",
          "7 Tage Geld-zurück-Garantie",
        ],
        ctaText: "3 Monate Kaufen",
      },
      {
        id: "6-months",
        duration: "6 Monate",
        periodLabel: "Halbjahresabo",
        price: 44.99,
        originalPrice: 79.99,
        monthlyEquivalent: 7.49,
        discountBadge: "50% Rabatt",
        connections: 1,
        features: [
          "Über 24.000 Live-Sender (DACH & Welt)",
          "120.000+ VOD Filme & Serien in 4K/HD",
          "Alle Bundesliga, Sky & DAZN Sender",
          "Anti-Freeze 9.3 Server Frankfurt",
          "Automatischer EPG TV-Guide",
          "VIP Prioritäts-Support per WhatsApp",
          "7 Tage Geld-zurück-Garantie",
        ],
        ctaText: "6 Monate Kaufen",
      },
      {
        id: "12-months",
        duration: "12 Monate",
        periodLabel: "Jahresabo",
        price: 64.99,
        originalPrice: 149.99,
        monthlyEquivalent: 5.41,
        popular: true,
        bestValue: true,
        badge: "⭐ Beliebteste Wahl",
        discountBadge: "65% Rabatt",
        connections: 1,
        features: [
          "Über 24.000 Live-Sender (DACH & Welt)",
          "120.000+ VOD Filme & Serien in 4K/HD",
          "Alle Bundesliga, Champions League & Sport",
          "Anti-Freeze 9.3 Server mit garantierter Bandbreite",
          "Automatischer EPG TV-Guide",
          "VIP 24/7 WhatsApp Direkt-Support",
          "7 Tage Geld-zurück-Garantie",
          "Kostenlose M3U & Xtream Updates",
        ],
        ctaText: "12 Monate Kaufen (Bestes Angebot)",
      },
    ],
  },

  comparison: {
    badge: "Anbieter-Vergleich",
    title: "Warum Deutschland IPTV der führende Anbieter ist",
    subtitle: "Sehen Sie die technischen Unterschiede zwischen unserem Service und günstigen Standardanbietern.",
    featureCol: "Leistungsmerkmal",
    ourBrandCol: "Deutschland IPTV (Premium)",
    othersCol: "Andere IPTV Anbieter",
    rows: [
      {
        feature: "Server-Technologie",
        us: "Dedizierte 10 Gbit/s Server in Frankfurt (Anti-Freeze 9.3)",
        others: "Überlastete Reseller-Server im Ausland",
        isPositive: true,
      },
      {
        feature: "Live-Sport Streaming",
        us: "Echtes 4K & 60 FPS ohne Verzögerung",
        others: "720p/30 FPS mit häufigen Pufferungen",
        isPositive: true,
      },
      {
        feature: "Senderanzahl",
        us: "24.000+ Sender + 120.000+ VODs (Täglich geprüft)",
        others: "Viele tote Links und inaktive Streams",
        isPositive: true,
      },
      {
        feature: "Kundensupport",
        us: "24/7 Live WhatsApp & Telegram Support auf Deutsch",
        others: "Nur langsame E-Mail-Tickets oder kein Support",
        isPositive: true,
      },
      {
        feature: "Zufriedenheitsgarantie",
        us: "7 Tage 100% Geld-zurück-Garantie",
        others: "Keine Rückerstattung nach Kauf",
        isPositive: true,
      },
    ],
  },

  reviews: {
    badge: "Echte Kundenbewertungen",
    title: "Was unsere Kunden über uns sagen",
    subtitle: "Über 4.800 zufriedene Nutzer in Deutschland, Österreich und der Schweiz.",
    score: "4.9 / 5.0",
    totalReviews: "Basierend auf 4.850+ verifizierten Bewertungen",
    items: [
      {
        name: "Maximilian K.",
        city: "München",
        rating: 5,
        review:
          "Endlich ein IPTV Anbieter, der bei Bundesliga-Spielen nicht einfriert! Bildqualität auf meinem Samsung TV mit TiviMate ist absolut grandios. Aktivierung ging per WhatsApp in unter 5 Minuten.",
        device: "Samsung 4K TV (TiviMate)",
        date: "Vor 2 Tagen",
        verified: "Verifizierter Käufer",
        avatar: "/images/revriw/avatars/avatar-1.webp",
      },
      {
        name: "Stefan B.",
        city: "Wien (Österreich)",
        rating: 5,
        review:
          "Hatte vorher viele billige Anbieter ausprobiert, immer nur Frust. Deutschland IPTV läuft seit 6 Monaten komplett stabil. Alle ORF Sender und Sky Sport in 60 FPS. Großes Lob an den Support!",
        device: "Amazon Fire TV Stick 4K Max",
        date: "Vor 4 Tagen",
        verified: "Verifizierter Käufer",
        avatar: "/images/revriw/avatars/avatar-2.webp",
      },
      {
        name: "Dennis M.",
        city: "Frankfurt am Main",
        rating: 5,
        review:
          "Die VOD Mediathek ist riesig! Alle neuen Filme auf Deutsch und in 4K Qualität. EPG funktioniert tadellos auf meiner Nvidia Shield Pro. Sehr empfehlenswert!",
        device: "Nvidia Shield Pro (IPTV Smarters)",
        date: "Vor 1 Woche",
        verified: "Verifizierter Käufer",
        avatar: "/images/revriw/avatars/avatar-3.webp",
      },
      {
        name: "Laura W.",
        city: "Zürich (Schweiz)",
        rating: 5,
        review:
          "Der kostenlose 24h Test hat mich sofort überzeugt. Schnelle Umschaltzeiten, kein Geoblocking für Schweizer Sender und super freundlicher Kundendienst auf WhatsApp.",
        device: "Apple TV 4K (IPTVX)",
        date: "Vor 2 Wochen",
        verified: "Verifizierter Käufer",
        avatar: "/images/revriw/avatars/avatar-4.webp",
      },
      {
        name: "Murat Y.",
        city: "Berlin",
        rating: 5,
        review:
          "Sowohl die deutschen als auch die türkischen Sender (Süper Lig & beIN Sports) laufen einwandfrei in FHD/4K. Bestes IPTV, das ich je hatte.",
        device: "LG OLED Smart TV (IBO Player)",
        date: "Vor 2 Wochen",
        verified: "Verifizierter Käufer",
        avatar: "/images/revriw/avatars/avatar-5.webp",
      },
      {
        name: "Christian H.",
        city: "Köln",
        rating: 5,
        review:
          "Jahresabo abgeschlossen und noch keinen einzigen Cent bereut. Formel 1 in 4K und alle DAZN Kanäle ohne Unterbrechung. Klare Empfehlung für jeden Sportfan!",
        device: "Formuler Z11 Pro Max",
        date: "Vor 3 Wochen",
        verified: "Verifizierter Käufer",
        avatar: "/images/revriw/avatars/avatar-6.webp",
      },
    ],
  },

  faq: {
    badge: "Häufig gestellte Fragen (FAQ)",
    title: "Alles, was Sie über unseren IPTV Service wissen müssen",
    subtitle: "Detaillierte Antworten auf die wichtigsten Fragen zu Bundesliga, Fire TV Stick, 4K Streaming, Stabilität und Bezahlung.",
    items: [
      {
        question: "Was ist IPTV und wie funktioniert es in Deutschland?",
        answer:
          "IPTV steht für Internet Protocol Television und überträgt Fernsehsender, Live-Sport und Video-on-Demand (VOD) digital über Ihre Breitband-Internetverbindung. Anstelle von Kabelanschluss oder Satellitenschüssel empfangen Sie das Signal direkt über moderne Streaming-Apps (wie TiviMate, IPTV Smarters Pro oder IBO Player) auf Ihrem Smart TV, Fire TV Stick, Smartphone oder PC.",
      },
      {
        question: "Ist IPTV in Deutschland legal?",
        answer:
          "Die IPTV-Technologie an sich ist in Deutschland vollkommen legal und wird standardmäßig von großen Telekommunikationsanbietern wie Telekom (MagentaTV) oder Vodafone eingesetzt. Als Nutzer empfangen Sie digitale Streams über standardisierte Protokolle (M3U / Xtream Codes API). Unser Service bietet Ihnen stabilen Zugriff auf internationale und frei empfangbare Sender sowie leistungsstarke europäische High-End Server.",
      },
      {
        question: "Wie unterscheidet sich Deutschland IPTV von günstigen Standardanbietern?",
        answer:
          "Viele Billiganbieter überbuchen ihre Server mit tausenden Nutzern, was bei Top-Spielen der Bundesliga oder Champions League zu ständigen Ladekreisen führt. Deutschland IPTV setzt auf dedizierte 10-Gbit/s-Server in Frankfurt am Main und Amsterdam mit unserer Anti-Freeze™ 9.3 Technologie, garantierter Bandbreite, 60 FPS Streams, täglichen VOD-Updates und deutschem 24/7 WhatsApp Support.",
      },
      {
        question: "Benötige ich einen Kabelanschluss, Receiver oder eine Satellitenschüssel?",
        answer:
          "Nein, Sie benötigen keinerlei zusätzliche Hardware wie Satellitenschüsseln oder Kabelverträge. Ein herkömmlicher Internetanschluss und ein beliebiges streamingfähiges Endgerät (z.B. Fire TV Stick, Smart TV, Tablet oder Smartphone) reichen vollkommen aus.",
      },
      {
        question: "Funktioniert der IPTV Dienst auch im Ausland (z.B. Urlaub in Österreich, Schweiz, Spanien)?",
        answer:
          "Ja! Unser IPTV Service funktioniert weltweit ohne Geoblocking. Sie können Ihr Abonnement problemlos auf Reisen in Österreich, der Schweiz, Spanien, der Türkei oder jedem anderen Land über WLAN oder mobile Daten (4G/5G) nutzen.",
      },
      {
        question: "Sind alle Bundesliga-, Champions League- und Formel 1-Übertragungen enthalten?",
        answer:
          "Ja! Unsere Senderlisten enthalten alle relevanten Live-Sport-Kanäle: Sky Sport Bundesliga 1–10 UHD/FHD (in flüssigen 60 FPS), Sky Sport Premier League, DAZN 1 & DAZN 2 HD, MagentaSport (3. Liga & DEL Eishockey), Sky Sport F1 UHD (alle Formel 1 Sessions live), Eurosport 1 & 2 sowie internationale Pay-TV Sportsender ohne Aufpreis.",
      },
      {
        question: "In welcher Bildqualität und Bildwiederholrate (FPS) werden die Sender gestreamt?",
        answer:
          "Wir übertragen unsere Premium-Sender in echtem 4K Ultra HD (3840x2160) sowie Full HD (1080p) mit konstanten 60 Bildern pro Sekunde (60 FPS) und modernster HEVC/H.265 Kompression. Dadurch erleben Sie schnelle Sportübertragungen absolut ruckelfrei und gestochen scharf.",
      },
      {
        question: "Gibt es Verzögerungen (Delay) bei Live-Fussballspielen?",
        answer:
          "Dank unserer optimierten Direct-Routing-Infrastruktur und Low-Latency-Streams beträgt die Signalverzögerung meist nur 3 bis 5 Sekunden gegenüber dem linearen Kabelsignal. Sie erfahren Tore also nicht erst durch Benachrichtigungen auf Ihrem Smartphone.",
      },
      {
        question: "Welche internationalen Sender (Türkei, UK, USA, Arabisch, Ex-Yu, Polen) sind verfügbar?",
        answer:
          "Neben dem kompletten deutschen, österreichischen (ORF, ServusTV) und Schweizer (SRF, Blue Sport) TV-Angebot umfasst unser Paket über 24.000 Sender aus mehr als 50 Ländern, darunter Türkei (beIN Sports, Exxen), UK (Sky UK, TNT Sports), USA, Frankreich, Italien, Polen, Albanien, Arabische Länder und Balkan.",
      },
      {
        question: "Wie oft wird die VOD Mediathek (Filme & Serien) aktualisiert?",
        answer:
          "Unsere VOD-Mediathek mit über 120.000 Titeln wird täglich mit den neuesten Kinofilmen, Netflix-, Amazon Prime-, Disney+ und HBO-Serien in 4K/FHD mit deutscher Tonspur und mehrsprachigen Untertiteln aktualisiert.",
      },
      {
        question: "Welche IPTV App ist die beste für den Amazon Fire TV Stick?",
        answer:
          "Für den Amazon Fire TV Stick (4K, 4K Max & Cube) empfehlen wir 'TiviMate IPTV Player' (beste Benutzeroberfläche und EPG-Darstellung), gefolgt von 'IPTV Smarters Pro' und 'XCIPTV'. Die Installation dauert über die App 'Downloader' weniger als 3 Minuten.",
      },
      {
        question: "Wie installiere ich IPTV auf einem Samsung oder LG Smart TV?",
        answer:
          "Auf Samsung Smart TVs (Tizen OS) und LG Smart TVs (webOS) können Sie Apps wie 'IBO Player Pro', 'IPTV Smarters Player', 'Flix IPTV' oder 'Nanomid Player' direkt aus dem offiziellen TV-App-Store installieren. Nach dem Start tragen Sie einfach Ihre Mac-Adresse oder Xtream Codes Zugangsdaten ein.",
      },
      {
        question: "Funktioniert IPTV auf Android Boxen, Apple TV, PC und Smartphones?",
        answer:
          "Ja! Kompatibel sind: Android TV / Boxen (Nvidia Shield, Formuler, Xiaomi Mi Box), Apple TV & iOS (IPTVX, GSE Smart IPTV, Smarters Player Lite), Windows PC & Mac (VLC Media Player, IPTV Smarters Pro Windows App) sowie Android Smartphones und Tablets.",
      },
      {
        question: "Was ist der Unterschied zwischen M3U Playlist-URL und Xtream Codes API?",
        answer:
          "Eine M3U Playlist ist ein langer Link, der alle Sender in einer Datei lädt. Der Xtream Codes API Login (Server-URL, Benutzername & Passwort) ist moderner, lädt Senderlisten und den elektronischen Programmführer (EPG) viel schneller und unterteilt Live TV, Filme und Serien übersichtlich in Kategorien.",
      },
      {
        question: "Wie funktioniert der elektronische Programmführer (EPG TV-Guide)?",
        answer:
          "Der EPG synchronisiert sich bei Nutzung des Xtream Codes Logins in Apps wie TiviMate oder Smarters Pro vollautomatisch. Sie sehen 7 Tage im Voraus das aktuelle Programm mit Sendungsbeschreibungen, Startzeiten und Vorschaubildern.",
      },
      {
        question: "Welche Internetgeschwindigkeit benötige ich für flüssiges 4K Streaming?",
        answer:
          "Für stabiles SD/HD Streaming reichen bereits 15 Mbit/s. Für Full HD (1080p 60 FPS) und 4K Ultra HD Streaming empfehlen wir eine stabile Verbindung von mindestens 25 bis 50 Mbit/s. Für beste Ergebnisse verbinden Sie Ihr TV-Gerät nach Möglichkeit per LAN-Kabel oder 5 GHz WLAN.",
      },
      {
        question: "Was kann ich tun, wenn mein IPTV Stream ruckelt oder puffert?",
        answer:
          "1. Schließen Sie Ihr Gerät per LAN-Kabel an den Router an. 2. Stellen Sie in Ihrer IPTV App den Hardware-Decoder (HW+) und einen Stream-Puffer von 3000 ms ein. 3. Starten Sie Ihren Router neu (um DNS-Cache zu leeren). 4. Ändern Sie bei Bedarf den DNS-Server im Router auf Cloudflare (1.1.1.1) oder Google (8.8.8.8). Unser Anti-Freeze 9.3 System schaltet bei Netzwerkengpässen automatisch auf Ersatz-Server um.",
      },
      {
        question: "Benötige ich in Deutschland zwingend ein VPN für IPTV?",
        answer:
          "Nein, ein VPN ist nicht zwingend notwendig, da unsere Rechenzentren für deutsche Internetanbieter (Telekom, Vodafone, 1&1, O2) optimiert sind. Wenn Sie jedoch zusätzliche Privatsphäre wünschen oder Ihr Provider Ports drosselt, können Sie problemlos jedes VPN (z.B. NordVPN, Surfshark, ExpressVPN) nutzen.",
      },
      {
        question: "Wie verhindert die Anti-Freeze™ 9.3 Technologie Serverausfälle?",
        answer:
          "Anti-Freeze™ 9.3 ist unser intelligentes Load-Balancing-Protokoll. Es verteilt den Datenverkehr dynamisch auf mehrere Rechenzentren in Frankfurt, Amsterdam und Zürich. Sollte ein Server eine hohe Auslastung verzeichnen, schaltet der Stream ohne sichtbare Unterbrechung für den Zuschauer auf einen Backup-Stream um.",
      },
      {
        question: "Drosseln deutsche Internetprovider wie Telekom oder Vodafone IPTV Verbindungen?",
        answer:
          "Einige Internetprovider drosseln während populärer Live-Sport-Events bestimmte Peering-Knotenpunkte. Unser CDN nutzt direkte Tier-1 Uplinks und umgeht solche Engpässe zuverlässig, sodass Sie auch samstags um 15:30 Uhr unterbrechungsfrei streamen.",
      },
      {
        question: "Wie schnell erhalte ich meine Zugangsdaten nach Bestellung oder Testanforderung?",
        answer:
          "Die Bereitstellung erfolgt vollautomatisch: Nach Ihrer Bestellung oder Testanfrage erhalten Sie Ihre Xtream Codes Zugangsdaten, M3U Playlist-URL und Einrichtungsanleitung innerhalb von 2 bis maximal 5 Minuten per E-Mail und auf Wunsch direkt via WhatsApp.",
      },
      {
        question: "Kann ich den IPTV Dienst vorab 24 Stunden kostenlos testen?",
        answer:
          "Ja! Wir bieten einen 100% kostenlosen und unverbindlichen 24-Stunden-Test an. Sie benötigen keine Kreditkarte und der Testzugang läuft nach 24 Stunden automatisch aus, ohne dass ein kostenpflichtiges Abonnement entsteht.",
      },
      {
        question: "Welche Zahlungsmethoden werden akzeptiert?",
        answer:
          "Wir unterstützen alle sicheren und gängigen Zahlungsmethoden: PayPal (auf Anfrage via Support), Kreditkarte (Visa, Mastercard, Maestro), Giropay, Sofortüberweisung, Revolut, Paysafecard sowie Kryptowährungen (Bitcoin, USDT, Ethereum) für maximale Anonymität.",
      },
      {
        question: "Wie funktioniert die 7 Tage Geld-zurück-Garantie?",
        answer:
          "Sollten Sie nach dem Kauf aus irgendeinem Grund nicht vollständig mit Bildqualität, Senderangebot oder Serverstabilität zufrieden sein, schreiben Sie einfach unserem 24/7 WhatsApp oder E-Mail Support. Wir erstatten Ihnen 100% des gezahlten Betrags innerhalb weniger Stunden – ohne Wenn und Aber.",
      },
      {
        question: "Kann ich das Abonnement auf mehreren Geräten gleichzeitig nutzen (Multiroom)?",
        answer:
          "Unsere Standard-Pakete beinhalten 1 Verbindung. Wenn Sie in verschiedenen Räumen gleichzeitig streamen möchten, können Sie im Bestellprozess die 2-Geräte-Option (Multiroom) auswählen oder unser 24-Monats-Paket wählen, bei dem 2 gleichzeitige Verbindungen bereits inklusive sind.",
      },
      {
        question: "Gibt es automatische Vertragsverlängerungen oder Abo-Fallen?",
        answer:
          "Nein! Bei uns gibt es keine automatischen Abo-Verlängerungen und keine Kündigungsfristen. Sie zahlen einmalig für den gewählten Zeitraum (1, 3, 6, 12 oder 24 Monate). Wenn die Laufzeit endet, entscheiden Sie selbst, ob Sie verlängern möchten.",
      },
      {
        question: "Bieten Sie auch IPTV Reseller Pakete mit eigenem Panel an?",
        answer:
          "Ja! Für Wiederverkäufer bieten wir professionelle Xtream UI Reseller Panels mit Credit-System (100 bis 1000 Credits) an. Sie können eigene Testaccounts erstellen, Sub-Reseller anlegen, eigene DNS nutzen und von Margen bis zu 300% profitieren.",
      },
    ],
  },

  trial: {
    badge: "⚡ 100% Kostenlos & Unverbindlich",
    title: "Kostenlosen 24h IPTV Testzugang anfordern",
    subtitle: "Überzeugen Sie sich selbst von über 24.000 Sendern und 4K Anti-Freeze Qualität.",
    formName: "Ihr vollständiger Name",
    formEmail: "Ihre E-Mail-Adresse für die Zugangsdaten",
    formWhatsapp: "Ihre WhatsApp Nummer (für schnellste Freischaltung)",
    formDevice: "Ihr Endgerät (z.B. Fire TV Stick, Samsung TV, Android)",
    formApp: "Ihre bevorzugte App (z.B. TiviMate, Smarters Pro, IBO Player)",
    formSubmit: "Kostenlosen 24h Test jetzt anfordern",
    formSubmitting: "Zugang wird generiert...",
    formSuccessTitle: "Testzugang erfolgreich angefordert!",
    formSuccessDesc: "Wir haben Ihre Daten erhalten. Ihre Zugangsdaten werden in wenigen Minuten per WhatsApp und E-Mail zugestellt.",
    noCardRequired: "Keine Kreditkarte erforderlich",
    instantDelivery: "Lieferung in unter 5 Minuten",
  },

  reseller: {
    badge: "B2B Reseller Programm",
    title: "Starten Sie Ihr eigenes IPTV Geschäft mit unserem Reseller Panel",
    subtitle: "Attraktive Margen, unbegrenzte Sub-Reseller und erstklassige Server-Infrastruktur.",
    cta: "Reseller Panel anfragen",
  },

  footer: {
    aboutTitle: "Über Deutschland IPTV",
    aboutText:
      "Ihr führender Premium-IPTV-Dienst in Deutschland, Österreich und der Schweiz. Über 24.000 Live-Sender, 120.000+ VODs, 4K/60FPS Sportübertragungen und 99.9% Uptime ohne Ruckeln.",
    col1Title: "IPTV Kaufen & Test",
    col2Title: "Live-Sport & Sender",
    col3Title: "Geräte & Installation",
    col4Title: "Apps & Soforthilfe",
    seoKeywordsTitle: "Beliebte IPTV Suchbegriffe & Themen in Deutschland:",
    rightsReserved: "Alle Rechte vorbehalten.",
    paymentNote: "Zahlungsarten: PayPal, Visa, Mastercard, Giropay, Sofort, Revolut, Paysafecard, Bitcoin & Krypto",
    trust1: "7 Tage Geld-zurück-Garantie",
    trust2: "256-Bit SSL Verschlüsselt",
    trust3: "100% Anonym & Sicher",
    imprint: "Impressum",
    privacy: "Datenschutz",
    terms: "AGB",
    withdrawal: "Widerrufsbelehrung",
  },

  seoPages: seoPagesData,
  seoKeywords: [
    "IPTV Deutschland",
    "Bester IPTV Anbieter 2026",
    "IPTV Kaufen Legal",
    "IPTV Test 24 Stunden",
    "IPTV Kostenlos Testen",
    "IPTV Bundesliga Live Stream",
    "Sky Sport & DAZN IPTV",
    "IPTV Fire TV Stick Anleitung",
    "IPTV auf Samsung TV Einrichten",
    "TiviMate IPTV Player Setup",
    "IPTV Smarters Pro Download",
    "IPTV M3U Playlist Deutschland",
    "Xtream Codes API Zugangsdaten",
    "IPTV Funktioniert Nicht – Lösung",
    "IPTV Ruckelt Was Tun",
    "Kodi IPTV Simple Client",
    "Günstiger IPTV Anbieter",
    "Seriöse IPTV Erfahrungen",
    "IPTV Reseller Panel Deutschland",
    "IPTV Preise & Jahresabo",
  ],
};
