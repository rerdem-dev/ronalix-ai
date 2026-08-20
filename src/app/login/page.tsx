"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

// Basic input sanitizer to prevent XSS
function sanitize(str: string): string {
  return str.replace(/[<>"'&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "&": "&amp;" }[c] || c));
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function LoginPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const safeEmail = sanitize(email.trim());
    if (!isValidEmail(safeEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setMessage(t.auth_msg_signin);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="animate-fade-in flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-8 backdrop-blur-sm">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-ronalix-neon)] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2 tracking-wide">{t.auth_welcome}</h1>
          <p className="text-[var(--color-ronalix-muted)] text-sm">{t.auth_welcome_sub}</p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
            {error}
          </div>
        )}
        {message && (
          <div className="mb-6 p-3 rounded bg-[var(--color-ronalix-neon)]/10 border border-[var(--color-ronalix-neon)]/30 text-[var(--color-ronalix-neon)] text-sm text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10" noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="email">{t.auth_email}</label>
            <input
              id="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[var(--color-ronalix-neon)]/50 focus:ring-1 focus:ring-[var(--color-ronalix-neon)]/50 text-white transition-colors"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-sm font-medium text-gray-300" htmlFor="password">{t.auth_pass}</label>
              <a href="#" className="text-xs text-[var(--color-ronalix-muted)] hover:text-[var(--color-ronalix-neon)] transition-colors">{t.auth_forgot}</a>
            </div>
            <input
              id="password"
              type="password"
              required
              minLength={8}
              maxLength={128}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[var(--color-ronalix-neon)]/50 focus:ring-1 focus:ring-[var(--color-ronalix-neon)]/50 text-white transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center">
            <input id="remember" type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-gray-700 accent-[var(--color-ronalix-neon)]" />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">{t.auth_remember}</label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-70 transition-colors mt-2"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t.auth_processing}
              </span>
            ) : t.auth_signin}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-400 relative z-10">
          {t.auth_no_account}{" "}
          <Link href="/register" className="font-medium text-white hover:text-[var(--color-ronalix-neon)] transition-colors">{t.auth_create}</Link>
        </p>
      </div>
    </div>
  );
}
