// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRealtime = createAsyncThunk(
  'realtime/fetchRealtime',
  async () => {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_suggest_topic_popular',
      {
        method: 'POST',
        body: JSON.stringify({
          type: 'room',
          limit: 6,
        }),
        headers: {
          'Content-Type': 'application/json',
          'ptauthorize': 'Basic dGVzdGVyOnRlc3Rlcg==',
        },
      },
    );

    const data = await response.json();
    return data;
  },
);

const realtimeSlice = createSlice({
  name: 'realtime',
  initialState: {
    datarealtime: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRealtime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRealtime.fulfilled, (state, action) => {
        state.datarealtime = action.payload;
        state.loading = false;
      })
      .addCase(fetchRealtime.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default realtimeSlice.reducer;
