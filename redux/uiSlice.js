import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: false, 
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenuOpen: (state, action) => ({ ...state, menuOpen: !state.menuOpen }),
  },
});

export default uiSlice.reducer;

export const { toggleMenuOpen } = uiSlice.actions;
