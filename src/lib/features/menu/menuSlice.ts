import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MenuInitialState {
  isOpen: boolean;
}

const menuInitialState: MenuInitialState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: 'menuSlice',
  initialState: menuInitialState,
  reducers: {
    setIsOpen: (state, { payload }: PayloadAction<MenuInitialState['isOpen']>) => {
      state.isOpen = payload;
    },
  },
});

export const { setIsOpen } = menuSlice.actions;
export default menuSlice;
