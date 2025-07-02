const cases = [
  {
    titulo: "MoCity+",
    problema: "Falta de comunicação entre cidadãos e autoridades urbanas.",
    solucao: "Plataforma digital para denúncias e sugestões.",
    resultado: "Mais de 500 interações em 3 meses.",
  },
];

export default function CaseStudy() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Estudos de Caso</h2>
      <div className="space-y-6">
        {cases.map((c) => (
          <div key={c.titulo} className="bg-[var(--color-background)] rounded p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">{c.titulo}</h3>
            <p><span className="font-semibold">Problema:</span> {c.problema}</p>
            <p><span className="font-semibold">Solução:</span> {c.solucao}</p>
            <p><span className="font-semibold">Resultado:</span> {c.resultado}</p>
          </div>
        ))}
      </div>
    </section>
  );
}