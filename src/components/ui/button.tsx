import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-light-secondary text-mono text-light-accent dark:text-dark-surface dark:bg-dark-primary hover:bg-light-secondary/90 dark:hover:bg-dark-primary/90',
        destructive: 'bg-red-600 text-white shadow-sm hover:bg-red-600/90',
        outline:
          'bg-transparent border-2 rounded text-mono border-light-primary text-light-primary dark:border-dark-secondary dark:text-dark-secondary hover:bg-light-primary hover:text-light-background transition-colors duration-300 dark:hover:bg-dark-secondary dark:hover:text-dark-background',
        ghost:
          'text-light-primary dark:text-dark-secondary hover:text-accent-foreground',
        link: 'font-bold text-light-secondary dark:text-dark-primary hover:text-light-primary dark:hover:text-dark-secondary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-4 py-2 text-xl min-w-40',
        md: 'h-8 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, 'disabled'> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
