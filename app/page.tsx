"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const SUGGESTED_PROMPTS = [
  { emoji: "🪔", text: "Tell me about Diwali through a local's eyes" },
  { emoji: "🇲🇦", text: "What does a wedding feast look like in Morocco?" },
  { emoji: "🌸", text: "Describe the streets of Kyoto during cherry blossom season" },
  { emoji: "💀", text: "What is the story behind Day of the Dead in Mexico?" },
  { emoji: "🍜", text: "Tell me about food culture in Vietnam" },
  { emoji: "🕌", text: "What is Ramadan like in Cairo?" },
];

type Message = { role: "user" | "assistant"; content: string };

function TypingDots() {
  return (
    <div className="flex gap-1 items-center px-4 py-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="w-2 h-2 rounded-full bg-[#c9a97a] animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
    </div>
  );
}

function parseResponse(text: string) {
  const sections: { title: string; content: string }[] = [];
  const followups: string[] = [];

  // Split by [FOLLOWUPS] first
  const parts = text.split("[FOLLOWUPS]");
  const mainPart = parts[0];
  const followupPart = parts[1] || "";

  // Parse followups
  followupPart.split("\n").forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith("-")) {
      followups.push(trimmed.slice(1).trim());
    }
  });

  // Parse sections - split by [ ... ] markers
  const sectionRegex = /\[([^\]]+)\]\s*([\s\S]*?)(?=\[[^\]]+\]|$)/g;
  let match;
  while ((match = sectionRegex.exec(mainPart)) !== null) {
    const title = match[1].trim();
    const content = match[2].trim();
    if (title && content) {
      sections.push({ title, content });
    }
  }

  // Fallback - if no sections parsed, show raw text without [FOLLOWUPS]
  if (sections.length === 0) {
    sections.push({ title: "", content: mainPart.trim() });
  }

  return { sections, followups };
}

