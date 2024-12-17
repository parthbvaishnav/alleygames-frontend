
import { createSlice } from "@reduxjs/toolkit";

const adsManagerReducer = createSlice({
  name: "adsManager",
  initialState: {
    adsManager: [],
    loading: false,
    error: null,
  },
  reducers: {
    setAdsManager: (state, action) => {
      state.adsManager = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setAdsManager, setLoading, setError } = adsManagerReducer.actions;
export default adsManagerReducer.reducer;
