"use client";

import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="mb-10 flex items-center gap-1.5 text-xs text-white/35" aria-label="Breadcrumb">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-white/15">/</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="transition-colors hover:text-white/70">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-white/70">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
