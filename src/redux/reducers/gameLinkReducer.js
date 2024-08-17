import { createSlice } from '@reduxjs/toolkit';

const gameLinkReducer = createSlice({
  name: 'gameLink',
  initialState: {
    gameLinkKey: 'All',
  },
  reducers: {
    setGameLinkKey: (state, action) => {
      state.gameLinkKey = action.payload;
    },
  },
});

export const { setGameLinkKey } = gameLinkReducer.actions;
export default gameLinkReducer.reducer;