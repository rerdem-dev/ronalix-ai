"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function LumaPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/models" className="inline-flex items-center text-[var(--color-ronalix-muted)] hover:text-white mb-8 transition-colors">
        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        {t.luma_back}
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 animate-fade-in">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">{t.luma_title}</h1>
          <p className="text-2xl text-[var(--color-ronalix-neon)] font-medium">{t.luma_subtitle}</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="px-6 py-2 bg-[var(--color-ronalix-gray)] border border-white/10 rounded-md text-white hover:border-white/30 transition-colors">
            {t.luma_download}
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8 animate-slide-up delay-100">
          <section className="bg-[var(--color-ronalix-gray)]/30 border border-white/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">{t.luma_overview}</h2>
            <p className="text-lg text-[var(--color-ronalix-muted)] leading-relaxed mb-6">{t.luma_overview_desc}</p>
            <div className="p-4 bg-black/40 rounded-lg border border-[var(--color-ronalix-neon)]/20 border-l-4 border-l-[var(--color-ronalix-neon)]">
              <p className="text-sm text-gray-300">
                <strong className="text-white">{t.luma_base_arch}</strong> {t.luma_base_arch_desc}
              </p>
            </div>
          </section>

          <section className="bg-[var(--color-ronalix-gray)]/30 border border-white/5 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-bold text-white">{t.luma_benchmarks}</h2>
              <span className="text-xs bg-[var(--color-ronalix-gray)] px-2 py-1 rounded text-[var(--color-ronalix-muted)]">{t.luma_vs_base}</span>
            </div>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <svg className="w-16 h-16 text-[var(--color-ronalix-muted)] opacity-50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-xl font-medium text-white mb-2">{t.luma_bench_soon}</h3>
              <p className="text-[var(--color-ronalix-muted)] max-w-md">{t.luma_bench_soon_desc}</p>
            </div>
          </section>
        </div>

        <div className="space-y-8 animate-slide-up delay-200">
          <div className="bg-[var(--color-ronalix-gray)]/30 border border-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">{t.luma_specs}</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-[var(--color-ronalix-muted)]">{t.luma_version}</span>
                <span className="text-white font-medium">V2</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-[var(--color-ronalix-muted)]">{t.luma_base_model}</span>
                <span className="text-white font-medium">Qwen3-4B-Thinking</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-[var(--color-ronalix-muted)]">{t.model_params}</span>
                <span className="text-white font-medium">~4B</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-[var(--color-ronalix-muted)]">{t.model_arch}</span>
                <span className="text-white font-medium">{t.model_dense}</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-[var(--color-ronalix-muted)]">{t.luma_status}</span>
                <span className="text-[var(--color-ronalix-neon)] font-medium">{t.luma_dev}</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span className="text-[var(--color-ronalix-muted)]">{t.luma_license}</span>
                <span className="text-white font-medium">Apache 2.0</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[var(--color-ronalix-gray)]/50 to-[var(--color-ronalix-neon)]/10 border border-[var(--color-ronalix-neon)]/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">{t.luma_usage}</h3>
            <p className="text-sm text-[var(--color-ronalix-muted)] mb-4">{t.luma_usage_desc}</p>
            <div className="bg-black rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto">
              # Coming soon via Ollama<br />
              ollama run ronalix/luma-insight
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
