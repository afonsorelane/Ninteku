"use client";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useDarkMode } from "../context/darkmode";

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { dark, toggle } = useDarkMode();

  const navLinks = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Junte-se", href: "/junte-se" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <header className="bg-[var(--background)] text-[var(--color-primary)] dark:bg-[var(--color-primary)] dark:text-[var(--color-primary-foreground)] w-full transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-6 md:px-6">
        <div className="flex items-center">
          <a
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-primary)] dark:text-[var(--color-primary-foreground)] transition hover:opacity-80"
          >
            Ninteku
          </a>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:underline text-[var(--color-primary)] dark:text-[var(--color-primary-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
            >
              {link.label}
            </a>
          ))}
          <a href="/contato" className="btn-primary ml-4">
            Solicitar Proposta
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label="Alternar modo escuro"
            className="p-2 rounded"
          >
            {dark ? <Sun size={22} color="var(--color-primary-foreground)" /> : <Moon size={22} color="var(--color-primary)" />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Alternar modo escuro"
            className="p-2 rounded"
          >
            {dark ? <Sun size={24} color="var(--color-primary-foreground)" /> : <Moon size={24} color="var(--color-primary)" />}
          </button>
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="p-2 rounded"
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[var(--background)] text-[var(--color-primary)] dark:bg-[var(--color-primary)] dark:text-[var(--color-primary-foreground)] px-6 py-6 transition-colors duration-300">
          <div className="flex items-center justify-between mb-6">
            <span className="uppercase font-bold tracking-wider text-[var(--color-primary)] dark:text-[var(--color-primary-foreground)]">
              Ninteku
            </span>
            <button onClick={() => setIsMobileOpen(false)} aria-label="Fechar menu">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 text-lg font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex justify-center">
            <button
              onClick={toggle}
              aria-label="Alternar modo escuro"
              className={`p-2 rounded transition ${
                dark
                  ? "bg-[var(--background)] text-[var(--color-primary)] hover:bg-[var(--color-primary-foreground)]"
                  : "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary)]/90"
              }`}
            >
              {dark
                ? <Sun size={24} color="var(--color-primary-foreground)" />
                : <Moon size={24} color="var(--color-primary)" />
              }
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
