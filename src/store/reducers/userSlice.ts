import { createSlice } from "@reduxjs/toolkit";

interface User {
  role: string;
}

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    role: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, value) => {
      state.user = value.payload;
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
