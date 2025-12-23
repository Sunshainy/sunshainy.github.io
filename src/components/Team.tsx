import { Mail } from 'lucide-react';
import nikitinImage from '@/assets/06052b0428ea82982eaeb83a548bb9572f55f1df.png';
import kolosovaImage from '@/assets/kolosova.jpeg';
import ivanovaImage from '@/assets/ivanova.jpeg';
import lukovenkovImage from '@/assets/lukovenkov.jpeg';
import kozyrevaImage from '@/assets/kozyreva.jpeg';

export function Team() {
  const teamMembers = [
    {
      name: 'Никитина Ирина',
      role: 'Руководитель и режиссёр',
      description: 'Идейный вдохновитель проекта, режиссёр-постановщик',
      image: nikitinImage
    },
    {
      name: 'Колосова Анна',
      role: 'Администратор',
      description: 'Организация и координация всех мероприятий проекта',
      image: kolosovaImage
    },
    {
      name: 'Никитина Мария',
      role: 'Исторический консультант',
      description: 'Научная экспертиза и историческая достоверность постановок'
    },
    {
      name: 'Иванова Полина',
      role: 'работа с партнёрами и аудиторией',
      description: 'Развитие сотрудничества с музеями, театрами и культурными центрами',
      image: ivanovaImage
    },
    {
      name: 'Луковенков Семен',
      role: 'работа с партнёрами и аудиторией',
      description: 'Развитие сотрудничества с музеями, театрами и культурными центрами',
      image: lukovenkovImage
    },
    {
      name: 'Козырева Мария',
      role: 'работа с партнёрами и аудиторией',
      description: 'Развитие сотрудничества с музеями, театрами и культурными центрами',
      image: kozyrevaImage
    }
  ];

  return (
    <section id="team" className="py-24 px-6 bg-[var(--color-bg-darker)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent-red)] tracking-[0.2em] text-sm uppercase">
            Наша команда
          </span>
          <h2 className="text-5xl mt-4 mb-6 text-[var(--color-text-primary)]">
            Команда проекта
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Постоянная команда — 20 профессионалов, объединённых любовью к истории и театру
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-red)] transition-all duration-300 overflow-hidden group"
            >
              <div className="h-64 bg-gradient-to-br from-[var(--color-accent-red)]/20 to-transparent flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 30%' }}
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full border-4 border-[var(--color-accent-red)] bg-[var(--color-bg-card)] flex items-center justify-center">
                    <span className="text-4xl text-[var(--color-accent-red)]">
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[1]?.[0] || ''}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-white">{member.name}</h3>
                <div className="text-sm text-[var(--color-accent-red)] mb-3 uppercase tracking-wide">
                  {member.role}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Хотите присоединиться к нашей команде?
          </p>
          <a 
            href="https://web.telegram.org/k/#@semyon360"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent-red)] text-[var(--color-bg-darker)] hover:bg-[var(--color-text-primary)] transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
}