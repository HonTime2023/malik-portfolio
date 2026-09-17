import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SCOPES = "user-read-currently-playing user-read-playback-state";

export async function GET(req: NextRequest) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json({ error: "SPOTIFY_CLIENT_ID is not configured yet." }, { status: 503 });
  }

  const redirectUri = `${req.nextUrl.origin}/api/spotify/callback`;
  const url = new URL("https://accounts.spotify.com/authorize");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("scope", SCOPES);

  return NextResponse.redirect(url.toString());
}
