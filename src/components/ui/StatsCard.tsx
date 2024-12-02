import React from 'react'

const StatsCard = () => {
  return (
    <div className='flex flex-col justify-center items-start p-6 gap-2 border border-gray-400 border-opacity-35 rounded-2xl'>
        <p className='font-bold text-3xl'>64%</p>
        <p className='uppercase tracking-wider text-gray-400 text-sm'>Engagement Increase</p>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies semper aenean sed sit ut. </p>
    </div>
  )
}

export default StatsCard