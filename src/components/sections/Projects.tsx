import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useCursor } from "@/app/contexts/CursorContext";

interface ImageItem {
  img: string;
  label: string;
  year: number;
  description: string;
}

function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [cursorPosition, setCursorPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const list: ImageItem[] = [
    {
      img: 'https://images.unsplash.com/photo-1682806816936-c3ac11f65112?q=80&w=1274&auto=format&fit=crop',
      label: 'Six Cap',
      year: 2024,
      description: 'A stylish and modern six cap design for everyday use.',
    },
    {
      img: 'https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=1274&auto=format&fit=crop',
      label: 'Room Decor',
      year: 2024,
      description: 'Elegant room decor pieces to enhance any living space.',
    },
    {
      img: 'https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=1274&auto=format&fit=crop',
      label: 'Porter',
      year: 2024,
      description: 'Premium quality porter bags for a stylish carry.',
    },
    {
      img: 'https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=1274&auto=format&fit=crop',
      label: 'LifeStyle',
      year: 2024,
      description: 'Lifestyle accessories that blend fashion with function.',
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };

    
  }, []);

  const { setHideCursor } = useCursor();
  
  return (
    <section className="relative mx-auto px-8 text-white w-full gap-8 md:px-24 my-16 md:my-48">
      <div className="flex flex-col justify-center items-center mb-16">
        <h2 className='text-3xl font-semibold md:text-4xl lg:text-5xl text-center'>Our Portfolio</h2>
        <p className='text-gray-400 mt-4 md:text-xl text-balance text-center'>Crafting solutions that leave a mark.</p>
      </div>
      <div className="flex justify-center items-center gap-24">
        <div className="w-1/2 lg:flex items-center justify-center relative hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={list[activeIndex === -1 ? 0 : activeIndex].img}
              src={list[activeIndex === -1 ? 0 : activeIndex].img}
              alt={list[activeIndex === -1 ? 0 : activeIndex].label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
              }}
              className="w-[400px] h-[300px] rounded-lg object-cover shadow-lg"
            />
          </AnimatePresence>
        </div>

        <div
          className="dont-show flex flex-col space-y-4 w-full lg:w-1/2 relative cursor-none"
          onMouseEnter={() => {
            setHideCursor(true);
            setHovered(true)
          }}
          onMouseLeave={() => {
            setHideCursor(false);
            setHovered(false)
          }}
        >

          
          {list.map((item, index) => (
            <div
              key={item.label}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
              className={`relative whitespace-nowrap flex flex-col items-start justify-between px-4 py-4 border-b border-gray-700 last:border-none ${activeIndex === index ? 'text-sky-200' : ''}`}
            >
              <div className='w-full'>
              <Link href="/" className="flex justify-between items-center w-full">
                <p className=" text-xl md:text-3xl font-semibold">{item.label}</p>
                {/* <motion.div
                  className="lg:flex px-8 text-white hidden text-md rounded-lg shadow-lg opacity-0 mt-2 transition-opacity duration-300 ease-in-out"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                >
                  {item.description}
                </motion.div> */}
                <span className=" text-md md:text-lg">{item.year}</span>
              </Link>
              </div>
            </div>
          ))}
        </div>

        {hovered && (
          <motion.div
            className="fixed z-50 w-12 h-12 border-4 bg-white rounded-full flex items-center justify-center cursor-none pointer-events-none"
            style={{
              top: 0,
              left: 0,
              transform: `translate(${cursorPosition.x - 24}px, ${cursorPosition.y - 24}px)`,
            }}
            animate={{
              x: cursorPosition.x - 24,
              y: cursorPosition.y - 24,
            }}
            transition={{
              type: 'spring',
              stiffness: 0,
              damping: 0,
            }}
          >
            <ArrowUpRight className='w-6 h-6 text-black' />
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;