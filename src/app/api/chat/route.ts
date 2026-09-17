import { NextRequest, NextResponse } from "next/server";
import { buildKnowledgeBase, SYSTEM_INSTRUCTION } from "@/config/aiKnowledge";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const messages = (body.messages ?? []).slice(-12); // keep payloads small
  if (messages.length === 0) {
    return NextResponse.json({ error: "No messages provided." }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        reply:
          "The AI assistant isn't wired up yet — but you can still reach Malik directly at belloayopelumi@gmail.com or via LinkedIn.",
      },
      { status: 200 }
    );
  }

  const model = process.env.GEMINI_MODEL || "gemini-3.6-flash";
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content.slice(0, 2000) }],
  }));

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nCONTEXT ABOUT MALIK:\n${buildKnowledgeBase()}` }],
          },
          contents,
          generationConfig: { temperature: 0.95, topP: 0.95, maxOutputTokens: 650 },
        }),
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { reply: "The AI hit a snag processing that. Try again, or email belloayopelumi@gmail.com directly." },
        { status: 200 }
      );
    }

    const data = await res.json();
    const text: string =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text ?? "").join("") ??
      "I couldn't generate a response — try rephrasing, or reach Malik directly at belloayopelumi@gmail.com.";

    return NextResponse.json({ reply: text });
  } catch {
    return NextResponse.json(
      { reply: "Something went wrong reaching the AI. You can always email belloayopelumi@gmail.com directly." },
      { status: 200 }
    );
  }
}
