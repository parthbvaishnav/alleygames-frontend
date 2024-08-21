import { createSlice } from "@reduxjs/toolkit";

const singleGameSlice = createSlice({
  name: "singleGame",
  initialState: {
    singleGameList: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSingleGameList: (state, action) => {
      state.singleGameList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSingleGameList, setLoading, setError } = singleGameSlice.actions;
export default singleGameSlice.reducer;
