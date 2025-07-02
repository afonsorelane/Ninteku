import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ServicePackages } from "../components/dom/ServicePackages";
import { ServiceCard } from "../components/dom/ServiceCard";

export const Servicos = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-10 p-10">
        <h1 className="text-3xl font-bold mt-20 text-[var(--color-primary)]">Nossos Serviços</h1>
        <ServicePackages />
        <ServiceCard />
      </main>
      <Footer />
    </div>
  );
}