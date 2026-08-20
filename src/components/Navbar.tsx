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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav_home, href: "/" },
    { name: t.nav_models, href: "/models" },
    { name: t.nav_benchmarks, href: "/benchmarks" },
    { name: t.nav_docs, href: "/docs" },
  ];

  const toggleLang = () => setLang(lang === "en" ? "tr" : "en");

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--color-ronalix-gray)]/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-xl tracking-wider text-white">
              RON<span className="text-[var(--color-ronalix-neon)] group-hover:drop-shadow-[0_0_8px_rgba(0,255,102,0.8)] transition-all">ALIX</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[var(--color-ronalix-neon)] ${
                    pathname === link.href
                      ? "text-[var(--color-ronalix-neon)]"
                      : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-[var(--color-ronalix-gray)]">
              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                title={lang === "en" ? "Türkçeye geç" : "Switch to English"}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-[var(--color-ronalix-neon)] border border-white/10 hover:border-[var(--color-ronalix-neon)]/40 px-2.5 py-1.5 rounded-md transition-all"
              >
                <span className="text-base leading-none">{lang === "en" ? "🇹🇷" : "🇬🇧"}</span>
                <span>{lang === "en" ? "TR" : "EN"}</span>
              </button>

              <Link
                href="/login"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {t.nav_signin}
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium bg-white text-black px-4 py-2 rounded-md hover:bg-[var(--color-ronalix-neon)] transition-colors"
              >
                {t.nav_signup}
              </Link>
            </div>
          </div>

          {/* Mobile: Lang + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="text-xs font-semibold text-gray-400 hover:text-[var(--color-ronalix-neon)] border border-white/10 px-2 py-1 rounded-md transition-all"
            >
              {lang === "en" ? "🇹🇷 TR" : "🇬🇧 EN"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--color-ronalix-gray)] animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "text-[var(--color-ronalix-neon)] bg-[var(--color-ronalix-gray)]/30"
                    : "text-gray-300 hover:text-white hover:bg-[var(--color-ronalix-gray)]/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-[var(--color-ronalix-gray)] flex flex-col space-y-2 px-3">
              <Link
                href="/login"
                className="block text-center text-gray-300 hover:text-white py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav_signin}
              </Link>
              <Link
                href="/register"
                className="block text-center bg-white text-black py-2 rounded-md hover:bg-[var(--color-ronalix-neon)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav_signup}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
