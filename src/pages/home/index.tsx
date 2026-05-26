export function Home() {
  return (
    <div id="home" className="bg-light-background dark:bg-dark-background min-h-screen flex flex-col">
      {/* Bloco de texto centralizado verticalmente */}
      <div className="container mx-auto px-6 flex-1 flex flex-col justify-center gap-8 py-20">
        <p className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
          olá, me chamo
        </p>

        <h1 className="font-serif leading-[0.85] text-[clamp(3.5rem,9.5vw,11rem)] flex gap-1 items-center">
          <span className=" text-light-primary dark:text-dark-highlight">Giovana </span>
          <span className="italic text-light-secondary dark:text-dark-primary">Raphaelli.</span>
        </h1>

        <div className="flex flex-col gap-3 max-w-lg border-t border-light-secondary/25 dark:border-t-dark-secondary/20 pt-4">
          <p className="text-2xl md:text-3xl leading-snug font-serif text-light-primary dark:text-dark-highlight">
            Construindo interfaces{' '}
            <em className="text-light-secondary dark:text-dark-primary">
              intuitivas e performáticas
            </em>{' '}
            para times de produto.
          </p>

          {/* <p className="text-sm text-light-text dark:text-dark-text leading-relaxed max-w-screen-lg">
            Especializada em React, TypeScript e design systems.
            Atualmente focada em ferramentas internas, dashboards
            e e-commerce.
          </p> */}
        </div>
      </div>

      {/* Cards + bottom bar fixos no rodapé */}
      <div className="container mx-auto px-6 pb-5 flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-light-secondary/20 dark:border-dark-secondary/20 rounded-lg divide-y md:divide-y-0 md:divide-x divide-light-secondary/20 dark:divide-dark-secondary/20">
          <div className="px-6 py-4">
            <p className="font-mono text-xs text-light-secondary dark:text-dark-secondary mb-1">localização</p>
            <p className="font-serif text-light-primary dark:text-dark-highlight">São Paulo, BR</p>
          </div>
          <div className="px-6 py-4">
            <p className="font-mono text-xs text-light-secondary dark:text-dark-secondary mb-1">foco</p>
            <p className="font-serif text-light-primary dark:text-dark-highlight">Front-end </p>
          </div>
          <div className="px-6 py-4">
            <p className="font-mono text-xs text-light-secondary dark:text-dark-secondary mb-1">experiência</p>
            <p className="font-serif text-light-primary dark:text-dark-highlight">+4 anos</p>
          </div>
        </div>

        <div className="flex justify-between py-1">
          <p className="font-mono text-xs text-light-secondary dark:text-dark-text">
            • desenvolvedora front-end
          </p>
          <a
            href="#about"
            className="flex items-center gap-2 text-sm text-light-secondary dark:text-dark-text hover:text-light-primary dark:hover:text-dark-highlight transition-colors"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-light-text/40 dark:border-dark-text/30 text-xs">
              <span className="animate-bounce inline-block">↓</span>
            </span>
            role para ver
          </a>
        </div>
      </div>
    </div>
  );
}
