import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({
  children,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-transparent border-2 rounded py-2 px-4 text-mono text-xl font-medium 
        border-light-primary text-light-primary dark:border-dark-secondary dark:text-dark-secondary 
        hover:bg-light-primary hover:text-light-background transition-colors duration-300 
        dark:hover:bg-dark-secondary dark:hover:text-dark-background min-w-40
        ${
          disabled
            ? 'bg-light-background border-light-surface text-light-surface hover:bg-light-background hover:border-light-surface hover:text-light-surface dark:bg-dark-background dark:border-dark-text dark:text-dark-text dark:hover:bg-dark-background dark:hover:border-dark-text dark:hover:text-dark-text cursor-not-allowed'
            : ''
        }`}
    >
      {children}
    </button>
  );
}
