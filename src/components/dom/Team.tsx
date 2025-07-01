const team = [
  { nome: "Domingos Timane Jr", funcao: "Cofundador & CEO", foto: "/public/CEO.jpg" },
  { nome: "Lucas Vilanculo", funcao: "Cofundador & CTO", foto: "/public/CTO.jpg" },
  { nome: "Afonso Relane", funcao: "Cofundador & CMO", foto: "/team/carlos.jpg" },
];

export default function Team() {
  return (
    <section className="my-12">
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">A Equipa</h2>
      <div className="flex flex-wrap gap-8">
        {team.map((m) => (
          <div key={m.nome} className="flex flex-col items-center">
            <img src={m.foto} alt={m.nome} className="w-24 h-24 rounded-full object-cover mb-2" />
            <span className="font-semibold">{m.nome}</span>
            <span className="text-sm text-gray-500">{m.funcao}</span>
          </div>
        ))}
      </div>
    </section>
  );
}