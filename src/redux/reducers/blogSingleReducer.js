
import { createSlice } from "@reduxjs/toolkit";

const blogSingleReducer = createSlice({
  name: "blogSingle",
  initialState: {
    blogSingle: [],
    loading: false,
    error: null,
  },
  reducers: {
    setBlogSingle: (state, action) => {
      state.blogSingle = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setBlogSingle, setLoading, setError } = blogSingleReducer.actions;
export default blogSingleReducer.reducer;
