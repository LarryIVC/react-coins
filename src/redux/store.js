import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coins/coinsSlice';
import coinDetailReducer from './coins/detailSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
    coin: coinDetailReducer,
  },
});

export default store;
