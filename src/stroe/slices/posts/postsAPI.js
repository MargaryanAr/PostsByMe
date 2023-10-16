import { createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../../MyAxios";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",

  async function () {
    const { data } = await myAxios.get("/posts");

    return data;
  }
);

export const addPost = createAsyncThunk(
  "posts/addPosts",

  async function (newPost) {
    const {data} = await myAxios.post("/posts/", newPost)

    return data

  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",

  async function (id) {
    await myAxios.delete("/posts/" + id);
    return id;
  }
);

export const changePost = createAsyncThunk(
  "posts/changePosts",

  async function (changedPost) {
    const { data } = await myAxios.put('/posts/' + changedPost.id, changedPost);
    return { changedPost: data };
  }
);




