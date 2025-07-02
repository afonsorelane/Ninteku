import { motion } from "framer-motion";

export const Timeline = () => {
  return (
    <motion.section
      className="my-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Nossa Jornada</h2>
      <ul className="border-l-2 border-[var(--color-primary)] pl-6 space-y-6">
        {[
          { ano: "2022", texto: "Ideia inicial e primeiros projetos-piloto." },
          { ano: "2023", texto: "Lançamento dos primeiros serviços e parcerias." },
          { ano: "2024", texto: "Expansão para novas áreas de atuação e impacto social." },
        ].map((item, i) => (
          <motion.li
            key={item.ano}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: i * 0.12, type: "spring" }}
          >
            <span className="font-semibold">{item.ano}:</span> {item.texto}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}