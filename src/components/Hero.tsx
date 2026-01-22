import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/3294fb07663ece7e52098a529ade2d37bb4b8dbf.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroImage}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="inline-block border-2 border-[var(--color-accent-red)] px-6 py-2 mb-6">
            <span className="text-[var(--color-accent-red)] tracking-[0.3em] text-sm uppercase">
              Театральный историко-просветительский проект
            </span>
          </div>
        </div>
        
        <h1 className="text-8xl md:text-9xl mb-8 tracking-[0.2em] text-[var(--color-text-primary)]">
          ТЕНИ
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
          Мы не пересказываем историю – мы оживляем прошлое, даруя ему голос в настоящем, чтобы вместе с вами заглянуть за кулисы произошедшего
        </p>

        <div className="flex flex-wrap gap-4 justify-center" style={{ '--button-width': 'max-content' } as React.CSSProperties}>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-[var(--color-accent-red)] text-black hover:bg-[var(--color-text-primary)] hover:text-black transition-all duration-300 w-full sm:w-auto"
            style={{ width: 'var(--button-width, auto)' }}
          >
            О проекте
          </button>
          <button 
            onClick={() => scrollToSection('productions')}
            className="px-8 py-4 border-2 border-[var(--color-accent-red)] text-[var(--color-accent-red)] hover:bg-[var(--color-text-primary)] hover:text-black transition-all duration-300 w-full sm:w-auto"
            style={{ width: 'var(--button-width, auto)' }}
          >
            Спектакли
          </button>
          <button 
            onClick={() => scrollToSection('team')}
            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
            style={{ width: 'var(--button-width, auto)' }}
          >
            Связаться с нами
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-[var(--color-accent-red)]" />
      </button>
    </section>
  );
}