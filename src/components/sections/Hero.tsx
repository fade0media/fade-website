

import Button from '@/components/ui/Button'

// import React, { Suspense } from 'react';
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


// function Model(props) {
//   const gltf = useGLTF(modelPath)
//   return <primitive {...props} object={gltf.scene} />
// }

const Hero = () => {
    return (
        <div className='flex flex-col hero-gradient justify-center items-start w-full text-center relative px-8 pt-24 z-40 md:pt-80 md:px-24 
        md:pb-48 pb-16
'>
            {/* <StarsBackground /> */}
            {/* <p className='text-gray-400 text-xs tracking-widest'>WEB DESIGN AGENCY</p> */}
            <div className='flex flex-col justify-center items-center sm:items-start'>
                
                <h1 className="sm:text-left whitespace-nowrap bg-gradient-to-br from-white from-30% to-gray-300 bg-clip-text py-4 text-5xl font-bold leading-none tracking-tight text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl">Transform your&nbsp;
                    
                    <br className='hidden sm:block'/>
                    Digital Experiences
                </h1>
                    
                
                

                
                <p className='text-gray-300 text-xl sm:text-left w-full md:text-2xl tracking-tight pt-2 pb-8'>Dynamic. Seamless. Robust.&nbsp; 
                        {/* <br className='hidden'/> */}
                        That&apos;s our motto.</p>
               


                    <Button link="#" name="Learn More"/>
                
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