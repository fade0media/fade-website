import React from 'react'

const Service1 = () => {
  return (
    <div className='flex relative flex-col gap-6 md:flex-row justify-between items-start py-12 border-b border-gray-400 border-opacity-35'>
        <div className='absolute font-bold top-8 text-9xl text-gray-500 text-opacity-30'>01</div>
        <h2 className='py-36 px-4 tracking-wider'>WEB DESIGN</h2>
        <p className='md:w-1/2 text-xl'>Web development involves custom website development where businesses build tailor-made websites that meet specific needs, focusing on speed, security, and scalability. 
        <br /> <br />
        eCommerce development helps create platforms for B2B transactions, including features like wholesale pricing, custom orders, and integration with supply chain systems. 
        {/* <br /> <br />
        Content management systems (CMS) development or implementation helps businesses manage and update content efficiently.*/}</p> 
    </div>
  )
}

export default Service1