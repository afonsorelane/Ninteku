import { motion } from "framer-motion";

const team = [
  { nome: "Domingos Timane Jr", funcao: "Cofundador & CEO", foto: "/public/CEO.jpg" },
  { nome: "Lucas Vilanculo", funcao: "Cofundador & CTO", foto: "/public/CTO.jpg" },
  { nome: "Afonso Relane", funcao: "Cofundador & CMO", foto: "/team/carlos.jpg" },
];

export const Team = () => {
  return (
    <section className="my-12">
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">A Equipa</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {team.map((m, i) => (
          <motion.div
            key={m.nome}
            className="flex flex-col items-center bg-white rounded shadow p-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.12, type: "spring" }}
          >
            <img src={m.foto} alt={m.nome} className="w-24 h-24 rounded-full object-cover mb-2" />
            <span className="font-semibold">{m.nome}</span>
            <span className="text-sm text-gray-500">{m.funcao}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}