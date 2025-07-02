import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../../context/darkmode";


export const Header = () => {
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
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <img src="/logo.svg" alt="Ninteku" className="h-10" />
        <nav className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition font-medium ${
                link.label === "Início"
                  ? "font-semibold text-[var(--color-primary)] dark:text-[var(--color-primary-foreground)]"
                  : "text-[var(--color-neutral)] dark:text-[var(--color-primary-foreground)]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="/contato" className="btn-primary ml-4">Solicitar Proposta</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Alternar modo escuro"
            className="p-2 rounded transition bg-gray-200 dark:bg-blue-700 text-blue-700 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800"
          >
            {dark
              ? <Sun size={22} color="#fff" />
              : <Moon size={22} color="#1B3B6F" />
            }
          </button>
          <a href="/contato" className="btn-primary ml-4 hidden md:inline-block">Solicitar Proposta</a>
        </div>
      </div>
    </header>
  );
}