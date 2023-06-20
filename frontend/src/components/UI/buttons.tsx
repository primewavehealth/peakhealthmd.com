import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
 "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
 {
  variants: {
   variant: {
    default:
     "font-semibold  bg-yellow-500 hover:bg-yellow-600 text-blue-600 shadow hover:shadow-md disabled:bg-indigo-500/50 disabled:shadow ring-offset-2 focus-visible:ring-2 ring-indigo-500/70",

    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    secondary:
     "font-normal bg-gray-50  hover:bg-gray-100  disabled:bg-gray-50 text-gray-950 shadow border border-neutral-200/50 ring-offset-2 focus-visible:ring-2 ring-gray-200",
    ghost:
     "font-light text-gray-950 hover:text-gray-600 disabled:text-gray-950 ring-gray-300 focus-visible:ring-1",
    link:
     "font-light text-indigo-500 hover:text-indigo-600 disabled:text-indigo-500/50 disabled:no-underline hover:underline  ring-indigo-300 focus-visible:ring-1",
   },
   size: {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
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
  VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
 ({ className, variant, size, ...props }, ref) => {
  return (
   <button
    className={cn(buttonVariants({ variant, size, className }))}
    ref={ref}
    {...props}
   />
  );
 }
);
Button.displayName = "Button";

export { Button, buttonVariants };
