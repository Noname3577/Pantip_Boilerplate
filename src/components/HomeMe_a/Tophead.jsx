// @ts-nocheck
'use client';
// @ts-nocheck
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllroom } from '@/store/api_hook/allroom';

import Header_a from '../header_a/Header_a';
import TestFile from '../testFile/TestFile';
import SearchMobile from '../ui/SearchMobile/SearchMobile';

function Tophead() {
  const dispatch = useDispatch();
  const { dataallroom } = useSelector(state => state.allroom);

  useEffect(() => {
    dispatch(fetchAllroom());
  }, [dispatch]);

  return (
    <div>

      <div className="max-[780px]:hidden">
        <div>
          <Header_a />
        </div>
      </div>
      <div className=" hidden max-[780px]:flex">
        <div>
          <SearchMobile />
        </div>
      </div>
      <div>
        <TestFile dataslider={dataallroom} />
      </div>

    </div>
  );
}

export default Tophead;
