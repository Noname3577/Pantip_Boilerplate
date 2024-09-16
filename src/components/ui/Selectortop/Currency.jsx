/* eslint-disable eqeqeq */
/* eslint-disable react-dom/no-missing-button-type */
/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import { useState } from 'react';

export default function Currency() {
  const [activeTab, setActiveTab] = useState('theme_a');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <h1 className="mt-8 text-3xl font-bold">ธีมหน้าเว็บ</h1>
      <div className="mt-5">
        <div>
          <button
            className={`${
              activeTab === 'theme_a'
                ? 'mr-4 w-auto cursor-pointer rounded-[10px] border-[3px] border-[#dcdbdb] px-[13px] py-[10px] leading-4 hover:bg-[#f7f7f7] '
                : 'mr-4 w-32 cursor-pointer rounded-[10px] px-[13px] py-[10px] leading-4 hover:bg-[#f7f7f7]'
            }`}
            onClick={() => handleTabClick('theme_a')}
          >
            <img src="/theme_a.png" alt="color_theme" width={350} height={50} />
            <h1 className="mt-2">
              {' '}
              {activeTab == 'theme_a' ? '' : ''}
              Theme Color Airbnb
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}
