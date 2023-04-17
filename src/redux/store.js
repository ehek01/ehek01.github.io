// store.js
import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './reducers/video/room';
import MainUserReducer from './reducers/video/mainUser';

export const store = configureStore({
  reducer: {
    room: roomReducer,
    mainUser: MainUserReducer,
  },
});

