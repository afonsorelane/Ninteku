import { Card, CardContent } from "../ui/card"
import { motion } from "framer-motion"

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

export const BlogList = ({ categoria }: Props) => {
  const filtered = posts.filter((p) => categoria === "" || p.categoria === categoria);

  return (
    <div className="space-y-6">
      {filtered.map((p, i) => (
        <motion.div
          key={p.titulo}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: i * 0.08, type: "spring" }}
        >
          <Card className="w-full max-w-2xl mx-auto bg-card shadow-md">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-1 text-foreground">{p.titulo}</h3>
              <span className="text-xs text-muted-foreground">{p.data} • {p.categoria}</span>
              <p className="mt-2 text-sm text-foreground">{p.resumo}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
      {filtered.length === 0 && (
        <div className="text-muted-foreground text-center">Nenhum post encontrado para esta categoria.</div>
      )}
    </div>
  );
}