import { motion } from "framer-motion";
import { Button } from "../ui/button";

const packages = [
  {
    nome: "Starter",
    preco: "A partir de 10.000MT",
    descricao: "Ideal para quem está começando no digital.",
    features: ["Site básico", "Suporte inicial", "Design responsivo"],
  },
  {
    nome: "Profissional",
    preco: "A partir de 25.000MT",
    descricao: "Para empresas que querem crescer online.",
    features: ["Site completo", "Consultoria", "SEO básico", "Integrações"],
  },
  {
    nome: "Premium",
    preco: "Sob consulta",
    descricao: "Soluções customizadas e suporte premium.",
    features: ["Soluções sob medida", "Suporte dedicado", "Funcionalidades avançadas"],
  },
];

export const ServicePackages = () => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Pacotes para Empresas</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.nome}
            className="bg-white rounded shadow p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.12, type: "spring" }}
          >
            <h3 className="font-bold text-lg mb-2">{pkg.nome}</h3>
            <p className="font-semibold mb-2">{pkg.preco}</p>
            <p className="mb-4 text-sm text-gray-600">{pkg.descricao}</p>
            <ul className="mb-4 text-sm list-disc list-inside">
              {pkg.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Button asChild className="w-full">
              <a href="/contato">Solicitar orçamento</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}