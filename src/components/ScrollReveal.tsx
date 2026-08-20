"use client";
import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
}

export default function ScrollReveal({ children, className = "", direction = "up", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cls = direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "reveal";
    el.classList.add(cls);
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
