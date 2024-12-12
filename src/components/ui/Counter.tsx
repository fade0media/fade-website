import React, { useRef } from 'react';
import useScrollTriggeredCountUp from '@/app/hooks/counter-hook';


const StatsSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const clients = useScrollTriggeredCountUp(ref, 0, 20);
    const countries = useScrollTriggeredCountUp(ref,0, 7);
    const impressions = useScrollTriggeredCountUp(ref, 800000, 1_000_000);

  return (
    <div>
      
      <div className="stats w-full bg-black relative">
        <div className="stats-overlay w-full h-full  bg-opacity-70">
          <div className="flex justify-start lg:justify-center items-center -m-4 text-center gap-8">
            {/* Single Stat */}
            <div className="p-4 text-left">
              <div
              ref={ref}
                className="title-font md:text-3xl text-xl font-bold text-white"
                
              >
                {clients}+
              </div>
              <div className="leading-relaxed text-lg font-semibold text-gray-400">
                Clients
              </div>
            </div>

            <div className="p-4 text-left">
              <div
                className="title-font md:text-3xl text-xl font-bold text-white"
                
              >
                {countries}+
              </div>
              <div className="leading-relaxed text-lg font-semibold text-gray-400">
                Countries
              </div>
            </div>

            <div className="p-4 text-left">
              <div
                className="title-font md:text-3xl text-xl font-bold text-white"
                
              >
                {impressions}+
              </div>
              <div className="leading-relaxed text-lg font-semibold text-gray-400">
                Impressions Generated
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
