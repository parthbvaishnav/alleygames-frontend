import rootReducer from "../reducers/rootReducer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    games: rootReducer,
  },
});

export default store;
