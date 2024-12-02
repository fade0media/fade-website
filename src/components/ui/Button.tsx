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
        <ArrowUpRight className='w-6 h-6'/>
    </Link>
  )
}

export default Button;