function AssistantMessage({ content, onFollowup }: { content: string; onFollowup: (q: string) => void }) {
  const { sections, followups } = parseResponse(content);

  if (sections.length === 0) {
    return <p className="text-sm leading-relaxed">{content}</p>;
  }

  return (
    <div className="space-y-3">
      {sections.map((s, i) => (
        <div key={i}>
          <p className="font-semibold text-sm mb-1" style={{ color: "#c9a97a" }}>{s.title}</p>
          <p className="text-sm leading-relaxed" style={{ color: "inherit" }}>{s.content}</p>
        </div>
      ))}

      {followups.length > 0 && (
        <div className="mt-3 pt-3 border-t border-[#e8d5b0]">
          <p className="text-xs uppercase tracking-widest text-[#9c7a5a] mb-2">✨ Explore more</p>
          <div className="flex flex-col gap-1">
            {followups.map((q, i) => (
              <button key={i} onClick={() => onFollowup(q)}
  className="text-left text-xs px-3 py-2 rounded-lg border transition-all duration-200 italic w-full"
  style={{ borderColor: "#d4b483", background: "#fdf6e3", color: "#5a3e28" }}
  onMouseEnter={e => {
    (e.currentTarget as HTMLButtonElement).style.background = "#8b5e3c";
    (e.currentTarget as HTMLButtonElement).style.color = "#fdf6e3";
    (e.currentTarget as HTMLButtonElement).style.borderColor = "#8b5e3c";
    (e.currentTarget as HTMLButtonElement).style.transform = "translateX(4px)";
  }}
  onMouseLeave={e => {
    (e.currentTarget as HTMLButtonElement).style.background = "#fdf6e3";
    (e.currentTarget as HTMLButtonElement).style.color = "#5a3e28";
    (e.currentTarget as HTMLButtonElement).style.borderColor = "#d4b483";
    (e.currentTarget as HTMLButtonElement).style.transform = "translateX(0)";
  }}
>
  → {q}
</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const prompt = params.get("prompt");
    if (prompt) { sendMessage(prompt); window.history.replaceState({}, "", "/"); }
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    inputRef.current?.focus();
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.message }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const bg = darkMode ? "#1a1208" : "#f5f0e8";
  const cardBg = darkMode ? "#2c1a0e" : "white";
  const textPrimary = darkMode ? "#fdf6e3" : "#2c1a0e";
  const textSecondary = darkMode ? "#c9a97a" : "#7a5c3a";
  const border = darkMode ? "#5a3e28" : "#d4b483";

  return (
    <main className="min-h-screen flex flex-col items-center transition-colors duration-300"
      style={{ background: bg, color: textPrimary, fontFamily: "Georgia, 'Times New Roman', serif" }}>

      <header className="w-full max-w-2xl pt-8 pb-4 px-4 text-center">
        <div className="flex justify-end mb-2">
          <button onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded-full text-xs border transition-all"
            style={{ borderColor: border, color: textSecondary, background: cardBg }}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
        <h1 className="text-6xl font-bold tracking-tight">Dastaan</h1>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#c9a97a] to-transparent mt-2" />
        <p className="mt-3 text-lg italic" style={{ color: textSecondary }}>
          Every culture has a story. Ask for yours.
        </p>
        <div className="mt-2">
          <Link href="/explore" className="text-xs hover:underline uppercase tracking-widest" style={{ color: "#8b5e3c" }}>
            🗺️ Explore World Map
          </Link>
        </div>
      </header>

      <div className="w-full max-w-2xl flex-1 px-4 pb-4 space-y-4 overflow-y-auto">

        {messages.length === 0 && (
          <div className="mt-4 space-y-3">
            <div className="px-4 py-3 rounded-xl border cursor-pointer hover:shadow-md transition-all"
              style={{ borderColor: "#c9a97a", background: darkMode ? "#2c1a0e" : "#fdf6e3" }}
              onClick={() => sendMessage(SUGGESTED_PROMPTS[Math.floor(Date.now() / 86400000) % SUGGESTED_PROMPTS.length].text)}>
              <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "#9c7a5a" }}>✨ Story of the Day</p>
              <p className="text-sm italic" style={{ color: "#5a3e28" }}>
                "{SUGGESTED_PROMPTS[Math.floor(Date.now() / 86400000) % SUGGESTED_PROMPTS.length].text}"
              </p>
              <p className="text-xs mt-1" style={{ color: "#b09070" }}>Click to explore →</p>
            </div>

            <p className="text-center text-xs uppercase tracking-widest font-semibold" style={{ color: "#9c7a5a" }}>
              Begin your journey
            </p>
            <div className="grid grid-cols-1 gap-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button key={prompt.text} onClick={() => sendMessage(prompt.text)}
                  className="text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm shadow-sm"
                  style={{ background: cardBg, borderColor: border, color: "#5a3e28" }}>
                  <span className="mr-2">{prompt.emoji}</span>
                  <span className="italic">"{prompt.text}"</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-[#8b5e3c] flex items-center justify-center text-white text-xs mr-2 mt-1 shrink-0">د</div>
            )}
            <div className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-sm ${
              msg.role === "user"
                ? "bg-[#8b5e3c] text-[#fdf6e3] rounded-br-sm"
                : "rounded-bl-sm"
            }`} style={msg.role === "assistant" ? { background: cardBg, border: `1px solid ${border}` } : {}}>
              {msg.role === "assistant"
                ? <AssistantMessage content={msg.content} onFollowup={sendMessage} />
                : <p className="text-sm">{msg.content}</p>
              }
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-full bg-[#8b5e3c] flex items-center justify-center text-white text-xs mr-2 mt-1 shrink-0">د</div>
            <div className="rounded-2xl rounded-bl-sm shadow-sm" style={{ background: cardBg, border: `1px solid ${border}` }}>
              <TypingDots />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="w-full max-w-2xl px-4 pb-8 pt-2">
        {messages.length > 0 && (
          <div className="flex gap-2 mb-2 justify-center">
            <button onClick={() => setMessages([])}
              className="text-xs px-3 py-1 rounded-full border transition-all"
              style={{ borderColor: border, color: textSecondary, background: cardBg }}>
              🔄 New conversation
            </button>
          </div>
        )}
        <div className="flex gap-2 items-end rounded-2xl px-4 py-3 shadow-md transition-all duration-200"
          style={{ border: `1px solid #c9a97a`, background: cardBg }}>
          <textarea ref={inputRef} value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); } }}
            placeholder="Ask about any culture, festival, food tradition..."
            rows={1}
            className="flex-1 resize-none bg-transparent outline-none text-sm placeholder:text-[#b09070]"
            style={{ color: textPrimary, fontFamily: "Georgia, serif" }}
          />
          <button onClick={() => sendMessage(input)} disabled={loading || !input.trim()}
            className="w-8 h-8 rounded-full bg-[#8b5e3c] disabled:opacity-30 hover:bg-[#5a3e28] transition-all duration-200 flex items-center justify-center text-white font-bold text-sm">
            ↑
          </button>
        </div>
        <p className="text-center text-xs text-[#b09070] mt-2">Press Enter to send · Shift+Enter for new line</p>
      </div>
    </main>
  );
}

