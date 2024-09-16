/* eslint-disable react-dom/no-missing-button-type */
// @ts-nocheck
import { useState } from 'react';

import Currency from './Currency';
import LanguageAndRegion from './LanguageAndRegion';

export default function Selectortop() {
  const [activeTab, setActiveTab] = useState('language'); // เริ่มต้นด้วยแท็บภาษา

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex space-x-4">
        <button
          className={`py-2 text-xl  font-bold  ${
            activeTab === 'language'
              ? 'border-b-[3px] border-indigo-950 '
              : 'text-[#a09e9e]'
          }`}
          onClick={() => handleTabClick('language')}
        >
          ภาษา
        </button>
        <button
          className={`py-2 text-xl  font-bold ${
            activeTab === 'currency'
              ? 'border-b-[3px] border-indigo-950 text-[#1c1c1c] '
              : 'text-[#a09e9e]'
          }`}
          onClick={() => handleTabClick('currency')}
        >
          ธีม
        </button>
      </div>

      <div>
        {activeTab === 'language' && <LanguageAndRegion />}
        {activeTab === 'currency' && <Currency />}
      </div>
    </div>
  );
}
