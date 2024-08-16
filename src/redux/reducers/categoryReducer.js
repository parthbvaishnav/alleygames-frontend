import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categoryList: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCategoryList, setLoading, setError } = categorySlice.actions;
export default categorySlice.reducer;
