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
        <section
          id="home"
          className="relative py-20 px-4 text-center min-h-[60vh] flex items-center justify-center overflow-hidden"
        >
          {/* Imagem de fundo com blur e overlay escuro */}
          <div
            className="absolute inset-0 z-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/heroH.jpg')",
              filter: "blur(2.5px) brightness(0.65)",
            }}
            aria-hidden="true"
          />
          {/* Conteúdo do Hero */}
          <div className="relative z-10 max-w-4xl mx-auto">
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
        <section className="py-16 px-4 bg-background">
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
        <section className="py-16 px-4 bg-transparent flex items-center justify-center min-h-[40vh]">
          <div className="relative w-full max-w-3xl flex items-center justify-center">
            {/* Fundo translúcido com blur cobrindo toda a seção */}
            <div className="absolute inset-0 bg-white/70 dark:bg-[var(--color-primary-foreground)]/10 backdrop-blur-md rounded-[15px] border  dark:border-[var(--color-primary-foreground)] z-0" />
            {/* Conteúdo centralizado acima do fundo */}
            <div className="relative z-10 text-center p-8">
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
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4  text-primary text-center">
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
