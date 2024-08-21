
import { createSlice } from "@reduxjs/toolkit";

const blogListReducer = createSlice({
  name: "blogList",
  initialState: {
    blogList: [],
    loading: false,
    error: null,
  },
  reducers: {
    setBlogList: (state, action) => {
      state.blogList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setBlogList, setLoading, setError } = blogListReducer.actions;
export default blogListReducer.reducer;
