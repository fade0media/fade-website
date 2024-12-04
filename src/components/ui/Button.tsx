import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    name: string;
    link: string;
}
const Button = ({ name, link }: ButtonProps) => {
  return (
    <Link href={link} className='bg-white text-black relative z-40 flex gap-2 hover:text-sky-400 justify-center whitespace-nowrap  items-center py-3 px-4 text-xl lg:text-md rounded-full font-semibold cursor-pointer'>
        {name}
        <ArrowUpRight
                className="w-6 h-6 transform transition-all duration-200 ease-out opacity-100 group-hover:opacity-0 group-hover:translate-x-5 group-hover:-translate-y-5"
              />
              
              
              <ArrowUpRight
                className="absolute top-7 right-8 w-6 h-6 opacity-0 transform transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4"
              />
    </Link>
  )
}

export default Button;