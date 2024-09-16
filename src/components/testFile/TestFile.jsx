/* eslint-disable react-dom/no-missing-button-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-shorthand-boolean */
/* eslint-disable @next/next/no-img-element */
// @ts-nocheck

import 'swiper/css';
import 'swiper/css/navigation';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TestFile = ({ dataslider }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className=" flex items-center justify-center border-y-2 border-[#cfcfcf59] pt-[10px]  max-[780px]:w-screen max-[780px]:overflow-hidden">
      <div className="relative h-[10vh] w-[90vw] max-[780px]:w-[50rem] ">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={14} // ปรับตามต้องการ
          spaceBetween={1} // ปรับตามต้องการ
          loop={true}
          autoplay={{
            delay: 2500, // ระยะเวลาหน่วงระหว่างการเลื่อน (เป็นมิลลิวินาที)
            disableOnInteraction: false, // อนุญาตให้ autoplay ทำงานต่อแม้ผู้ใช้มีปฏิสัมพันธ์
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
        >
          {dataslider
          && dataslider.map((data, index) => (
            <SwiperSlide
              key={index}
              className="mx-2 flex w-4 flex-col items-center justify-center hover:border-b-2"
            >
              <a
                href={data.link_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={data.room_icon_url}
                  alt={data.name}
                  height={30}
                  width={30}
                  className="invert-[70%] hover:invert"
                />
              </a>
              <div className="h-6 truncate text-center text-[1vw] font-bold text-[#6a6a6a] hover:text-[#000000]">
                {data.name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ปุ่ม prev */}
        <div
          className="absolute left-[-20px] top-6 z-50 -translate-y-1/2 max-[780px]:hidden"
          ref={navigationPrevRef}
        >
          <button className="opopop left-12 z-10 rounded-full bg-white p-1 shadow-md ">
            <ChevronLeft size={18} />
          </button>
        </div>

        {/* ปุ่ม next */}
        <div
          className="absolute right-[-20px] top-6 z-50 -translate-y-1/2 max-[780px]:hidden"
          ref={navigationNextRef}
        >
          <button className="opopop_a right-14 z-10 rounded-full bg-white p-1 shadow-md">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestFile;
