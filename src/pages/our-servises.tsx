import { Header } from "../components/header";
import { Footer } from "../components/footer";
import ServicePackages from "../components/dom/ServicePackages";
import ServiceCard from "../components/dom/ServiceCard";

export default function Servicos() {
  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Nossos Serviços</h1>
        <ServicePackages />
        <ServiceCard />
      </main>
      <Footer />
    </div>
  );
}