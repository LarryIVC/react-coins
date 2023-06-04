import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ALL_COINS, API_URL, TOKEN } from './consts';

export const fetchCoins = createAsyncThunk(
  'coins/fetchCoinsData',
  async () => {
    const config = {
      headers: {
        'x-access-token': TOKEN,
      },
    };
    const response = await fetch(API_URL + ALL_COINS, config);
    if (response.ok) {
      const dataGlobal = await response.json();
      return dataGlobal.data.coins;
    }
    throw new Error('Failed to fetch coins data');
  },
);

const initialState = {
  coinsData: [],
  isLoading: false,
  error: false,
};

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.coinsData = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default coinsSlice.reducer;
