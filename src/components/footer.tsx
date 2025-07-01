import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-primary)] text-white dark:bg-[var(--background)] dark:text-[var(--color-primary)] py-8 px-4 md:px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                <div className="space-y-3">
                    <h2 className="text-lg font-semibold">Ninteku</h2>
                    <p className="text-sm">
                        Tecnologia com alma africana para um futuro conectado e inclusivo.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="font-semibold uppercase">Navegação</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="/sobre" className="hover:underline">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="/servicos" className="hover:underline">
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a href="/contato" className="hover:underline">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="font-semibold uppercase">Localização</h3>
                    <ul className="space-y-1">
                        <li>Maputo - Moçambique</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="font-semibold uppercase">Redes Sociais</h3>
                    <ul className="flex gap-4">
                        <li>
                            <a
                                href="https://www.facebook.com/"
                                className="hover:text-blue-400 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/"
                                className="hover:text-white dark:hover:text-[var(--color-primary)] transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/"
                                className="hover:text-blue-400 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/"
                                className="hover:text-pink-400 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com/"
                                className="hover:text-blue-300 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="my-8 border-blue-700 dark:border-[var(--color-primary)]" />

            <div className="text-center text-sm">
                &copy; {currentYear} NINTEKU. Todos os direitos reservados.
            </div>
        </footer>
    );
};
