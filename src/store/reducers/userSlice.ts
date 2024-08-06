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
    getCurrentUser: (state) => {
      const testUser = {
        name: "Test",
        github: "https://github.com/Julia-Sachkova",
        photo: "",
        contacts: "+79000000000",
        role: "user",
        level: 10,
      };

      state.user = testUser;
    },
  },
});

export const { getCurrentUser } = userSlice.actions;

export default userSlice.reducer;
