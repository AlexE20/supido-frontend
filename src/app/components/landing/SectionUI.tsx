"use client";

import { useEffect, ReactNode } from "react";

// ── Hook: activa animación al hacer scroll ──────────────────────
export const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("opacity-0", "translate-y-6");
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

// ── Reveal wrapper ──────────────────────────────────────────────
interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => (
  <div
    data-reveal
    className={`opacity-0 translate-y-6 transition-all duration-700 ease-out ${className}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

// ── Badge de sección ────────────────────────────────────────────
export const SectionBadge = ({ children }: { children: ReactNode }) => (
  <p
    className="text-[0.7rem] md:text-[0.8rem] tracking-[0.18em] uppercase text-[var(--color-suido-accent)] mb-3"
    style={{ fontFamily: "var(--font-dm)" }}
  >
    — {children}
  </p>
);

// ── Título de sección ───────────────────────────────────────────
export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2
    className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-4"
    style={{ fontFamily: "var(--font-syne)" }}
  >
    {children}
  </h2>
);
