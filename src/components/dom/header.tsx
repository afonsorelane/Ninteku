export const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <img src="/logo.svg" alt="Ninteku" className="h-10" />
        <nav className="space-x-6">
          <a href="/" className="font-semibold text-[var(--color-primary)]">Início</a>
          <a href="/sobre" className="text-[var(--color-neutral)]">Sobre</a>
          <a href="/servicos" className="text-[var(--color-neutral)]">Serviços</a>
          <a href="/portfolio" className="text-[var(--color-neutral)]">Portfólio</a>
          <a href="/blog" className="text-[var(--color-neutral)]">Blog</a>
          <a href="/junte-se" className="text-[var(--color-neutral)]">Junte-se</a>
          <a href="/contato" className="text-[var(--color-neutral)]">Contato</a>
        </nav>
        <a href="/contato" className="btn-primary ml-4">Solicitar Proposta</a>
      </div>
    </header>
  );
}