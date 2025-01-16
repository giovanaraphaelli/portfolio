import { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  variant?: 'primary' | 'secondary';
}

export function SocialLink({
  href,
  icon,
  label,
  variant = 'primary',
}: SocialLinkProps) {
  const baseStyles =
    'rounded-full text-2xl p-2 shadow-md transition-colors duration-300';

  const variantStyles = {
    primary:
      'text-light-secondary border-2 border-light-secondary hover:text-light-surface hover:bg-light-secondary dark:bg-dark-surface dark:text-dark-primary dark:border-dark-primary dark:hover:text-dark-surface dark:hover:bg-dark-primary',
    secondary:
      'rounded-full bg-light-accent dark:bg-dark-accent text-light-secondary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-primary hover:text-light-accent dark:hover:text-dark-accent',
  };

  return (
    <a
      className={`${baseStyles} ${variantStyles[variant]}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
