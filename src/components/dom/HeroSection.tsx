export default function HeroSection() {
  return (
    <section id="home" className="py-20 bg-[var(--color-background)] text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]">
        Tecnologia com raízes africanas, para empresas e comunidades com propósito.
      </h1>
      <p className="mb-8 text-lg text-[var(--color-text-main)]">
        Inovação acessível, calor humano e impacto social.
      </p>
      <a href="#our-services" className="btn-primary">Ver Nossos Serviços</a>
    </section>
  );
}