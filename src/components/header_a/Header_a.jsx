/* eslint-disable react-dom/no-unsafe-target-blank */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @ts-nocheck

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import useScroll from '../../store/com/useScroll';
import Selectortop from '../ui/Selectortop/Selectortop';
import Header_b from './Header_b';

function Header_a() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [Sticky, setSticky] = useState(20);

  const [scrollY, scrollDirection] = useScroll(20);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const togglePopup = () => {
    setIsPopup(!isPopup);
  };

  const toggleselectTop = () => {
    setSticky(1000);
  };

  useEffect(() => {
    // ตรวจสอบทิศทางการเลื่อน
    if (scrollDirection === 'up') {
      // เลื่อนลง ให้ซ่อนกล่อง
      setSticky(20);
    } else if (scrollDirection === 'down') {
      setSticky(20);
    }
  }, [scrollDirection]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between px-[5vw] py-[16px] text-[#222222]">
        <div>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logo-header.png"
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </a>
        </div>
        {scrollY >= Sticky
          ? (
              <div>
                <div className=" ml-[7vw] flex items-center justify-center rounded-[30px] transition-all duration-100 ease-in-out hover:[box-shadow:0.9px_3px_1.9px_rgba(0,_0,_0,_0.011),_1.6px_5.4px_4.6px_rgba(0,_0,_0,_0.021),_2.2px_7.4px_8.6px_rgba(0,_0,_0,_0.03),_2.9px_9.5px_15.4px_rgba(0,_0,_0,_0.04)] sm:ml-0">
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-[50px] border border-[#dddddd] p-[8px]"
                    onClick={toggleselectTop}
                  >
                    <span className="border-r-2 px-[16px]">
                      Highlight
                    </span>
                    <span className="border-r-2 px-[16px]">Realtime</span>
                    <span className="px-[16px]">Pick</span>
                    <div className="pl-[16px]">
                      <div className="rounded-[50px] bg-[#ff385c] p-[10px]">
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
                    </div>
                  </button>
                </div>
              </div>
            )
          : (
              <div
                className={`ml-[7vw] transition-all duration-1000 ease-in-out${
                  scrollY >= Sticky ? ' -translate-y-8 opacity-0' : ''
                } `}
              >
                <a
                  href="https://pantip.com/activities"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" rounded-[30px] px-[16px] py-[10px] text-[1rem] hover:bg-[#dddddd78]">
                    กิจกรรมพันทิป
                  </span>
                </a>
                <a
                  href="https://pantip.com/point"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="rounded-[30px] px-[16px] py-[10px] text-[1rem] hover:bg-[#dddddd78]">
                    แลกพอยต์
                  </span>
                </a>
              </div>
            )}
        <div>
          <ul className="flex flex-wrap items-center">
            <li className="rounded-[30px] p-[12px]">
              <a
                href="https://pantip.com/login?redirect=Zm9ydW0vbmV3X3RvcGlj&pos=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className=" rounded-[30px] px-[16px] py-[10px] text-[1.4vw] hover:bg-[#dddddd78]">
                  ตั้งกระทู้
                </span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="cursor-pointer rounded-[30px] border-[none] bg-transparent p-[12px] hover:bg-[#dddddd78]"
                onClick={togglePopup}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: 'block',
                    height: '16px',
                    width: '16px',
                    fill: 'currentColor',
                    stroke: '#6a6a6a',
                  }}
                >
                  <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
                </svg>
              </button>
              {isPopup && (
                <div
                  className="fixed inset-0 z-[200] size-full overflow-y-auto bg-[#222222] bg-opacity-50"
                  onClick={togglePopup}
                >
                  <div
                    className="relative top-20 mx-auto w-[60vw] rounded-md border bg-white p-2 shadow-lg"
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={togglePopup}
                      className="rounded-[20px] p-[10px] hover:bg-[#f7f7f7]"
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
                    <h1>
                      <Selectortop />
                    </h1>
                  </div>
                </div>
              )}
            </li>
            <li
              className="ml-[5px] flex flex-wrap items-center rounded-[30px] border-2 border-[#dddddd] border-[solid] py-[6px] pr-[10px] [transition:all_ease-in-out] hover:[box-shadow:0.9px_3px_1.9px_rgba(0,_0,_0,_0.011),_1.6px_5.4px_4.6px_rgba(0,_0,_0,_0.021),_2.2px_7.4px_8.6px_rgba(0,_0,_0,_0.03),_2.9px_9.5px_15.4px_rgba(0,_0,_0,_0.04)]"
              onClick={toggleDropdown}
            >
              <span className="pb-[9px] pl-[15px] pr-[8px] pt-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: 'block',
                    fill: 'none',
                    height: '15px',
                    width: '15px',
                    stroke: '#6a6a6a',
                    strokeWidth: '3',
                    overflow: 'visible',
                  }}
                >
                  <g fill="none">
                    <path d="M2 16h28M2 24h28M2 8h28"></path>
                  </g>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: 'block',
                    height: '32px',
                    width: '32px',
                    fill: '#6a6a6a',
                    stroke: '#6a6a6a',
                  }}
                >
                  <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
                </svg>
              </span>
              <div>
                {isOpen && (
                  <div className="w-50 absolute right-[4.5rem] top-14 z-50 mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="https://pantip.com/login?redirect=aHR0cHM6Ly9wYW50aXAuY29tL2hvbWUvcGljaw=="
                        className="mb-2 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        target="_blank"
                      >
                        เข้าสู่ระบบ / สมัครสมาชิก
                      </a>
                      <hr />
                      <a
                        href="https://pantip.com/about/contact"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        target="_blank"
                      >
                        ติดต่อทีมงาน Pantip
                      </a>
                      <a
                        href="https://pantip.com/app"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        target="_blank"
                      >
                        Download App Pantip
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={` transition-all duration-1000 ease-in-out ${
          scrollY >= Sticky ? 'absolute left-[23vw] -translate-y-16' : ''
        } `}
      >
        <div className={`${scrollY >= Sticky ? 'hidden' : ''}`}>
          <Header_b />
        </div>
      </div>
    </div>
  );
}

export default Header_a;
