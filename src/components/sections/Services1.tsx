import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import phone from "../../../public/full-2.png";
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


            <div className='flex flex-col justify-center items-center lg:gap-16 sm:flex-row'>
                {/* First flex child (will be reordered to 2 on md screens) */}
                <div className='flex flex-col items-center justify-center gap-16 order-2 md:order-2'>
                <Service 
                    name="Website Development"
                    description="Establish your online presence with seamless, dynamic web solutions">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-sky-200" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48Z"/><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"/><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48v416m208-208H48"/></svg>
                    </Service>

                    <Service 
                    name="Social Media Marketing"
                    description="Enhance your brands visibility with social media strategies tailored to your needs.">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-sky-200" viewBox="0 0 512 512"><path fill="currentColor" d="M448 312.43c.77-1.11 1.51-2.26 2.27-3.34A174.55 174.55 0 0 0 480 211.85C480.32 112.55 396.54 32 292.94 32c-90.36 0-165.74 61.49-183.4 143.12a172.8 172.8 0 0 0-4 36.83c0 99.4 80.56 182.11 184.16 182.11c16.47 0 38.66-4.95 50.83-8.29s24.23-7.75 27.35-8.94s8-2.41 11.89-1.29l77.42 22.38a4 4 0 0 0 5-4.86l-17.72-67.49c-1.23-5-1.39-5.94 3.53-13.14"/><path fill="currentColor" d="M312.54 415.38a165 165 0 0 1-23.26 2.05c-42.43 0-82.5-11.2-115-32.2a184.1 184.1 0 0 1-53.09-49.32c-26.08-34.57-40.3-78.51-40.3-124.49c0-3.13.11-6.14.22-9.16a4.34 4.34 0 0 0-7.54-3.12a158.76 158.76 0 0 0-14.86 195.24c2.47 3.77 3.87 6.68 3.44 8.62l-14.09 72.26a4 4 0 0 0 5.22 4.53l68-24.24a16.85 16.85 0 0 1 12.92.22c20.35 8 42.86 12.92 65.37 12.92a169.45 169.45 0 0 0 116.63-46a4.29 4.29 0 0 0-3.66-7.31"/></svg>
                    </Service>
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
                <div className='mt-16 sm:mt-0 flex flex-col items-center justify-center gap-16 order-3 md:order-3'>
                <Service 
                    name="Media and Branding"
                    description="Create a Brand identity that leaves a mark with compelling visuals and unforgettable storytelling.">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-sky-200" viewBox="0 0 512 512"><path d="M70.9 181.5c0-41 25-76.5 60.6-91.5h-7.7c-41.1 0-75.1 32.8-81.1 75.2-6 1-10.7 7.9-10.7 16.1 0 8.6 5.1 15.4 11.6 15.9 7.2 36.4 35.1 65.8 69.7 68.8h.1c1.4 0 2.8.6 4.2.9 1.1.2 2.2.4 3.3.7-29.9-17.1-50-49.2-50-86.1z" fill="currentColor"/><path d="M465.1 91c-1.1-2.9-2.3-5.6-3.5-8.3-6.5-14.4-14.4-26-23.4-34.6C427 37.6 414.1 32 400.8 32c-8.3 0-16.4 2.2-24.1 6.4h-.1c-1.2.7-2.4 1.3-3.6 2-49 29-104.1 46.2-162.6 49.4-6.5.4-13 .2-19.5.2h-42.3c-34 15-59 50.5-59 91.5 0 36.8 19.2 69.1 47.8 86.1 13 10.9 41.7 11.7 40 23.9-1.9 13.2-5.5 21.9-7.8 30.7-1.3 4.8-23.6 72.9-25.3 144.7 0 2 0 3.7.2 6.6.2 2.9 2.2 6.4 8.5 6.4h76.8c6.6 0 9.7-3.3 9.3-9.3-.2-1.9-.6-4.3-.8-6.5-2.4-23.1-4.6-49.8-3.3-81.6 1.3-34 5.2-51.9 7-61.3 2.1-10.4 7.6-22.4 12.1-30.3 30.8.9 92.9 19.3 115.1 28.9 0 0 7.2 3.4 10.1 5.2 7 3.4 14.2 5.1 21.6 5.1.9 0 1.8 0 2.7-.1 12.3-.7 24.2-9.7 34.7-19.5 9.1-8.5 16.9-20.2 23.4-34.6 1.2-2.8 2.4-5.6 3.5-8.6 9.6-25 14.8-55.9 14.8-88.1 0-32.2-5.2-63.2-14.9-88.2zM442 267.5c-7.8 18.5-18.2 33.3-29.5 33.3s-21.6-14.7-29.4-33.3c-9.1-21.6-14.9-53.1-14.9-88.1 0-35.2 5.8-66.8 15-88.4 7.8-18.4 18.1-29.5 29.3-29.5 11.3 0 21.5 11.2 29.4 29.5 9.2 21.6 15 53.2 15 88.4 0 35-5.8 66.5-14.9 88.1z" fill="currentColor"/></svg>
                    </Service>

                    <Service 
                    name="App Development"
                    description="Provide a seamless User Experience to your customers with a custom application.">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-sky-200" viewBox="0 0 512 512"><path d="M335.7 32H177.1C158.8 32 144 46.6 144 64.9v381c0 18.4 14.8 34.1 33.1 34.1h158.5c18.3 0 32.3-15.7 32.3-34.1v-381C368 46.6 354 32 335.7 32zM241 55h30c2.2 0 4 1.8 4 4s-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4s1.8-4 4-4zm15.5 410c-9.6 0-17.4-7.8-17.4-17.4 0-9.6 7.8-17.4 17.4-17.4 9.6 0 17.4 7.8 17.4 17.4 0 9.6-7.8 17.4-17.4 17.4zm93.5-49H162c-1.1 0-2-.9-2-2V85c0-1.1.9-2 2-2h188c1.1 0 2 .9 2 2v329c0 1.1-.9 2-2 2z" fill="currentColor"/></svg>
                    </Service>
                </div>
            </div>

        </section>
    )
}

export default Services1