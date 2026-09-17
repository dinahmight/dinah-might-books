"use client";

import { useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <main className="grain mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <Mail className="h-10 w-10 text-gold" />
      <h1 className="mt-6 font-display text-4xl text-[#f4ecd8] md:text-5xl">
        Join the Launch List
      </h1>
      <p className="mt-4 font-body text-[#f4ecd8]/70">
        Be the first to know when ROLL CALL! goes live on October 1, 2026 —
        plus early access to group-study guides and launch-week extras.
      </p>

      {status === "success" ? (
        <div className="mt-10 flex items-center gap-3 border border-[#d4af5a]/40 bg-[#0e1729]/60 px-8 py-6">
          <CheckCircle2 className="h-6 w-6 shrink-0 text-gold" />
          <p className="font-body text-sm text-[#f4ecd8]/80">
            Thank you, {name || "friend"}! You&apos;re on the list.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 w-full space-y-4">
          <input
            type="text"
            required
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "loading"}
            className="w-full border border-[#d4af5a]/30 bg-transparent px-5 py-4 font-body text-[#f4ecd8] placeholder:text-[#f4ecd8]/40 focus:border-[#d4af5a] focus:outline-none disabled:opacity-50"
          />
          <input
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="w-full border border-[#d4af5a]/30 bg-transparent px-5 py-4 font-body text-[#f4ecd8] placeholder:text-[#f4ecd8]/40 focus:border-[#d4af5a] focus:outline-none disabled:opacity-50"
          />
          {status === "error" && (
            <div className="flex items-center gap-2 text-left font-body text-sm text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 bg-[#d4af5a] px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#0b1220] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "loading" ? "Submitting..." : "Notify Me at Launch"}
          </button>
        </form>
      )}

      <p className="mt-8 font-body text-xs text-[#f4ecd8]/40">
        No spam &mdash; just launch news, group-study resources, and the
        occasional gratitude prompt.
      </p>
    </main>
  );
}
