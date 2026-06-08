import { ReactNode } from "react";

interface BtnProps {
  href?: string;
  children: ReactNode;
  className?: string;
}

export const BtnPrimary = ({ href = "#", children, className = "" }: BtnProps) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 bg-[var(--color-suido-cat)] text-white
               text-[0.95rem] font-medium px-6 md:px-8 py-3 rounded-full
               hover:bg-[var(--color-suido-accent)] hover:-translate-y-0.5
               transition-all duration-200 ${className}`}
  >
    {children}
  </a>
);

export const BtnSecondary = ({ href = "#", children, className = "" }: BtnProps) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 border border-[var(--color-suido-3)]/40
               text-[var(--color-suido-5)] text-[0.95rem] px-6 py-3 rounded-full
               hover:border-[var(--color-suido-4)] hover:text-white hover:-translate-y-0.5
               transition-all duration-200 ${className}`}
  >
    {children}
  </a>
);
