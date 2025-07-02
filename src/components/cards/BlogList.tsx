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

type Props = {
  categoria: string;
};

export default function BlogList({ categoria }: Props) {
  return (
    <div className="space-y-6">
      {posts
        .filter((p) => categoria === "" || p.categoria === categoria)
        .map((p) => (
          <div key={p.titulo} className="bg-white rounded shadow p-4">
            <h3 className="font-bold text-lg mb-1">{p.titulo}</h3>
            <span className="text-xs text-gray-500">{p.data} • {p.categoria}</span>
            <p className="mt-2 text-sm">{p.resumo}</p>
          </div>
        ))}
      {posts.filter((p) => categoria === "" || p.categoria === categoria).length === 0 && (
        <div className="text-gray-500">Nenhum post encontrado para esta categoria.</div>
      )}
    </div>
  );
}