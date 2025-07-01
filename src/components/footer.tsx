import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-900 text-white py-8 px-4 md:px-6 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                <div className="space-y-3">
                    <h2 className="text-lg font-semibold text-green-100">Ninteko</h2>
                    <p className="text-green-100">
                        Full-Stack Developer apaixonada por transformar ideias em código limpo, leve e funcional.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="font-semibold uppercase text-green-200">Navegação</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#about" className="hover:underline text-green-100 hover:text-white">
                                Sobre Ninteko
                            </a>
                        </li>
                        <li>
                            <a href="#resume" className="hover:underline text-green-100 hover:text-white">
                                Nossos-Serviços
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline text-green-100 hover:text-white">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="font-semibold uppercase text-green-200">Localização</h3>
                    <ul className="space-y-1 text-green-100">
                        <li>Maputo - Moçambique</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="font-semibold uppercase text-green-200">Redes Sociais</h3>
                    <ul className="flex gap-4 text-green-100">
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
                                href="https://github.com/usuario"
                                className="hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/usuario"
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
                                href="https://linkedin.com/in/teu-user"
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

            <hr className="my-8 border-blue-700" />

            <div className="text-center text-sm text-green-100">
                &copy; {currentYear} NINTEKU. Todos os direitos reservados.
            </div>
        </footer>
    );
};
