export interface VodItem {
  id: number | string;
  title: string;
  originalTitle?: string;
  overview: string;
  posterPath: string;
  backdropPath?: string;
  rating: number;
  voteCount?: number;
  releaseYear: string;
  mediaType: "movie" | "tv";
  genres: string[];
  quality: "4K UHD" | "1080p FHD" | "HDR 10+";
  audio: string;
  isTrending?: boolean;
}

const TMDB_API_KEY =
  process.env.TMDB_API_KEY ||
  process.env.NEXT_PUBLIC_TMDB_API_KEY ||
  "c4b773391ceaf183c149e98d16fa779a";

const TMDB_ACCESS_TOKEN =
  process.env.TMDB_ACCESS_TOKEN ||
  process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN ||
  "";

const OMDB_API_KEY = process.env.OMDB_API_KEY || "231d501c";

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
const TMDB_BACKDROP_BASE = "https://image.tmdb.org/t/p/w1280";

const GENRE_MAP: Record<number, string> = {
  28: "Action",
  12: "Abenteuer",
  16: "Animation",
  35: "Komödie",
  80: "Krimi",
  99: "Doku",
  18: "Drama",
  10751: "Familie",
  14: "Fantasy",
  36: "Historie",
  27: "Horror",
  10402: "Musik",
  9648: "Mystery",
  10749: "Romantik",
  878: "Sci-Fi",
  10770: "TV-Film",
  53: "Thriller",
  10752: "Krieg",
  37: "Western",
  10759: "Action & Adventure",
  10762: "Kids",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
};

