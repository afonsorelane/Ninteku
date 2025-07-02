
const team = [
  { nome: "Domingos Timane Jr", funcao: "Cofundador & CEO", foto: "/public/CEO.jpg" },
  { nome: "Lucas Vilanculo", funcao: "Cofundador & CTO", foto: "/public/CTO.jpg" },
  { nome: "Afonso Relane", funcao: "Cofundador & CMO", foto: "/team/carlos.jpg" },
];

const valores = [
  { titulo: "Sabedoria", descricao: "Inspirados pela tradição e pelo conhecimento africano." },
  { titulo: "Crescimento", descricao: "Foco em evolução contínua e impacto positivo." },
  { titulo: "Acolhimento", descricao: "Ambiente inclusivo e colaborativo." },
  { titulo: "Simplicidade", descricao: "Soluções acessíveis e fáceis de usar." },
  { titulo: "Confiança", descricao: "Transparência e ética em tudo que fazemos." },
];

export default function Sobre() {
  return (
    <>
  

      <main className="max-w-6xl mx-auto py-16 px-4 text-[var(--color-foreground)]">
        {/* Título e Introdução */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[var(--color-primary)]">
            Sobre a Ninteku
          </h1>
          <p className="text-lg text-[var(--color-text-main)] max-w-3xl mx-auto">
            Nossa jornada começou com o propósito de conectar tecnologia, cultura africana e impacto social. Criamos soluções digitais acessíveis, com calor humano e baseadas em sabedoria local.
          </p>
        </section>

        {/* Timeline da Jornada */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-primary)] text-center">
            Nossa Jornada
          </h2>
          <ul className="border-l-2 border-[var(--color-primary)] pl-6 space-y-6 max-w-xl mx-auto">
            <li><span className="font-semibold">2022:</span> Ideia inicial e primeiros projetos-piloto.</li>
            <li><span className="font-semibold">2023:</span> Lançamento dos primeiros serviços e parcerias.</li>
            <li><span className="font-semibold">2024:</span> Expansão para novas áreas de atuação e impacto social.</li>
          </ul>
        </section>

        {/* Valores da Ninteku */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-primary)] text-center">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {valores.map((v) => (
              <div key={v.titulo} className="bg-[var(--color-background)] border border-[var(--color-border)] p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)]">{v.titulo}</h3>
                <p className="text-sm text-[var(--color-text-main)]">{v.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Equipa da Ninteku */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-primary)] text-center">
            A Equipa
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {team.map((membro) => (
              <div key={membro.nome} className="flex flex-col items-center text-center">
                <img
                  src={membro.foto}
                  alt={`Foto de ${membro.nome}`}
                  className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-[var(--color-primary)]"
                />
                <span className="font-semibold">{membro.nome}</span>
                <span className="text-sm text-gray-500">{membro.funcao}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

    </>
  );
}
