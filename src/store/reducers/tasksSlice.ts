import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types/Tasks";

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks: (state) => {
      state.tasks = [
        {
          id: "0",
          name: "Test 1",
          description: "test test tesssdddddddddddddddddddddd ddssssssssst",
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
            id: "0",
            userId: "0",
            status: "0",
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
        },
        {
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
            id: "0",
            userId: "0",
            status: "0",
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
        },
        {
          id: "2",
          name: "Test 3",
          description: "test test tessddd ddddddddddsssssssssst",
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
            id: "0",
            userId: "0",
            status: "0",
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
        },
        {
          id: "3",
          name: "Test 4",
          description: "test test tesd dddddddddddddssssssssssst",
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
            id: "0",
            userId: "0",
            status: "0",
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
        },
        {
          id: "4",
          name: "Test 5",
          description: "test test tesssddddddddddddddddddddddd ssssssssst",
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
            id: "0",
            userId: "0",
            status: "0",
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
        },
      ];
    },
  },
});

export const { getTasks } = TasksSlice.actions;

export default TasksSlice.reducer;
