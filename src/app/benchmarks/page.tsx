"use client";

import { useLanguage } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";

export default function BenchmarksPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <ScrollReveal className="mb-16 max-w-xl">
        <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">{t.bench_title}</h1>
        <p className="text-lg text-[var(--color-ronalix-muted)]">{t.bench_desc}</p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-16 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/8 text-[11px] tracking-wider text-white/35 uppercase">
                <th className="py-3 pr-4 font-medium">{t.bench_table_model}</th>
                <th className="py-3 px-4 font-medium">{t.bench_table_math}</th>
                <th className="py-3 px-4 font-medium">{t.bench_table_reas}</th>
                <th className="py-3 px-4 font-medium">{t.bench_table_code}</th>
                <th className="py-3 pl-4 font-medium">{t.bench_table_gen}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/6">
                <td className="py-4 pr-4 font-medium text-white">
                  Luma Insight
                  <span className="ml-2 text-[10px] text-[var(--color-ronalix-neon)]">{t.bench_pending}</span>
                </td>
                <td className="px-4 py-4 text-white/25">—</td>
                <td className="px-4 py-4 text-white/25">—</td>
                <td className="px-4 py-4 text-white/25">—</td>
                <td className="py-4 pl-4 text-white/25">—</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 text-white/50">{t.bench_base}</td>
                <td className="px-4 py-4 text-white/25">—</td>
                <td className="px-4 py-4 text-white/25">—</td>
                <td className="px-4 py-4 text-white/25">—</td>
                <td className="py-4 pl-4 text-white/25">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <ScrollReveal>
          <h3 className="mb-2 text-lg font-semibold text-white">{t.bench_method}</h3>
          <p className="text-sm leading-relaxed text-[var(--color-ronalix-muted)]">{t.bench_method_desc}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h3 className="mb-2 text-lg font-semibold text-white">{t.bench_focus}</h3>
          <p className="text-sm leading-relaxed text-[var(--color-ronalix-muted)]">{t.bench_focus_desc}</p>
        </ScrollReveal>
      </div>
    </div>
  );
}
