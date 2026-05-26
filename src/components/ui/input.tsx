import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-lg border border-light-secondary/25 dark:border-dark-secondary/20 bg-transparent text-light-primary dark:text-dark-highlight px-3 py-1 text-sm font-mono transition-colors placeholder:text-light-secondary/40 dark:placeholder:text-dark-secondary/40 focus-visible:outline-none focus-visible:border-light-primary dark:focus-visible:border-dark-highlight disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
