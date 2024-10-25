import Clients from '@/components/ui/Clients'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='flex flex-col justify-center items-center relative z-40 my-24 gap-8 sm:flex-row px-24'>
        <p className='text-white text-xl md:text-3xl text-balance'>
        Our clients consistently find working with us a seamless and rewarding experience. We&apos;re committed to understanding 
        their unique goals and delivering impactful results. 
        
        </p>
        <Clients />
    </div>
  )
}

export default Testimonials