// import Button from '@/components/ui/Button'
import { RainbowButton } from '@/components/ui/RainbowButton'
import React from 'react'

const CTA = () => {
  return (
    <div className="h-[50vh] md:h-[55vh] w-full my-16 relative flex flex-col items-center justify-start px-8 md:px-24 hero-gradient">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center"></div>
      <p className="text-4xl text-center sm:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-sky-100 from-30% to-gray-300 via-white py-8">
        Got Ideas? We&apos;ve got the skills.
      </p>
      <RainbowButton>
                    Get a Quote
                </RainbowButton>
    </div>
  )
}

export default CTA