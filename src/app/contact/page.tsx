'use client'
import React from 'react'

import Calendar from '@/components/ui/Calendar';
// import ContactForm from '@/components/ui/ContactForm';
// import { Tabs, Tab } from '@/components/ui/Tabs';
// import Button from '@/components/ui/Button';
// import { Phone, Mail } from 'lucide-react';

const page = () => {

  return (
    <div className='flex flex-col justify-center  items-center px-8 md:px-24 relative z-40 w-full mt-16 md:mt-24 gap-16'>

      <div className='flex flex-col justify-between md:flex-row items-start gap-8 md:items-end w-full'>
        <div className="md:w-1/2 relative flex flex-col items-start justify-center w-full">
          {/* Radial gradient for the container to give a faded look */}
          {/* <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center"></div> */}
          <p className="text-4xl text-left sm:text-6xl font-bold relative z-20 text-white mb-3 py-2 mt-8">
            Let&apos;s get to work!
          </p>
          <p className='text-md sm:text-lg text-left text-gray-400'>Hop on a quick call with us and explore endless possibilities!</p>
          {/* <Calendar /> */}
          {/* <p className='text-md sm:text-lg text-left my-8 text-gray-400'>Or reach out to us at:</p> */}


        </div>

        {/* <div className="flex flex-col justify-center items-start gap-4">
          <div className='flex justify-center items-center gap-6'>
            <Phone className='w-5 h-5' />
            <p className='md:text-xl text-xl text-white tracking-wide '>+91 89238 83879</p>
          </div>
          <div className='flex justify-center items-center gap-6'>
            <Mail className='w-5 h-5' />
            <p className='md:text-xl text-xl text-white tracking-wide '>fademedia@gmail.com</p>
          </div>
        </div> */}
      </div>

      <div className="w-full">
      <Calendar />
      </div>


      {/* <Tabs>
                  
                    <Tab
                      
                      label="Book a call"
                    >
                      <div className="flex flex-col items-center justify-center mt-8">
                     
                      <Calendar />
                      </div>
                    </Tab>

                    <Tab
                      
                      label="Fill out a form"
                    >
                      <ContactForm />
                    </Tab>
                  
                </Tabs> */}


    </div>
  );
};


export default page