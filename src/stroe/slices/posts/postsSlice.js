import { createSlice } from "@reduxjs/toolkit";
import { addPost, changePost, deletePost, fetchPosts } from "./postsAPI";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.push(...payload);
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      const idx = state.findIndex((post) => post.id === payload);
      state.splice(idx, 1);
    },
    [addPost.fulfilled]: (state, {payload}) => {
      state.push(payload)
    },
    [changePost.fulfilled]: (state, { payload }) => {

      const idx = state.findIndex((post) => post.id === payload.changedPost.id);
      state[idx] = payload.changedPost;
    }    
  },
});

export const selectPosts = (state) => state.posts;

export const {} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
