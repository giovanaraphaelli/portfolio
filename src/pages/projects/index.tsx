import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Layout } from '../../components/layout';

interface Stack {
  name: string;
}

interface Project {
  title: string;
  description: string;
  img: string;
  stacks: Stack[];
  link: string;
}
interface ProjectsProps {
  projects: Project[];
}

const subtitle = `\
\`\`\`html
<!-- projetos -->
\`\`\`
`;

export function Projects({ projects }: ProjectsProps) {
  return (
    <Layout subtitle={subtitle} id="projects">
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
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          modules={[Pagination]}
          className="mySwiper h-[27.5rem]"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="bg-light-surface dark:bg-dark-surface rounded-md shadow-md flex flex-col"
            >
              <a href={project.link} target="_blank">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-[12.5rem] w-full rounded-t-md object-cover object-center"
                />
              </a>
              <div className="p-4 flex flex-col gap-2 flex-1 h-[14.5rem]">
                <h3 className="text-light-secondary dark:text-dark-primary text-xl font-bold">
                  {project.title}
                </h3>
                <p className="flex-1 text-sm text-light-text dark:text-dark-text line-clamp-6">
                  {project.description}
                </p>
                <div className="flex gap-1 flex-wrap pt-3">
                  {project.stacks.map((stack, i) => (
                    <span
                      key={i}
                      className="py-0.5 px-2 font-bold border text-xs rounded-xl text-light-text border-light-text dark:text-dark-text dark:border-dark-text"
                    >
                      {stack.name}
                    </span>
                  ))}
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
