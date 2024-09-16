/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
// @ts-nocheck

'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllroom } from '../../store/api_hook/allroom';
import { fetchHighlights } from '../../store/api_hook/highlightSlice';
import { fetchRealtime } from '../../store/api_hook/Realtime';
import { fetchTagapi } from '../../store/api_hook/tagApi';
import { setActiveBox } from '../../store/com/BoxSlice';
import SearchBar from '../ui/Search/Searchdata';

function Header_b() {
  const dispatch = useDispatch();
  const activeBox = useSelector(state => state.boxes.activeBox);
  const [activeButton, setActiveButton] = useState(0);

  const { datahighlights, loading, error } = useSelector(
    state => state.highlights,
  );

  const { dataallroom } = useSelector(state => state.allroom);

  const { datatagApi } = useSelector(state => state.tagApi);

  const { datarealtime } = useSelector(state => state.realtime);

  const totalHighlights
    = datahighlights && datahighlights.data ? datahighlights.data.length : 0;

  const totalallroom = dataallroom && dataallroom ? dataallroom.length : 0;

  const totaltagApi = datatagApi ? datatagApi.data.length : 0;

  const handleClick = (box, buttonNumber) => {
    dispatch(setActiveBox(box === activeBox ? null : box));
    setActiveButton(buttonNumber);
    if (activeBox === box) {
      setActiveButton(0);
    }
  };

  useEffect(() => {
    dispatch(fetchHighlights());
    dispatch(fetchAllroom());
    dispatch(fetchTagapi());
    dispatch(fetchRealtime());
  }, [dispatch]);

  if (loading) {
    return <p></p>;
  }
  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-center">
        <div className="flex flex-nowrap items-center justify-center rounded-[50px] border-2 border-[#dddddd] border-[solid] [box-shadow:0.9px_3px_1.9px_rgba(0,_0,_0,_0.011),_1.6px_5.4px_4.6px_rgba(0,_0,_0,_0.021),_2.2px_7.4px_8.6px_rgba(0,_0,_0,_0.03),_2.9px_9.5px_15.4px_rgba(0,_0,_0,_0.04)]">
          <div
            className={`cursor-pointer rounded-l-[50px] rounded-r-none border-r bg-[#ffffff] py-[15px] pl-[30px] pr-36 leading-[1.1] hover:rounded-l-[50px] hover:rounded-r-none hover:bg-[#dddddd] ${
              activeButton === 1
                ? 'relative rounded-l-[50px] rounded-r-none bg-[#fdfdfd] [box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)] hover:!bg-[#ffffff]'
                : activeButton === 0
                  ? ''
                  : 'bg-[#8c8c8c57]'
            }`}
            onClick={() => handleClick(1, 1)}
          >
            <h1 className="mb-[2px] font-bold">Highlight</h1>
            <h1 className="text-[0.8rem]">กิจกรรมพันทิป</h1>
          </div>
          {activeBox === 1 && (
            <div
              onClick={() => handleClick(0, 0)}
              className=" tap_a absolute top-[10.5vw] z-30 flex h-[72vh] w-auto translate-y-[10px] flex-col overflow-auto rounded-[32px] bg-[white] p-[10px] text-[black] [box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)] [transition:transform_0.3s_ease]"
            >
              <div className="ml-[0.8rem] text-[2rem] font-bold">
                Highlights :
                {' '}
                {totalHighlights}
              </div>
              <div className="flex w-[50vw] flex-wrap items-center justify-center">
                {datahighlights.data.map((item, index) => (
                  <div
                    key={index}
                    className="m-[10px] flex w-40 flex-col items-center justify-center rounded-[20px] bg-[#ebebeb] p-[10px] hover:bg-[#dddddd] hover:[box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)]"
                  >
                    <a
                      href={item.post_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: '150px' }}
                        src={item.image_url[1]}
                        alt={`Slide ${index}`}
                        className="rounded-2xl object-cover"
                      />
                    </a>
                    <h1 className="mt-[10px] text-[0.8rem]">{item.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div
            className={`cursor-pointer border-r bg-[#ffffff] py-[15px] pl-[20px] pr-8 leading-[1.1] hover:bg-[#dddddd] ${
              activeButton === 2
                ? 'relative bg-[#fdfdfd] [box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)] hover:!bg-[#ffffff]'
                : activeButton === 0
                  ? ''
                  : 'bg-[#8c8c8c57]'
            }`}
            onClick={() => handleClick(2, 2)}
          >
            <h1 className="mb-[2px] font-bold">Community</h1>
            <h1 className="text-[0.8rem]">ห้อง</h1>
          </div>
          {activeBox === 2 && (
            <div
              onClick={() => handleClick(0, 0)}
              className=" tap_a absolute top-[10.5vw]  z-30 flex h-[72vh] w-auto translate-y-[10px] flex-col overflow-auto rounded-[32px] bg-[white] p-[10px] text-[black] [box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)] [transition:transform_0.3s_ease]"
            >
              <div className="ml-[0.8rem] text-[2rem] font-bold">
                ห้องล่าสุด :
                {' '}
                {totalallroom}
              </div>
              <div className="flex w-[50vw] flex-wrap items-center justify-center">
                {dataallroom.map((itemroom, index) => (
                  <div
                    key={index}
                    className="m-[10px] flex flex-col items-center justify-center bg-[#ebebeb] p-[10px] text-center hover:bg-[#dddddd] hover:[box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)]"
                  >
                    <a
                      href={itemroom.link_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={itemroom.room_icon_url}
                        alt={itemroom.name}
                        width={50}
                        height={50}
                        className="rounded-[5px] bg-[black]"
                      />
                    </a>
                    <h1 className="mt-[10px] text-[0.8rem] font-bold">
                      {itemroom.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div
            className={`cursor-pointer border-r bg-[#ffffff] py-[15px] pl-[20px] pr-8 leading-[1.1] hover:bg-[#dddddd] ${
              activeButton === 3
                ? 'relative bg-[#fdfdfd] [box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)] hover:!bg-[#ffffff]'
                : activeButton === 0
                  ? ''
                  : 'bg-[#8c8c8c57]'
            }`}
            onClick={() => handleClick(3, 3)}
          >
            <h1 className="mb-[2px] font-bold">Tags</h1>
            <h1 className="text-[0.8rem]">แท็ก</h1>
          </div>
          {activeBox === 3 && (
            <div
              onClick={() => handleClick(0, 0)}
              className=" tap_a absolute top-[10.5vw] z-30 flex h-[72vh] w-auto translate-y-[10px] flex-col overflow-auto rounded-[32px] bg-[white] p-[10px] text-[black] [box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)] [transition:transform_0.3s_ease]"
            >
              <div className="ml-[0.8rem] text-[2rem] font-bold">
                แท็กล่าสุด :
                {' '}
                {totaltagApi}
              </div>
              <div className="flex w-[50vw] flex-wrap items-center justify-center">
                {datatagApi.data.map((item, index) => (
                  <div
                    key={index}
                    className="m-[10px] flex flex-col items-center justify-center bg-[#ebebeb] p-[10px] text-center hover:bg-[#dddddd] hover:[box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)]"
                  >
                    <a
                      href={item.link_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/tag.png"
                        alt="tag"
                        width={20}
                        height={18}
                        className="rounded-[5px] bg-[#494949]"
                      />
                      <h1>{item.name}</h1>
                      <h2>
                        {item.follow_count}
                        {' '}
                        ผู้ติดตาม
                        {' '}
                      </h2>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeBox === 4 && (
            <div
              className=" tap_a absolute top-[10.5vw] z-30 flex h-[72vh] w-auto translate-y-[10px] flex-col overflow-auto rounded-[32px] bg-[white] p-[10px] text-[black] [box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)] [transition:transform_0.3s_ease]"
            >
              <SearchBar userdata={datarealtime} />
            </div>
          )}
          <div
            className={`flex cursor-pointer items-center rounded-l-none rounded-r-[50px] bg-[#ffffff] py-[13px] pl-[10px] pr-[5px] leading-[1.1] hover:bg-[#dddddd] ${
              activeButton === 4
                ? 'relative bg-[#fdfdfd] [box-shadow:0px_1.9px_2.2px_rgba(0,_0,_0,_0.028),_0px_4.6px_5.3px_rgba(0,_0,_0,_0.04),_0px_8.6px_10px_rgba(0,_0,_0,_0.05),_0px_15.4px_17.9px_rgba(0,_0,_0,_0.06)]   hover:rounded-l-none hover:rounded-r-[50px] hover:!bg-[#ffffff]'
                : activeButton === 0
                  ? ''
                  : 'bg-[#8c8c8c57]'
            }`}
            onClick={() => handleClick(4, 4)}
          >
            <div>
              <h1 className="mb-[2px] font-bold">New</h1>
              <h1 className="text-[0.8rem]">กระทู้ล่าสุด</h1>
            </div>
            <div className="ml-24 rounded-[50px] bg-[#ff385c] p-[15px]">
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
        </div>
      </div>
    </div>
  );
}

export default Header_b;
