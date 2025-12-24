import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-xl",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-zinc-800/90 to-zinc-900/90 text-white shadow-lg shadow-black/30 hover:from-zinc-700/90 hover:to-zinc-800/90 border border-white/10 backdrop-blur",
        primary:
          "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-800/40",
        outline:
          "border border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur",
        ghost:
          "text-white/80 hover:text-white hover:bg-white/5",
        link: "text-emerald-400 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
