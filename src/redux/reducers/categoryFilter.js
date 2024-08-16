import { createSlice } from '@reduxjs/toolkit';

const categoryFilter = createSlice({
  name: 'category_filter',
  initialState: {
    filterCategoryKey: 0,
  },
  reducers: {
    setCategoryFilterKey: (state, action) => {
      state.filterCategoryKey = action.payload;
    },
  },
});

export const { setCategoryFilterKey } = categoryFilter.actions;
export default categoryFilter.reducer;