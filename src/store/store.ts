import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import studentSlice from "./reducers/studentSlice";
import tasksSlice from "./reducers/tasksSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    student: studentSlice,
    tasks: tasksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
