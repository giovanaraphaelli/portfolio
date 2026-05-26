import { SectionHeader } from '@/components/section-header';
import { skillCategories } from '@/constants/skills';

export function Stack() {
  return (
    <div id="skills" className="bg-light-background dark:bg-dark-background border-b border-light-secondary/25 dark:border-dark-secondary/20">
      <div className="container mx-auto px-6 py-12 md:pt-20 md:pb-20">
        <SectionHeader
          number="04"
          subtitle="ferramentas que uso bem"
          title="Stack"
        />

        <div className="border border-light-secondary/20 dark:border-dark-secondary/20 rounded-2xl overflow-hidden mt-10 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-light-secondary/20 dark:divide-dark-secondary/20">
            {skillCategories.map((category, i) => (
              <div
                key={i}
                className="p-6 md:p-8 flex flex-col gap-5"
              >
                <p className="font-mono text-xs md:text-sm text-light-secondary dark:text-dark-secondary">
               - {category.label}
                </p>

                <ul className="grid grid-cols-2 md:grid-cols-1 gap-3">
                  {category.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2.5 text-sm text-light-primary dark:text-dark-highlight"
                    >
                      <div className="w-1 h-1 rounded-full bg-light-primary dark:bg-dark-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
