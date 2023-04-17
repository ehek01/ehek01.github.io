// reducers/videoChat.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomId: null,
  // ... 기타 필요한 상태
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    },
    // ... 기타 필요한 액션
  },
});

export const { setRoomId, setUserName } = roomSlice.actions;

export default roomSlice.reducer;
