import { SectionHeader } from '@/components/section-header';

export function About() {
  return (
    <div id="about" className="bg-light-background dark:bg-dark-background border-b border-light-secondary/25 dark:border-dark-secondary/20">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <SectionHeader
          number="01"
          subtitle="uma pessoa por trás dos commits"
          title="Sobre"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch mt-6">
          {/* Coluna esquerda: textos */}
          <div className="flex flex-col gap-6 h-full">
            <div className="flex flex-col gap-4 font-mono text-sm text-light-text dark:text-dark-text leading-relaxed">
              <p>
                Sou desenvolvedora front-end com foco em criar interfaces intuitivas
                e performáticas. Gosto de resolver problemas e aprimorar minhas
                habilidades, sempre buscando novos desafios no mundo da tecnologia!
              </p>
              <p>
                Minha trajetória começou em 2021, quando iniciei a faculdade de
                Análise e Desenvolvimento de Sistemas e logo entrei no mercado,
                evoluindo de Estagiária de Suporte de TI para Analista de
                Desenvolvimento de Software.
              </p>
              <p>
                Ao longo do tempo, me especializei no desenvolvimento front-end,
                trabalhando com aplicações escaláveis, testes e boas práticas.
                Embora minha experiência seja principalmente em React, estou sempre
                expandindo meu conhecimento e explorando novas tecnologias.
              </p>
            </div>

            <div className="flex flex-col font-mono text-sm border-t border-light-secondary/25 dark:border-dark-secondary/20 md:mt-auto">
              {[
                { label: 'nome', value: 'giovana raphaelli' },
                { label: 'idade', value: '26 anos' },
                { label: 'idiomas',  value: 'pt · en' },
                { label: 'formação', value: 'análise e desenvolvimento de sistemas' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="grid grid-cols-[120px_1fr] items-center py-3 border-b border-light-secondary/25 dark:border-dark-secondary/20"
                >
                  <span className="text-light-secondary dark:text-dark-secondary">{label}</span>
                  <span className="text-light-primary dark:text-dark-text">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita: foto */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-light-surface dark:bg-dark-surface border border-light-secondary/20 dark:border-dark-secondary/20 text-xs font-mono text-light-primary dark:text-dark-highlight">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-blink" />
              oi
            </div>
            <img
              src="eu.jpg"
              alt="Giovana Raphaelli"
              className="w-full h-[360px] md:h-[520px] object-cover object-left-bottom rounded-2xl"
            />
            <div className="flex justify-between items-center mt-2 px-1 font-mono text-xs text-light-secondary dark:text-dark-secondary">
              <span>são paulo · 2026</span>
              <span>↳ isso sou eu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
