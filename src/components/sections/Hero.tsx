import React from 'react'

import Button from '@/components/ui/Button'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-start text-center mt-32 relative z-50 mx-8 md:mt-72 md:mx-16 lg:mx-36d'>
            {/* <StarsBackground /> */}
            {/* <p className='text-gray-400 text-xs tracking-widest'>WEB DESIGN AGENCY</p> */}
            <h1 className="bg-gradient-to-br from-[#96deff] from-30% to-gray-300 text-left bg-clip-text py-6 text-5xl font-regular leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-9xl">Transform your
                <br className="hidden md:block" /> Digital Experiences.</h1>

            <p className='text-gray-300  text-balance md:text-2xl tracking-tight mb-6 text-left py-2'>Dynamic. Seamless. Robust.&nbsp; 
                <br className='md:hidden'/>
                That&apos;s our motto.</p>
               


            <Button link="#" name="Learn More"/>
            
            {/* <div className=" flex w-full fade-to-black max-w-5xl  items-center justify-center my-16">
                <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
                    <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#463380_20deg,transparent_120deg)]"></div>

                    
                    <div className="relative z-20 flex w-full rounded-lg bg-slate-900">
                        <img src="https://startup-template-sage.vercel.app/hero-dark.png" alt="hero" className="w-full rounded-lg " />
                    </div>
                </div>
            </div> */}






        </div>


    )
}

export default Hero