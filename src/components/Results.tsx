import { TrendingUp } from 'lucide-react';

export function Results() {
  const results = [
    { number: '3', label: 'Постановки', suffix: '' },
    { number: '6', label: 'Просветительских мероприятий', suffix: '+' },
    { number: '20', label: 'Человек в команде', suffix: '' },
    { number: '500', label: 'Зрителей в сообществе', suffix: '+' },
    { number: '3', label: 'Долгосрочных партнёра', suffix: '+' }
  ];

  return (
    <section id="results" className="py-24 px-6 bg-[var(--color-bg-darker)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-accent-red)] blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent-gold)] blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[var(--color-accent-gold)]" />
            <span className="text-[var(--color-accent-gold)] tracking-[0.2em] text-sm uppercase">
              Достижения
            </span>
          </div>
          <h2 className="text-5xl mb-6 text-[var(--color-accent-warm)]">
            Ключевые результаты
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {results.map((result, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-all duration-300"
            >
              <div className="text-5xl mb-3 text-[var(--color-accent-gold)]">
                {result.number}
                <span className="text-3xl">{result.suffix}</span>
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wide">
                {result.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
