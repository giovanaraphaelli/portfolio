import { FaGithub, FaLink } from 'react-icons/fa';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Layout } from '../../components/layout';

interface Project {
  title: string;
  description: string;
  img: string;
  stacks: string[];
  repo: string;
  demo: string;
}
interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Layout subtitle="<!-- projetos -->" id="projects">
      <div className="py-6 w-full max-w-screen-lg">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            el: '.custom-swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Pagination]}
          className="mySwiper h-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="bg-light-surface dark:bg-dark-surface rounded-md shadow-md border border-light-accent dark:border-dark-accent"
            >
              <div className="flex flex-col h-full">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-[12.5rem] w-full rounded-t-md object-cover object-center"
                />

                <div className="px-4 pt-2 pb-4 placeholder-blue-400 flex flex-col flex-1 gap-2 min-h-[15rem]">
                  <h3 className="text-light-primary dark:text-dark-secondary text-xl font-bold">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-sm text-light-secondary dark:text-dark-primary font-bold ">
                    <a
                      href={project.repo}
                      target="_blank"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <FaGithub /> Repositório
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <FaLink /> Demo
                    </a>
                  </div>

                  <p className="flex-1 text-sm text-light-text dark:text-dark-text">
                    {project.description}
                  </p>

                  <div className="flex gap-1 flex-wrap mt-auto">
                    {project.stacks.map((stack, i) => (
                      <span
                        key={i}
                        className="py-0.5 px-2 font-bold border text-xs rounded-xl text-light-text border-light-text dark:text-dark-text dark:border-dark-text"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-pagination flex justify-center mt-4"></div>
      </div>
    </Layout>
  );
}
