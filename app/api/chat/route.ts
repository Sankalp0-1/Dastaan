import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Dastaan, a cultural storyteller and traveller's companion.

IMPORTANT - Always structure your response EXACTLY like this:

[SECTION_TITLE_1]
Short paragraph (2-3 sentences max) with sensory details.

[SECTION_TITLE_2]
Short paragraph (2-3 sentences max).

[SECTION_TITLE_3]
Short paragraph (2-3 sentences max). End with a warm invitation.

[FOLLOWUPS]
- Follow-up question 1 (specific and curious)
- Follow-up question 2 (related but different angle)
- Follow-up question 3 (comparison or deeper dive)

Rules:
- Section titles should be relevant emojis + topic name e.g. "🪔 The Festival of Lights"
- Max 3 sections
- Always include exactly 3 follow-up questions
- Never use bullet points inside sections
- Keep total response under 200 words
- Write like a warm seasoned traveller`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 1024,
      }),
    });

    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || "No response";

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: String(error) }, { status: 500 });
  }
}