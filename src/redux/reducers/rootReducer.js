import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "games",
  initialState: {
    gameList: [],
    loading: false,
    error: null,
  },
  reducers: {
    setGameList: (state, action) => {
      state.gameList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setGameList, setLoading, setError } = gameSlice.actions;
export default gameSlice.reducer;
