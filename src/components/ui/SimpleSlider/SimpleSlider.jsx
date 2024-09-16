/* eslint-disable react/no-array-index-key */
/* eslint-disable react-dom/no-missing-button-type */
/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const SimpleSlider = ({ dataslider }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const newPosition
      = direction === 'left'
        ? Math.max(0, scrollPosition - 100)
        : Math.min((dataslider.length - 16.9) * 100, scrollPosition + 100);
    setScrollPosition(newPosition);
  };

  return (
    <div className="flex items-center justify-center border-y-2 border-[#cfcfcf59] py-[5px]">
      <div className="flex w-[88vw] items-center justify-center ">
        <button
          onClick={() => handleScroll('left')}
          className="opopop left-12 z-10 rounded-full bg-white p-1 shadow-md "
          disabled={scrollPosition === 0}
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {dataslider
            && dataslider.map((item, index) => (
              <div
                key={index}
                className="mx-2 flex w-16 flex-col items-center justify-center hover:border-b-2 "
              >
                <a
                  href={item.link_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.room_icon_url}
                    alt={item.name}
                    height={30}
                    width={30}
                    className="invert-[70%] hover:invert"
                  />
                </a>
                <div className="text-center text-xs font-bold text-[#6a6a6a] hover:text-[#000000]">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => handleScroll('right')}
          className="opopop_a right-14 z-10 rounded-full bg-white p-1 shadow-md"
          disabled={
            scrollPosition >= (dataslider && dataslider.length - 6) * 100
          }
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default SimpleSlider;
