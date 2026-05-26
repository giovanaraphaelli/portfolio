export interface SkillCategory {
  label: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'principal',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'CSS3'],
  },
  {
    label: 'adjacente',
    items: ['Material UI', 'Styled Components', 'TanStack Query', 'Redux', 'React Hook Form', 'Zod', 'Axios'],
  },
  {
    label: 'ferramentas',
    items: ['Jest', 'React Testing Library', 'Git', 'Figma', 'VS Code', 'Claude'],
  },
  {
    label: 'aprendendo',
    items: ['Inglês', 'CMS', 'WordPress', 'Elementor'],
  },
];
