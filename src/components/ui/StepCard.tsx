import React from "react";

interface StepCardProps {
  item: {
    number: string;
    step: string;
    description: string;
  };
}

const StepCard = ({ item }: StepCardProps) => {
  return (
    <div className="w-full relative">
      <div className="absolute z-0 text-sky-200 text-6xl md:text-7xl -top-8 font-bold md:-top-12 md:-left-8">
        {item.number}
      </div>
      <div className="p-6 py-8 flex flex-col gap-6 justify-center items-start bg-gray-200 bg-opacity-10 rounded-2xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white">{item.step}</h2>
        <div className="text-lg md:text-xl text-gray-400">{item.description}</div>
      </div>
    </div>
  );
};

export default StepCard;