// Rich curated editorial fallback list (100% German localized with 4K UHD posters)
export const fallbackVodList: VodItem[] = [
  {
    id: 693134,
    title: "Dune: Part Two",
    overview:
      "Paul Atreides verbündet sich mit Chani und den Fremen auf seinem Rachefeldzug gegen die Verschwörer, die seine Familie vernichtet haben.",
    posterPath: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdropPath: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s520QIe.jpg",
    rating: 8.3,
    releaseYear: "2024",
    mediaType: "movie",
    genres: ["Sci-Fi", "Abenteuer", "Drama"],
    quality: "4K UHD",
    audio: "Deutsch (Dolby Atmos)",
    isTrending: true,
  },
  {
    id: 533535,
    title: "Deadpool & Wolverine",
    overview:
      "Wade Wilson wird aus seinem ruhigen Leben gerissen und muss gemeinsam mit einem widerwilligen Wolverine das Multiversum retten.",
    posterPath: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    backdropPath: "https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
    rating: 7.7,
    releaseYear: "2024",
    mediaType: "movie",
    genres: ["Action", "Komödie", "Sci-Fi"],
    quality: "4K UHD",
    audio: "Deutsch (Dolby 5.1)",
    isTrending: true,
  },
  {
    id: 945961,
    title: "Alien: Romulus",
    overview:
      "Eine Gruppe junger Weltraum-Kolonisten stößt bei der Plünderung einer verlassenen Raumstation auf die furchterregendste Lebensform des Universums.",
    posterPath: "https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao8l3Mie40nQ0b5.jpg",
    backdropPath: "https://image.tmdb.org/t/p/w1280/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
    rating: 7.3,
    releaseYear: "2024",
    mediaType: "movie",
    genres: ["Horror", "Sci-Fi", "Thriller"],
    quality: "4K UHD",
    audio: "Deutsch (Dolby Atmos)",
    isTrending: true,
  },
  {
    id: 558449,
    title: "Gladiator II",
    overview:
      "Jahre nachdem er den Tod des verehrten Helden Maximus miterlebt hat, muss Lucius das Kolosseum betreten, nachdem seine Heimat von den tyrannischen Kaisern erobert wurde.",
    posterPath: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    backdropPath: "https://image.tmdb.org/t/p/w1280/euYIwmqkmz95mnXvufEmbL6ovhZ.jpg",
    rating: 7.5,
    releaseYear: "2024",
    mediaType: "movie",
    genres: ["Action", "Drama", "Historie"],
    quality: "4K UHD",
    audio: "Deutsch (Dolby Atmos)",
    isTrending: true,
  },
  {
    id: 872585,
    title: "Oppenheimer",
    overview:
      "Die packende Geschichte des theoretischen Physikers J. Robert Oppenheimer und seiner entscheidenden Rolle bei der Entwicklung der ersten Atombombe.",
    posterPath: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdropPath: "https://image.tmdb.org/t/p/w1280/fm6K9vYQ7jSSjZKDYJNX9NMIuWW.jpg",
    rating: 8.1,
    releaseYear: "2023",
    mediaType: "movie",
    genres: ["Drama", "Historie", "Biografie"],
    quality: "4K UHD",
    audio: "Deutsch (Dolby Atmos)",
    isTrending: false,
  },
  {
    id: 94997,
    title: "House of the Dragon",
    overview:
      "Die Geschichte des Hauses Targaryen, rund 200 Jahre vor den Ereignissen von Game of Thrones und der Beginn des verheerenden Drachentanzes.",
    posterPath: "https://image.tmdb.org/t/p/w500/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg",
    backdropPath: "https://image.tmdb.org/t/p/w1280/etj5CuMuam3hD6p5gD7Lz7u7ZqW.jpg",
    rating: 8.4,
    releaseYear: "Staffel 1-2",
    mediaType: "tv",
    genres: ["Drama", "Sci-Fi & Fantasy", "Action"],
    quality: "4K UHD",
    audio: "Deutsch (5.1)",
    isTrending: true,
  },
  {
    id: 106379,
    title: "Fallout",
    overview:
      "In einer postapokalyptischen Zukunft verlässt eine junge Frau ihren sicheren Atombunker und entdeckt ein bizarres, gnadenloses Ödland an der Oberfläche.",
    posterPath: "https://image.tmdb.org/t/p/w500/ansA0hHkWxZ5wQ3bM63r2vM6s.jpg",
    backdropPath: "https://image.tmdb.org/t/p/w1280/8Z0BfxZtq7GZ6F5V7V7V7V7V.jpg",
    rating: 8.3,
    releaseYear: "Staffel 1",
    mediaType: "tv",
    genres: ["Sci-Fi", "Action", "Abenteuer"],
    quality: "4K UHD",
    audio: "Deutsch (Dolby 5.1)",
    isTrending: true,
  },
  {
    id: 1396,
    title: "Breaking Bad",
    overview:
      "Ein an Krebs erkrankter Chemielehrer beginnt zusammen mit einem ehemaligen Schüler Crystal Meth herzustellen, um die Zukunft seiner Familie abzusichern.",
    posterPath: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    backdropPath: "https://image.tmdb.org/t/p/w1280/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    rating: 8.9,
    releaseYear: "Komplett S1-5",
    mediaType: "tv",
    genres: ["Drama", "Krimi"],
    quality: "4K UHD",
    audio: "Deutsch (Dolby 5.1)",
    isTrending: false,
  },
  {
    id: 76479,
    title: "The Boys",
    overview:
      "Eine Gruppe von Vigilanten setzt sich zum Ziel, korrupte Superhelden zur Rechenschaft zu ziehen, die ihre Kräfte skrupellos missbrauchen.",
    posterPath: "https://image.tmdb.org/t/p/w500/2zmTngn1tYCzAvfnrFLhxeD82hz.jpg",
    backdropPath: "https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2Y597x0eo.jpg",
    rating: 8.5,
    releaseYear: "Staffel 1-4",
    mediaType: "tv",
    genres: ["Action", "Sci-Fi", "Komödie"],
    quality: "4K UHD",
    audio: "Deutsch (Dolby Atmos)",
    isTrending: true,
  },
  {
    id: 119051,
    title: "Wednesday",
    overview:
      "Wednesday Addams untersucht an der Nevermore Academy eine übernatürliche Mordserie und meistert dabei ihre eigenen Fähigkeiten.",
    posterPath: "https://image.tmdb.org/t/p/w500/9PFonQ921jhuTMqq2r09czUpRuo.jpg",
    backdropPath: "https://image.tmdb.org/t/p/w1280/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    rating: 8.5,
    releaseYear: "Staffel 1",
    mediaType: "tv",
    genres: ["Fantasy", "Mystery", "Komödie"],
    quality: "4K UHD",
    audio: "Deutsch (Dolby 5.1)",
    isTrending: false,
  },
  {
    id: 93405,
    title: "Squid Game",
    overview:
      "Hunderte hoch verschuldete Menschen nehmen an einem mysteriösen Überlebensspiel teil, um ein Vermögen zu gewinnen – doch der Einsatz ist tödlich.",
    posterPath: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    backdropPath: "https://image.tmdb.org/t/p/w1280/oaGvjB0DvdurWhfIL67IlN970Rw.jpg",
    rating: 7.8,
    releaseYear: "Staffel 1-2",
    mediaType: "tv",
    genres: ["Drama", "Mystery", "Thriller"],
    quality: "4K UHD",
    audio: "Deutsch (Dolby Atmos)",
    isTrending: true,
  },
  {
    id: 1022789,
    title: "Alles steht Kopf 2 (Inside Out 2)",
    overview:
      "Riley betritt das Teenager-Alter und ihre vertrauten Emotionen Freude, Kummer, Wut, Angst und Ekel bekommen plötzlich neue Mitbewohner.",
    posterPath: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    backdropPath: "https://image.tmdb.org/t/p/w1280/xg27NrXi7EgCGUrq56iCjVd71yG.jpg",
    rating: 7.6,
    releaseYear: "2024",
    mediaType: "movie",
    genres: ["Animation", "Familie", "Komödie"],
    quality: "4K UHD",
    audio: "Deutsch (Dolby Atmos)",
    isTrending: true,
  },
];

