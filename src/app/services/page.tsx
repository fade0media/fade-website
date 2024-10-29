'use client'

import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);



const page: React.FC = () => {
  
  
    return (
      <>
        <section className="min-h-[50vh] relative z-40 flex flex-col items-start justify-center mx-8 md:mx-16 md:flex-row md:items-center md:justify-between">
        {/* <p className=' text-xs tracking-widest mb-4 text-teal-200'>WEB DESIGN AGENCY</p> */}
          <h1 className='text-5xl font-bold mb-4 md:text-7xl'>Our Services</h1>
          <p className='text-gray-400  max-w-md md:text-lg text-left'>Explore our wide range of digital services! We promise you won&apos;t be disappointed.</p>
        </section>
  
        
      </>
    );
  };
  
  export default page;

