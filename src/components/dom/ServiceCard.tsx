type Service = {
  nome: string;
  descricao: string;
  icone: string;
};

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

export default function ServiceCard() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Serviços Urbanos e de Impacto</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {servicos.map((s) => (
          <div key={s.nome} className="bg-[var(--color-background)] rounded shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">{s.icone}</span>
            <h3 className="font-semibold mb-2">{s.nome}</h3>
            <p className="text-sm text-center">{s.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}