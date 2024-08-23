import { createSlice } from '@reduxjs/toolkit';

const filterReducer = createSlice({
  name: 'filter',
  initialState: {
    filterKey: '0',
  },
  reducers: {
    setFilterKey: (state, action) => {
      state.filterKey = action.payload;
    },
  },
});

export const { setFilterKey } = filterReducer.actions;
export default filterReducer.reducer;