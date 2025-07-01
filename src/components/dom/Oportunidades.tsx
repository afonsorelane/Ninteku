const oportunidades = [
  { titulo: "Estágio em Desenvolvimento Web", status: "Aberto" },
  { titulo: "Voluntariado em Design", status: "Aberto" },
  { titulo: "Colaboração em Projetos Sociais", status: "Aberto" },
];

export default function Oportunidades() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Oportunidades Atuais</h2>
      <ul className="space-y-2">
        {oportunidades.map((o) => (
          <li key={o.titulo} className="flex items-center justify-between bg-[var(--color-background)] p-3 rounded shadow">
            <span>{o.titulo}</span>
            <span className="badge-success">{o.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}