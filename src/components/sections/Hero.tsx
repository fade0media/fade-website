import React from 'react'
import Link from 'next/link'
const Hero = () => {
    return (
        <div className='flex flex-col justify-center  items-center text-center mt-32 relative z-20 mx-8 md:mx-16'>
            <h1 className="px-1 bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl">Magic UI is the new way
                <br className="hidden md:block" /> to build landing pages.</h1>

            <p className='text-gray-400 text-balance md:text-xl tracking-tight'>Beautifully designed, animated components and templates built with
                <br className="hidden md:block" />
                Tailwind CSS, React, and Framer Motion</p>


            <Link href="#" className='bg-white text-black p-4 text-sm rounded-2xl mt-10 font-semibold cursor-pointer'>
                Get Started for free
            </Link>
            
            <div className=" flex w-full fade-to-black max-w-5xl  items-center justify-center my-16">
                <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
                    <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#13abbf_20deg,transparent_120deg)]"></div>

                    {/* Image with bottom fade */}
                    <div className="relative z-20 flex w-full rounded-lg bg-slate-900">
                        <img src="https://startup-template-sage.vercel.app/hero-dark.png" alt="hero" className="w-full rounded-lg " />
                    </div>
                </div>
            </div>






        </div>


    )
}

export default Hero