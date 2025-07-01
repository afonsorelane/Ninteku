const projetos = [
  { titulo: "MoCity+", tipo: "Plataforma Urbana", imagem: "/portfolio/mocity.jpg" },
  { titulo: "Site ONG X", tipo: "Web", imagem: "/portfolio/ongx.jpg" },
  { titulo: "Design Social", tipo: "Design", imagem: "/portfolio/design.jpg" },
];

export default function PortfolioGallery() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Galeria de Projetos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projetos.map((p) => (
          <div key={p.titulo} className="bg-white rounded shadow p-4 flex flex-col items-center">
            <img src={p.imagem} alt={p.titulo} className="w-full h-40 object-cover rounded mb-2" />
            <span className="font-semibold">{p.titulo}</span>
            <span className="text-sm text-gray-500">{p.tipo}</span>
          </div>
        ))}
      </div>
    </section>
  );
}