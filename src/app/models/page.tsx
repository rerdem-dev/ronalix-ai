"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumb from "@/components/Breadcrumb";
import TiltCard from "@/components/TiltCard";

export default function ModelsPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb crumbs={[{ label: t.nav_home, href: "/" }, { label: t.models_title }]} />

      <ScrollReveal className="mb-16 max-w-xl">
        <h1 className="mb-3 text-4xl font-extrabold text-white md:text-5xl">{t.models_title}</h1>
        <p className="text-lg text-[var(--color-ronalix-muted)]">{t.models_desc}</p>
      </ScrollReveal>

      <div className="flex flex-col gap-5">
        <ScrollReveal>
          <TiltCard>
            <Link
              href="/models/luma"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-ronalix-neon)]/20 bg-white/[0.03] p-8 md:flex-row md:gap-12"
            >
              <div className="relative z-10 flex-1">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <h2 className="text-3xl font-extrabold text-white">Luma Insight</h2>
                  <span className="text-lg font-medium text-[var(--color-ronalix-neon)]">4B</span>
                  <span className="rounded-full border border-[var(--color-ronalix-neon)]/20 bg-[var(--color-ronalix-neon)]/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--color-ronalix-neon)]">
                    {t.model_available}
                  </span>
                </div>

                <p className="mb-8 max-w-lg text-[var(--color-ronalix-muted)]">{t.model_luma_desc}</p>

                <div className="mb-8 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
                  {[
                    [t.model_arch, t.model_dense],
                    [t.model_params, t.model_4b],
                    [t.model_focus, t.model_reasoning],
                    [t.model_platform, t.model_local_friendly],
                  ].map(([label, val]) => (
                    <div key={label}>
                      <div className="mb-1 text-[10px] tracking-wider text-white/35 uppercase">{label}</div>
                      <div className="text-sm font-medium text-white">{val}</div>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ronalix-neon)] transition-all group-hover:gap-3">
                  {t.model_explore_luma}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </TiltCard>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {[
            { name: "Kairo", size: "~12B MoE", desc: t.model_kairo_desc, focus: t.model_general_coding },
            { name: "Veyra", size: "~24B MoE", desc: t.model_veyra_desc, focus: t.model_high_capacity },
          ].map((card, i) => (
            <ScrollReveal key={card.name} delay={80 + i * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-white/7 bg-white/[0.02] p-7">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white">{card.name}</h2>
                    <span className="text-sm text-white/35">{card.size}</span>
                  </div>
                  <span className="rounded-full border border-white/8 px-2.5 py-0.5 text-[10px] font-semibold text-white/35">
                    {t.model_coming_soon}
                  </span>
                </div>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-white/50">{card.desc}</p>
                <p className="text-[11px] text-white/30">MoE · {card.focus}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
