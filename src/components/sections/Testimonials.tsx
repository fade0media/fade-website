import Clients from '@/components/ui/Clients'
//import TestimonialCards from '@/components/ui/TestimonialCards'
import React from 'react'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeInText from '@/components/ui/FadeInText';

const Testimonials = () => {
  const ref1 = useRef(null);
  //const ref2 = useRef(null);

  // Check if each testimonial is in view
  const isInView1 = useInView(ref1, { once: true });
  //const isInView2 = useInView(ref2, { once: true });
  const text = "Our clients consistently find working with us a seamless and rewarding experience. We're committed to understanding their unique goals and delivering impactful results."
  return (
    <div className="flex flex-col items-center justify-center relative z-40 my-24 px-8 md:px-24 w-full ">

    
    <div className='flex flex-col justify-center items-start'>
      <div className='flex flex-col md:w-3/4 mb-24 justify-center items-start gap-8 text-2xl md:text-4xl lg:text-5xl text-balance w-full text-left text-gray-300'>
        <FadeInText text={text} />

        

      </div>
      {/* <h1 className='text-3xl font-semibold md:text-4xl lg:text-5xl text-center mt-24'>Don't just take our word for it</h1> */}
      <div className="container flex md:flex-row flex-col items-center justify-center text-left">


        <div className="container mx-auto mt-24">
     
      <div className="flex flex-col justify-center items-center sm:flex-row gap-8 -my-4 mb-24">
        
        {/* First Testimonial Card */}
        <motion.div
          ref={ref1}
          className="p-8 md:w-1/2 w-full border-1 rounded-2xl border-gray-600 border border-opacity-45 bg-black"
          initial={{ y: 0, opacity: 0 }}
          animate={isInView1 ? { y: -25, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="h-full rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed mb-6 text-xl font-light text-gray-300">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
            <a className="inline-flex items-center">
              <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-white">Holden Caulfield</span>
                <span className="text-gray-400 text-sm">UI DEVELOPER</span>
              </span>
            </a>
          </div>
        </motion.div>

        {/* Second Testimonial Card */}
        <motion.div
          ref={ref1}
          className="p-8 md:w-1/2 w-full border-1 rounded-2xl border-gray-600 border border-opacity-45 bg-black"
          initial={{ y: 0, opacity: 0 }}
          animate={isInView1 ? { y: 25, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="h-full rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed mb-6 text-xl font-light text-gray-300">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
            <a className="inline-flex items-center">
              <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-white">Holden Caulfield</span>
                <span className="text-gray-400 text-sm">UI DEVELOPER</span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
      
      </div>
      
    </div>
    
    </div>
    <Clients />
    </div>
  )
}

export default Testimonials;