export async function fetchFromTmdb(
  endpoint: string,
  params: Record<string, string> = {}
) {
  const urlParams = new URLSearchParams({
    language: "de-DE",
    api_key: TMDB_API_KEY,
    ...params,
  });

  const url = `https://api.themoviedb.org/3${endpoint}?${urlParams.toString()}`;

  const headers: HeadersInit = {
    Accept: "application/json",
  };

  if (TMDB_ACCESS_TOKEN) {
    headers["Authorization"] = `Bearer ${TMDB_ACCESS_TOKEN}`;
  }

  try {
    const res = await fetch(url, {
      headers,
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.warn(`TMDB API returned ${res.status} for ${endpoint}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching TMDB ${endpoint}:`, error);
    return null;
  }
}

export function formatTmdbItem(item: any, type: "movie" | "tv"): VodItem {
  const title = item.title || item.name || "Unbekannter Titel";
  const rawDate = item.release_date || item.first_air_date || "";
  const releaseYear = rawDate ? rawDate.split("-")[0] : "2024";

  const posterPath = item.poster_path
    ? `${TMDB_IMAGE_BASE}${item.poster_path}`
    : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80";

  const backdropPath = item.backdrop_path
    ? `${TMDB_BACKDROP_BASE}${item.backdrop_path}`
    : undefined;

  const genres =
    item.genre_ids && Array.isArray(item.genre_ids)
      ? item.genre_ids.map((id: number) => GENRE_MAP[id] || "VOD").slice(0, 3)
      : ["4K VOD"];

  const rating = item.vote_average
    ? Math.round(item.vote_average * 10) / 10
    : 8.0;

  return {
    id: item.id,
    title,
    originalTitle: item.original_title || item.original_name,
    overview:
      item.overview ||
      "Verfügbar auf Deutsch in 4K UHD mit deutscher Tonspur und Untertiteln in unserer 120.000+ VOD Bibliothek.",
    posterPath,
    backdropPath,
    rating,
    voteCount: item.vote_count,
    releaseYear,
    mediaType: type,
    genres: genres.length > 0 ? genres : ["Kino VOD"],
    quality: "4K UHD",
    audio: "Deutsch (Dolby 5.1 / Atmos)",
    isTrending: rating >= 7.5,
  };
}

export async function getPopularMovies(): Promise<VodItem[]> {
  const data = await fetchFromTmdb("/movie/popular");
  if (data && data.results && Array.isArray(data.results)) {
    return data.results.slice(0, 12).map((m: any) => formatTmdbItem(m, "movie"));
  }
  return fallbackVodList.filter((item) => item.mediaType === "movie");
}

export async function getPopularSeries(): Promise<VodItem[]> {
  const data = await fetchFromTmdb("/tv/popular");
  if (data && data.results && Array.isArray(data.results)) {
    return data.results.slice(0, 12).map((s: any) => formatTmdbItem(s, "tv"));
  }
  return fallbackVodList.filter((item) => item.mediaType === "tv");
}

export async function getTrendingAll(): Promise<VodItem[]> {
  const data = await fetchFromTmdb("/trending/all/week");
  if (data && data.results && Array.isArray(data.results)) {
    return data.results
      .slice(0, 16)
      .map((item: any) =>
        formatTmdbItem(item, item.media_type === "tv" ? "tv" : "movie")
      );
  }
  return fallbackVodList;
}

export async function searchVod(query: string): Promise<VodItem[]> {
  if (!query || query.trim().length === 0) return fallbackVodList;

  // Search TMDB first
  const data = await fetchFromTmdb("/search/multi", { query: query.trim() });
  if (data && data.results && Array.isArray(data.results) && data.results.length > 0) {
    return data.results
      .filter((r: any) => r.media_type === "movie" || r.media_type === "tv")
      .slice(0, 10)
      .map((item: any) =>
        formatTmdbItem(item, item.media_type === "tv" ? "tv" : "movie")
      );
  }

  // Fallback to local filter
  const q = query.toLowerCase();
  const matched = fallbackVodList.filter(
    (v) =>
      v.title.toLowerCase().includes(q) ||
      v.genres.some((g) => g.toLowerCase().includes(q))
  );

  return matched.length > 0 ? matched : fallbackVodList.slice(0, 6);
}

export async function getOmdbDetails(title: string) {
  if (!OMDB_API_KEY) return null;
  try {
    const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(
      title
    )}&plot=full`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
