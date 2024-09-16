/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fetchAllroom } from '../../../store/api_hook/allroom';
import { fetchHighlights } from '../../../store/api_hook/highlightSlice';
import { fetchTagapi } from '../../../store/api_hook/tagApi';

const ExpandableBox = () => {
  const [isExpandedone, setIsExpandedone] = useState(false);
  const [isExpandedtwo, setIsExpandedtwo] = useState(false);
  const [isExpandedthree, setIsExpandedthree] = useState(false);

  const dispatch = useDispatch();

  const { datahighlights } = useSelector(state => state.highlights);
  const { dataallroom } = useSelector(state => state.allroom);
  const { datatagApi } = useSelector(state => state.tagApi);

  useEffect(() => {
    dispatch(fetchHighlights());
    dispatch(fetchAllroom());
    dispatch(fetchTagapi());
  }, [dispatch]);

  return (
    <div>
      <div className=" mb-2 w-[95vw] overflow-auto rounded-lg border bg-white p-4 transition-all duration-300 ease-in-out">
        <h2
          className="flex cursor-pointer items-center justify-between"
          onClick={() => setIsExpandedone(!isExpandedone)}
        >
          <span>Highlight</span>
          <span className="text-[0.8rem]">กิจกรรมพันทิป</span>
        </h2>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpandedone ? '' : 'max-h-0'
          }`}
        >
          <div className="mt-2">
            <div className="relative w-[45rem]">
              <Swiper
                modules={[Virtual]}
                spaceBetween={50}
                slidesPerView={3}
                virtual
              >
                {datahighlights
                && datahighlights.data.map((item, index) => (
                  <SwiperSlide key={index} virtualIndex={index}>
                    <div className="m-[10px] flex size-40 flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#ebebeb] p-[10px] hover:bg-[#dddddd] hover:[box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)]">
                      <a
                        href={item.post_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          style={{ width: '150px' }}
                          src={item.image_url[1]}
                          alt={`Slide ${index}`}
                          className="rounded-[15px] object-cover"
                        />
                      </a>
                      <h1 className="mt-[10px] text-[0.5rem]">{item.name}</h1>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-2 w-[95vw] rounded-lg border bg-white p-4 transition-all duration-300 ease-in-out">
        <h2
          className="flex cursor-pointer items-center justify-between"
          onClick={() => setIsExpandedtwo(!isExpandedtwo)}
        >
          <span>Community</span>
          <span className="text-[0.8rem]">ห้องต่างๆ</span>
        </h2>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpandedtwo ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="mt-2">
            <div className="relative w-[45rem]">
              <Swiper
                modules={[Virtual]}
                spaceBetween={40}
                slidesPerView={5}
                virtual
              >
                {dataallroom
                && dataallroom.map((item, index) => (
                  <SwiperSlide key={index} virtualIndex={index}>
                    <div className="m-[10px] flex h-24 w-20 flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#ebebeb]  hover:bg-[#dddddd] hover:[box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)]">
                      <a
                        href={item.link_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={item.room_icon_url}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="rounded-[5px] bg-[black]"
                        />
                      </a>
                      <h1 className="mt-[10px] text-[0.8rem] font-bold">
                        {item.name}
                      </h1>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-2 w-[95vw] rounded-lg border bg-white p-4 transition-all duration-300 ease-in-out">
        <h2
          className="flex cursor-pointer items-center justify-between"
          onClick={() => setIsExpandedthree(!isExpandedthree)}
        >
          <span>Tags</span>
          <span className="text-[0.8rem]">แท็กต่างๆ</span>
        </h2>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpandedthree ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="mt-2">
            <div className="relative w-[45rem]">
              <Swiper
                modules={[Virtual]}
                spaceBetween={40}
                slidesPerView={4}
                virtual
              >
                {datatagApi
                && datatagApi.data.map((item, index) => (
                  <SwiperSlide key={index} virtualIndex={index}>
                    <div className="m-[10px] flex size-24 flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#ebebeb] hover:bg-[#dddddd]  hover:[box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)]">
                      <a
                        href={item.link_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-items-center"
                      >
                        <img
                          src="/tag.png"
                          alt="tag"
                          width={20}
                          height={18}
                          className="rounded-[5px] bg-[#494949]"
                        />
                        <h1 className="mt-2 truncate text-[0.7rem] ">
                          {item.name}
                        </h1>
                        <h2 className="text-[0.5rem]">
                          {item.follow_count}
                          {' '}
                          ผู้ติดตาม
                          {' '}
                        </h2>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableBox;
