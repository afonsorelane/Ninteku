import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
    novidades: false,
  });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (target as HTMLInputElement).checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Aqui pode integrar com EmailJS, Formspree, Google Forms, etc.
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="bg-green-100 border border-green-300 text-green-800 p-6 rounded-xl shadow-sm text-center">
        <p className="text-lg font-semibold mb-2">✅ Mensagem enviada com sucesso!</p>
        <p>Obrigado pelo contato. Em breve retornaremos.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-[var(--color-card)] p-6 rounded-xl shadow-md"
    >
      <div>
        <label htmlFor="nome" className="block font-semibold mb-1 text-sm">
          Nome <span className="text-red-500">*</span>
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          className="input-field w-full"
          value={form.nome}
          onChange={handleChange}
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold mb-1 text-sm">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="input-field w-full"
          value={form.email}
          onChange={handleChange}
          placeholder="exemplo@email.com"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="block font-semibold mb-1 text-sm">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          className="input-field w-full"
          rows={4}
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Como podemos te ajudar?"
        />
      </div>

      <div className="flex items-center gap-2 text-sm">
        <input
          id="novidades"
          name="novidades"
          type="checkbox"
          checked={form.novidades}
          onChange={handleChange}
          className="accent-[var(--color-primary)]"
        />
        <label htmlFor="novidades">
          Quero receber novidades, dicas e oportunidades da Ninteku
        </label>
      </div>

      <button type="submit" className="btn-primary w-full">
        Enviar Mensagem
      </button>
    </form>
  );
}
