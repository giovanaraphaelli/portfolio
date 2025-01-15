import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      className="bg-transparent border-2 rounded py-2 px-4 text-mono text-xl font-medium border-light-primary text-light-primary dark:border-dark-secondary dark:text-dark-secondary hover:bg-light-primary hover:text-light-background transition-colors duration-300 dark:hover:bg-dark-secondary dark:hover:text-dark-background min-w-40"
    >
      {children}
    </button>
  );
}
