import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

const oportunidades = [
  { titulo: "Estágio em Desenvolvimento Web", status: "Aberto" },
  { titulo: "Voluntariado em Design", status: "Aberto" },
  { titulo: "Colaboração em Projetos Sociais", status: "Aberto" },
];

export const Oportunidades = () => {
  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Oportunidades Atuais</h2>
      <ul className="space-y-2">
        {oportunidades.map((o, i) => (
          <motion.li
            key={o.titulo}
            className="flex items-center justify-between bg-[var(--color-background)] p-3 rounded shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
          >
            <span>{o.titulo}</span>
            <Badge variant="default">{o.status}</Badge>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}