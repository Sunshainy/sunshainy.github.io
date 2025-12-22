import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';
import dekabristyImage from 'figma:asset/e163fca83c5d55b3f091f9a75b3e6cc02aac3a33.png';
import mittelshpilImage from 'figma:asset/e724464b9e54bc5e946f2b15e8ae483708284c00.png';
import prologImage from '../assets/3afisha.png';


export function Productions() {
  const productions = [
    {
      title: 'Декабристы. Дебют',
      subtitle: 'Историческая драма',
      description: 'Авторская постановка, посвящённая ключевым событиям российской истории. Иммерсивный формат на исторической локации.',
      venue: 'Свердловский краеведческий музей',
      duration: '90 минут',
      image: dekabristyImage,
      status: 'Состоялся',
      link: 'https://t.me/teni_project/7'
    },
    {
      title: 'Декабристы. Миттельшпиль',
      subtitle: 'Камерный спектакль',
      description: 'Глубокое погружение в личные истории исторических персонажей. Интимная атмосфера, тщательная работа с деталями эпохи.',
      venue: 'Станция вольных почт',
      duration: '75 минут',
      image: mittelshpilImage,
      status: 'Состоялся',
      link: 'https://t.me/teni_project/7'
    },
    {
      title: 'Декабристы. Пролог',
      subtitle: 'Документальный театр',
      description: 'Постановка на основе архивных документов и свидетельств очевидцев. Синтез театра и исторического исследования.',
      venue: 'просп. Ленина, 69, корп. 10',
      duration: '100 минут',
      status: 'Планируется',
      image: prologImage,
      link: 'https://iva-bc.timepad.ru/event/3712480/'
    }
  ];

  const events = [
    {
      type: 'Лекция',
      title: 'История в лицах: театральный подход',
      date: 'Ежемесячно'
    },
    {
      type: 'Литературный вечер',
      title: 'Читаем историю: документы и письма эпохи',
      date: 'Регулярно'
    },
    {
      type: 'Встреча',
      title: 'Обсуждение с историками и режиссёрами',
      date: 'После спектаклей'
    }
  ];

  return (
    <section id="productions" className="py-24 px-6 bg-[var(--color-bg-darker)]">
      <div className="max-w-6xl mx-auto">
        {/* Productions */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent-red)] tracking-[0.2em] text-sm uppercase">
              Репертуар
            </span>
            <h2 className="text-5xl mt-4 mb-6 text-[var(--color-text-primary)]">
              Постановки
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productions.map((production, index) => {
              const ProductionCard = (
                <div 
                  className="bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-red)] transition-all duration-300 overflow-hidden group flex flex-col h-full"
                >
                    <div className="h-80 relative flex-shrink-0 flex items-center justify-center bg-black overflow-hidden">
                      <img
                        src={production.image}
                        alt={production.title}
                        className={index === 2 ? 'h-[78%] w-auto object-contain block' : 'h-full w-auto object-contain block'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
                    {production.status && (
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 text-xs uppercase tracking-wide ${
                          production.status === 'Планируется' 
                            ? 'bg-[var(--color-accent-red)] text-black' 
                            : 'bg-[var(--color-text-secondary)]/80 text-white'
                        }`}>
                          {production.status}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl mb-2 text-white">{production.title}</h3>
                      <p className="text-sm text-[var(--color-accent-red)]">{production.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">{production.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                        <MapPin className="w-4 h-4 text-[var(--color-accent-red)]" />
                        {production.venue}
                      </div>
                      <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                        <Clock className="w-4 h-4 text-[var(--color-accent-red)]" />
                        {production.duration}
                      </div>
                    </div>
                  </div>
                </div>
              );

              return production.link ? (
                <a 
                  key={index}
                  href={production.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer flex"
                >
                  {ProductionCard}
                </a>
              ) : (
                <div key={index} className="flex">
                  {ProductionCard}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );}