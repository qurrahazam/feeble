'use client';

import { type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disableHover?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  disableHover = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const hasHover = variant === 'primary' && !disableHover;

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300',
        {
          'bg-primary text-white': variant === 'primary' && !hasHover,
          'bg-primary text-white hover:bg-white hover:text-primary hover:shadow-lg': hasHover,
          'bg-secondary text-foreground': variant === 'secondary',
          'border border-foreground text-foreground bg-transparent': variant === 'outline',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-5 py-2.5 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      style={{ outline: 'none', boxShadow: hasHover ? undefined : 'none' }}
      {...props}
    >
      {children}
    </button>
  );
}