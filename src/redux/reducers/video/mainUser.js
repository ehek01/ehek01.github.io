import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainUserId: null,
};

const mainUserSlice = createSlice({
  name: 'mainUser',
  initialState,
  reducers: {
    setMainUser: (state, action) => {
      const { mainUserId, onlyNotExist } = action.payload;
      if (onlyNotExist && state.mainUserId) {
        return;
      }
      state.mainUserId = mainUserId;
    },
  },
});

export const { setMainUser } = mainUserSlice.actions;

export default mainUserSlice.reducer;
