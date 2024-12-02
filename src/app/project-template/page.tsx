import Button from '@/components/ui/Button'
import StatsCard from '@/components/ui/StatsCard'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center relative z-40 w-full md:mb-24'>

            <div className='flex justify-between items-start w-full px-8 md:px-24 lg:pl-24 lg:pr-0'>
                <div className='flex flex-col justify-center gap-8 lg:gap-36 items-start mt-24'>
                    <h1 className='text-5xl md:text-7xl text-left'>Co&nbsp;

                        <br className='hidden lg:block' />Space</h1>

                    <div className='lg:hidden w-full'>
                        <img
                            className='rounded-3xl w-full h-full'
                            src="https://www.mockupworld.co/wp-content/uploads/dynamic/2024/11/iphone-16-free-mockup-psd-690x455-c-default.jpg" alt="" />
                    </div>


                    <div className="flex flex-col justify-center items-center gap-8">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <p className='uppercase tracking-wider text-gray-400 text-xs md:text-sm'>services</p>
                            <p className='w-3/4 text-md md:text-lg'>Art Direction, Web Design, Motion Design</p>

                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
                            <p className='uppercase tracking-wider text-gray-400 text-xs md:text-sm'>services</p>
                            <p className='w-3/4 text-md md:text-lg'>Art Direction, Web Design, Motion Design</p>

                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
                            <p className='uppercase tracking-wider text-gray-400 text-xs md:text-sm'>services</p>
                            <p className='w-3/4 text-md md:text-lg'>Art Direction, Web Design, Motion Design</p>

                        </div>
                    </div>
                </div>


                <div className='w-4/6 mt-12 lg:h-[600px] hidden lg:flex'>
                    <img
                        className='rounded-bl-3xl w-full h-full'
                        src="https://www.mockupworld.co/wp-content/uploads/dynamic/2024/11/iphone-16-free-mockup-psd-690x455-c-default.jpg" alt="" />
                </div>
            </div>



            <div className="flex flex-col lg:flex-row items-start w-full justify-between lg:items-center px-8 md:px-24 py-8 md:py-16 gap-8 ">

                <div className="md:w-1/3 w-full flex justify-start flex-wrap gap-3 items-center">
                    <p className='whitespace-nowrap text-sm md:text-md border border-gray-400 text-gray-400 rounded-full py-1 px-2'>E-commerce</p>
                    <p className='whitespace-nowrap text-sm md:text-md border border-gray-400 text-gray-400 rounded-full py-1 px-2'>AI</p>
                    <p className='whitespace-nowrap text-sm md:text-md border border-gray-400 text-gray-400 rounded-full py-1 px-2'>Web Design</p>
                    <p className='whitespace-nowrap text-sm md:text-md border border-gray-400 text-gray-400 rounded-full py-1 px-2'>Food industry</p>
                    <p className='whitespace-nowrap text-sm md:text-md border border-gray-400 text-gray-400 rounded-full py-1 px-2'>Entertainment</p>
                </div>



                <div className="flex flex-col justify-center items-start gap-3 lg:w-2/3 lg:ml-8">
                    <p className='uppercase tracking-wider text-gray-400 text-sm'>overview</p>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ultricies semper aenean sed sit ut. Risus interdum metus non facilisis
                        aliquet erat aliquet imperdiet pulvinar. Justo magna odio pharetra est semper nisi.
                        Nunc, euismod mauris nam sem. Velit fermentum porttitor praesent ac.
                        Feugiat nam ipsum ut tincidunt at fermentum suspendisse.
                        Nullam quam etiam hendrerit risus tellus rhoncus, bibendum.</p>
                </div>


            </div>

            <div className="flex flex-col justify-center items-start gap-3 px-8 md:px-24 lg:gap-8 my-8 lg:my-16">
                <p className='uppercase tracking-wider text-gray-400 text-sm'>the problem</p>
                <p className='text-4xl md:text-6xl font-semibold'>Lorem ipsum dolor sit amet,
                    <br />consectetur adipiscing elit.
                </p>
                <p className='text-lg mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ultricies semper aenean sed sit ut. Risus interdum metus non facilisis
                    aliquet erat aliquet imperdiet pulvinar. Justo magna odio pharetra est semper nisi.
                    Nunc, euismod mauris nam sem. Velit fermentum porttitor praesent ac.
                    Feugiat nam ipsum ut tincidunt at fermentum suspendisse.
                    Nullam quam etiam hendrerit risus tellus rhoncus, bibendum.</p>
                <div className='w-full my-6 md:h-96'>
                    <img
                        className='rounded-3xl w-full h-full'
                        src="https://www.mockupworld.co/wp-content/uploads/dynamic/2024/11/iphone-16-free-mockup-psd-690x455-c-default.jpg" alt="" />
                </div>

                <div className="flex flex-col justify-center items-start gap-4 my-6">
                    <p className='uppercase tracking-wider text-gray-400 text-sm'>the solution</p>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ultricies semper aenean sed sit ut. Risus interdum metus non facilisis
                        aliquet erat aliquet imperdiet pulvinar. Justo magna odio pharetra est semper nisi.
                        Nunc, euismod mauris nam sem. Velit fermentum porttitor praesent ac.
                        Feugiat nam ipsum ut tincidunt at fermentum suspendisse.
                        Nullam quam etiam hendrerit risus tellus rhoncus, bibendum.</p>
                </div>

            </div>

            <div className="my-8 flex flex-col w-full justify-between items-center lg:flex-row lg:items-start px-8 md:px-24 gap-16">

                <div className='w-full lg:w-1/2 mt-4'>
                    <img
                        className='rounded-3xl w-full h-full'
                        src="https://www.mockupworld.co/wp-content/uploads/dynamic/2024/11/iphone-16-free-mockup-psd-690x455-c-default.jpg" alt="" />
                </div>

                <div className="flex flex-col justify-start items-start gap-4 w-full lg:w-1/2">
                    <p className='uppercase tracking-wider text-gray-400 text-sm'>project features</p>
                    <ul className='text-lg list-disc ml-12'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ultricies semper aenean sed sit ut. </li>

                        <li>Risus interdum metus non facilisis
                            aliquet erat aliquet imperdiet pulvinar.</li>

                        <li>Justo magna odio pharetra est semper nisi.
                            Nunc, euismod mauris nam sem. Velit fermentum porttitor praesent ac.</li>

                        <li>Feugiat nam ipsum ut tincidunt at fermentum suspendisse.
                            Nullam quam etiam hendrerit risus tellus rhoncus, bibendum.</li>
                    </ul>
                </div>
            </div>


            <div className="flex flex-col justify-center items-start gap-3 px-8 md:px-24 lg:gap-8 lg:my-16 my-8">
                <p className='uppercase tracking-wider text-gray-400 text-sm'>results</p>
                <p className='text-4xl md:text-6xl font-semibold'>Lorem ipsum dolor sit amet,
                    <br />consectetur adipiscing elit.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-6 my-6">
                    <StatsCard />
                    <StatsCard />
                    <StatsCard />
                    <StatsCard />
                </div>


                <div className='w-full my-6 md:h-96'>
                    <img
                        className='rounded-3xl w-full h-full'
                        src="https://www.mockupworld.co/wp-content/uploads/dynamic/2024/11/iphone-16-free-mockup-psd-690x455-c-default.jpg" alt="" />
                </div>

                <div className="flex flex-col justify-center items-start gap-4">
                    <p className='uppercase tracking-wider text-gray-400 text-sm'>the solution</p>
                    <p className='text-lg '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ultricies semper aenean sed sit ut. Risus interdum metus non facilisis
                        aliquet erat aliquet imperdiet pulvinar. Justo magna odio pharetra est semper nisi.
                        Nunc, euismod mauris nam sem. Velit fermentum porttitor praesent ac.
                        Feugiat nam ipsum ut tincidunt at fermentum suspendisse.
                        Nullam quam etiam hendrerit risus tellus rhoncus, bibendum.</p>
                </div>

            </div>

            <Button name="View All Projects" link="/projects"/>
        </div>
    )
}

export default page