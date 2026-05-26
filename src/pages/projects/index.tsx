import { SectionHeader } from '@/components/section-header';
import { ProjectCard, type Project } from '@/components/project-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div id="projects" className="bg-light-background dark:bg-dark-background border-b border-light-secondary/25 dark:border-dark-secondary/20">
      <div className="container mx-auto px-6 py-12 md:pt-20 md:pb-0">
        <SectionHeader
          number="02"
          subtitle="uma fatia do que tem me ocupado ultimamente"
          title="Trabalho selecionado"
        />
      </div>

      {/* Mobile: carousel com peek do próximo */}
      <div className="md:hidden">
        <Carousel opts={{ align: 'start', dragFree: true }} className="w-full">
          <CarouselContent className="-ml-4 px-6">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 basis-[85%]">
                <ProjectCard project={project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="px-6 mt-3">
          <p className="font-mono text-xs text-light-secondary/50 dark:text-dark-secondary/50">
            deslize para ver mais →
          </p>
        </div>
      </div>

      {/* Desktop: grid 2 colunas */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 container mx-auto px-6 pb-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
