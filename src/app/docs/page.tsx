"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function DocsPage() {
  const { t } = useLanguage();

  const docSections = [
    { title: t.docs_sec_models, desc: t.docs_sec_models_desc },
    { title: t.docs_sec_install, desc: t.docs_sec_install_desc },
    { title: t.docs_sec_local, desc: t.docs_sec_local_desc },
    { title: t.docs_sec_fine, desc: t.docs_sec_fine_desc },
    { title: t.docs_sec_api, desc: t.docs_sec_api_desc },
    { title: t.docs_sec_agent, desc: t.docs_sec_agent_desc },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
      {/* Sidebar */}
      <aside className="w-full md:w-64 flex-shrink-0 animate-fade-in">
        <div className="sticky top-28">
          <h3 className="text-sm font-semibold text-[var(--color-ronalix-muted)] uppercase tracking-wider mb-4">{t.docs_title}</h3>
          <nav className="space-y-1">
            {docSections.map((section, idx) => (
              <a
                key={idx}
                href="#"
                className={`block px-3 py-2 rounded-md text-sm font-medium ${idx === 0 ? "bg-[var(--color-ronalix-neon)]/10 text-[var(--color-ronalix-neon)]" : "text-gray-400 hover:text-white hover:bg-white/5"} transition-colors`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 animate-slide-up delay-100">
        <div className="max-w-none">
          <h1 className="text-4xl font-bold text-white mb-2">{t.docs_title}</h1>
          <p className="text-xl text-[var(--color-ronalix-muted)] mb-10">{t.docs_welcome}</p>

          <div className="bg-[var(--color-ronalix-gray)]/30 border border-white/5 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--color-ronalix-neon)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {t.docs_early}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">{t.docs_early_desc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {docSections.map((section, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg p-5 hover:border-[var(--color-ronalix-neon)]/50 hover:bg-[var(--color-ronalix-gray)]/20 transition-all cursor-pointer group">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[var(--color-ronalix-neon)] transition-colors">{section.title}</h3>
                <p className="text-sm text-gray-400">{section.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t.docs_contribute}</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{t.docs_contribute_desc}</p>
            <a href="https://github.com/rerdem-dev/ronalix-ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[var(--color-ronalix-neon)] hover:underline text-sm font-medium">
              {t.docs_github}
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
