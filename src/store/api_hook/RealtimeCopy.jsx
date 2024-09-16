// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRealtimeCopy = createAsyncThunk(
  'realtimeCopy/fetchRealtimeCopy',
  async () => {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_suggest_topic_popular',
      {
        method: 'POST',
        body: JSON.stringify({
          type: 'room',
          limit: 2,
        }),
        headers: {
          'Content-Type': 'application/json',
          'ptauthorize': 'Basic dGVzdGVyOnRlc3Rlcg==',
        },
      },
    );

    const data = await response.json();
    return data.data;
  },
);

const realtimeCopySlice = createSlice({
  name: 'realtimeCopy',
  initialState: {
    datarealtimeCopy: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRealtimeCopy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRealtimeCopy.fulfilled, (state, action) => {
        state.datarealtimeCopy = action.payload;
        state.loading = false;
      })
      .addCase(fetchRealtimeCopy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default realtimeCopySlice.reducer;
