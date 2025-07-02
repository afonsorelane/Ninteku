import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import {
  Building,
  Briefcase,
  Handshake,
  Lightbulb,
  Users
} from "lucide-react";


const areas = [
  { title: "Cidades Inteligentes", icon: <Building size={36} /> },
  { title: "Empregabilidade Jovem", icon: <Briefcase size={36} /> },
  { title: "Cidadania Ativa", icon: <Handshake size={36} /> },
  { title: "Capacitação Digital", icon: <Lightbulb size={36} /> },
  { title: "Serviços para Empresas", icon: <Users size={36} /> },
];


const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, type: "spring" as const, stiffness: 80 },
  }),
};

export const AreasAtuacao = () => {
  return (
    <section className="py-16 bg-background">
      <motion.h2
        className="text-2xl font-bold text-center mb-8 text-[var(--color-primary)]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        Áreas de Atuação
      </motion.h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {areas.map((area, i) => (
          <motion.div
            key={area.title}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Card className="flex flex-col items-center p-6 bg-card shadow-md h-full">
              <CardContent className="flex flex-col items-center">
                <span className="mb-2">{area.icon}</span>
                <span className="font-semibold text-center text-foreground">
                  {area.title}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};