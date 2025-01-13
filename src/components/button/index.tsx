import { ReactNode } from 'react';

export function Button({ children }: { children: ReactNode }) {
  return (
    <button className="bg-transparent border-2 rounded py-2 px-4 text-mono text-xl font-medium border-light-primary text-light-primary dark:border-dark-secondary dark:text-dark-secondary hover:bg-light-primary hover:text-light-background transition-colors duration-300 dark:hover:bg-dark-secondary dark:hover:text-dark-background">
      {children}
    </button>
  );
}
