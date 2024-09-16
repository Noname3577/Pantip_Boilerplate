// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit';

import allroomReducer from './api_hook/allroom';
import highlightReducer from './api_hook/highlightSlice';
import PantipHitzReducer from './api_hook/PantipHitz';
import PantipPickReducer from './api_hook/PantipPick';
import realtimeReducer from './api_hook/Realtime';
import realtimeCopyReducer from './api_hook/RealtimeCopy';
import tagApiReducer from './api_hook/tagApi';
import boxReducer from './com/BoxSlice';
import counterReducer from './com/DataSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      boxes: boxReducer,
      allroom: allroomReducer,
      highlights: highlightReducer,
      tagApi: tagApiReducer,
      realtime: realtimeReducer,
      realtimeCopy: realtimeCopyReducer,
      PantipPick: PantipPickReducer,
      PantipHitz: PantipHitzReducer,
    },
  });
};
