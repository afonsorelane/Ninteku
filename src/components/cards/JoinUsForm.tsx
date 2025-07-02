import { useState } from "react";

export default function JoinUsForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    interesse: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Aqui futuramente: validação extra, API, integração com backend
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="bg-green-100 text-green-800 border border-green-300 p-4 rounded-lg text-center shadow-sm">
        <p className="font-semibold">Obrigado pelo interesse!</p>
        <p>Em breve entraremos em contacto.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7   bg-[var(--color-card)] dark:bg-white/10 text-[var(--color-foreground)] p-6 rounded-3xl shadow-2xl"
    >
      <div>
        <label htmlFor="nome" className="block font-semibold mb-1">
          Nome completo
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          className="input-field w-full p-2"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="input-field w-full p-2"
          placeholder="seu@email.com"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="interesse" className="block font-semibold mb-1">
          Interesse
        </label>
        <input
          id="interesse"
          name="interesse"
          type="text"
          className="input-field w-full p-2"
          placeholder="Estágio, voluntariado, parceria..."
          value={form.interesse}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="block font-semibold mb-1">
          Mensagem (opcional)
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          className="input-field w-full p-2"
          rows={4}
          placeholder="Conte-nos mais sobre você..."
          value={form.mensagem}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full text-center"
        aria-label="Enviar formulário de candidatura"
      >
        Enviar
      </button>
    </form>
  );
}
