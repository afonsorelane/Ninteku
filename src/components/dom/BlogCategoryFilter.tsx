import { Button } from "../ui/button";
import { motion } from "framer-motion";

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

export const BlogCategoryFilter = ({ categoria, setCategoria }: Props) => {
  return (
    <motion.div
      className="flex flex-wrap gap-2 mb-6 justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {categorias.map((cat) => (
        <Button
          key={cat}
          variant={categoria === cat ? "default" : "outline"}
          className={`px-4 py-2 rounded-full transition-colors duration-200 ${
            categoria === cat
              ? "bg-[var(--color-primary)] text-white"
              : "bg-muted text-foreground"
          }`}
          onClick={() => setCategoria(cat)}
          aria-pressed={categoria === cat}
        >
          {cat}
        </Button>
      ))}
    </motion.div>
  );
};