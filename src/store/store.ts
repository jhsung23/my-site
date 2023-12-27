import { configureStore } from '@reduxjs/toolkit';

import menuSlice from '@/store/features/menu/menuSlice';

export const makeStore = () => {
  return configureStore({
    reducer: menuSlice.reducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
