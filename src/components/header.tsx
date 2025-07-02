"use client";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useDarkMode } from "../context/darkmode";

export const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { dark, toggle } = useDarkMode();

  const navLinks = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Junte-se", href: "/junte-se" },
    { label: "Contacto", href: "/contato" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-6 md:px-6">
        <div className="flex items-center">
          <a
            href="/"
            className="text-xl flex md:text-2xl font-bold tracking-tight text-blue-700 dark:text-indigo-900 transition hover:opacity-80"
          >
            <img src="../public/ninteku.png" alt="Ninteko" width={40} height={40} className="rounded-2xl gap-4 mr-2" />
            Ninteku
          </a>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-blue-600 text-gray-700 dark:text-gray-300"
            >
              {link.label}
            </a>
          ))}
          <a href="/contato" className="btn-primary ml-4 px-4 py-1">
            Solicitar Proposta
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label="Alternar modo escuro"
            className="p-2 rounded"
          >
            {dark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Alternar modo escuro"
            className="p-2 rounded text-white"
          >
            {dark ? <Sun size={24} /> : <Moon size={24} />}
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
        <div className="md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <span className="uppercase font-bold tracking-wider text-blue-700 dark:text-blue-400">
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
                className="hover:text-blue-600"
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
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-gray-200 text-blue-700 hover:bg-blue-100"
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
