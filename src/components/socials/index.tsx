import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { SocialLink } from '../social-link';

export function Socials() {
  return (
    <>
      <div className="fixed bottom-20 left-10 flex-col gap-2 hidden md:flex z-50">
        <SocialLink
          href="mailto:giovanaraphaelli@outlook.com"
          icon={<MdEmail />}
        />
        <SocialLink
          href="https://www.linkedin.com/in/giovanaraphaelli"
          icon={<FaLinkedin />}
        />
        <SocialLink
          href="https://github.com/giovanaraphaelli"
          icon={<SiGithub />}
        />
      </div>
      <div className="fixed bottom-0 left-[3.8rem] h-[4.5rem] border-l-2 rounded-sm border-light-secondary dark:border-dark-primary mt-2 hidden md:block"></div>
    </>
  );
}
