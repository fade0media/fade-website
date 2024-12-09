import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps {
  slides: React.ReactNode[]; // Accept an array of React nodes (can be components or any other content)
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden flex flex-col justify-center items-center w-full">
      <div
        className={`flex transition ease-out duration-700`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((content, index) => (
          <div key={index} className="w-full flex-shrink-0 flex justify-center transition ease-out duration-700">
            {" "}
            
            {content}
          </div>
        ))}
      </div>

      <div className="py-4 h-full w-full sm:w-3/4 lg:w-1/2 justify-center gap-4 items-center flex text-white text-3xl">
        <button onClick={previousSlide} className="bg-white p-2 rounded-full">
          <ArrowLeft className="text-black w-5 h-5" />
        </button>
        <button onClick={nextSlide} className="bg-white p-2 rounded-full">
          <ArrowRight className="text-black w-5 h-5" />
        </button>
      </div>

      <div className="py-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            onClick={() => {
              setCurrent(i);
            }}
            key={"circle" + i}
            className={`rounded-full w-2 h-2 cursor-pointer ${
              i === current ? "bg-sky-200" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}