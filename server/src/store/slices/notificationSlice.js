// store/slices/notificationSlice.js
// Redux slice for notifications system

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [], // { id, message, type, seen }
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications.push({
        id: Date.now(),
        ...action.payload, // { message, type }
        seen: false,
      });
    },
    markAsSeen: (state, action) => {
      const notification = state.notifications.find((n) => n.id === action.payload);
      if (notification) notification.seen = true;
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter((n) => n.id !== action.payload);
    },
  },
});

export const { addNotification, markAsSeen, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;