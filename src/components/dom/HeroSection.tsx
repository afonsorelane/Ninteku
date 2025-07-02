import { motion } from "framer-motion";

import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <motion.section
      id="home"
      className="py-20 bg-[var(--color-background)] text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mt-6 text-[var(--color-primary)]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
      >
        Tecnologia com raízes africanas, para empresas e comunidades com propósito.
      </motion.h1>
      <motion.p
        className="mb-8 text-lg text-[var(--color-text-main)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", delay: 0.4 }}
      >
        Inovação acessível, calor humano e impacto social.
      </motion.p>
      <Button asChild size="lg" className="font-semibold">
        <a href="#our-services" className="btn-primary">
          Ver Nossos Serviços
        </a>
      </Button>
    </motion.section>
  );
};