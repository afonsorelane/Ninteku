import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ContactForm } from "../components/dom/ContactForm";

export const Contato = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-10 p-10">
        <h1 className="text-3xl font-bold mt-20 text-[var(--color-primary)]">Contato</h1>
        <div className="mb-8 space-y-2">
          <div>
            <span className="font-semibold">Email:</span> contato@ninteku.co.mz
          </div>
          <div>
            <span className="font-semibold">WhatsApp:</span> +258 84 000 0000
          </div>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}