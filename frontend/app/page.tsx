"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

// Shape of each message in the conversation history
interface Message {
  role: "user" | "assistant";
  content: string;
}

// Backend base URL — set NEXT_PUBLIC_API_BASE_URL in .env.local for local dev
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Scroll to the bottom of the message list whenever messages update
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Auto-grow the textarea as the user types
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${ta.scrollHeight}px`;
  }, [input]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setError(null);

    // Optimistically append the user message
    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail ?? `Server error ${res.status}`);
      }

      const data: { reply: string } = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Send on Enter, new line on Shift+Enter
  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function clearChat() {
    setMessages([]);
    setError(null);
  }

  return (
    <main className="page">
      <div className="chat-container">
        {/* Header */}
        <header className="header">
          <h1>🧠 Mental Coach AI</h1>
          <p>Your supportive, always-available mental coach</p>
        </header>

        {/* Message list */}
        <section className="messages" aria-label="Conversation">
          {messages.length === 0 && !loading && (
            <div className="empty-state">
              Start a conversation — ask anything on your mind 💬
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.role}`}>
              <span className="role-label">
                {msg.role === "user" ? "You" : "Coach"}
              </span>
              <div className="bubble">{msg.content}</div>
            </div>
          ))}

          {/* Typing indicator while waiting for the API */}
          {loading && (
            <div className="message assistant">
              <span className="role-label">Coach</span>
              <div className="typing-indicator" aria-label="Coach is typing">
                <span /><span /><span />
              </div>
            </div>
          )}

          {/* Invisible anchor to auto-scroll to */}
          <div ref={bottomRef} />
        </section>

        {/* Error banner */}
        {error && (
          <div className="error-banner" role="alert">
            ⚠️ {error}
          </div>
        )}

        {/* Input row */}
        <div className="input-row">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message… (Enter to send, Shift+Enter for new line)"
            disabled={loading}
            rows={1}
            aria-label="Message input"
          />
          <button
            className="send-btn"
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            aria-label="Send message"
          >
            {loading ? "…" : "Send"}
          </button>
        </div>

        {/* Clear history button — only visible once there are messages */}
        {messages.length > 0 && (
          <button className="clear-btn" onClick={clearChat}>
            Clear chat
          </button>
        )}
      </div>
    </main>
  );
}
