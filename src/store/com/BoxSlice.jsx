import { createSlice } from '@reduxjs/toolkit';

export const boxSlice = createSlice({
  name: 'boxes',
  initialState: {
    activeBox: null,
  },
  reducers: {
    setActiveBox: (state, action) => {
      state.activeBox = action.payload;
    },
  },
});

export const { setActiveBox } = boxSlice.actions;

export default boxSlice.reducer;
