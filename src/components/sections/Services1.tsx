import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import phone from "../../public/full-2.png";
import Service from '@/components/ui/Service';
import { ArrowUpRight } from 'lucide-react';


// const services = [
//     {
//         name:"Web Development",
//         icon: "Globe"
//     },
//     {
//         name:"Mobile App Development",
//         icon: "Phone"
//     },

// ]

const Services1 = () => {
    return (
        <section id="services" className='flex flex-col items-center justify-center gap-12 relative z-40 px-8 md:px-24 my-16 md:my-36 '>
            
            <div className='flex flex-col justify-center items-center sm:gap-2 gap-4 '>
            {/* <div className="flex flex-col justify-center gap-3 items-center"> */}
                <h2 className='text-3xl font-semibold md:text-4xl lg:text-5xl text-center'>Your Needs,&nbsp;
                    {/* <br className='sm:hidden'/> */}
                    Our Priority</h2>
                
                
            {/* </div> */}
            <div className="flex justify-center items-center flex-col gap-4">
            <p className='text-gray-400 md:text-lg text-balance text-center'>Let us handle the details, while you enjoy the results.</p>
            <Link
                    href="#"
                    className='bg-white md:hidden text-black whitespace-nowrap sm:mt-6 px-3 py-2 flex justify-center items-center text-sm gap-2 md:text-sm rounded-full font-semibold cursor-pointer'
                >
                    View All
                    <ArrowUpRight className='w-4 h-4' />
                </Link>
            </div>
            

            </div>


            <div className='flex flex-col justify-center items-center gap-16 sm:flex-row'>
                {/* First flex child (will be reordered to 2 on md screens) */}
                <div className='flex flex-col items-center justify-center gap-16 order-2 md:order-2'>
                    <Service />
                    <Service />
                </div>

                {/* Second flex child (will be reordered to 1 on md screens) */}
                <div className='fade-to-black relative order-1 sm:order-2 flex justify-center items-center'>
                    <div className='w-3/4'>
                    <Image
                        src={phone}
                        alt="Picture of the author"
                        height={1150}
                    />
                    </div>
                    
                    <div className='absolute bottom-0 2xl:bottom-24 left-1/2 -translate-x-1/2 z-50 hidden md:flex'>
                        <Link
                            href="#"
                            className='bg-white text-black whitespace-nowrap px-4 py-3 flex justify-center items-center gap-2 text-lg rounded-full font-semibold cursor-pointer'
                        >
                            View All 
                            <ArrowUpRight className='w-4 h-4' />
                        </Link>
                    </div>
                </div>

                {/* Third flex child (will be reordered to 3 on md screens) */}
                <div className='flex flex-col items-center justify-center gap-16 order-3 md:order-3'>
                    <Service />
                    <Service />
                </div>
            </div>

        </section>
    )
}

export default Services1