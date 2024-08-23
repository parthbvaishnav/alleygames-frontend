import { createSlice } from "@reduxjs/toolkit";

const similarGameSlice = createSlice({
  name: "similarGame",
  initialState: {
    similarGameList: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSimilarGameList: (state, action) => {
      state.similarGameList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSimilarGameList, setLoading, setError } = similarGameSlice.actions;
export default similarGameSlice.reducer;
