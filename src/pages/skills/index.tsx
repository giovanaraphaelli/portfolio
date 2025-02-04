import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { Layout } from '../../components/layout';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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
    <Layout subtitle="<!-- habilidades -->" id="skills">
      <div
        ref={ref}
        className="flex flex-wrap justify-center gap-4 py-8 max-w-xl mx-auto"
      >
        {skills.map((skill, index) => (
          <TooltipProvider key={index} delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={`flex flex-col gap-1 items-center justify-center p-4 sm:p-6 rounded-lg bg-light-surface dark:bg-dark-surface shadow-xl opacity-0 transition-all duration-500 ${
                    inView ? 'animate-fade-in-up' : ''
                  } w-[6rem] h-[6rem]`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-6xl text-light-secondary dark:text-dark-primary">
                    {skill.icon}
                  </div>
                  <p className="md:hidden text-xs text-center text-light-secondary dark:text-dark-primary">
                    {skill.name}
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top">
                <span className="sm:hidden md:block text-sm font-bold bg-light-secondary dark:bg-dark-primary text-light-surface dark:text-dark-surface px-2 py-1 rounded-lg">
                  {skill.name}
                </span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </Layout>
  );
}
