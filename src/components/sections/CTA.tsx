// import Button from '@/components/ui/Button'
import { RainbowButton } from '@/components/ui/RainbowButton'
import React from 'react'

const CTA = () => {
  return (
    <div className="h-[60vh] md:h-[80vh] w-full mb-16 relative flex flex-col items-center justify-start md:justify-center px-8 md:px-24 hero-gradient">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center"></div>
      <h1 className="w-3/4 text-4xl text-center sm:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-sky-100 from-30% to-gray-300 via-white pt-8">
      Your ideas deserve the best, and we deliver.

      </h1>
      <p className='text-gray-300 text-xl text-center font-medium w-full md:text-2xl py-4'>Let&apos;s make your dreams happen today.</p>
      <RainbowButton link="/contact">
                    Talk to us
                </RainbowButton>
    </div>
  )
}

export default CTA