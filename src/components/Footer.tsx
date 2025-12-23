export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-darker)] border-t border-[var(--color-border)] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <h3 className="text-3xl mb-4 text-[var(--color-text-primary)] tracking-[0.2em]">
              ТЕНИ
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Театральный историко-просветительский проект, соединяющий искусство 
              и историческое наследие России.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 uppercase tracking-wide text-sm">Навигация</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-[var(--color-text-secondary)] hover:text-[var(--color-accent-red)] transition-colors">
                О проекте
              </a>
              <a href="#team" className="block text-[var(--color-text-secondary)] hover:text-[var(--color-accent-red)] transition-colors">
                Команда
              </a>
              <a href="#productions" className="block text-[var(--color-text-secondary)] hover:text-[var(--color-accent-red)] transition-colors">
                Постановки
              </a>
              <a href="#contact" className="block text-[var(--color-text-secondary)] hover:text-[var(--color-accent-red)] transition-colors">
                Контакты
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4 uppercase tracking-wide text-sm">Контакты</h4>
            <div className="space-y-2 text-[var(--color-text-secondary)]">
              <p>
                <a href="mailto:teni.project@example.ru" className="hover:text-[var(--color-accent-red)]">
                  teni.project@example.ru
                </a>
              </p>
              <p>
                <a href="tel:+79999999999" className="hover:text-[var(--color-accent-red)]">
                  +7 (999) 999-99-99
                </a>
              </p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://vk.com/teni_project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-red)] transition-colors"
                >
                  VK
                </a>
                <a 
                  href="https://t.me/teni_project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-red)] transition-colors"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-border)] text-center">
          <p className="text-[var(--color-text-secondary)] text-sm">
            © 2025 ТЕНИ. Театральный историко-просветительский проект. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
