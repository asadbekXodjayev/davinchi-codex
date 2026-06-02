"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  /* Base — rounded-[2px] for Renaissance feel, letter-spacing built in */
  "inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 font-garamond rounded-[2px]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-gold-500 to-gold-600 text-marble-900 hover:from-gold-400 hover:to-gold-500 shadow-gold border-2 border-gold-600 hover:border-gold-400 tracking-[0.12em]",
        outline:
          "bg-transparent text-gold-500 border-2 border-gold-500 hover:bg-gold-500 hover:text-marble-900 hover:border-gold-400 transition-all duration-300 tracking-[0.1em]",
        ghost:
          "text-gold-500 hover:text-gold-400 hover:bg-gold-500/10 border border-transparent tracking-wide",
        link:
          "text-gold-500 hover:text-gold-400 underline-offset-4 hover:underline tracking-wide",
        secondary:
          "bg-burgundy-500 text-parchment-100 hover:bg-burgundy-600 shadow-md border-2 border-burgundy-600 tracking-wide",
        elegant:
          "bg-gradient-to-b from-gold-200 via-gold-400 to-gold-500 text-marble-900 hover:from-gold-100 hover:via-gold-300 hover:to-gold-400 shadow-ornate border-2 border-gold-300 hover:shadow-gold-strong tracking-[0.15em]",
      },
      size: {
        default: "h-12 px-8 py-3 text-base",
        sm: "h-10 px-6 py-2 text-sm",
        lg: "h-16 px-12 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
