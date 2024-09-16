// @ts-nocheck
'use client';
// @ts-nocheck
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPantipHitz } from '@/store/api_hook/PantipHitz';
import { fetchPantipPick } from '@/store/api_hook/PantipPick';
import { fetchRealtimeCopy } from '@/store/api_hook/RealtimeCopy';

import PantipPick from '../ui/Gallery/PantipPick';
import Realtimeopen from '../ui/Gallery/Realtimeopen';

function Middlebody() {
  const dispatch = useDispatch();
  const { datarealtimeCopy } = useSelector(state => state.realtimeCopy);
  const { dataPantipPick } = useSelector(state => state.PantipPick);
  const { dataPantipHitz } = useSelector(state => state.PantipHitz);

  useEffect(() => {
    dispatch(fetchRealtimeCopy());
    dispatch(fetchPantipPick());
    dispatch(fetchPantipHitz());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div className="ml-[4vw] mt-[2vw]">
          <h1 className="text-[2.2rem] font-bold">Pantip Realtime</h1>
          <h1 className="text-[1.1rem]">
            กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที
          </h1>
        </div>
        <div>
          <Realtimeopen DataTest={datarealtimeCopy} />
        </div>
      </div>
      <div>
        <div className="ml-[4vw] mt-[2vw]">
          <h1 className="text-[2.2rem] font-bold">Pantip Pick</h1>
          <h1 className="text-[1.1rem]">
            กระทู้คุณภาพคัดเลือกโดยทีมงาน Pantip
          </h1>
        </div>
        <div>
          <PantipPick PantipPick_input={dataPantipPick} />
        </div>
      </div>
      <div>
        <div className="ml-[4vw] mt-[2vw]">
          <h1 className="text-[2.2rem] font-bold">Pantip Hitz</h1>
          <h1 className="text-[1.1rem]">กระทู้ฮิตติดเทรนด์ทุก 10 นาที</h1>
        </div>
        <div>
          <PantipPick PantipPick_input={dataPantipHitz} />
        </div>
      </div>
    </div>
  );
}

export default Middlebody;
