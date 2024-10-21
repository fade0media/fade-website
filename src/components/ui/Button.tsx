import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    name: string;
    link: string;
}
const Button = ({ name, link }: ButtonProps) => {
  return (
    <Link href={link} className='bg-white text-black relative z-50 flex gap-2 hover:text-white hover:bg-gradient-to-br from-pink-500 via-orange-300 to-violet-600 justify-center whitespace-nowrap  items-center py-2 px-3 text-xs rounded-full font-semibold cursor-pointer'>
        {name}
        <ArrowUpRight className='w-4 h-4'/>
    </Link>
  )
}

export default Button;