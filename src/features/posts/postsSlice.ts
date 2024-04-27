import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InternalPost } from "./useGetPosts";

const initialState = {
  posts: [] as InternalPost[],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<InternalPost[]>) => {
      state.posts = action.payload;
    },
    savePost: (state, action: PayloadAction<InternalPost>) => {
      state.posts.unshift(action.payload);
    },
  },
});

export const { setPosts, savePost } = postsSlice.actions;
export default postsSlice.reducer;
