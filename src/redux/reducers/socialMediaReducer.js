
import { createSlice } from "@reduxjs/toolkit";

const socialMediaReducer = createSlice({
  name: "socialMedia",
  initialState: {
    socialMedia: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSocialMedia: (state, action) => {
      state.socialMedia = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSocialMedia, setLoading, setError } = socialMediaReducer.actions;
export default socialMediaReducer.reducer;
