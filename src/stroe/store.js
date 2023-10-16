import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts/postsSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer
  },
});

export default store;
