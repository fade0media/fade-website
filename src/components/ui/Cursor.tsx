'use client'

import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { useCursor } from '@/app/contexts/CursorContext';

const Cursor = () => {
  const { hideCursor } = useCursor();

  return (
    <>
    <div className='hidden md:flex'>
    <AnimatedCursor
      innerSize={hideCursor ? 0 : 8}
      outerSize={hideCursor ? 0 : 8}
      outerAlpha={hideCursor ? 0 : 0.5}
      innerScale={hideCursor ? 0 : 0.01}
      outerScale={hideCursor ? 0 : 6}
      trailingSpeed={1}
      showSystemCursor={true}
      outerStyle={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
      innerStyle={{
        backgroundColor: '#ffffff',
      }}
    />
    </div>
    </>
  );
};

export default Cursor;
