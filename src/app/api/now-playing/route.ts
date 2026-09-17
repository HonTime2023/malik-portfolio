import { NextResponse } from "next/server";

export const runtime = "nodejs";

async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return null;

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.access_token as string;
}

export async function GET() {
  const token = await getAccessToken();
  if (!token) {
    return NextResponse.json({ connected: false }, { headers: { "Cache-Control": "no-store" } });
  }

  const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing?additional_types=track", {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (res.status === 204 || res.status === 202) {
    return NextResponse.json(
      { connected: true, playing: false },
      { headers: { "Cache-Control": "no-store" } }
    );
  }
  if (!res.ok) {
    return NextResponse.json({ connected: true, playing: false }, { headers: { "Cache-Control": "no-store" } });
  }

  const data = await res.json();
  if (!data?.item) {
    return NextResponse.json({ connected: true, playing: false }, { headers: { "Cache-Control": "no-store" } });
  }

  return NextResponse.json(
    {
      connected: true,
      playing: Boolean(data.is_playing),
      track: data.item.name,
      artist: (data.item.artists ?? []).map((a: { name: string }) => a.name).join(", "),
      albumArt: data.item.album?.images?.[0]?.url ?? null,
      spotifyUrl: data.item.external_urls?.spotify ?? "https://open.spotify.com/",
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
