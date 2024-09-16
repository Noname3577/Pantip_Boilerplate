/* eslint-disable react-refresh/only-export-components */
// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPantipPick = createAsyncThunk(
  'PantipPick/fetchPantipPick',
  async () => {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_pantip_pick?limit=8',
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

const PantipPickSlice = createSlice({
  name: 'PantipPick',
  initialState: {
    dataPantipPick: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPantipPick.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPantipPick.fulfilled, (state, action) => {
        state.dataPantipPick = action.payload;
        state.loading = false;
      })
      .addCase(fetchPantipPick.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default PantipPickSlice.reducer;
