import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import studentSlice from "./reducers/studentSlice";
import tasksSlice from "./reducers/tasksSlice";
import lessonsSlice from "./reducers/lessonsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    student: studentSlice,
    tasks: tasksSlice,
    lessons: lessonsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
