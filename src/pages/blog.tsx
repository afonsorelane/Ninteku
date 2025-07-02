import { useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { BlogCategoryFilter } from "../components/dom/BlogCategoryFilter";
import { BlogList } from "../components/dom/BlogList";

export const Blog = () => {
  const [categoria, setCategoria] = useState("");
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-10 p-10">
        <h1 className="text-3xl font-bold mt-20 text-[var(--color-primary)]">Blog / Ninteku Learn</h1>
        <BlogCategoryFilter categoria={categoria} setCategoria={setCategoria} />
        <BlogList categoria={categoria} />
      </main>
      <Footer />
    </div>
  );
}