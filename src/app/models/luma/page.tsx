"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumb from "@/components/Breadcrumb";

export default function LumaPage() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const command = "ollama run ronalix/luma-insight";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  const specs = [
    [t.luma_version, "V2"],
    [t.luma_base_model, "Qwen3-4B-Thinking"],
    [t.model_params, "~4B"],
    [t.model_arch, t.model_dense],
    [t.luma_status, t.luma_dev],
    [t.luma_license, "Apache 2.0"],
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb
        crumbs={[
          { label: t.nav_home, href: "/" },
          { label: t.models_title, href: "/models" },
          { label: "Luma Insight" },
        ]}
      />

      <ScrollReveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h1 className="mb-1 text-4xl font-extrabold text-white md:text-5xl">{t.luma_title}</h1>
          <p className="text-lg text-[var(--color-ronalix-neon)]">{t.luma_subtitle}</p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-white/25 hover:text-white"
        >
          {t.luma_download}
        </a>
      </ScrollReveal>

      <ScrollReveal className="mb-12 grid grid-cols-2 gap-6 border-y border-white/6 py-6 sm:grid-cols-3 lg:grid-cols-6">
        {specs.map(([label, val]) => (
          <div key={String(label)}>
            <div className="mb-1 text-[10px] tracking-wider text-white/35 uppercase">{label}</div>
            <div className="text-sm font-medium text-white">{val}</div>
          </div>
        ))}
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <ScrollReveal>
          <h2 className="mb-4 text-xl font-semibold text-white">{t.luma_overview}</h2>
          <p className="mb-6 leading-relaxed text-[var(--color-ronalix-muted)]">{t.luma_overview_desc}</p>
          <p className="text-sm leading-relaxed text-white/55">
            <span className="font-medium text-white">{t.luma_base_arch}</span> {t.luma_base_arch_desc}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="mb-2 text-xl font-semibold text-white">{t.luma_usage}</h2>
          <p className="mb-4 text-sm text-[var(--color-ronalix-muted)]">{t.luma_usage_desc}</p>
          <div className="relative rounded-xl border border-white/8 bg-black/40 p-4 font-mono text-xs leading-relaxed text-white/70">
            <button
              onClick={copy}
              className="absolute top-3 right-3 rounded-md px-2 py-1 text-[10px] font-medium tracking-wide text-white/40 uppercase transition-colors hover:text-white"
            >
              {copied ? t.copied : t.copy}
            </button>
            <span className="text-white/25"># Coming soon via Ollama</span>
            <br />
            <span className="text-[var(--color-ronalix-neon)]">ollama</span> run ronalix/luma-insight
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-16 rounded-2xl border border-white/7 bg-white/[0.02] px-8 py-14 text-center">
        <h2 className="mb-2 text-lg font-semibold text-white">{t.luma_bench_soon}</h2>
        <p className="mx-auto max-w-md text-sm text-[var(--color-ronalix-muted)]">{t.luma_bench_soon_desc}</p>
      </ScrollReveal>
    </div>
  );
}
