import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export const ContactForm = () => {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "", novidades: false });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
  }

  if (enviado) {
    return (
      <motion.div
        className="bg-green-100 border border-green-300 text-green-800 p-4 rounded text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Obrigado pelo contato! Em breve retornaremos.
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className=" gap-8 bg-white p-8 rounded-xl shadow-xl max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex-1 space-y-4">
        <div>
          <Label className="font-semibold mb-1" htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            name="nome"
            type="text"
            required
            value={form.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label className="font-semibold mb-1" htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center">
          <Input
            id="novidades"
            name="novidades"
            type="checkbox"
            className="mr-2 w-4 h-4"
            checked={form.novidades}
            onChange={handleChange}
          />
          <Label htmlFor="novidades" className="text-sm">Quero receber novidades</Label>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Label className="font-semibold mb-1" htmlFor="mensagem">Mensagem</Label>
          <Textarea
            id="mensagem"
            name="mensagem"
            required
            rows={7}
            value={form.mensagem}
            onChange={handleChange}
            className="min-h-[120px]"
          />
        </div>
        <Button type="submit" className="w-full md:w-auto self-end mt-2">Enviar</Button>
      </div>
    </motion.form>
  );
}