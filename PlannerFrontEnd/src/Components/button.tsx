import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-lg px-5 py-2 font-medium flex items-center gap-2",
  variants:{
    variant: {
      primary: 'bg-zinc-300 text-zinc-950 hover:bg-purple-400',
      secondary: 'bg-purple-800 text-zinc-200 hover:bg-zinc-800',
    }
  },
  defaultVariants:{
    variant: 'primary',
  }
});
interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonVariants({variant})}
    >
      {children}
    </button>
  );
}
