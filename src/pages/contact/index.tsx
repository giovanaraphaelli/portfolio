import { SectionHeader } from '@/components/section-header';
import { FaFileAlt, FaGlobe } from 'react-icons/fa';
import { ContactForm } from './form';

const socials = [
  {
    icon: 'gh',
    label: 'github',
    handle: '@giovanaraphaelli',
    href: 'https://github.com/giovanaraphaelli',
  },
  {
    icon: 'in',
    label: 'linkedin',
    handle: '/in/giovanaraphaelli',
    href: 'https://linkedin.com/in/giovanaraphaelli',
  },
  {
    icon: '@',
    label: 'e-mail',
    handle: 'giovanaraphaelli@outlook.com',
    href: 'mailto:giovanaraphaelli@outlook.com',
  },
];

export function Contact() {
  return (
    <div
      id="contact"
      className="bg-light-background dark:bg-dark-background border-b border-light-secondary/25 dark:border-dark-secondary/20"
    >
      <div className="container mx-auto px-6 py-12 md:pt-20 md:pb-20">
        <SectionHeader number="05" subtitle="vamos conversar" title="Contato" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4">
          {/* Coluna esquerda */}
          <div className="flex flex-col gap-4 mt-10 md:mt-0">
            {/* Status */}
            <div className="flex-1 rounded-2xl border border-light-secondary/20 dark:border-dark-secondary/20 p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
                  01 · status
                </span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-blink flex-shrink-0" />
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-serif italic text-4xl text-light-secondary dark:text-dark-primary">
                  disponível
                </p>
                <p className="font-mono text-xs text-light-text dark:text-dark-text leading-relaxed">
                  Disponível para vagas full-time remotas e projetos pontuais selecionados.
                </p>
              </div>

              <div className="mt-auto flex items-center gap-1.5 font-mono text-xs text-light-secondary dark:text-dark-secondary">
                <FaGlobe size={10} />
                modalidade · remoto · híbrido (sp)
              </div>
            </div>

            {/* Currículo */}
            <div className="rounded-2xl border border-light-secondary/20 dark:border-dark-secondary/20 p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
                  03 · currículo
                </span>
                <span className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
                  ↓
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-12 flex items-center justify-center rounded border border-light-secondary/20 dark:border-dark-secondary/20 text-light-secondary dark:text-dark-secondary flex-shrink-0">
                  <FaFileAlt size={16} />
                </div>
                <div>
                  <p className="font-mono text-sm text-light-primary dark:text-dark-highlight">
                    Currículo.pdf
                  </p>
                  <p className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
                    PDF · atualizado em mai/2026
                  </p>
                </div>
              </div>

              <div className="border-t border-dashed border-light-secondary/20 dark:border-dark-secondary/20 pt-3 flex items-center justify-between">
                <span className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
                  baixar
                </span>
                <a
                  href="/cv_giovanaraphaelli.pdf"
                  download
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-light-secondary/30 dark:border-dark-secondary/30 font-mono text-xs text-light-primary dark:text-dark-highlight hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
                >
                  ↓ .pdf
                </a>
              </div>
            </div>
          </div>

          {/* Centro: formulário */}
          <div className="rounded-2xl border border-light-secondary/20 dark:border-dark-secondary/20 overflow-hidden">
            <div className="h-10 px-4 flex items-center justify-between bg-light-background dark:bg-dark-background border-b border-light-secondary/20 dark:border-dark-secondary/20">
              <span className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
                ~/contato.form
              </span>
              <div className="flex items-center gap-3 font-mono text-xs text-light-secondary/50 dark:text-dark-secondary/40 select-none">
                <span>—</span>
                <span>□</span>
                <span>×</span>
              </div>
            </div>
            <div className="p-6">
              <ContactForm />
            </div>
          </div>

          {/* Coluna direita */}
          <div className="flex flex-col gap-4">
            {/* Tempo de resposta */}
            <div className="flex-1 rounded-2xl border border-light-secondary/20 dark:border-dark-secondary/20 p-5 flex flex-col gap-4">
              <span className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
                02 · resposta
              </span>

              <div className="flex flex-col gap-2">
                <p className="font-serif italic text-6xl text-light-secondary dark:text-dark-primary">
                  ~24h
                </p>
                <p className="font-mono text-xs text-light-text dark:text-dark-text leading-relaxed">
                  tempo médio em dias úteis. respondo todos os e-mails pessoalmente.
                </p>
              </div>

              <div className="mt-auto font-mono text-xs text-light-secondary dark:text-dark-secondary">
                ●●●●●●● últ. 7 dias · 100% no prazo
              </div>
            </div>

            {/* Redes */}
            <div className="rounded-2xl border border-light-secondary/20 dark:border-dark-secondary/20 p-5 flex flex-col gap-3">
              <span className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
                04 · redes
              </span>

              <div className="flex flex-col">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-2.5 border-b border-light-secondary/10 dark:border-dark-secondary/10 last:border-0 hover:bg-light-surface/60 dark:hover:bg-dark-surface/60 transition-colors group -mx-2 px-2 rounded-lg"
                  >
                    <div className="w-7 h-7 flex items-center justify-center rounded border border-light-secondary/20 dark:border-dark-secondary/20 font-mono text-xs text-light-secondary dark:text-dark-secondary flex-shrink-0">
                      {s.icon}
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="font-mono text-xs text-light-primary dark:text-dark-highlight">
                        {s.label}
                      </span>
                      <span className="font-mono text-xs text-light-secondary dark:text-dark-secondary truncate">
                        {s.handle}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-light-secondary/60 dark:text-dark-secondary/60 group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
