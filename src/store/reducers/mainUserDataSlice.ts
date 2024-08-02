import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types/Tasks";
import { Lesson } from "../../types/Lesson";

interface MainUserDataState {
  mainTask: Task;
  nextLesson: Lesson;
}

const initialState: MainUserDataState = {
  mainTask: {
    id: "",
    name: "",
    description: "",
    block: {
      id: "",
      name: "",
    },
    tags: [
      {
        id: "",
        name: "",
      },
    ],
    photoAndFiles: [
      {
        id: "",
        path: "",
      },
    ],
    createDate: new Date("26.07.2024"),
    status: {
      id: "",
      userId: "",
      status: "",
    },
    comments: [
      {
        id: "",
        userName: "",
        userId: "",
        text: "",
        createDate: new Date("26.07.2024"),
      },
    ],
    subtask: "",
    isPreviosNecessary: true,
    attachLesson: "",
    experience: 0,
  },

  nextLesson: {
    id: "",
    title: "",
    description: "",
    date: "",
    link: "",
    record: "",
    comments: "",
    homework: "",
    attachTasks: "",
    tags: "",
    status: "",
  },
};

export const mainUserDataSlice = createSlice({
  name: "mainUserData",
  initialState,
  reducers: {
    getMainTask: (state) => {
      state.mainTask = {
        id: "1",
        name: "Test 2",
        description: "test test tessssssd   dddddddddddddddddddsssssst",
        block: {
          id: "0",
          name: "test",
        },
        tags: [
          {
            id: "0",
            name: "test 1",
          },
          {
            id: "1",
            name: "test 2",
          },
        ],
        photoAndFiles: [
          {
            id: "0",
            path: "0",
          },
        ],
        createDate: new Date("26.07.2024"),
        status: {
          id: "1",
          userId: "1",
          status: "1",
        },
        comments: [
          {
            id: "0",
            userName: "0",
            userId: "0",
            text: "0",
            createDate: new Date("26.07.2024"),
          },
        ],
        subtask: "",
        isPreviosNecessary: true,
        attachLesson: "",
        experience: 0,
      };
    },
    getNextLesson: (state) => {
      state.nextLesson = {
        id: "4",
        title: "Lesson 5",
        description: "",
        date: "30.11.2024",
        link: "",
        record: "",
        comments: "",
        homework: "",
        attachTasks: "",
        tags: "",
        status: "",
      };
    },
  },
});

export const { getMainTask, getNextLesson } = mainUserDataSlice.actions;

export default mainUserDataSlice.reducer;
