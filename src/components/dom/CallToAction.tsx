import { Button } from "../ui/button"
import { motion } from "framer-motion"

export const CallToAction = () => {
  return (
    <motion.section
      className="py-16 bg-[var(--color-primary)] text-white text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <h2 className="text-2xl font-bold mb-4">
        Vamos criar juntos uma solução digital com impacto real.
      </h2>
      <Button
        asChild
        className="bg-white text-[var(--color-primary)] font-semibold hover:bg-gray-100 transition"
        size="lg"
      >
        <a href="/contato">Solicitar Proposta</a>
      </Button>
    </motion.section>
  );
}