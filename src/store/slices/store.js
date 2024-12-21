
// store/store.js
// Redux store setup

import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import notificationReducer from './slices/notificationSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    notifications: notificationReducer,
  },
});

export default store;
