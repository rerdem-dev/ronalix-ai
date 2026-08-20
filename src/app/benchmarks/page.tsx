"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function BenchmarksPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t.bench_title}</h1>
        <p className="text-xl text-[var(--color-ronalix-muted)] max-w-2xl mx-auto">{t.bench_desc}</p>
      </div>

      <div className="bg-[var(--color-ronalix-gray)]/20 border border-white/5 rounded-2xl p-8 mb-12 animate-slide-up delay-100">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 bg-[var(--color-ronalix-gray)] rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-[var(--color-ronalix-neon)] opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">{t.bench_eval}</h2>
          <p className="text-[var(--color-ronalix-muted)] max-w-lg mb-8">{t.bench_eval_desc}</p>

          {/* Placeholder Table */}
          <div className="w-full max-w-4xl mx-auto mt-8 overflow-x-auto opacity-50 pointer-events-none">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[var(--color-ronalix-muted)] text-sm">
                  <th className="py-3 px-4 font-medium">{t.bench_table_model}</th>
                  <th className="py-3 px-4 font-medium">{t.bench_table_math}</th>
                  <th className="py-3 px-4 font-medium">{t.bench_table_reas}</th>
                  <th className="py-3 px-4 font-medium">{t.bench_table_code}</th>
                  <th className="py-3 px-4 font-medium">{t.bench_table_gen}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5 bg-white/5">
                  <td className="py-4 px-4 font-medium text-white flex items-center gap-2">
                    Luma Insight
                    <span className="text-[10px] bg-[var(--color-ronalix-neon)]/20 text-[var(--color-ronalix-neon)] px-1.5 py-0.5 rounded">{t.bench_pending}</span>
                  </td>
                  <td className="py-4 px-4 text-gray-400">--</td>
                  <td className="py-4 px-4 text-gray-400">--</td>
                  <td className="py-4 px-4 text-gray-400">--</td>
                  <td className="py-4 px-4 text-gray-400">--</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 font-medium text-gray-400">{t.bench_base}</td>
                  <td className="py-4 px-4 text-gray-500">--</td>
                  <td className="py-4 px-4 text-gray-500">--</td>
                  <td className="py-4 px-4 text-gray-500">--</td>
                  <td className="py-4 px-4 text-gray-500">--</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up delay-200">
        <div className="bg-[var(--color-ronalix-gray)]/30 border border-white/5 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-2">{t.bench_method}</h3>
          <p className="text-sm text-[var(--color-ronalix-muted)] leading-relaxed">{t.bench_method_desc}</p>
        </div>
        <div className="bg-[var(--color-ronalix-gray)]/30 border border-white/5 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-2">{t.bench_focus}</h3>
          <p className="text-sm text-[var(--color-ronalix-muted)] leading-relaxed">{t.bench_focus_desc}</p>
        </div>
      </div>
    </div>
  );
}
