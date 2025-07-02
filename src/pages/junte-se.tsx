import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Oportunidades } from "../components/dom/Oportunidades";
import { JoinUsForm } from "../components/dom/JoinUsForm";

export const JunteSe = () => {
  return (
    <>
      <Header />
      <main className="flex-1 pt-10 p-10">
        <h1 className="text-3xl font-bold mt-20 text-[var(--color-primary)]">Junte-se à Ninteku</h1>
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