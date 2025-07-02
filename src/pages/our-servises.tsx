

type Service = {
  nome: string;
  descricao: string;
  icone: string;
};

const packages = [
  {
    nome: "Starter",
    preco: "A partir de 10.000MT",
    descricao: "Ideal para quem está começando no digital.",
    features: ["Site básico", "Suporte inicial", "Design responsivo"],
  },
  {
    nome: "Profissional",
    preco: "A partir de 25.000MT",
    descricao: "Para empresas que querem crescer online.",
    features: ["Site completo", "Consultoria", "SEO básico", "Integrações"],
  },
  {
    nome: "Premium",
    preco: "Sob consulta",
    descricao: "Soluções customizadas e suporte premium.",
    features: ["Soluções sob medida", "Suporte dedicado", "Funcionalidades avançadas"],
  },
];

const servicos: Service[] = [
  {
    nome: "MoCity+",
    descricao: "Plataforma para mobilidade urbana e denúncias.",
    icone: "🚦",
  },
  {
    nome: "Capacitação Digital",
    descricao: "Cursos e workshops para jovens e empresas.",
    icone: "💻",
  },
  {
    nome: "Consultoria Digital",
    descricao: "Soluções personalizadas para o seu negócio.",
    icone: "🧑🏾‍💼",
  },
];

export default function Servicos() {
  return (
    <>
    
      <main className="max-w-6xl mx-auto py-16 px-4 text-[var(--color-foreground)]">
        {/* Título principal */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[var(--color-primary)]">Nossos Serviços</h1>
          <p className="text-lg text-[var(--color-text-main)] max-w-2xl mx-auto">
            Oferecemos soluções digitais com impacto social, acessíveis e adaptadas ao contexto africano.
          </p>
        </section>

        {/* Pacotes para Empresas */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)] text-center">
            Pacotes para Empresas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.nome}
                className="card bg-white dark:bg-[var(--color-background)] text-center p-6 rounded-lg shadow-md border border-[var(--color-border)]"
              >
                <h3 className="text-xl font-bold mb-1 text-[var(--color-primary)]">{pkg.nome}</h3>
                <p className="text-md font-semibold mb-2 text-[var(--color-text-main)]">{pkg.preco}</p>
                <p className="mb-4 text-sm text-[var(--color-muted-foreground)]">{pkg.descricao}</p>
                <ul className="mb-4 text-sm list-disc list-inside text-left text-[var(--color-foreground)]">
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href="/contato"
                  className="btn-primary w-full text-center"
                  aria-label={`Solicitar orçamento para o pacote ${pkg.nome}`}
                >
                  Solicitar orçamento
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Serviços Urbanos e de Impacto */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)] text-center">
            Serviços Urbanos e de Impacto
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicos.map((s) => (
              <div
                key={s.nome}
                className="card bg-[var(--color-background)] dark:bg-white/5 p-6 rounded-lg text-center shadow-sm border border-[var(--color-border)]"
              >
                <span className="text-4xl mb-2">{s.icone}</span>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-1">{s.nome}</h3>
                <p className="text-sm text-[var(--color-text-main)]">{s.descricao}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
   
    </>
  );
}
