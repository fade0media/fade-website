

import AnimatedShinyText from '@/components/ui/AnimatedShinyText'
// import Button from '@/components/ui/Button'
// import { GradualSpacing } from '@/components/ui/GradualSpacing'
// import HyperText from '@/components/ui/HyperText'
import { RainbowButton } from '@/components/ui/RainbowButton'
import { cn } from '@/lib/utils'
// import { ArrowRightIcon } from 'lucide-react'

// import React, { Suspense } from 'react';
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


// function Model(props) {
//   const gltf = useGLTF(modelPath)
//   return <primitive {...props} object={gltf.scene} />
// }

const Hero = () => {
    return (
        <div className='md:h-[100vh] h-[75vh] hero-gradient flex flex-col md:mt-0 mt-24 justify-start md:justify-center items-center w-full text-center relative px-8 pt-0 z-40 md:pt-24 md:px-24 
        md:pb-48 pb-16
'>
            {/* <StarsBackground /> */}
            {/* <p className='text-gray-400 text-xs tracking-widest'>WEB DESIGN AGENCY</p> */}
            <div className='flex flex-col justify-center items-center '>
                <div
                    className={cn(
                        "mb-4 md:mb-0 group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>2.0 is Live!</span>
                        {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
                    </AnimatedShinyText>
                </div>
                <h1 className="whitespace-nowrap bg-gradient-to-br from-white from-30% to-gray-400 bg-clip-text py-4 text-5xl font-bold leading-none tracking-[-0.025em] text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl">Transform your&nbsp;

                     <br className='hidden sm:block'/> 
                    Digital Experiences
                </h1>

                {/* <GradualSpacing
                    className="w-1/2 bg-gradient-to-br from-white from-30% to-gray-300 bg-clip-text py-4 text-5xl font-bold leading-none tracking-tight text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl"
                    text="Transform your"
                />
                <GradualSpacing
                    className="w-1/2 bg-gradient-to-br from-white from-30% to-gray-300 bg-clip-text pb-4 text-5xl font-bold leading-none tracking-tight text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl"
                    text="Digital Experiences"
                /> */}





                <p className='text-gray-300 text-xl font-medium w-full md:text-2xl pt-2 pb-8'>Dynamic. Seamless. Robust.&nbsp;
                    <br className='md:hidden'/>
                    That&apos;s our motto.</p>



                {/* <Button link="#" name="Learn More"/> */}
                <RainbowButton>
                    Learn More
                </RainbowButton>

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