/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @ts-nocheck
import { useState } from 'react';

export default function LanguageAndRegion() {
  const [activeTab, setActiveTab] = useState('th');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* เนื้อหาสำหรับส่วนภาษาและภูมิภาค */}
      <h1 className="mt-8 text-3xl font-bold">ภาษาที่แนะนำ</h1>
      <div className="p-[8px]">
        <div
          className="mt-4 w-40 cursor-pointer rounded-[10px] px-[13px] py-[10px] leading-4 hover:bg-[#f7f7f7]"
          onClick={() => handleTabClick(activeTab == 'th' ? 'en' : 'th')}
        >
          <h1>ไทย</h1>
          <h1>ประเทศไทย</h1>
        </div>
      </div>
      <h1 className="mt-8 text-3xl font-bold">เลือกภาษา</h1>
      <div className="mt-4 flex p-[8px]">
        <div
          className={`${
            activeTab === 'th'
              ? 'mr-4 w-32 cursor-pointer rounded-[10px] border-[3px] border-[#dcdbdb] px-[13px] py-[10px] leading-4 hover:bg-[#f7f7f7] '
              : 'mr-4 w-32 cursor-pointer rounded-[10px] px-[13px] py-[10px] leading-4 hover:bg-[#f7f7f7]'
          }`}
          onClick={() => handleTabClick('th')}
        >
          <h1>ไทย</h1>
          <h1>ประเทศไทย</h1>
        </div>
        {/*
        <div
          className={`${
            activeTab === 'en'
              ? 'mr-4 w-40 cursor-pointer rounded-[10px] border-[3px] border-[#dcdbdb] px-[13px] py-[10px] leading-4 hover:bg-[#f7f7f7] '
              : 'mr-4 w-40 cursor-pointer rounded-[10px] px-[13px] py-[10px] leading-4 hover:bg-[#f7f7f7]'
          }`}
          onClick={() => handleTabClick('en')}
        >
          <h1>English</h1>
          <h1>United Kingdom</h1>
        </div>
        */}
      </div>
    </div>
  );
}
