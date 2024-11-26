'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
// import Link from 'next/link';
//import { imgPreview } from '@/components/website/constant';

const tabs = [
  {
    title: 'How do UI components improve UX?',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:
      'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  },
  {
    title: 'Common UI component design challenges?',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    imageUrl:
      'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  },
  {
    title: 'Ensuring UI component responsiveness?',
    description:
      '     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
];
function FAQ1() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
//   const [activeItem, setActiveItem] = useState<
//     | {
//         title: string;
//         description: string;
//         imageUrl: string;
//       }
//     | undefined
//   >(tabs[0]);

//   const handleClick = async (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//     const newActiveItem = tabs.find((_, i) => i === index);
//     setActiveItem(newActiveItem);
//   };

  return (
    <>
      <div className='text-white pb-10 pt-2 relative z-40 px-8 md:px-24 w-full flex flex-col justify-center items-center md:flex-row md:justify-between gap-8 md:gap-24'>
        <div className='flex flex-col justify-center items-center gap-4 md:items-start'>
            <h1 className='text-center text-3xl font-semibold md:text-4xl lg:text-5xl md:text-left'>
                Any Questions? We've got you.
            </h1>

            <p className='text-gray-400 md:text-lg text-balance text-center md:text-left'>Let us handle the details, while you enjoy the results.</p>
            {/* <Link
                    href="#"
                    className='bg-white md:hidden text-black whitespace-nowrap sm:mt-6 px-3 py-2 flex justify-center items-center text-sm gap-2 md:text-sm rounded-full font-semibold cursor-pointer'
                >
                    View All
                    <ArrowUpRight className='w-4 h-4' />
                </Link> */}
        </div>
        <div className='h-fit rounded-lg w-full'>
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`py-4 overflow-hidden ${
                index !== tabs.length - 1 ? 'border-b border-gray-400 border-opacity-45' : ''
              }`}
            //   onClick={() => handleClick(index)}
            >
              <button
                className={`p-3 px-2 w-full cursor-pointer text-left text-2xl items-start transition-all font-semibold text-white flex gap-4 
               `}
              >
                <Plus
                  className={`${
                    activeIndex === index ? 'rotate-45' : 'rotate-0 '
                  } transition-transform ease-in-out w-8 h-8 text-gray-200 `}
                />
                {tab.title}
              </button>
              <AnimatePresence mode='sync'>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 0.14,
                    }}
                  >
                    <p
                      className={`text-gray-400 text-lg pt-0 w-[90%] pl-12 md:pl-[55px]`}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ1;
