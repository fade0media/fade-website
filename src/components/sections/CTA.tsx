import Button from '@/components/ui/Button'
import React from 'react'

const CTA = () => {
  return (
    <div className="w-full my-8 relative flex flex-col items-start justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center"></div>
      <p className="text-4xl text-left sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-sky-100 from-30% to-gray-300 via-white py-8">
        Got Ideas? <br /> We&apos;ve got the skills.
      </p>
      <Button link="#" name="Get a Quote"/>
    </div>
  )
}

export default CTA