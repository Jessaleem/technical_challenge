import { configureStore } from '@reduxjs/toolkit';
import filter_slice from '../slices/filter_slice';

export const store = configureStore({
  reducer: {
    filter: filter_slice,
  },
});
