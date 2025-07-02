import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Timeline } from "../components/dom/Timeline";
import { Team } from "../components/dom/Team";
import { Valores } from "../components/dom/Valores";

export const Sobre = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-10 p-10">
        <h1 className="text-3xl font-bold mt-20 text-[var(--color-primary)]">Sobre a Ninteku</h1>
        <p className="mb-4">
          Nossa jornada começou com o propósito de conectar tecnologia, cultura africana e impacto social...
        </p>
        <Timeline />
        <Valores />
        <Team />
      </main>
      <Footer />
    </div>
  );
}