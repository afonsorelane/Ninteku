

const projetos = [
  { titulo: "MoCity+", tipo: "Plataforma Urbana", imagem: "/portfolio/mocity.jpg" },
  { titulo: "Site ONG X", tipo: "Web", imagem: "/portfolio/ongx.jpg" },
  { titulo: "Design Social", tipo: "Design", imagem: "/portfolio/design.jpg" },
];

const cases = [
  {
    titulo: "MoCity+",
    problema: "Falta de comunicação entre cidadãos e autoridades urbanas.",
    solucao: "Plataforma digital para denúncias e sugestões.",
    resultado: "Mais de 500 interações em 3 meses.",
  },
];

export default function Portfolio() {
  return (
    <>
 
      <main className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Portfólio</h1>
        
        {/* <PortfolioGallery /> */}

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

        {/* <CaseStudy /> */}

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
      </main>
     
    </>
  );
}