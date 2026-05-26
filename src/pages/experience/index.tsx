import { SectionHeader } from '@/components/section-header';
import { experiences } from '@/constants/experience';

export function Experience() {
  return (
    <div id="experience" className="bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-6 py-12 md:pt-20 md:pb-20">
        <SectionHeader
          number="03"
          subtitle="trajetória até aqui"
          title="Experiência"
        />

        <div className="flex flex-col mt-10 md:mt-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-t border-light-secondary/20 dark:border-dark-secondary/20 py-4"
            >
              {/* Desktop layout */}
              <div className="hidden md:grid md:grid-cols-[180px_1fr_1fr] gap-x-8 items-center">
                {/* Bullet + Period */}
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-light-primary dark:bg-dark-highlight flex-shrink-0" />
                  <p className="font-mono text-xs text-light-secondary dark:text-dark-secondary leading-relaxed">
                    {exp.period}
                  </p>
                </div>

                {/* Role + company */}
                <h3 className="font-serif text-xl md:text-2xl font-semibold leading-snug text-light-primary dark:text-dark-highlight">
                  {exp.role}{' '}
                  <span className="italic text-light-secondary dark:text-dark-secondary">
                    na
                  </span>{' '}
                  {exp.company}
                </h3>

                {/* Description */}
                <p className="font-mono text-sm text-light-text dark:text-dark-text leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-light-primary dark:bg-dark-highlight flex-shrink-0" />
                  <p className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
                    {exp.period}
                  </p>
                </div>

                <h3 className="font-serif text-lg leading-snug text-light-primary dark:text-dark-highlight pl-3.5">
                  {exp.role}{' '}
                  <span className="italic text-light-secondary dark:text-dark-secondary">
                    na
                  </span>{' '}
                  {exp.company}
                </h3>

                <p className="font-mono text-sm text-light-text dark:text-dark-text leading-relaxed pl-3.5">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}

          {/* Closing border */}
          <div className="border-t border-light-secondary/20 dark:border-dark-secondary/20" />
        </div>
      </div>
    </div>
  );
}
