import { NextRequest, NextResponse } from "next/server";
import {
  getTrendingAll,
  getPopularMovies,
  getPopularSeries,
  searchVod,
  fallbackVodList,
} from "@/lib/tmdb";

export const dynamic = "force-dynamic";

// Shared CDN/browser cache: identical tab/search requests are served without hitting TMDB again
const CACHE_HEADERS = {
  "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "trending";
  const query = searchParams.get("q") || "";

  try {
    if (query && query.trim().length > 0) {
      const results = await searchVod(query);
      return NextResponse.json({ success: true, data: results }, { headers: CACHE_HEADERS });
    }

    if (type === "movies") {
      const movies = await getPopularMovies();
      return NextResponse.json({ success: true, data: movies }, { headers: CACHE_HEADERS });
    }

    if (type === "series") {
      const series = await getPopularSeries();
      return NextResponse.json({ success: true, data: series }, { headers: CACHE_HEADERS });
    }

    // Default: trending
    const trending = await getTrendingAll();
    return NextResponse.json({ success: true, data: trending }, { headers: CACHE_HEADERS });
  } catch (error) {
    console.error("VOD API error:", error);
    return NextResponse.json({
      success: true,
      data: fallbackVodList,
      note: "Using offline fallback",
    });
  }
}
