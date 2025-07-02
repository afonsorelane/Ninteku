import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

const cases = [
  {
    titulo: "MoCity+",
    problema: "Falta de comunicação entre cidadãos e autoridades urbanas.",
    solucao: "Plataforma digital para denúncias e sugestões.",
    resultado: "Mais de 500 interações em 3 meses.",
  },
];

export const CaseStudy = () => {
  return (
    <section className="mb-12">
      <motion.h2
        className="text-xl font-bold mb-4 text-[var(--color-primary)]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Estudos de Caso
      </motion.h2>
      <div className="space-y-6">
        {cases.map((c, i) => (
          <motion.div
            key={c.titulo}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
          >
            <Card className="bg-card rounded p-0 shadow w-full max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {c.titulo}
                </h3>
                <p>
                  <span className="font-semibold">Problema:</span> {c.problema}
                </p>
                <p>
                  <span className="font-semibold">Soluções:</span> {c.solucao}
                </p>
                <p>
                  <span className="font-semibold">Resultado:</span> {c.resultado}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};