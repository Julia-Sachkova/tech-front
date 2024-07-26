import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    name: "",
    github: "",
    photo: "",
    contacts: "",
    role: "",
    level: 0,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getCurrentUser: (state, value) => {
      state.user = value.payload;
    },
  },
});

export const { getCurrentUser } = userSlice.actions;

export default userSlice.reducer;
