export function DirectorQuote() {
  return (
    <section id="director-quote" className="py-24 px-6 bg-[var(--color-bg-darker)]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-[var(--color-accent-red)] tracking-[0.2em] text-sm uppercase">
            Режиссёр
          </span>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="inline-block border-2 border-[var(--color-accent-red)] px-8 py-6">
            <blockquote className="text-3xl md:text-4xl leading-relaxed text-white max-w-3xl" style={{ fontFamily: "'Futura PT', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
              Днём, в большинстве своем мы врачи, но только солнце клонится к закату мы превращаемся в теней. Кто-то скажет «биполярка», мы же верим, что это талант.
            </blockquote>
          </div>
        </div>
        <div className="mt-8 text-lg text-[var(--color-text-secondary)]" style={{ fontFamily: "'Futura PT', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
          — Главный режиссер Никитина Ирина
        </div>
      </div>
    </section>
  );
}
