// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchHighlights = createAsyncThunk(
  'highlights/fetchHighlights',
  async () => {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_highlight',
      {
        method: 'GET',
        headers: {
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        },
      },
    );
    const data = await response.json();
    return data;
  },
);

const highlightSlice = createSlice({
  name: 'highlights',
  initialState: {
    datahighlights: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHighlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHighlights.fulfilled, (state, action) => {
        state.datahighlights = action.payload;
        state.loading = false;
      })
      .addCase(fetchHighlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default highlightSlice.reducer;
