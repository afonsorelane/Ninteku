import { motion } from "framer-motion";
import { Building2, GraduationCap, UserCog } from "lucide-react";

type Service = {
  nome: string;
  descricao: string;
  icone: React.ReactNode;
};

const servicos: Service[] = [
  {
    nome: "MoCity+",
    descricao: "Plataforma para mobilidade urbana e denúncias.",
    icone: <Building2 size={36} className="text-[var(--color-primary)]" />,
  },
  {
    nome: "Capacitação Digital",
    descricao: "Cursos e workshops para jovens e empresas.",
    icone: <GraduationCap size={36} className="text-[var(--color-primary)]" />,
  },
  {
    nome: "Consultoria Digital",
    descricao: "Soluções personalizadas para o seu negócio.",
    icone: <UserCog size={36} className="text-[var(--color-primary)]" />,
  },
];

export const ServiceCard = () => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Serviços Urbanos e de Impacto</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {servicos.map((s, i) => (
          <motion.div
            key={s.nome}
            className="bg-[var(--color-background)] rounded shadow p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.12, type: "spring" }}
          >
            <span className="text-4xl mb-2">{s.icone}</span>
            <h3 className="font-semibold mb-2">{s.nome}</h3>
            <p className="text-sm text-center">{s.descricao}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}