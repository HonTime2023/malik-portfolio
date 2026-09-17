import { NextResponse } from "next/server";
import { siteConfig } from "@/config/siteData";

export const runtime = "nodejs";

type ScholarPub = { title: string; link: string; year: string; citedBy: string };

function decodeEntities(str: string) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .trim();
}

function parseScholarHtml(html: string): ScholarPub[] {
  const rows = html.match(/<tr class="gsc_a_tr">[\s\S]*?<\/tr>/g) ?? [];
  return rows
    .map((row) => {
      const titleMatch = row.match(/<a[^>]*class="gsc_a_at"[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/);
      const yearMatch = row.match(/<span class="gsc_a_h[^"]*">([\s\S]*?)<\/span>/);
      const citedMatch = row.match(/<a class="gsc_a_ac[^"]*"[^>]*>([\s\S]*?)<\/a>/);
      return {
        title: titleMatch ? decodeEntities(titleMatch[2].replace(/<[^>]+>/g, "")) : "",
        link: titleMatch ? `https://scholar.google.com${titleMatch[1]}` : "",
        year: yearMatch ? decodeEntities(yearMatch[1]) : "",
        citedBy: citedMatch ? decodeEntities(citedMatch[1]) : "",
      };
    })
    .filter((pub) => pub.title) // skip rows that didn't actually parse into a real publication
    .slice(0, 5);
}

export async function GET() {
  const scholarId = siteConfig.googleScholarId;
  if (!scholarId) {
    return NextResponse.json(
      { connected: false, items: [] },
      { headers: { "Cache-Control": "public, s-maxage=3600" } }
    );
  }

  try {
    const res = await fetch(
      `https://scholar.google.com/citations?user=${scholarId}&hl=en&sortby=pubdate`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        },
        next: { revalidate: 86400 }, // Scholar publications don't change hourly — once a day is plenty
      }
    );
    if (!res.ok) {
      return NextResponse.json({ connected: false, items: [] });
    }
    const html = await res.text();
    const items = parseScholarHtml(html);
    return NextResponse.json(
      { connected: true, items },
      { headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=172800" } }
    );
  } catch {
    return NextResponse.json({ connected: false, items: [] });
  }
}
