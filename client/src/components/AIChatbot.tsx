/**
 * AIChatbot.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * A floating AI English Practice Chatbot powered by the OpenAI API.
 *
 * Features:
 *  • Appears as a small "Practice English with AI" button in the bottom-left
 *  • Opens a chat panel where students can practise English conversation
 *  • The AI acts as a friendly English coach, corrects mistakes, gives tips
 *  • After 3 messages, shows a CTA to book a real lesson with Mr. Ibrahim
 *  • Fully mobile-responsive
 *
 * The chat calls /api/ai-chat on the Vercel serverless backend.
 */

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, BookOpen } from "lucide-react";
import { Link } from "wouter";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are Fluent, an AI English coach for Fluentry (fluentry.com), a premium English coaching platform for Moroccan students. Your coach is Mr. Ibrahim, a native English speaker.

Your role:
- Help Moroccan students practise English conversation
- Gently correct grammar and vocabulary mistakes (explain WHY it's wrong)
- Be encouraging, warm, and culturally aware of Moroccan context
- Keep responses SHORT (2-4 sentences max) to feel like real chat
- Use simple, clear English appropriate for B1-B2 level
- Occasionally mention that for personalised 1-on-1 coaching, they can book a lesson with Mr. Ibrahim at fluentry.com/book-lesson

Start by greeting the user warmly and asking what they'd like to practise today (speaking, grammar, vocabulary, IELTS, business English, etc.).`;

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (open && !initialized) {
      setInitialized(true);
      // Send initial greeting from AI
      fetchAIResponse([]);
    }
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const fetchAIResponse = async (history: Message[]) => {
    setLoading(true);
    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history,
          systemPrompt: SYSTEM_PROMPT,
        }),
      });

      if (!response.ok) throw new Error("API error");

      const data = await response.json();
      const aiMessage: Message = {
        role: "assistant",
        content: data.message || "Sorry, I couldn't respond. Please try again!",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having a connection issue. Please try again in a moment! 😊",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setMessageCount((c) => c + 1);

    await fetchAIResponse(newMessages);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const showBookingCTA = messageCount >= 3;

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-24 left-4 z-40 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
          open ? "hidden" : "flex"
        }`}
        aria-label="Practice English with AI"
      >
        <Bot size={20} />
        <span className="text-sm font-semibold hidden sm:inline">
          Practice English with AI
        </span>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-4 left-4 z-50 w-80 sm:w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
          style={{ maxHeight: "520px", height: "520px" }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Fluent AI Coach</p>
                <p className="text-blue-100 text-xs">Powered by Fluentry</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-800">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${
                  msg.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${
                    msg.role === "user"
                      ? "bg-indigo-100 dark:bg-indigo-900"
                      : "bg-blue-100 dark:bg-blue-900"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User size={14} className="text-indigo-600 dark:text-indigo-400" />
                  ) : (
                    <Bot size={14} className="text-blue-600 dark:text-blue-400" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white rounded-tr-sm"
                      : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-sm rounded-tl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <Bot size={14} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="bg-white dark:bg-gray-700 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Booking CTA after 3 messages */}
            {showBookingCTA && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-3 text-center">
                <BookOpen size={16} className="text-amber-600 mx-auto mb-1" />
                <p className="text-xs text-amber-800 dark:text-amber-300 font-medium mb-2">
                  Ready for personalised coaching?
                </p>
                <Link
                  href="/book-lesson"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Book a Lesson with Mr. Ibrahim →
                </Link>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type in English..."
                className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-9 h-9 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">
              AI practice • Free forever
            </p>
          </div>
        </div>
      )}
    </>
  );
}
