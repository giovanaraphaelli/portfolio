interface SectionHeaderProps {
  number: string;
  subtitle: string;
  title: string;
}

export function SectionHeader({ number, subtitle, title }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4 font-mono text-xs text-light-secondary dark:text-dark-secondary">
        <span>{number}</span>
        <span>/</span>
        <span className="w-10 h-px bg-current opacity-40" />
        <span>{subtitle}</span>
      </div>

      <h2 className="font-serif text-[clamp(2.5rem,6vw,7rem)] leading-[0.9] text-light-primary dark:text-dark-highlight">
        {title}
        <span className="text-light-secondary dark:text-dark-primary">.</span>
      </h2>
    </div>
  );
}
