/* eslint-disable react-refresh/only-export-components */
// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPantipHitz = createAsyncThunk(
  'PantipHitz/fetchPantipHitz',
  async () => {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_pantip_now?limit=8',
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

const PantipHitzSlice = createSlice({
  name: 'PantipHitz',
  initialState: {
    dataPantipHitz: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPantipHitz.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPantipHitz.fulfilled, (state, action) => {
        state.dataPantipHitz = action.payload;
        state.loading = false;
      })
      .addCase(fetchPantipHitz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default PantipHitzSlice.reducer;
