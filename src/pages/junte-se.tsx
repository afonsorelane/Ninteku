
import JoinUsForm from "../components/cards/JoinUsForm";

const oportunidades = [
  { titulo: "Estágio em Desenvolvimento Web", status: "Aberto" },
  { titulo: "Voluntariado em Design", status: "Aberto" },
  { titulo: "Colaboração em Projetos Sociais", status: "Aberto" },
];

// Componente auxiliar (interno) para uma oportunidade
function OportunidadeItem({ titulo, status }: { titulo: string; status: string }) {
  return (
    <li className="flex items-center justify-between bg-[var(--color-background)] dark:bg-[var(--color-card)] p-4 rounded shadow-sm border border-[var(--color-border)]">
      <span className="font-medium text-[var(--color-text-main)]">{titulo}</span>
      <span
        className="badge badge-success text-sm"
        aria-label={`Status: ${status}`}
      >
        {status}
      </span>
    </li>
  );
}

export default function JunteSe() {
  return (
    <>
  
      <main className="max-w-3xl mx-auto py-16 px-4 text-[var(--color-foreground)]">
        <section className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">
            Junte-se à Ninteku
          </h1>
          <p className="text-base text-[var(--color-text-main)]">
            Venha fazer parte de uma equipa inovadora, diversa e apaixonada por impacto social e tecnologia!
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Oportunidades Atuais</h2>
          <ul className="space-y-3">
            {oportunidades.map((o) => (
              <OportunidadeItem key={o.titulo} titulo={o.titulo} status={o.status} />
            ))}
          </ul>
        </section>

        <section aria-label="Formulário de candidatura" className="bg-white dark:bg-[var(--color-card)] p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">Candidatar-se</h2>
          <JoinUsForm />
        </section>
      </main>
     
    </>
  );
}
