import categoryReducer from "../reducers/categoryReducer";
import filterReducer from "../reducers/filterReducer";
import rootReducer from "../reducers/rootReducer";

import { configureStore } from "@reduxjs/toolkit";
import statusSlice from "../reducers/statusSlice";
import categoryFilter from "../reducers/categoryFilter";
import gameLinkReducer from "../reducers/gameLinkReducer";
import singleGameReducer from "../reducers/singleGameReducer";
import blogListReducer from "../reducers/blogListReducer";
const store = configureStore({
  reducer: {
    games: rootReducer,
    filter: filterReducer,
    categories:categoryReducer,
    status: statusSlice,
    category_filter: categoryFilter,
    gameLink: gameLinkReducer,
    singleGame:singleGameReducer,
    blogList: blogListReducer
  },
});

export default store;
