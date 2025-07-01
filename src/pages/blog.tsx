import { useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import BlogCategoryFilter from "../components/dom/BlogCategoryFilter";
import BlogList from "../components/dom/BlogList";

export default function Blog() {
  const [categoria, setCategoria] = useState("");
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Blog / Ninteku Learn</h1>
        <BlogCategoryFilter categoria={categoria} setCategoria={setCategoria} />
        <BlogList categoria={categoria} />
      </main>
      <Footer />
    </>
  );
}