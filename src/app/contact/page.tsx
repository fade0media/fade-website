'use client'
import React from 'react'

import Calendar from '@/components/ui/Calendar';

const page = () => {
    
    return (
        <div className='flex flex-col justify-center items-center px-8 '>
            {/* <StarsBackground /> */}
            
            <div className="h-[20rem] w-full bg-black bg-grid-white/[0.2]  px-4 my-8 relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-orange-300 to-violet-600 mb-3 py-2">
        Let's get to work!
      </p>
      <p className='text-md sm:text-lg text-center'>Hop on a quick call with us and explore endless possibilities!</p>
    </div>
            
            <Calendar />
            {/* <StarsBackground /> */}
            {/* <div>Contact formfffffffffffffffffffffffffffffffffffffffffffffffffff</div> */}
        </div>
    );
};


export default page