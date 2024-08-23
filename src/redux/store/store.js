import categoryReducer from "../reducers/categoryReducer";
import filterReducer from "../reducers/filterReducer";
import rootReducer from "../reducers/rootReducer";

import { configureStore } from "@reduxjs/toolkit";
import statusSlice from "../reducers/statusSlice";
import categoryFilter from "../reducers/categoryFilter";
import gameLinkReducer from "../reducers/gameLinkReducer";
import singleGameReducer from "../reducers/singleGameReducer";
import blogListReducer from "../reducers/blogListReducer";
import similarGameReducer from "../reducers/similarGameReducer";
import blogSingleReducer from "../reducers/blogSingleReducer";
const store = configureStore({
  reducer: {
    games: rootReducer,
    filter: filterReducer,
    categories:categoryReducer,
    status: statusSlice,
    category_filter: categoryFilter,
    gameLink: gameLinkReducer,
    singleGame:singleGameReducer,
    similarGame:similarGameReducer,
    blogList: blogListReducer,
    blogSingle: blogSingleReducer
  },
});

export default store;
