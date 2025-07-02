import { motion } from "framer-motion";

const valores = [
  { titulo: "Sabedoria", descricao: "Inspirados pela tradição e pelo conhecimento africano." },
  { titulo: "Crescimento", descricao: "Foco em evolução contínua e impacto positivo." },
  { titulo: "Acolhimento", descricao: "Ambiente inclusivo e colaborativo." },
  { titulo: "Simplicidade", descricao: "Soluções acessíveis e fáceis de usar." },
  { titulo: "Confiança", descricao: "Transparência e ética em tudo que fazemos." },
];

export const Valores = () => {
  return (
    <section className="my-12">
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Nossos Valores</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {valores.map((v, i) => (
          <motion.div
            key={v.titulo}
            className="bg-[var(--color-background)] p-4 rounded shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.10, type: "spring" }}
          >
            <h3 className="font-semibold text-[var(--color-primary)]">{v.titulo}</h3>
            <p className="text-sm">{v.descricao}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}