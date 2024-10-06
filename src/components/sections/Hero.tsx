import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center mt-32'>
        <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl">Magic UI is the new way
        <br className="hidden md:block"/> to build landing pages.</h1>

        <p className='text-gray-400 text-balance md:text-xl tracking-tight'>Beautifully designed, animated components and templates built with 
        <br className="hidden md:block"/>
        Tailwind CSS, React, and Framer Motion</p>
        
        
        <Link href="#" className='bg-white text-black p-4 text-sm rounded-2xl mt-10 font-semibold cursor-pointer'>
            Get Started for free
        </Link> 
        
        

    </div>
  )
}

export default Hero