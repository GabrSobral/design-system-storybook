import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  asChild?: boolean;
}

export function Button(props: ButtonProps) {
  const Component = props.asChild ? Slot : "button";

  return (
    <Component 
      {...props} 
      className="py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white"
    />
  )
}