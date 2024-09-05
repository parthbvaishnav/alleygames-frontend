
import { createSlice } from "@reduxjs/toolkit";

const privacyPolicyListReducer = createSlice({
  name: "privacyPolicyList",
  initialState: {
    privacyPolicyList: [],
    loading: false,
    error: null,
  },
  reducers: {
    setPrivacyPolicyList: (state, action) => {
      state.privacyPolicyList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPrivacyPolicyList, setLoading, setError } = privacyPolicyListReducer.actions;
export default privacyPolicyListReducer.reducer;
