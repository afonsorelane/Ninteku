
const areas = [
  { title: "Cidades Inteligentes", icon: "🏙️" },
  { title: "Empregabilidade Jovem", icon: "👩🏾‍💻" },
  { title: "Cidadania Ativa", icon: "🤝" },
  { title: "Capacitação Digital", icon: "💡" },
  { title: "Serviços para Empresas", icon: "🏢" },
];

export default function Home() {
  return (
    <>
     
      <main className="bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors duration-300">
        {/* Hero Section */}
        <section id="home" className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)] leading-tight">
              Tecnologia com raízes africanas, para empresas e comunidades com propósito.
            </h1>
            <p className="mb-8 text-lg text-[var(--color-text-main)]">
              Inovação acessível, calor humano e impacto social.
            </p>
            <a href="/servicos" className="btn-primary" aria-label="Ver nossos serviços">
              Ver Nossos Serviços
            </a>
          </div>
        </section>

        {/* Missão, Visão e Propósito */}
        <section id="about" className="py-16 px-4 bg-white dark:bg-[var(--background)] transition-colors duration-300">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Missão", desc: "Levar tecnologia acessível e relevante para todos." },
              { title: "Visão", desc: "Ser referência em inovação com propósito social em África." },
              { title: "Propósito", desc: "Transformar vidas e comunidades através do digital." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-xl mb-2 text-[var(--color-primary)]">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section className="py-16 px-4 bg-[var(--color-background)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10 text-[var(--color-primary)]">
              Áreas de Atuação
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {areas.map((area) => (
                <div
                  key={area.title}
                  className="card flex flex-col items-center justify-center text-center p-6"
                >
                  <span className="text-4xl mb-2">{area.icon}</span>
                  <span className="font-semibold">{area.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-16 px-4 bg-transparent">
          <div className="max-w-3xl mx-auto text-center bg-white/10 dark:bg-[var(--color-primary)]/10 backdrop-blur-md rounded-xl p-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-8 text-[var(--color-primary)] dark:text-[var(--color-primary-foreground)]">
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

        {/* Call to Action */}
        <section className="py-16 px-4 bg-[var(--color-primary)] text-white text-center">
          <h2 className="text-2xl font-bold mb-6">
            Vamos criar juntos uma solução digital com impacto real.
          </h2>
          <a href="/contato" className="btn-primary bg-white text-[var(--color-primary)] hover:bg-[var(--color-highlight)] hover:text-white transition">
            Solicitar Proposta
          </a>
        </section>
      </main>
   
    </>
  );
}
