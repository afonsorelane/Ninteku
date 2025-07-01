import { Header } from "../components/header";
import { Footer } from "../components/footer";
import ContactForm from "../components/dom/ContactForm";

export default function Contato() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Contato</h1>
        <div className="mb-8 space-y-2">
          <div>
            <span className="font-semibold">Email:</span> contato@ninteku.co.mz
          </div>
          <div>
            <span className="font-semibold">WhatsApp:</span> +258 84 000 0000
          </div>
          {/* Adicione endereço ou mapa se desejar */}
        </div>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}