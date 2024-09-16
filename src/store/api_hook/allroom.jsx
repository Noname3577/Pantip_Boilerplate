// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllroom = createAsyncThunk(
  'allroom/fetchAllroom',
  async () => {
    const response = await fetch(
      'https://pantip.com/api/community-service/room/get_all',
      {
        method: 'GET',
        headers: {
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        },
      },
    );
    const data = await response.json();
    return data.data;
  },
);

const allroomSlice = createSlice({
  name: 'allroom',
  initialState: {
    dataallroom: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllroom.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllroom.fulfilled, (state, action) => {
        state.dataallroom = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllroom.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default allroomSlice.reducer;
