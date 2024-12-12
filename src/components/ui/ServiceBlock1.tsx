import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServiceBlock1 = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse justify-center items-center gap-8 w-full mt-16 h-auto'>

            <div className='w-full md:w-1/2 bg-gray-100 bg-opacity-5 rounded-2xl backdrop-blur-sm p-8'>
                <h2 className='text-4xl mb-2 font-semibold'>Technology Solutions</h2>
                <p className='text-xl text-gray-300 mb-4 md:w-3/4'>Innovative solutions designed to streamline operations and elevate online presence.</p>
                <ul className='list-disc list-inside text-xl text-gray-300 w-full'>
                    <li>Website Development</li>
                    <li>E-commerce Platforms</li>
                    <li>Mobile Apps</li>
                    <li>AI-Driven Data Engineering</li>
                    <li>Cloud Hosting & API Integrations</li>
                </ul>
                <div className="w-48 mt-6">
                    <Link
                        href="#"
                        className='bg-white relative group text-black whitespace-nowrap px-3 py-2 flex justify-center items-center text-sm gap-2 md:text-sm rounded-full font-semibold cursor-pointer'
                    >
                        View More
                        <div className="relative text-black">
                            <ArrowUpRight
                                className="w-4 h-4 transform transition-all duration-200 ease-out opacity-100 group-hover:opacity-0 group-hover:translate-x-5 group-hover:-translate-y-5"
                            />


                            <ArrowUpRight
                                className="absolute top-4 right-4 w-4 h-4 opacity-0 transform transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4"
                            />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="md:w-1/2 w-full flex flex-col justify-center items-center gap-8 h-full">
                <Link
                 href="#"
                 className='flex-1 border border-gray-400 border-opacity-30 group bg-[url(/cover.png)] bg-cover w-full h-1/2 pt-28 text-black rounded-2xl'>
                    <div className=' w-full flex justify-start bg-left items-center gap-4 bg-opacity-5 rounded-tr-2xl rounded-bl-2xl px-4 whitespace-nowrap md:px-8 py-3'>
                        <p className='text-white text-xl md:text-2xl rounded-bl-2xl'>Project Name</p>
                        {/* <p className='text-xl text-gray-300'>Client Name</p> */}
                        <div
                            
                            className='bg-white relative text-black whitespace-nowrap px-3 py-2 flex justify-center items-center text-sm gap-2 md:text-sm rounded-full font-semibold cursor-pointer'
                        >
                            
                            <div className="relative text-black">
                                <ArrowUpRight
                                    className="w-4 h-4 transform transition-all duration-200 ease-out opacity-100 group-hover:opacity-0 group-hover:translate-x-5 group-hover:-translate-y-5"
                                />


                                <ArrowUpRight
                                    className="absolute top-4 right-4 w-4 h-4 opacity-0 transform transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4"
                                />
                            </div>
                        </div>
                    </div>

                </Link>
                <Link
                 href="#"
                 className='flex-1 border border-gray-400 border-opacity-30 group bg-[url(/cover.png)] bg-cover w-full h-1/2 pt-28 text-black rounded-2xl'>
                    <div className=' w-1/2 flex justify-start  items-center gap-4 bg-opacity-5 rounded-tr-2xl rounded-bl-2xl px-4 md:px-8 py-3 whitespace-nowrap'>
                        <p className='text-white text-xl md:text-2xl rounded-bl-2xl'>Project Name</p>
                        {/* <p className='text-xl text-gray-300'>Client Name</p> */}
                        <div
                            
                            className='bg-white relative text-black whitespace-nowrap px-3 py-2 flex justify-center items-center text-sm gap-2 md:text-sm rounded-full font-semibold cursor-pointer'
                        >
                            
                            <div className="relative text-black">
                                <ArrowUpRight
                                    className="w-4 h-4 transform transition-all duration-200 ease-out opacity-100 group-hover:opacity-0 group-hover:translate-x-5 group-hover:-translate-y-5"
                                />


                                <ArrowUpRight
                                    className="absolute top-4 right-4 w-4 h-4 opacity-0 transform transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4"
                                />
                            </div>
                        </div>
                    </div>

                </Link>
            </div>

        </div>
  )
}

export default ServiceBlock1