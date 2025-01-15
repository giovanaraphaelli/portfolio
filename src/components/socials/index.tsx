import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

export function Socials() {
  const iconClass =
    'rounded-full border-2 text-light-secondary border-light-secondary hover:text-light-surface hover:bg-light-secondary dark:bg-dark-surface dark:text-dark-primary dark:border-dark-primary dark:hover:text-dark-surface dark:hover:bg-dark-primary p-2 shadow-lg transition-colors duration-300';

  return (
    <>
      <div className="fixed bottom-20 left-10 flex-col gap-2 hidden md:flex z-50">
        <a
          className={iconClass}
          href="mailto:giovanaraphaelli@outlook.com"
          target="_blank"
        >
          <MdEmail size={25} />
        </a>
        <a
          className={iconClass}
          href="https://www.linkedin.com/in/giovanaraphaelli"
          target="_blank"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          className={iconClass}
          href="https://github.com/giovanaraphaelli"
          target="_blank"
        >
          <SiGithub size={25} />
        </a>
      </div>
      <div className="fixed bottom-0 left-[3.8rem] h-[4.5rem] border-l-2 rounded-sm border-light-secondary dark:border-dark-primary mt-2 hidden md:block"></div>
    </>
  );
}
