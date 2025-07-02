import { motion } from "framer-motion";

const projetos = [
  { titulo: "MoCity+", tipo: "Plataforma Urbana", imagem: "/portfolio/mocity.jpg" },
  { titulo: "Site ONG X", tipo: "Web", imagem: "/portfolio/ongx.jpg" },
  { titulo: "Design Social", tipo: "Design", imagem: "/portfolio/design.jpg" },
];

export const PortfolioGallery = () => {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Galeria de Projetos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projetos.map((p, i) => (
          <motion.div
            key={p.titulo}
            className="bg-white rounded shadow p-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.12, type: "spring" }}
          >
            <img
              src={p.imagem}
              alt={p.titulo}
              className="w-full h-40 object-cover rounded mb-2"
              loading="lazy"
            />
            <span className="font-semibold">{p.titulo}</span>
            <span className="text-sm text-gray-500">{p.tipo}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}