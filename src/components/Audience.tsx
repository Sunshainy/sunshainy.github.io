import { Users, Heart, GraduationCap } from 'lucide-react';

export function Audience() {
  const audiences = [
    {
      icon: Users,
      title: 'Молодёжь 18–35',
      description: 'Активная аудитория, интересующаяся культурой и альтернативными форматами досуга'
    },
    {
      icon: Heart,
      title: 'Любители истории и театра',
      description: 'Ценители современного театра и отечественной истории'
    },
    {
      icon: GraduationCap,
      title: 'Профессиональное сообщество',
      description: 'Театральные деятели, историки и образовательные учреждения'
    }
  ];

  return (
    <section id="audience" className="py-24 px-6 bg-[var(--color-bg-dark)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent-gold)] tracking-[0.2em] text-sm uppercase">
            Для кого
          </span>
          <h2 className="text-5xl mt-4 mb-6 text-[var(--color-accent-warm)]">
            Целевая аудитория
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-[var(--color-bg-card)] p-10 border-l-4 border-[var(--color-accent-gold)] hover:bg-[#252525] transition-all duration-300"
            >
              <audience.icon className="w-14 h-14 text-[var(--color-accent-gold)] mb-6" />
              <h3 className="text-2xl mb-4 text-white">{audience.title}</h3>
              <p className="text-[var(--color-text-secondary)]">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
