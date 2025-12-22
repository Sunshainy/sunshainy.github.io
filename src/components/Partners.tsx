import { Building2 } from 'lucide-react';
import museumLogo from 'figma:asset/b7ada36d99a6f4799e0a5ebedeb3e6d567b10c7f.png';

export function Partners() {
  const partners = [
    {
      name: 'Свердловский областной краеведческий музей им. Клера',
      description: 'Партнёрство в области исторических исследований и проведения мероприятий на базе музея',
      logo: museumLogo
    }
  ];

  return (
    <section id="partners" className="py-24 px-6 bg-[var(--color-bg-dark)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent-red)] tracking-[0.2em] text-sm uppercase">
            Сотрудничество
          </span>
          <h2 className="text-5xl mt-4 mb-6 text-[var(--color-text-primary)]">
            Наши партнёры
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Мы очень ждем новых партнеров и вместе оживлять историю России!
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-12 max-w-xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-[var(--color-bg-card)] p-10 border border-[var(--color-border)] hover:border-[var(--color-accent-red)] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="h-32 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl mb-3 text-white">{partner.name}</h3>
                  <p className="text-[var(--color-text-secondary)]">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-[var(--color-bg-card)] p-12 border-2 border-dashed border-[var(--color-border)]">
          <h3 className="text-2xl mb-4 text-white">Хотите стать партнёром?</h3>
          <p className="text-lg text-[var(--color-text-secondary)] mb-6 max-w-2xl mx-auto">
            Мы открыты к сотрудничеству с музеями, театрами, образовательными 
            учреждениями и другими культурными организациями
          </p>
          <a 
            href="https://web.telegram.org/k/#@semyon360"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[var(--color-accent-red)] text-[var(--color-bg-darker)] hover:bg-[var(--color-text-primary)] transition-all duration-300"
          >
            Обсудить сотрудничество
          </a>
        </div>
      </div>
    </section>
  );
}