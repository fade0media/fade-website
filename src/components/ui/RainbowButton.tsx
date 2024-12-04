import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type RainbowButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  link: string;
};

export function RainbowButton({
  children,
  className,
  link,
  ...props
}: RainbowButtonProps) {
  return (
    <Link
      href={link}
      className={cn(
        "font-bold gap-4 group relative z-40 inline-flex animate-rainbow cursor-pointer items-center justify-center rounded-full border-0 bg-[length:200%] px-4 py-2 text-black transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        
        // before styles
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
        
        // dark mode colors
        "bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        
        className
      )}
      {...props}
    >
      {children}
      
      
      <ArrowUpRight
        className="w-4 h-4 transform transition-all duration-200 ease-out opacity-100 group-hover:opacity-0 group-hover:translate-x-5 group-hover:-translate-y-5"
      />
      
      
      <ArrowUpRight
        className="absolute top-7 right-8 w-4 h-4 opacity-0 transform transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4"
      />
    </Link>
  );
}
