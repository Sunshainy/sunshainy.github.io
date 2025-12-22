export function DirectorQuote() {
  return (
    <section id="director-quote" className="py-24 px-6 bg-[var(--color-bg-darker)]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[var(--color-accent-red)] tracking-[0.2em] text-sm uppercase">
          Режиссёр
        </span>
        <div className="mt-8 flex justify-center">
          <div className="inline-block border-2 border-[var(--color-accent-red)] px-6 py-4">
            <blockquote className="text-3xl md:text-4xl leading-relaxed text-white italic max-w-3xl">
              Днём, в большинстве своем мы врачи, но только солнце клонится к закату мы превращаемся в теней. Кто-то скажет «биполярка», мы же верим, что это талант.
            </blockquote>
          </div>
        </div>
        <div className="mt-6 text-lg text-[var(--color-text-secondary)]">
          — Главный режиссер Никитина Ирина
        </div>
      </div>
    </section>
  );
}
