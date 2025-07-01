import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Timeline from "../components/dom/Timeline";
import Team from "../components/dom/Team";
import Valores from "../components/dom/Valores";

export default function Sobre() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Sobre a Ninteku</h1>
        <p className="mb-4">
          Nossa jornada começou com o propósito de conectar tecnologia, cultura africana e impacto social...
        </p>
        <Timeline />
        <Valores />
        <Team />
      </main>
      <Footer />
    </>
  );
}