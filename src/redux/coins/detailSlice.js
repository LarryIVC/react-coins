import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  API_URL, COIN_DET, TOKEN } from './consts';

export const fetchCoinDetail = createAsyncThunk(
  'coin/fetchCoinDetail',
  async (id) => {
    const config = {
      headers: {
        'x-access-token' : TOKEN,
      }
    }
        const response = await fetch(`${API_URL}${COIN_DET}${id}`, config);
    if (response.ok) {
      const dataDetailCoin = await response.json();
      return dataDetailCoin.data.coin;
    }
    throw new Error('Failed to fetch coin data');
  },
);

const initialState = {
  coinData:{},
  isLoading: false,
  error: false,
}

export const coinDetailSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinDetail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCoinDetail.fulfilled, (state, action) => {
        state.coinData = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCoinDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default coinDetailSlice.reducer;