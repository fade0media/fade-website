'use client'
import React from 'react'

import Calendar from '@/components/ui/Calendar';
import ContactForm from '@/components/ui/ContactForm';
import { Tabs, Tab } from '@/components/ui/Tabs';

const page = () => {
    
    return (
        <div className='flex flex-col justify-center  items-center px-8 relative z-40'>
            {/* <StarsBackground /> */}
            
            <div className="w-full mt-24 px-4 relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center"></div>
      <p className="text-4xl text-center sm:text-7xl font-bold relative z-20 text-white mb-3 py-2">
        Let&apos;s get to work!
      </p>
      <p className='text-md sm:text-lg text-center mb-8'>Hop on a quick call with us and explore endless possibilities!</p>
    </div>
            
           
            <Tabs>
                  
                    <Tab
                      
                      label="Book a call"
                    >
                      <div className="flex flex-col items-center justify-center mt-8">
                      {/* <p>jsdkfhk</p> */}
                      <Calendar />
                      </div>
                    </Tab>

                    <Tab
                      
                      label="Fill out a form"
                    >
                      <ContactForm />
                    </Tab>
                  
                </Tabs>

           
        </div>
    );
};


export default page