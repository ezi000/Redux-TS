import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InternalUser } from "../posts/useGetUsers";
const initialState = {
  users: [] as InternalUser[],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<InternalUser[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
