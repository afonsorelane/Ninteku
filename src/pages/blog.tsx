import { useState } from "react";


const categorias = [
  "Dicas para empresas",
  "Desenvolvimento pessoal",
  "Cidadania e tecnologia urbana",
  "Notícias tech africano",
];

const posts = [
  {
    titulo: "Como criar um site acessível",
    categoria: "Dicas para empresas",
    resumo: "Dicas práticas para tornar seu site mais inclusivo.",
    data: "01/07/2025",
  },
  {
    titulo: "Oportunidades tech para jovens africanos",
    categoria: "Desenvolvimento pessoal",
    resumo: "Descubra caminhos para crescer na tecnologia.",
    data: "15/06/2025",
  },
  {
    titulo: "Cidadania digital: o que muda?",
    categoria: "Cidadania e tecnologia urbana",
    resumo: "Entenda o impacto da tecnologia na vida urbana.",
    data: "05/06/2025",
  },
];

// COMPONENTE DE FILTRO DE CATEGORIAS
function BlogCategoryFilter({
  categoriaAtual,
  setCategoria,
}: {
  categoriaAtual: string;
  setCategoria: (cat: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => setCategoria("")}
        className={`px-4 py-2 rounded ${
          categoriaAtual === ""
            ? "bg-[var(--color-primary)] text-white"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        Todas
      </button>
      {categorias.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategoria(cat)}
          className={`px-4 py-2 rounded ${
            categoriaAtual === cat
              ? "bg-[var(--color-primary)] text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

// COMPONENTE LISTA DE POSTS
function BlogList({ categoria }: { categoria: string }) {
  const filtrados = posts.filter(
    (p) => categoria === "" || p.categoria === categoria
  );

  if (filtrados.length === 0) {
    return (
      <div className="text-gray-500 text-center">
        Nenhum post encontrado para esta categoria.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {filtrados.map((p) => (
        <article
          key={p.titulo}
          className="bg-white dark:bg-[var(--color-background)] p-6 rounded shadow-sm border border-[var(--color-border)]"
        >
          <h3 className="font-bold text-lg mb-1 text-[var(--color-primary)]">{p.titulo}</h3>
          <span className="text-xs text-gray-500">
            {p.data} • {p.categoria}
          </span>
          <p className="mt-2 text-sm text-[var(--color-text-main)]">{p.resumo}</p>
        </article>
      ))}
    </div>
  );
}

// COMPONENTE PRINCIPAL
export default function Blog() {
  const [categoria, setCategoria] = useState("");

  return (
    <>

      <main className="max-w-4xl mx-auto py-16 px-4 text-[var(--color-foreground)]">
        <h1 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">
          Blog / Ninteku Learn
        </h1>

        <BlogCategoryFilter categoriaAtual={categoria} setCategoria={setCategoria} />
        <BlogList categoria={categoria} />
      </main>
   
    </>
  );
}
