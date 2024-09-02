
import { createSlice } from "@reduxjs/toolkit";

const catWiseGameReducer = createSlice({
  name: "catWiseGame",
  initialState: {
    catWiseGame: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCatWiseGame: (state, action) => {
      state.catWiseGame = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCatWiseGame, setLoading, setError } = catWiseGameReducer.actions;
export default catWiseGameReducer.reducer;
