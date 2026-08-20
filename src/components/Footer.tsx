"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--color-ronalix-gray)]/50 bg-[var(--background)] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 group mb-2">
              <span className="font-bold text-xl tracking-wider text-white">
                RON<span className="text-[var(--color-ronalix-neon)] group-hover:drop-shadow-[0_0_8px_rgba(0,255,102,0.8)] transition-all">ALIX</span> AI
              </span>
            </Link>
            <p className="text-[var(--color-ronalix-muted)] text-sm mb-4">
              {t.footer_slogan}
            </p>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              {t.footer_built} <span className="text-lg">🇹🇷</span>
            </div>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-medium text-sm">{t.footer_product}</h4>
              <Link href="/models" className="text-[var(--color-ronalix-muted)] hover:text-[var(--color-ronalix-neon)] text-sm transition-colors">{t.nav_models}</Link>
              <Link href="/benchmarks" className="text-[var(--color-ronalix-muted)] hover:text-[var(--color-ronalix-neon)] text-sm transition-colors">{t.nav_benchmarks}</Link>
              <Link href="/docs" className="text-[var(--color-ronalix-muted)] hover:text-[var(--color-ronalix-neon)] text-sm transition-colors">{t.nav_docs}</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-medium text-sm">{t.footer_social}</h4>
              <a href="https://github.com/rerdem-dev/ronalix-ai" target="_blank" rel="noopener noreferrer" className="text-[var(--color-ronalix-muted)] hover:text-white text-sm transition-colors flex items-center gap-1">
                {t.footer_github}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a href="#" className="text-[var(--color-ronalix-muted)] hover:text-white text-sm transition-colors flex items-center gap-1">
                {t.footer_hf}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-ronalix-gray)]/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Ronalix AI. {t.footer_rights}
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/docs" className="hover:text-white transition-colors">{t.footer_privacy}</Link>
            <Link href="/docs" className="hover:text-white transition-colors">{t.footer_terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
