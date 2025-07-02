import { motion } from "framer-motion";

export const MissionVision = () => {
  return (
    <motion.section
      id="about"
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "Missão",
            desc: "Levar tecnologia acessível e relevante para todos.",
          },
          {
            title: "Visão",
            desc: "Ser referência em inovação com propósito social em África.",
          },
          {
            title: "Propósito",
            desc: "Transformar vidas e comunidades através do digital.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.15, type: "spring" }}
          >
            <h3 className="font-bold text-xl mb-2 text-[var(--color-primary)]">{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};