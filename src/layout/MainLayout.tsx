import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

interface MainLayoutProps {
  mainClassName?: string; // opcional para customização
}

export const MainLayout = ({ mainClassName = "" }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors duration-300">
      <Header />
      <main role="main" aria-label="Conteúdo principal" className={`flex-1 ${mainClassName}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
