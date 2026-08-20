"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

const MODEL_CARDS = [
  {
    name: "Luma Insight",
    size: "4B",
    status: "available" as const,
    arch: "Dense",
    focus: "Reasoning",
    href: "/models/luma",
    desc_key: "model_luma_desc" as const,
  },
  {
    name: "Kairo",
    size: "~12B MoE",
    status: "soon" as const,
    arch: "MoE",
    focus: "General & Coding",
    href: "/models",
    desc_key: "model_kairo_desc" as const,
  },
  {
    name: "Veyra",
    size: "~24B MoE",
    status: "soon" as const,
    arch: "MoE",
    focus: "High-cap Reasoning",
    href: "/models",
    desc_key: "model_veyra_desc" as const,
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex w-full flex-col items-center">
      <section className="relative flex min-h-[88vh] w-full flex-col items-center justify-center overflow-hidden">
        <div className="orb top-[18%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 bg-[rgba(61,255,138,0.12)]" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.18em] text-[var(--color-ronalix-neon)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ronalix-neon)]" />
            {t.home_intro}
          </div>

          <h1 className="animate-slide-up delay-100 mb-5 text-6xl leading-none font-extrabold tracking-tight md:text-8xl">
            <span className="text-white">RONA</span>
            <span className="neon-text">LIX</span>
          </h1>

          <p className="animate-slide-up delay-200 mb-4 text-xl font-medium text-white/85 md:text-2xl">
            {t.home_slogan}
          </p>
          <p className="animate-slide-up delay-300 mx-auto mb-12 max-w-lg text-base leading-relaxed text-[var(--color-ronalix-muted)]">
            {t.home_sub}
          </p>

          <div className="animate-slide-up delay-400 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/models/luma"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-[var(--color-ronalix-neon)] px-7 py-3 font-semibold text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              {t.home_explore}
              <svg className="h-4 w-4 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/models"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-transparent px-7 py-3 font-medium text-white/80 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04] hover:text-white"
            >
              {t.home_view_models}
            </Link>
          </div>
        </div>

        <div className="animate-fade-in delay-700 absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-[0.22em] text-[var(--color-ronalix-muted)] uppercase">{t.home_scroll}</span>
          <div className="flex h-8 w-5 justify-center rounded-full border border-white/15 pt-1.5">
            <div className="animate-float h-1.5 w-1 rounded-full bg-[var(--color-ronalix-neon)]" />
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal className="mb-16 max-w-xl">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-[var(--color-ronalix-neon)] uppercase">01 — Models</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">{t.models_title}</h2>
            <p className="mt-3 text-[var(--color-ronalix-muted)]">{t.models_desc}</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {MODEL_CARDS.map((card, i) => {
              const isAvailable = card.status === "available";
              return (
                <ScrollReveal key={card.name} delay={i * 90}>
                  <TiltCard className="h-full">
                    <Link
                      href={card.href}
                      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 ${
                        isAvailable
                          ? "border-[var(--color-ronalix-neon)]/25 bg-white/[0.035]"
                          : "border-white/8 bg-white/[0.02]"
                      }`}
                    >
                      <div className="mb-8 flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{card.name}</h3>
                          <span className={`text-sm ${isAvailable ? "text-[var(--color-ronalix-neon)]" : "text-white/35"}`}>
                            {card.size}
                          </span>
                        </div>
                        {isAvailable ? (
                          <span className="rounded-full border border-[var(--color-ronalix-neon)]/20 bg-[var(--color-ronalix-neon)]/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--color-ronalix-neon)]">
                            {t.model_available}
                          </span>
                        ) : (
                          <span className="rounded-full border border-white/8 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white/35">
                            {t.model_coming_soon}
                          </span>
                        )}
                      </div>

                      <p className="mb-6 flex-1 text-sm leading-relaxed text-white/50">{t[card.desc_key]}</p>

                      <div className="flex gap-2 text-[11px] text-white/40">
                        <span>{card.arch}</span>
                        <span className="text-white/20">·</span>
                        <span>{card.focus}</span>
                      </div>

                      {isAvailable && (
                        <div className="mt-5 flex items-center gap-1 text-xs font-medium text-[var(--color-ronalix-neon)] opacity-0 transition-opacity group-hover:opacity-100">
                          {t.model_explore_luma}
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      )}
                    </Link>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-8">
        <div className="mx-auto max-w-5xl border-t border-white/6 pt-28">
          <ScrollReveal className="mb-16 max-w-xl">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-[var(--color-ronalix-neon)] uppercase">02 — Philosophy</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">{t.home_philosophy}</h2>
            <p className="mt-3 text-[var(--color-ronalix-muted)]">{t.home_philosophy_desc}</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
            {[
              { n: "01", title: t.home_efficiency, desc: t.home_efficiency_desc },
              { n: "02", title: t.home_local, desc: t.home_local_desc },
              { n: "03", title: t.home_reasoning, desc: t.home_reasoning_desc },
            ].map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 80}>
                <div className="group">
                  <p className="mb-4 font-mono text-xs text-[var(--color-ronalix-neon)]/70">{item.n}</p>
                  <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-ronalix-muted)]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-28">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{t.home_ready}</h2>
          <p className="mb-8 text-[var(--color-ronalix-muted)]">{t.home_ready_desc}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/rerdem-dev/ronalix-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {t.home_star}
            </a>
            <Link
              href="/models/luma"
              className="inline-flex items-center rounded-full border border-white/12 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/25 hover:text-white"
            >
              {t.home_explore}
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
