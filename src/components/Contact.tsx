import { Mail, Phone, Globe, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--color-bg-darker)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent-gold)] tracking-[0.2em] text-sm uppercase">
            Свяжитесь с нами
          </span>
          <h2 className="text-5xl mt-4 mb-6 text-[var(--color-accent-warm)]">
            Контакты
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Мы всегда рады новым зрителям, партнёрам и единомышленникам
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-white">Как с нами связаться</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--color-accent-gold)]/10 border border-[var(--color-accent-gold)]">
                    <Mail className="w-6 h-6 text-[var(--color-accent-gold)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--color-text-secondary)] mb-1">Email</div>
                    <a href="mailto:teni.project@example.ru" className="text-lg text-white hover:text-[var(--color-accent-gold)]">
                      teni.project@example.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--color-accent-gold)]/10 border border-[var(--color-accent-gold)]">
                    <Phone className="w-6 h-6 text-[var(--color-accent-gold)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--color-text-secondary)] mb-1">Телефон</div>
                    <a href="tel:+79999999999" className="text-lg text-white hover:text-[var(--color-accent-gold)]">
                      +7 (999) 999-99-99
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4 text-white">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <a 
                  href="https://vk.com/teni_project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[var(--color-accent-gold)] text-[var(--color-accent-gold)] hover:bg-[var(--color-accent-gold)] hover:text-black transition-all duration-300"
                >
                  VK
                </a>
                <a 
                  href="https://t.me/teni_project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[var(--color-accent-gold)] text-[var(--color-accent-gold)] hover:bg-[var(--color-accent-gold)] hover:text-black transition-all duration-300"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--color-bg-card)] p-8 border border-[var(--color-border)]">
            <h3 className="text-2xl mb-6 text-white">Напишите нам</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--color-text-secondary)] mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[var(--color-bg-darker)] border border-[var(--color-border)] text-white focus:border-[var(--color-accent-gold)] focus:outline-none transition-colors"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[var(--color-text-secondary)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[var(--color-bg-darker)] border border-[var(--color-border)] text-white focus:border-[var(--color-accent-gold)] focus:outline-none transition-colors"
                  placeholder="ivan@example.ru"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[var(--color-text-secondary)] mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--color-bg-darker)] border border-[var(--color-border)] text-white focus:border-[var(--color-accent-gold)] focus:outline-none transition-colors resize-none"
                  placeholder="Расскажите, чем мы можем вам помочь..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[var(--color-accent-gold)] text-black hover:bg-[var(--color-accent-warm)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}