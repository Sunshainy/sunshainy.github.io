import { Target, BookOpen, Users, MapPin, Handshake } from 'lucide-react';

export function Goals() {
  const goals = [
    {
      icon: Target,
      title: 'Популяризация истории',
      description: 'Отечественная история оживает в театральных постановках, основанных на реальных событиях'
    },
    {
      icon: BookOpen,
      title: 'Авторские спектакли',
      description: 'Разработка авторских спектаклей, делающих историю «живой»'
    },
    {
      icon: Users,
      title: 'Просветительские мероприятия',
      description: 'Проведение лекций, литературных вечеров и обсуждений'
    },
    {
      icon: MapPin,
      title: 'Исторические локации',
      description: 'Работа на исторических локациях и с объектами культурного наследия'
    },
    {
      icon: Handshake,
      title: 'Партнёрства',
      description: 'Развитие партнёрств с музеями, театрами и образовательными организациями'
    },
    {
      icon: Handshake,
      title: 'Партнёрства',
      description: 'Развитие партнёрств с музеями, театрами и образовательными организациями'
    }
  ];

  return (
    <section id="goals" className="py-24 px-6 bg-[var(--color-bg-dark)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent-red)] tracking-[0.2em] text-sm uppercase">
            Наша миссия
          </span>
          <h2 className="text-5xl mt-4 mb-6 text-[var(--color-text-primary)]">
            Цели и задачи проекта
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className="bg-[var(--color-bg-card)] p-8 border border-[var(--color-border)] hover:border-[var(--color-accent-red)] transition-all duration-300 group"
            >
              <goal.icon className="w-12 h-12 text-[var(--color-accent-red)] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl mb-3 text-white">{goal.title}</h3>
              <p className="text-[var(--color-text-secondary)]">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
