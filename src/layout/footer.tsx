import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Contato", href: "/contato" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/", icon: <Facebook size={20} /> , hoverColor: "hover:text-blue-600"},
    { label: "Github", href: "https://github.com/", icon: <Github size={20} />, hoverColor: "hover:text-gray-700 dark:hover:text-white"},
    { label: "Twitter", href: "https://x.com/", icon: <Twitter size={20} />, hoverColor: "hover:text-blue-400" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: <Instagram size={20} />, hoverColor: "hover:text-pink-500" },
    { label: "Linkedin", href: "https://linkedin.com/", icon: <Linkedin size={20} />, hoverColor: "hover:text-blue-500" },
  ];

  return (
    <footer
      className="bg-[var(--background)] text-[var(--color-primary)] dark:bg-[var(--color-primary)] dark:text-[var(--color-primary-foreground)] py-8 px-4 md:px-6 transition-colors duration-300"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Marca e descrição */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Ninteku</h2>
          <p>
            Tecnologia com alma africana para um futuro conectado e inclusivo.
          </p>
        </div>

        {/* Navegação */}
        <nav aria-label="Navegação do rodapé" className="space-y-3">
          <h3 className="font-semibold uppercase">Navegação</h3>
          <ul className="space-y-1">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)] transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Localização */}
        <div className="space-y-3">
          <h3 className="font-semibold uppercase">Localização</h3>
          <address className="not-italic">
            Maputo - Moçambique
          </address>
        </div>

        {/* Redes sociais */}
        <div className="space-y-3">
          <h3 className="font-semibold uppercase">Redes Sociais</h3>
          <ul className="flex gap-4" aria-label="Redes sociais">
            {socialLinks.map(({ label, href, icon, hoverColor }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`transition focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)] ${hoverColor}`}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="my-8 border-[var(--color-primary)] dark:border-blue-700" />

      <div className="text-center text-sm select-none">
        &copy; {currentYear} NINTEKU. Todos os direitos reservados.
      </div>
    </footer>
  );
};
