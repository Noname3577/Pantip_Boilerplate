// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTagapi = createAsyncThunk('tagApi/fetchTagapi', async () => {
  const response = await fetch(
    'https://pantip.com/api/community-service/tag/get_all?limit=20&sort_by=hit',
    {
      method: 'GET',
      headers: {
        ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
      },
    },
  );
  const data = await response.json();
  return data;
});

const tagApiSlice = createSlice({
  name: 'tagApi',
  initialState: {
    datatagApi: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTagapi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTagapi.fulfilled, (state, action) => {
        state.datatagApi = action.payload;
        state.loading = false;
      })
      .addCase(fetchTagapi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tagApiSlice.reducer;
