import { FaExternalLinkAlt } from 'react-icons/fa';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Layout } from '../../components/layout';

interface Project {
  title: string;
  description: string;
  img: string;
  stacks: string[];
  link: string;
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

                <div className="px-4 py-6 flex flex-col flex-1 gap-2 min-h-[15rem]">
                  <a href={project.link} target="_blank">
                    <h3 className="text-light-secondary dark:text-dark-primary hover:text-light-primary dark:hover:text-dark-secondary text-xl font-bold w-full flex gap-2 items-center transition-colors duration-300">
                      {project.title}
                      <FaExternalLinkAlt className="text-xs" />
                    </h3>
                  </a>
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
