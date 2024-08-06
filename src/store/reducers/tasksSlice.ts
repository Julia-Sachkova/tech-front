import { createSlice } from "@reduxjs/toolkit";
import { Task, TaskModule } from "../../types/Tasks";

interface TasksState {
  tasks: Task[];
  taskModules: TaskModule[];
}

const initialState: TasksState = {
  tasks: [],
  taskModules: [
    {
      id: "0",
      name: "backend",
    },
    {
      id: "1",
      name: "frontend",
    },
  ],
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
          block: "0",
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
          createDate: new Date(),
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
              createDate: new Date(),
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
          block: "1",
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
          createDate: new Date(),
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
              createDate: new Date(),
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
          block: "0",
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
          createDate: new Date(),
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
              createDate: new Date(),
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
          block: "0",
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
          createDate: new Date(),
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
              createDate: new Date(),
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
          block: "1",
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
          createDate: new Date(),
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
              createDate: new Date(),
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
