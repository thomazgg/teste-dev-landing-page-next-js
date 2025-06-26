import { HTMLAttributes, forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const chipVariants = cva(
  'inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap bg-color-background text-white',
  {
    variants: {
      size: {
        sm: 'h-10 px-3 text-sm',
        md: 'h-10 md:h-12 px-3 md:px-4 text-base',
        lg: 'h-[60px] px-4 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

interface ChipProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof chipVariants> {}

const Chip = forwardRef<HTMLSpanElement, ChipProps>(({ size, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(chipVariants({ size }), className)}
      {...props}
    />
  )
})

// Add displayName to assist with debugging
Chip.displayName = 'Chip';

export { Chip }