import { ReactNode } from 'react';
import { Layout } from '../../components/layout';

interface skill {
  name: string;
  icon: ReactNode;
}

interface SkillsGridProps {
  skills: skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <Layout subtitle="<!-- skills -->" id="skills">
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 py-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-lg  bg-light-surface dark:bg-dark-surface shadow-xl"
          >
            <div className="text-4xl md:text-4xl lg:text-8xl text-light-secondary dark:text-dark-primary">
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
