import { ReactNode } from 'react';

export function SocialLink({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <a
      className="rounded-full border-2 text-2xl text-light-secondary border-light-secondary hover:text-light-surface hover:bg-light-secondary dark:bg-dark-surface dark:text-dark-primary dark:border-dark-primary dark:hover:text-dark-surface dark:hover:bg-dark-primary p-2 shadow-md transition-colors duration-300"
      href={href}
      target="_blank"
    >
      {icon}
    </a>
  );
}
