export default function MissionVision() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="font-bold text-xl mb-2 text-[var(--color-primary)]">Missão</h3>
          <p>Levar tecnologia acessível e relevante para todos.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2 text-[var(--color-primary)]">Visão</h3>
          <p>Ser referência em inovação com propósito social em África.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2 text-[var(--color-primary)]">Propósito</h3>
          <p>Transformar vidas e comunidades através do digital.</p>
        </div>
      </div>
    </section>
  );
}