import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[60px] w-full rounded-lg border border-light-secondary/25 dark:border-dark-secondary/20 bg-transparent text-light-primary dark:text-dark-highlight px-3 py-2 text-sm font-mono transition-colors placeholder:text-light-secondary/40 dark:placeholder:text-dark-secondary/40 focus-visible:outline-none focus-visible:border-light-primary dark:focus-visible:border-dark-highlight disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
