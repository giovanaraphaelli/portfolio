export function Home() {
  return (
    <div id="home" className="bg-light-background dark:bg-dark-background min-h-screen flex flex-col border-b border-light-secondary/25 dark:border-dark-secondary/20">
      {/* Bloco de texto centralizado verticalmente */}
      <div className="container mx-auto px-6 flex-1 flex flex-col justify-center gap-5 md:gap-8 pt-24 pb-8">
        <h1 className="font-serif leading-[0.85] text-[clamp(2.8rem,9.5vw,11rem)]">
          <span className="text-light-primary dark:text-dark-highlight">Giovana </span>
          <span className="italic text-light-secondary dark:text-dark-primary">Raphaelli.</span>
        </h1>

        <div className="flex flex-col gap-3 border-t border-light-secondary/25 dark:border-dark-secondary/20 pt-2 md:pt-4">
          <p className="text-lg text-right md:text-3xl leading-snug font-serif text-light-primary dark:text-dark-highlight md:whitespace-nowrap">
            transformando ideias em{' '}
            <em className="text-light-secondary dark:text-dark-primary">
              experiências reais.
            </em>
          </p>
        </div>
      </div>

      {/* Cards + bottom bar fixos no rodapé */}
      <div className="container mx-auto px-6 pb-5 flex flex-col gap-3">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-light-secondary/20 dark:border-dark-secondary/20 rounded-lg divide-y md:divide-y-0 md:divide-x divide-light-secondary/20 dark:divide-dark-secondary/20">
          <div className="px-3 py-1 md:px-5 md:py-3">
            <p className="font-mono text-xs text-light-secondary dark:text-dark-secondary md:mb-1">localização</p>
            <p className="font-serif text-light-primary dark:text-dark-highlight md:text-xl">São Paulo, BR</p>
          </div>
          <div className="px-3 py-1 md:px-5 md:py-3">
            <p className="font-mono text-xs text-light-secondary dark:text-dark-secondary md:mb-1">foco</p>
            <p className="font-serif text-light-primary dark:text-dark-highlight md:text-xl">Front-end</p>
          </div>
          <div className="px-3 py-1 md:px-5 md:py-3">
            <p className="font-mono text-xs text-light-secondary dark:text-dark-secondary md:mb-1">experiência</p>
            <p className="font-serif text-light-primary dark:text-dark-highlight md:text-xl">+4 anos</p>
          </div>
        </div>

        <div className="flex justify-between items-center py-1">
          <p className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
            • desenvolvedora front-end
          </p>
          <a
            href="#about"
            className="flex items-center gap-2 text-sm text-light-secondary dark:text-dark-text hover:text-light-primary dark:hover:text-dark-highlight transition-colors"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-light-secondary/40 dark:border-dark-secondary/30 text-xs">
              <span className="animate-bounce inline-block">↓</span>
            </span>
            <span className="hidden sm:inline">role para ver</span>
          </a>
        </div>
      </div>
    </div>
  );
}
