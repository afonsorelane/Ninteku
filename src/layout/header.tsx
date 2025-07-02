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

  // Função para fechar menu mobile ao clicar em link
  function handleLinkClick() {
    setIsMobileOpen(false);
  }

  return (
    <header
      className="bg-[var(--background)] text-[var(--color-primary)] dark:bg-[var(--color-primary)] dark:text-[var(--color-primary-foreground)] w-full transition-colors duration-300"
      role="banner"
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-6 md:px-6">
        {/* Logo / Marca */}
        <div className="flex items-center">
          <a
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tight transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
            aria-label="Página inicial - Ninteku"
          >
            Ninteku
          </a>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide" aria-label="Menu principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:underline focus:outline-none"
            >
              {link.label}
            </a>
          ))}
          <a href="/contato" className="btn-primary ml-4" tabIndex={0}>
            Solicitar Proposta
          </a>
        </nav>

        {/* Botão toggle modo escuro desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label="Alternar modo escuro"
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
            type="button"
          >
            {dark ? (
              <Sun size={22} color="var(--color-primary-foreground)" aria-hidden="true" />
            ) : (
              <Moon size={22} color="var(--color-primary)" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Botões mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Alternar modo escuro"
            className="p-2 rounded focus:outline-none "
            type="button"
          >
            {dark ? (
              <Sun size={24} color="var(--color-primary-foreground)" aria-hidden="true" />
            ) : (
              <Moon size={24} color="var(--color-primary)" aria-hidden="true" />
            )}
          </button>

          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
            aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
            type="button"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-40 bg-[var(--background)] text-[var(--color-primary)] dark:bg-[var(--color-primary)] dark:text-[var(--color-primary-foreground)] px-6 py-6 transition-colors duration-300 overflow-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="uppercase font-bold tracking-wider text-[var(--color-primary)] dark:text-[var(--color-primary-foreground)]">
              Ninteku
            </span>
            <button
              onClick={() => setIsMobileOpen(false)}
              aria-label="Fechar menu"
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
              type="button"
            >
              <X size={28} aria-hidden="true" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 text-lg font-semibold" aria-label="Menu principal mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
                onClick={handleLinkClick}
                tabIndex={0}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex justify-center">
            <button
              onClick={toggle}
              aria-label="Alternar modo escuro"
              className={`p-2 rounded transition focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)] ${
                dark
                  ? "bg-[var(--background)] text-[var(--color-primary)] hover:bg-[var(--color-primary-foreground)]"
                  : "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary)]/90"
              }`}
              type="button"
            >
              {dark ? (
                <Sun size={24} color="var(--color-primary-foreground)" aria-hidden="true" />
              ) : (
                <Moon size={24} color="var(--color-primary)" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
