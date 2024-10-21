import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import phone from "../../public/full-2.png";
import Service from '@/components/ui/Service';
import { ArrowUpRight } from 'lucide-react';


const Services1 = () => {
    return (
        <section className='flex flex-col items-center justify-center gap-12 mx-8 md:mx-24'>
            
            <div className='flex justify-between items-start sm:flex-col sm:justify-center sm:items-center '>
            <div className="flex flex-col justify-start items-start gap-3 sm:items-center">
                <h2 className='text-3xl font-semibold md:text-4xl lg:text-5xl text-left sm:text-center'>Your Needs,&nbsp;
                    <br className='sm:hidden'/>
                    Our Priority</h2>
                <p className='text-gray-400 md:text-lg text-left text-balance sm:text-center'>Let us handle the details, while you enjoy the results.</p>
                
            </div>
            <Link
                    href="#"
                    className='bg-white text-black whitespace-nowrap mt-4 px-3 py-2 flex justify-center items-center text-sm gap-2 md:text-lg rounded-full font-semibold cursor-pointer'
                >
                    View All
                    <ArrowUpRight className='w-4 h-4' />
                </Link>

            </div>


            <div className='flex flex-col justify-center items-center gap-16 lg:mx-24 sm:flex-row mx-12'>
                {/* First flex child (will be reordered to 2 on md screens) */}
                <div className='flex flex-col items-center justify-center gap-16 order-2 md:order-2'>
                    <Service />
                    <Service />
                </div>

                {/* Second flex child (will be reordered to 1 on md screens) */}
                <div className='fade-to-black relative order-1 sm:order-2 '>
                    <Image
                        src={phone}
                        alt="Picture of the author"
                        height={1150}
                    />
                    <div className='absolute bottom-16 left-1/2 -translate-x-1/2 z-50 hidden'>
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