import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { MagicCursor } from "./components/magicmouse";

export const App = () => {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-white via-slate-100 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] transition-colors duration-500 overflow-x-hidden">
      <MagicCursor />
      <Header />
        <main className="flex-1">
        </main>
      <Footer />
    </div>
  );
};
