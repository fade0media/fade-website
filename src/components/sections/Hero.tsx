import React from 'react'

import Button from '@/components/ui/Button'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center mt-24 md:mt-24 relative z-40 mx-8 md:mx-16 lg:mx-24 w-full'>
            {/* <StarsBackground /> */}
            {/* <p className='text-gray-400 text-xs tracking-widest'>WEB DESIGN AGENCY</p> */}
           <div className="flex flex-col justify-center items-center w-full">
           <div className="flex justify-center items-center gap-4 lg:gap-12">
                <h1 className="bg-gradient-to-br from-white from-30% to-gray-400 text-left bg-clip-text mt-3 pb-4 text-5xl font-bold leading-none tracking-tight text-transparent text-balance sm:text-6xl md:text-7xl lg:text-9xl">
                    Transforming </h1>
                    <span className='w-12 h-20 lg:w-24 lg:h-36 text-transparent bg-[url("https://img.freepik.com/premium-photo/robotic-hand-holding-mobile-phone-with-white-mockup-screen_955712-19593.jpg")] bg-cover bg-center rounded-full text-2xl lg:mt-8'>
                    
                </span>
            </div>

            <div className="flex justify-center items-center gap-4 lg:gap-12">
                <span className='w-20 h-12 lg:w-40 lg:h-20 text-transparent bg-[url("https://images.herzindagi.info/image/2024/Jan/Best-Laptops-Under-50000-2.jpg")] bg-cover bg-center rounded-full text-2xl lg:mt-8'>
                   
                </span>
                <h1 className="whitespace-nowrap min-w-[200px] bg-gradient-to-br from-white from-30% to-gray-400 text-left bg-clip-text pb-4 text-5xl font-bold leading-none tracking-tight text-transparent text-balance sm:text-6xl md:text-7xl lg:text-9xl">
                    your
                    Digital </h1>


            </div>


            <div className="flex justify-center items-center gap-6">
                <h1 className="bg-gradient-to-br from-white from-30% to-gray-400 text-left bg-clip-text pb-4 text-5xl font-bold leading-none tracking-tight text-transparent text-balance sm:text-6xl md:text-7xl lg:text-9xl">
                    Experiences.  </h1>
                    <svg fill="#ffffff" className='w-12 lg:w-24 animate-rotate-1' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    
                    <g>

                        <path d="M13,9.41a10.46,10.46,0,0,1-2.53-.65A15.4,15.4,0,0,1,8.83,8a15.3,15.3,0,0,1,1.65-.76A9.61,9.61,0,0,1,13,6.6,1.45,1.45,0,0,0,14,6a1.43,1.43,0,0,0-2.34-1.66h0A9,9,0,0,1,9.85,6.24a15.24,15.24,0,0,1-1.48,1,15.65,15.65,0,0,1,.17-1.8A10.5,10.5,0,0,1,9.25,3a1.41,1.41,0,0,0,0-1.17,1.41,1.41,0,0,0-1.82-.69A1.41,1.41,0,0,0,6.78,3a9.55,9.55,0,0,1,.71,2.52,15.53,15.53,0,0,1,.11,1.8,15.24,15.24,0,0,1-1.48-1A9.82,9.82,0,0,1,4.29,4.37a1.45,1.45,0,0,0-1-.57A1.41,1.41,0,0,0,3,6.6a9.64,9.64,0,0,1,2.52.65A14.61,14.61,0,0,1,7.18,8a15.4,15.4,0,0,1-1.65.75A10.5,10.5,0,0,1,3,9.41,1.39,1.39,0,0,0,2,10a1.41,1.41,0,0,0,2.21,1.74l.06-.09A10.39,10.39,0,0,1,6.12,9.77a15.11,15.11,0,0,1,1.47-1,13.54,13.54,0,0,1-.17,1.8A10,10,0,0,1,6.78,13a1.41,1.41,0,0,0,2.58,1.12,1.45,1.45,0,0,0,0-1.12,9.27,9.27,0,0,1-.7-2.52,13.43,13.43,0,0,1-.24-1.8,15.11,15.11,0,0,1,1.47,1,10.39,10.39,0,0,1,1.83,1.86,1.48,1.48,0,0,0,1,.58,1.41,1.41,0,0,0,.3-2.8Z" />

                    </g>

                </svg>
            </div>
           </div>


            <div className="flex md:flex-col justify-center items-center sm:items-start gap-8  md:gap-10 mt-8 w-full lg:px-48">
                <p className='text-gray-400 text-balance md:text-2xl tracking-tight text-left py-2 whitespace-nowrap'>Dynamic. Seamless. Robust.&nbsp;
                    
                    That&apos;s our motto.</p>



                <Button link="#" name="Learn More" />
            </div>

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