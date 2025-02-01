import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { SocialLink } from '@/components/social-link';

export function Footer() {
  return (
    <div className="bg-light-surface dark:bg-dark-surface shadow-md'">
      <div className="container mx-auto h-auto flex flex-col justify-center items-center gap-6 p-6">
        <div className="flex gap-4">
          <SocialLink
            href="mailto:giovanaraphaelli@outlook.com"
            icon={<MdEmail />}
            label="E-mail"
            variant="secondary"
          />
          <SocialLink
            href="https://www.linkedin.com/in/giovanaraphaelli"
            icon={<FaLinkedin />}
            label="Linkedin"
            variant="secondary"
          />
          <SocialLink
            href="https://github.com/giovanaraphaelli"
            icon={<SiGithub />}
            label="Github"
            variant="secondary"
          />
        </div>
        <p className="text-mono text-sm text-light-text dark:text-dark-text">
          desenvolvido com ❤️ por
          <span className="font-bold"> @giovanaraphaelli</span>
        </p>
      </div>
    </div>
  );
}
