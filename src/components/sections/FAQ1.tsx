'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const tabs = [
  {
    title: "I'm looking to grow my business online, how do I start?",
    description:
      "You can start by booking a call with us to explore how you can scale your business online. We'll start by getting to know your business, your needs and your goals. You can leave the rest to us.",
    
  },
  {
    title: "I know other agencies that offer the same things, how are you different?",
    description:
      "While we pride ourselves in creativity, we define ourselves by the results we deliver. Feel free to head over to our projects page and learn about the impact we've had on other businesses we've worked with.",
    
  },
  {
    title: "I'm a small business owner, will i get the same priority as larger organisations?",
    description:
      "We ensure that every project is given the attention it deserves, regardless if you're a small business, or a large corporation. You can count on us for reliable results with timely delivery.",
    
  },
];

function FAQ1() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-white pb-10 pt-2 relative z-40 px-8 md:px-24 w-full flex flex-col justify-center items-center md:flex-row md:justify-between gap-8 md:gap-24">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-4 md:items-start">
        <h1 className="text-center text-3xl font-semibold md:text-4xl lg:text-5xl md:text-left">
          Any Questions? We&apos;ve got you.
        </h1>
        <p className="text-gray-400 md:text-xl text-balance text-center md:text-left">
        We&apos;re here to address what matters most to you.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="h-fit rounded-lg w-full">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            className={`py-4 overflow-hidden ${
              index !== tabs.length - 1 ? 'border-b border-gray-400 border-opacity-45' : ''
            }`}
            onClick={() => handleClick(index)}
          >
            {/* Tab Button */}
            <button
              className="p-3 pl-2 w-full cursor-pointer text-left text-2xl items-start transition-all font-semibold text-white flex gap-4"
            >
              <Plus
                className={`${
                  activeIndex === index ? 'rotate-45' : 'rotate-0'
                } transition-transform ease-in-out w-8 h-8 text-gray-200`}
              />
              {tab.title}
            </button>

            {/* Tab Content */}
            <AnimatePresence mode="sync">
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
                  <p className="text-gray-400 text-lg pt-0 w-[90%] pl-12 md:pl-[55px]">
                    {tab.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FAQ1;
