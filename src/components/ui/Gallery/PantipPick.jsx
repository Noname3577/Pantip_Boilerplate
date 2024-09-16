/* eslint-disable no-undef */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable react-dom/no-missing-button-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
// @ts-nocheck

import { useState } from 'react';

export default function PantipPick({ PantipPick_input }) {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleImageClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div className="py-4">
      <div className=" mx-[3vw] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 ">
        {PantipPick_input
        && PantipPick_input.map((experience, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg hover:bg-[#eeeeee] hover:shadow-xl "
          >
            <img
              src={experience.thumbnail_url || '/unnamed.png'}
              alt={experience.title}
              className="h-64 w-full object-cover"
              onClick={() => handleImageClick(experience)}
            />
            <div className="absolute right-0 top-0 m-4">
              <button
                className="rounded-full bg-[#dddddd] p-2 shadow-md hover:bg-[#ffffff]"
                onClick={() => handleImageClick(experience)}
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: 'block',
                    fill: 'none',
                    height: '14px',
                    width: '14px',
                    stroke: 'currentColor',
                    strokeWidth: '3.42857',
                    overflow: 'visible',
                  }}
                >
                  <path
                    d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
            <a
              href={`https://pantip.com/topic/${experience.topic_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-4">
                <h2 className="mb-2 h-[5vh] overflow-hidden truncate text-xl font-bold">
                  {experience.title}
                </h2>
                <p className="text-[0.8rem] text-gray-700">
                  เจ้าของโพส
                  {' '}
                  {experience.author.name}
                </p>
                <div className="mt-[10px] flex  flex-nowrap text-base">
                  <span className="rounded-[8px] bg-[#ebebeb] p-[5px]">
                    <span>👀</span>
                    เข้าชม :
                    {experience.views_count}
                  </span>
                  <span className="ml-[10px] rounded-[8px] bg-[#ebebeb] p-[5px]">
                    <span>🗨️</span>
                    คอมเม้น :
                    {experience.comments_count}
                  </span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {selectedExperience && (
        <div className="fixed left-0 top-0 z-[100] flex size-full items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-md rounded-lg bg-white p-4">
            <button
              className=" rounded-[20px] p-[10px] hover:bg-[#f7f7f7]"
              onClick={() => setSelectedExperience(null)}
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
            <h1 className="mb-4 text-2xl font-bold">รายละเอียดเพิ่มเติม</h1>
            <div className="flex items-center justify-center">
              <img
                src={selectedExperience.thumbnail_url || '/unnamed.png'}
                alt={selectedExperience.title}
                className="mr-4 size-14 object-cover"
                onClick={() => handleImageClick(experience)}
              />
              <h2 className=" font-bold ">{selectedExperience.title}</h2>
            </div>
            <p className="mb-4">{selectedExperience.details}</p>
            <h1 className="mb-2 font-bold">เจ้าของโพส</h1>
            <div className="flex rounded-[20px] bg-[#dddddd] p-2">
              <img
                src={selectedExperience.author.avatar.small || '/unnamed.png'}
                alt={selectedExperience.title}
                className="mr-4 size-8 rounded-[50px] object-cover"
                onClick={() => handleImageClick(experience)}
              />
              <div>
                <h1>{selectedExperience.author.name}</h1>
              </div>
            </div>
            <div className="mt-3 flex flex-nowrap text-base">
              <span className="ml-[10px] rounded-[8px] bg-[#ebebeb] p-[5px]">
                <span>👀</span>
                เข้าชม :
                {selectedExperience.views_count}
              </span>
              <span className="ml-[15px] rounded-[8px] bg-[#ebebeb] p-[5px]">
                <span>🗨️</span>
                คอมเม้น :
                {selectedExperience.comments_count}
              </span>
              <span className="ml-[15px] rounded-[8px] bg-[#ebebeb] p-[5px]">
                <span>👍</span>
                โหวต :
                {selectedExperience.votes_count}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
