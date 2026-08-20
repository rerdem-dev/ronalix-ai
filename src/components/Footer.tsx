"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 mt-8 border-t border-white/6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:items-start">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="group mb-2">
            <span className="text-lg font-bold tracking-wider text-white">
              RON<span className="text-[var(--color-ronalix-neon)]">ALIX</span>
            </span>
          </Link>
          <p className="mb-3 text-sm text-[var(--color-ronalix-muted)]">{t.footer_slogan}</p>
          <p className="text-xs text-white/30">{t.footer_built}</p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-2.5">
            <h4 className="mb-1 text-xs font-medium tracking-wider text-white/40 uppercase">{t.footer_product}</h4>
            <Link href="/models" className="text-sm text-white/50 transition-colors hover:text-white">{t.nav_models}</Link>
            <Link href="/benchmarks" className="text-sm text-white/50 transition-colors hover:text-white">{t.nav_benchmarks}</Link>
            <Link href="/docs" className="text-sm text-white/50 transition-colors hover:text-white">{t.nav_docs}</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="mb-1 text-xs font-medium tracking-wider text-white/40 uppercase">{t.footer_social}</h4>
            <a href="https://github.com/rerdem-dev/ronalix-ai" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors hover:text-white">
              {t.footer_github}
            </a>
            <a href="#" className="text-sm text-white/50 transition-colors hover:text-white">
              {t.footer_hf}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 px-6 pt-6 text-xs text-white/25 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Ronalix AI. {t.footer_rights}</p>
        <div className="flex gap-4">
          <Link href="/docs" className="hover:text-white/50">{t.footer_privacy}</Link>
          <Link href="/docs" className="hover:text-white/50">{t.footer_terms}</Link>
        </div>
      </div>
    </footer>
  );
}
