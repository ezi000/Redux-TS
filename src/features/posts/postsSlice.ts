import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 0,
    author: "John Doe",
    title: "First Post!",
    content: "Hello!",
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
