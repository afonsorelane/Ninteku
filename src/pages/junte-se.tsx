import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Oportunidades from "../components/dom/Oportunidades";
import JoinUsForm from "../components/dom/JoinUsForm";

export default function JunteSe() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Junte-se à Ninteku</h1>
        <p className="mb-6">
          Venha fazer parte de uma equipa inovadora, diversa e apaixonada por impacto social e tecnologia!
        </p>
        <Oportunidades />
        <JoinUsForm />
      </main>
      <Footer />
    </>
  );
}