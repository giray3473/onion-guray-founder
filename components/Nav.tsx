"use client";

import { navLinks, person } from "@/lib/content";
import { useCallback, useState } from "react";

export function Nav() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-sans)] text-[13px] font-semibold tracking-[-0.02em] text-off-white"
        >
          {person.firstName}
          <span className="text-soft-gray"> · Onion</span>
        </a>

        <ul className="flex max-w-[55%] items-center gap-4 overflow-x-auto scrollbar-none md:max-w-none md:gap-7">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="text-[11px] tracking-[0.04em] text-soft-gray transition-colors hover:text-off-white md:text-[12px]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={copyEmail}
          className="text-[12px] tracking-[0.04em] text-soft-gray transition-colors hover:text-off-white"
          aria-live="polite"
        >
          {copied ? "E-posta kopyalandı" : "E-posta"}
        </button>
      </nav>
    </header>
  );
}
