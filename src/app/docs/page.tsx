"use client";

import { useLanguage } from "@/components/LanguageProvider";
import ScrollReveal from "@/components/ScrollReveal";

export default function DocsPage() {
  const { t } = useLanguage();

  const docSections = [
    { id: "models", title: t.docs_sec_models, desc: t.docs_sec_models_desc },
    { id: "install", title: t.docs_sec_install, desc: t.docs_sec_install_desc },
    { id: "local", title: t.docs_sec_local, desc: t.docs_sec_local_desc },
    { id: "fine", title: t.docs_sec_fine, desc: t.docs_sec_fine_desc },
    { id: "api", title: t.docs_sec_api, desc: t.docs_sec_api_desc },
    { id: "agent", title: t.docs_sec_agent, desc: t.docs_sec_agent_desc },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <ScrollReveal>
        <h1 className="mb-3 text-4xl font-bold text-white">{t.docs_title}</h1>
        <p className="mb-10 text-lg text-[var(--color-ronalix-muted)]">{t.docs_welcome}</p>
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <div className="mb-14 rounded-2xl border border-white/8 bg-white/[0.03] p-6">
          <h2 className="mb-2 text-sm font-semibold text-white">{t.docs_early}</h2>
          <p className="text-sm leading-relaxed text-white/55">{t.docs_early_desc}</p>
        </div>
      </ScrollReveal>

      <div className="mb-14 flex flex-wrap gap-2">
        {docSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="rounded-full border border-white/8 px-3 py-1.5 text-xs text-white/50 transition-colors hover:border-white/20 hover:text-white"
          >
            {section.title}
          </a>
        ))}
      </div>

      <div className="space-y-12">
        {docSections.map((section, idx) => (
          <ScrollReveal key={section.id} delay={idx * 40}>
            <section id={section.id} className="scroll-mt-28">
              <h2 className="mb-2 text-xl font-semibold text-white">{section.title}</h2>
              <p className="max-w-xl text-sm leading-relaxed text-[var(--color-ronalix-muted)]">{section.desc}</p>
            </section>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-20 border-t border-white/6 pt-10">
        <h2 className="mb-2 text-xl font-semibold text-white">{t.docs_contribute}</h2>
        <p className="mb-4 max-w-xl text-sm leading-relaxed text-white/55">{t.docs_contribute_desc}</p>
        <a
          href="https://github.com/rerdem-dev/ronalix-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-ronalix-neon)] hover:underline"
        >
          {t.docs_github}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </ScrollReveal>
    </div>
  );
}
