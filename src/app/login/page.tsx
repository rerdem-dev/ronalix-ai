"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call since backend isn't ready
    setTimeout(() => {
      setMessage("Authentication backend coming soon. This is a placeholder interface.");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 animate-fade-in">
      <div className="w-full max-w-md bg-[var(--color-ronalix-gray)]/20 border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-ronalix-neon)] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2 tracking-wide">
            Welcome Back
          </h1>
          <p className="text-[var(--color-ronalix-muted)] text-sm">
            Sign in to access your Ronalix workspace.
          </p>
        </div>

        {message && (
          <div className="mb-6 p-3 rounded bg-[var(--color-ronalix-neon)]/10 border border-[var(--color-ronalix-neon)]/30 text-[var(--color-ronalix-neon)] text-sm text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[var(--color-ronalix-neon)]/50 focus:ring-1 focus:ring-[var(--color-ronalix-neon)]/50 text-white transition-colors"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-sm font-medium text-gray-300" htmlFor="password">
                Password
              </label>
              <a href="#" className="text-xs text-[var(--color-ronalix-muted)] hover:text-[var(--color-ronalix-neon)] transition-colors">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[var(--color-ronalix-neon)]/50 focus:ring-1 focus:ring-[var(--color-ronalix-neon)]/50 text-white transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-[var(--color-ronalix-neon)] focus:ring-[var(--color-ronalix-neon)]/50 accent-[var(--color-ronalix-neon)]"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-70 transition-colors mt-2"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-400 relative z-10">
          Don't have an account?{" "}
          <Link href="/register" className="font-medium text-white hover:text-[var(--color-ronalix-neon)] transition-colors">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
