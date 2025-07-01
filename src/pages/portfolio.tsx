import { Header } from "../components/header";
import { Footer } from "../components/footer";
import PortfolioGallery from "../components/dom/PortfolioGallery";
import CaseStudy from "../components/dom/CaseStudy";

export default function Portfolio() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Portfólio</h1>
        <PortfolioGallery />
        <CaseStudy />
      </main>
      <Footer />
    </>
  );
}