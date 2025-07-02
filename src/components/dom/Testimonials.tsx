import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <motion.section
      className="py-16 bg-[var(--color-background)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <motion.h2
        className="text-2xl font-bold text-center mb-8 text-[var(--color-primary)]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6, type: "spring", delay: 0.1 }}
      >
        Depoimentos
      </motion.h2>
      <div className="max-w-3xl mx-auto text-center">
        <motion.blockquote
          className="italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
        >
          "A Ninteku transformou nosso negócio com soluções digitais inovadoras!"
        </motion.blockquote>
        <motion.span
          className="block mt-4 font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          — Cliente Satisfeito
        </motion.span>
      </div>
    </motion.section>
  );
};