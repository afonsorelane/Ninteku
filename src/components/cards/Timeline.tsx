export default function Timeline() {
  return (
    <section className="my-12">
      <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Nossa Jornada</h2>
      <ul className="border-l-2 border-[var(--color-primary)] pl-6 space-y-6">
        <li>
          <span className="font-semibold">2022:</span> Ideia inicial e primeiros projetos-piloto.
        </li>
        <li>
          <span className="font-semibold">2023:</span> Lançamento dos primeiros serviços e parcerias.
        </li>
        <li>
          <span className="font-semibold">2024:</span> Expansão para novas áreas de atuação e impacto social.
        </li>
      </ul>
    </section>
  );
}