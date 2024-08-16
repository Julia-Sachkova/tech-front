import { createSlice } from "@reduxjs/toolkit";
import { LessonType } from "../../types/Lesson";

interface LessonsState {
  lessons: LessonType[];
}

const initialState: LessonsState = {
  lessons: [],
};

export const LessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    getLessons: (state) => {
      state.lessons = [
        {
          id: "0",
          title: "Lesson 1",
          description: "",
          date: "31.07.2024",
          link: "https://ik.imagekit.io/ikmedia/example_video.mp4",
          record: "",
          comments: "",
          homework: "",
          attachTasks: "",
          tags: "",
          status: "",
        },
        {
          id: "1",
          title: "Lesson 2",
          description: "",
          date: "31.08.2024",
          link: "https://ik.imagekit.io/ikmedia/example_video.mp4",
          record: "",
          comments: "",
          homework: "",
          attachTasks: "",
          tags: "",
          status: "",
        },
        {
          id: "2",
          title: "Lesson 3",
          description: "",
          date: "30.09.2024",
          link: "https://ik.imagekit.io/ikmedia/example_video.mp4",
          record: "",
          comments: "",
          homework: "",
          attachTasks: "",
          tags: "",
          status: "",
        },
        {
          id: "3",
          title: "Lesson 4",
          description: "",
          date: "31.10.2024",
          link: "https://ik.imagekit.io/ikmedia/example_video.mp4",
          record: "",
          comments: "",
          homework: "",
          attachTasks: "",
          tags: "",
          status: "",
        },
        {
          id: "4",
          title: "Lesson 5",
          description: "",
          date: "30.11.2024",
          link: "https://ik.imagekit.io/ikmedia/example_video.mp4",
          record: "",
          comments: "",
          homework: "",
          attachTasks: "",
          tags: "",
          status: "",
        },
      ];
    },
  },
});

export const { getLessons } = LessonsSlice.actions;

export default LessonsSlice.reducer;
