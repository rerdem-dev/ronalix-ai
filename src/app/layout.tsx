import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageProvider from "@/components/LanguageProvider";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ronalix AI",
  description: "Ronalix AI — reasoning-focused artificial intelligence models.",
  openGraph: {
    title: "Ronalix AI",
    description: "Ronalix AI — reasoning-focused artificial intelligence models.",
    url: "https://rerdem-dev.github.io/ronalix-ai",
    siteName: "Ronalix AI",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Security: Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none';"
        />
        {/* Security: Prevent MIME sniffing */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        {/* Security: Prevent clickjacking */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        {/* Security: Referrer Policy */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {/* Security: Permissions Policy */}
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=(), payment=(), usb=()"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col selection:bg-[var(--color-ronalix-neon)] selection:text-black`}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
