// src/components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 hover:bg-primary-600 text-white',
        secondary: 'bg-primary-100 hover:bg-primary-200 text-primary-800',
        gray: 'bg-gray-100 hover:bg-gray-300',
        outline: 'bg-transparent border-2 border-gray-200 hover:bg-gray-200',
        ghost: 'bg-transparent hover:bg-gray-200 data-[state=open]:bg-transparent',
        inverset: 'bg-transparent hover:bg-primary-500 data-[state=open]:bg-transparent text-white',
      },
      size: {
        sm: 'h-10 px-2.5 text-sm',
        md: 'h-12 px-3 text-base',
        lg: 'h-[60px] px-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, variant, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ size, variant, className }))}
        {...props}
      />
    );
  }
);

// Add displayName to assist with debugging
Button.displayName = 'Button';

export { Button, buttonVariants };