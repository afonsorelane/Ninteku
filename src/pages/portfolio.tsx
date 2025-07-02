import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { PortfolioGallery } from "../components/dom/PortfolioGallery";
import { CaseStudy } from "../components/dom/CaseStudy";

export const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-10 p-10">
        <h1 className="text-3xl font-bold mt-20 text-[var(--color-primary)]">Portfólio</h1>
        <PortfolioGallery />
        <CaseStudy />
      </main>
      <Footer />
    </div>
  );
}