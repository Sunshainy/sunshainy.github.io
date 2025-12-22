import { CalendarDays, Users, Globe } from 'lucide-react';

export function Calendar() {
  const stats = [
    { icon: CalendarDays, number: '3', label: 'Премьеры', period: '2025-2026' },
    { icon: CalendarDays, number: '10–12', label: 'Показов', period: 'В сезон' },
    { icon: Users, number: '300–500', label: 'Зрителей офлайн', period: 'Всего' },
    { icon: Globe, number: '5000+', label: 'Охват онлайн', period: 'Соцсети и медиа' }
  ];

  return (
    <section id="calendar" className="py-24 px-6 bg-[var(--color-bg-dark)] relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1615800098746-73af8261e3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDkyNTMxNXww&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent-red)] tracking-[0.2em] text-sm uppercase">
            Планы
          </span>
          <h2 className="text-5xl mt-4 mb-6 text-[var(--color-text-primary)]">
            Календарь 2025–2026
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Амбициозная программа спектаклей и просветительских мероприятий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-[var(--color-bg-card)] p-8 border-2 border-[var(--color-border)] hover:border-[var(--color-accent-red)] transition-all duration-300 text-center"
            >
              <stat.icon className="w-12 h-12 text-[var(--color-accent-red)] mx-auto mb-4" />
              <div className="text-4xl mb-2 text-[var(--color-accent-red)]">
                {stat.number}
              </div>
              <div className="text-white mb-2">{stat.label}</div>
              <div className="text-sm text-[var(--color-text-secondary)]">{stat.period}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[var(--color-accent-red)]/10 via-transparent to-[var(--color-accent-red)]/10 p-12 border-y-2 border-[var(--color-accent-red)]">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl mb-4 text-[var(--color-text-primary)]">
              Следите за анонсами
            </h3>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8">
              Подписывайтесь на наши соцсети, чтобы не пропустить премьеры, 
              лекции и другие события проекта «ТЕНИ»
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://vk.com/teni_project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-[var(--color-accent-red)] text-[var(--color-accent-red)] hover:bg-[var(--color-accent-red)] hover:text-black transition-all duration-300"
              >
                VK
              </a>
              <a 
                href="https://t.me/teni_project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-[var(--color-accent-red)] text-[var(--color-accent-red)] hover:bg-[var(--color-accent-red)] hover:text-black transition-all duration-300"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}