export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="max-w-3xl mx-auto text-center bg-white/10 dark:bg-[var(--color-primary)]/10 backdrop-blur-md rounded-xl p-8 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-center mb-8 text-[var(--color-primary)] dark:text-[var(--color-primary-foreground)]">
          Depoimentos
        </h2>
        <blockquote className="italic text-[var(--color-text-main)] dark:text-[var(--color-primary-foreground)]">
          "A Ninteku transformou nosso negócio com soluções digitais inovadoras!"
        </blockquote>
        <span className="block mt-4 font-semibold text-[var(--color-primary)] dark:text-[var(--color-primary-foreground)]">
          — Cliente Satisfeito
        </span>
      </div>
    </section>
  );
}