import { FaGithub, FaLink } from 'react-icons/fa';

export interface Project {
  title: string;
  description: string;
  img: string;
  stacks: string[];
  repo: string;
  demo: string;
  category: string;
  year: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-light-secondary/20 dark:border-dark-secondary/20 bg-light-surface/30 dark:bg-dark-surface/30 h-full">
      {/* Área da imagem */}
      <div className="relative h-[220px] md:h-[300px] overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />

        {/* Badge inferior esquerdo */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-light-background/90 dark:bg-dark-background/90 backdrop-blur-sm border border-light-secondary/20 dark:border-dark-secondary/20 font-mono text-xs">
          <span className="text-light-secondary dark:text-dark-primary font-bold">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-light-secondary/50 dark:text-dark-secondary/50">·</span>
          <span className="text-light-primary dark:text-dark-highlight">{project.category}</span>
        </div>

        {/* Ano + inicial decorativa */}
        <div className="absolute bottom-0 right-0 flex flex-col items-end pointer-events-none">
          <span className="font-mono text-xs text-white/50 mr-4 mb-1">{project.year}</span>
          <span className="font-serif italic text-[5rem] md:text-[7rem] leading-none text-white/15 select-none pr-2">
            {project.title[0]}
          </span>
        </div>
      </div>

      {/* Área de info */}
      <div className="flex flex-col gap-3 p-5">
        <p className="font-mono text-xs text-light-secondary dark:text-dark-secondary">
          {project.category} · {project.year}
        </p>

        <h3 className="font-serif text-2xl leading-none text-light-primary dark:text-dark-highlight">
          {project.title}
        </h3>

        <p className="font-mono text-sm text-light-text dark:text-dark-text leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-2 flex-wrap">
          {project.stacks.map((stack, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full border border-light-secondary/30 dark:border-dark-secondary/25 font-mono text-xs text-light-text dark:text-dark-text"
            >
              {stack}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2 border-t border-light-secondary/20 dark:border-dark-secondary/20 mt-1">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-highlight transition-colors"
          >
            <FaGithub size={11} /> repositório
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-highlight transition-colors"
          >
            <FaLink size={11} /> demo
          </a>
        </div>
      </div>
    </div>
  );
}
