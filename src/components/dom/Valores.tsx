const valores = [
  { titulo: "Sabedoria", descricao: "Inspirados pela tradição e pelo conhecimento africano." },
  { titulo: "Crescimento", descricao: "Foco em evolução contínua e impacto positivo." },
  { titulo: "Acolhimento", descricao: "Ambiente inclusivo e colaborativo." },
  { titulo: "Simplicidade", descricao: "Soluções acessíveis e fáceis de usar." },
  { titulo: "Confiança", descricao: "Transparência e ética em tudo que fazemos." },
];

export default function Valores() {
  return (
    <section className="my-12">
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Nossos Valores</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {valores.map((v) => (
          <div key={v.titulo} className="bg-[var(--color-background)] p-4 rounded shadow">
            <h3 className="font-semibold text-[var(--color-primary)]">{v.titulo}</h3>
            <p className="text-sm">{v.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}