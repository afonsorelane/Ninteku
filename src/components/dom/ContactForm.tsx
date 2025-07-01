import { useState } from "react";

export default function ContactForm() {
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
    // Aqui você pode integrar com backend ou serviço de email
  }

  if (enviado) {
    return (
      <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded">
        Obrigado pelo contato! Em breve retornaremos.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <div>
        <label className="block font-semibold mb-1" htmlFor="nome">Nome</label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          className="w-full border rounded px-3 py-2"
          value={form.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border rounded px-3 py-2"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1" htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          className="w-full border rounded px-3 py-2"
          rows={4}
          value={form.mensagem}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center">
        <input
          id="novidades"
          name="novidades"
          type="checkbox"
          className="mr-2"
          checked={form.novidades}
          onChange={handleChange}
        />
        <label htmlFor="novidades" className="text-sm">Quero receber novidades</label>
      </div>
      <button type="submit" className="btn-primary w-full">Enviar</button>
    </form>
  );
}