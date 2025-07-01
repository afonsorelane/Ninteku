const categorias = [
  "Dicas para empresas",
  "Desenvolvimento pessoal",
  "Cidadania e tecnologia urbana",
  "Notícias tech africano",
];

type Props = {
  categoria: string;
  setCategoria: (cat: string) => void;
};

export default function BlogCategoryFilter({ categoria, setCategoria }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categorias.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded ${
            categoria === cat
              ? "bg-[var(--color-primary)] text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setCategoria(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}