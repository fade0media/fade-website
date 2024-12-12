import ServiceBlock from '@/components/ui/ServiceBlock'
import ServiceBlock1 from '@/components/ui/ServiceBlock1'
import React from 'react'

const AllServices1 = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full gap-8 mb-16 md:mb-0'>
            <ServiceBlock />
            <ServiceBlock1 />
            <ServiceBlock />
            <ServiceBlock1 />
        </div>
    )
}

export default AllServices1