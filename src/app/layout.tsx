import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
      <body className={`${inter.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col selection:bg-[var(--color-ronalix-neon)] selection:text-black`}>
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
