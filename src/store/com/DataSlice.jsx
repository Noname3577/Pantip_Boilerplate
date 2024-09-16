/* eslint-disable react-refresh/only-export-components */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  startIndex: 0,
};

const DataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = DataSlice.actions;
export default DataSlice.reducer;
