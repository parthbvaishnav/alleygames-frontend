
import { createSlice } from "@reduxjs/toolkit";

const aboutusListReducer = createSlice({
  name: "aboutusList",
  initialState: {
    aboutusList: [],
    loading: false,
    error: null,
  },
  reducers: {
    setAboutusList: (state, action) => {
      state.aboutusList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setAboutusList, setLoading, setError } = aboutusListReducer.actions;
export default aboutusListReducer.reducer;
