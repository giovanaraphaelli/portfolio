import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { Layout } from '../../components/layout';

interface Skill {
  name: string;
  icon: ReactNode;
}

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Layout subtitle="<!-- skills -->" id="skills">
      <div ref={ref} className="grid gap-4 lg:gap-6 grid-cols-3 py-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col gap-1 items-center justify-center h-28 max-w-28 lg:h-36 lg:max-w-36 p-6 rounded-lg bg-light-surface dark:bg-dark-surface shadow-xl opacity-0 transition-all duration-500 ${
              inView ? 'animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="text-4xl lg:text-6xl text-light-secondary dark:text-dark-primary">
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-center text-light-text dark:text-dark-text">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
