import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import { saveState, loadState } from '../utils';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  preloadedState,
  devTools: true,
});

store.subscribe(() => {
  const { ui } = store.getState();
  saveState({ ui });
});

export default store;
