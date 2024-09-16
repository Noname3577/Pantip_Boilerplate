/* eslint-disable react-dom/no-missing-button-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @ts-nocheck
import React, { useState } from 'react';

import ExpandableBox from './ExpandableBox';

const SearchMobile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className=" mx-[5vw] my-[2vw] flex w-[89vw] items-center justify-start rounded-full bg-white p-2 shadow-md">
      <div onClick={togglePopup} className="flex flex-row">
        <div className="mx-2 flex items-center justify-center rounded-[50px] bg-[#ff385c] p-[15px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={{
              fill: 'none',
              height: 14,
              width: 14,
              stroke: 'white',
              strokeWidth: 4,
            }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            >
            </path>
          </svg>
        </div>
        <div className=" flex flex-col">
          <h1 className="w-[30vw] truncate ">มีโพสใหม่ๆ ทุก 10 นาที</h1>
          <h1 className=" w-[30vw] truncate  text-[1.5vw] text-[#6a6a6a]">
            Pantip • Highlight • Realtime
            {' '}
          </h1>
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed left-0 top-0 z-[100] flex size-full flex-col  bg-[#f7f7f7]">
          <div className="m-4">
            <div className="mb-2 flex items-center justify-between">
              <button
                className=" w-[2.2rem] rounded-[20px] border-2 bg-white p-[10px]"
                onClick={togglePopup}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: 'block',
                    fill: 'none',
                    height: '16px',
                    width: '16px',
                    stroke: 'currentColor',
                    strokeWidth: '3',
                    overflow: 'visible',
                  }}
                >
                  <path d="m6 6 20 20M26 6 6 26" />
                </svg>
              </button>
              <div className="mr-[25vw] flex items-center justify-center max-[500px]:mr-0">
                <a
                  href="https://pantip.com/activities"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" rounded-[30px] px-[16px] py-[10px] text-[1rem] hover:bg-[#dddddd78] max-[500px]:text-[4vw]">
                    กิจกรรมพันทิป
                  </span>
                </a>
                <a
                  href="https://pantip.com/point"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="rounded-[30px] px-[16px] py-[10px] text-[1rem] hover:bg-[#dddddd78] max-[500px]:text-[4vw]">
                    แลกพอยต์
                  </span>
                </a>
              </div>
            </div>
            <div className=" max-w-md rounded-lg">
              <div>
                <ExpandableBox />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchMobile;
