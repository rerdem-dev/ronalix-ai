"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

function sanitize(str: string): string {
  return str.replace(/[<>"'&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "&": "&amp;" }[c] || c));
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function RegisterPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    if (password !== confirmPassword) {
      setError(t.auth_err_match);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setMessage(t.auth_msg_signup);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 animate-fade-in">
      <div className="w-full max-w-md bg-[var(--color-ronalix-gray)]/20 border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--color-ronalix-neon)] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2 tracking-wide">{t.auth_join}</h1>
          <p className="text-[var(--color-ronalix-muted)] text-sm">{t.auth_join_sub}</p>
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

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10" noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="email">{t.auth_work_email}</label>
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
            <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="password">{t.auth_pass}</label>
            <input
              id="password"
              type="password"
              required
              minLength={8}
              maxLength={128}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[var(--color-ronalix-neon)]/50 focus:ring-1 focus:ring-[var(--color-ronalix-neon)]/50 text-white transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="confirmPassword">{t.auth_confirm_pass}</label>
            <input
              id="confirmPassword"
              type="password"
              required
              minLength={8}
              maxLength={128}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[var(--color-ronalix-neon)]/50 focus:ring-1 focus:ring-[var(--color-ronalix-neon)]/50 text-white transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-start pt-2">
            <input id="terms" type="checkbox" required className="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-700 accent-[var(--color-ronalix-neon)]" />
            <label htmlFor="terms" className="ml-2 block text-xs text-gray-400 leading-relaxed">
              {t.auth_agree}{" "}
              <a href="#" className="text-white hover:underline">{t.auth_tos}</a>{" "}
              {t.auth_and}{" "}
              <a href="#" className="text-white hover:underline">{t.auth_policy}</a>.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-black bg-[var(--color-ronalix-neon)] hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-ronalix-neon)] disabled:opacity-70 transition-colors mt-4"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t.auth_processing}
              </span>
            ) : t.auth_create_btn}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-400 relative z-10">
          {t.auth_have_account}{" "}
          <Link href="/login" className="font-medium text-white hover:text-[var(--color-ronalix-neon)] transition-colors">{t.auth_signin}</Link>
        </p>
      </div>
    </div>
  );
}
