import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";

interface StudentState {
  students: User[];
}

const initialState: StudentState = {
  students: [],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    getStudents: (state) => {
      state.students = [
        {
          name: "Test 1",
          github: "https://github.com/Julia-Sachkova",
          photo: "",
          contacts: "+79000000000",
          role: "student",
          level: 10,
        },
        {
          name: "Test 2",
          github: "https://github.com/Julia-Sachkova",
          photo: "",
          contacts: "+79000000001",
          role: "student",
          level: 11,
        },
        {
          name: "Test 3",
          github: "https://github.com/Julia-Sachkova",
          photo: "",
          contacts: "+79000000002",
          role: "student",
          level: 12,
        },
        {
          name: "Test 4",
          github: "https://github.com/Julia-Sachkova",
          photo: "",
          contacts: "+79000000003",
          role: "student",
          level: 13,
        },
        {
          name: "Test 5",
          github: "https://github.com/Julia-Sachkova",
          photo: "",
          contacts: "+79000000004",
          role: "student",
          level: 14,
        },
      ];
    },
  },
});

export const { getStudents } = studentSlice.actions;

export default studentSlice.reducer;
