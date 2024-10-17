import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react';

import { StarsBackground } from '@/components/ui/StarsBackground';


const Services = () => {
  return (
    <section className='flex flex-col justify-center items-center px-8 md:px-16 xl:px-24 2xl:px-56 w-full lg:flex-row '>
        <div className='flex justify-between items-center mb-8 w-full lg:flex-col lg:items-start gap-4 lg:w-1/2 lg:mr-8'>
            {/* <div className='flex flex-col justify-between w-3/4 items-start gap-2'> */}
                <h2 className='text-3xl font-semibold md:text-4xl lg:text-5xl mr-4'>Your Needs, Our Priority</h2>
        
                {/* <p className='text-gray-400 text-sm'>Explore our diverse array of digital services.</p> */}
            {/* </div> */}

            <Link href="#" className='bg-white text-black whitespace-nowrap px-3 py-2 flex justify-center items-center gap-2 text-xs rounded-2xl font-semibold cursor-pointer'>
                View All
                <ArrowUpRight className='w-4 h-4'/>
            </Link>
            {/* <Button name="View All" link="#"/> */}
        
        
        </div>
        <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-[1fr_1fr] sm:grid-rows-[auto_1fr]">
    <div className="rounded-xl p-0.5 bg-gradient-to-br from-pink-500 from-30% to-purple-500 w-full sm:row-span-2">
        <div className='bg-black w-full h-full px-8 py-4 rounded-xl flex flex-col justify-end items-start gap-2 '>
            <StarsBackground />
        <h3 className="text-3xl font-bold mt-8 bg-gradient-to-br from-pink-500 from-30% to-purple-500 bg-clip-text text-transparent">Website Development</h3>
        <p className="text-white font-light">Bringing your vision to life with seamless, custom web solutions</p>
        </div>
    </div>

    <div className="border border-gray-500 px-8 py-6 rounded-xl w-full flex flex-col justify-center items-start gap-3">
        <h3 className="text-2xl font-bold mt-8">SaaS Marketing</h3>
        <p className="text-gray-400">Market your SaaS like its the best!</p>
    </div>

    <div className="border border-gray-500 px-8 py-6 rounded-xl w-full flex flex-col justify-center items-start gap-3">
        <h3 className="text-2xl font-bold mt-8">SaaS Marketing</h3>
        <p className="text-gray-400">Market your SaaS like its the best!</p>
    </div>
</div>

    </section>
  )
}

export default Services