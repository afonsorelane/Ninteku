const areas = [
  { title: "Cidades Inteligentes", icon: "🏙️" },
  { title: "Empregabilidade Jovem", icon: "👩🏾‍💻" },
  { title: "Cidadania Ativa", icon: "🤝" },
  { title: "Capacitação Digital", icon: "💡" },
  { title: "Serviços para Empresas", icon: "🏢" },
];

export default function AreasAtuacao() {
  return (
    <section className="py-16 bg-[var(--color-background)]">
      <h2 className="text-2xl font-bold text-center mb-8 text-[var(--color-primary)]">Áreas de Atuação</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
        {areas.map((area) => (
          <div key={area.title} className="card flex flex-col items-center p-6">
            <span className="text-4xl mb-2">{area.icon}</span>
            <span className="font-semibold">{area.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}