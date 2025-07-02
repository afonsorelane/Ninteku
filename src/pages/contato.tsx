
import ContactForm from "../components/cards/ContactForm";

export default function Contato() {
  return (
    <>
  
      <main className="max-w-2xl  mx-auto py-16 px-4 text-[var(--color-foreground)]">
        <section className="mb-10 bg">
          <h1 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Fale Connosco</h1>
          <p className="mb-6 text-[var(--color-text-main)]">
            Estamos prontos para ouvir suas ideias, projetos ou esclarecer dúvidas. Entre em contacto connosco por email, WhatsApp ou preencha o formulário abaixo.
          </p>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm space-y-3 text-sm">
            <div>
              <span className="font-semibold">📧 Email:</span>{" "}
              <a
                href="mailto:contato@ninteku.co.mz"
                className="text-[var(--color-primary)] underline"
              >
                contato@ninteku.co.mz
              </a>
            </div>
            <div>
              <span className="font-semibold">📱 WhatsApp:</span>{" "}
              <a
                href="https://wa.me/258840000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] underline"
              >
                +258 84 000 0000
              </a>
            </div>
            {/* <div>
              <span className="font-semibold">📍 Endereço:</span> Av. Julius Nyerere, Maputo
            </div> */}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">Formulário de Contato</h2>
          <ContactForm />
        </section>
      </main>
      
    </>
  );
}
