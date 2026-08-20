"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: t.nav_home, href: "/" },
    { name: t.nav_models, href: "/models" },
    { name: t.nav_benchmarks, href: "/benchmarks" },
    { name: t.nav_docs, href: "/docs" },
  ];

  const toggleLang = () => setLang(lang === "en" ? "tr" : "en");

  const isActiveHref = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/6 bg-[var(--background)]/75 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center">
            <span className="text-lg font-extrabold tracking-wider text-white">
              RON<span className="text-[var(--color-ronalix-neon)] transition-all group-hover:drop-shadow-[0_0_10px_rgba(61,255,138,0.8)]">ALIX</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = isActiveHref(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-white/45 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/[0.06]" />
                  )}
                  <span className="relative">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={toggleLang}
              title={lang === "en" ? "Türkçeye geç" : "Switch to English"}
              className="rounded-full px-2.5 py-1.5 text-xs font-semibold text-white/45 transition-colors hover:text-white"
            >
              {lang === "en" ? "TR" : "EN"}
            </button>
            <Link href="/login" className="rounded-full px-3 py-1.5 text-sm text-white/50 transition-colors hover:text-white">
              {t.nav_signin}
            </Link>
            <Link
              href="/register"
              className="btn-shine rounded-full bg-[var(--color-ronalix-neon)] px-4 py-1.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              {t.nav_signup}
            </Link>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLang}
              className="text-xs font-semibold text-white/50"
            >
              {lang === "en" ? "TR" : "EN"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 text-white/70 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="animate-slide-up mx-4 mt-3 overflow-hidden rounded-2xl border border-white/8 bg-[#0c0e12]/95 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="space-y-0.5 p-3">
            {navLinks.map((link) => {
              const isActive = isActiveHref(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive ? "bg-white/[0.06] text-white" : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-2 border-t border-white/6 p-3">
            <Link href="/login" className="flex-1 rounded-xl py-2.5 text-center text-sm text-white/60">
              {t.nav_signin}
            </Link>
            <Link href="/register" className="flex-1 rounded-xl bg-[var(--color-ronalix-neon)] py-2.5 text-center text-sm font-semibold text-black">
              {t.nav_signup}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
