import tenyImage from '../assets/teny.jpg';

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[var(--color-bg-darker)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-4">
              <span className="text-[var(--color-accent-red)] tracking-[0.2em] text-sm uppercase">
                О проекте
              </span>
            </div>
            <h2 className="text-5xl mb-6 text-[var(--color-text-primary)]">
              История оживает на сцене
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-6">
              «ТЕНИ» — это уникальный театральный историко-просветительский проект, 
              который популяризирует историю России через авторские театральные постановки.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] mb-6">
              Мы соединяем искусство, глубокое исследование и культурное наследие, 
              делая историю живой и доступной для современного зрителя.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Наши постановки создаются на основе тщательного исторического анализа и проводятся на аутентичных локациях, превращая каждую постановку в незабываемое иммерсивное путешествие в прошлое.
            </p>
          </div>
          
          <div className="relative h-[500px]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${tenyImage})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 border-2 border-[var(--color-accent-red)] opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
