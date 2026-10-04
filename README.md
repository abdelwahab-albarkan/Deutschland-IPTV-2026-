# Germany IPTV - Next.js High-Performance Portal

Ein hochmodernes, SEO-optimiertes Webportal für Premium IPTV-Dienste in Deutschland, Österreich und der Schweiz (DACH-Region).

## 🚀 Technologien

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS mit Custom Glassmorphism & Glowing Effects
- **Icons:** Lucide React
- **SEO:** Dynamische Metadaten, OpenGraph, JSON-LD Structured Data (Organization, Product, FAQPage, BreadcrumbList)
- **Deployment:** Vercel / Node.js Server

## 📁 Projektstruktur

```text
germany-iptv/
├── app/                  # App Router Seiten & API Endpunkte
├── components/           # Wiederverwendbare UI & Domain Komponenten
│   ├── content/          # SEO & Content Blöcke
│   ├── devices/          # Anleitungen für Firestick, Smart TV, Android, etc.
│   ├── home/             # Startseiten-Sektionen
│   ├── layout/           # Header, Footer, Navigation
│   ├── pricing/          # Preiskarten & Toggle
│   ├── reseller/         # Reseller Panel Präsentation
│   ├── seo/              # JSON-LD Schema Generatoren
│   └── trial/            # 24h Test Anforderungsformular
├── data/                 # Strukturierte Daten (Preise, FAQs, Anleitungen)
├── lib/                  # Hilfsfunktionen & Konfigurationen
├── public/               # Statische Assets & Icons
└── types/                # TypeScript Schnittstellen
```

## 🛠️ Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Der Server ist erreichbar unter [http://localhost:3000](http://localhost:3000).

## 📦 Production Build

```bash
npm run build
npm start
```
