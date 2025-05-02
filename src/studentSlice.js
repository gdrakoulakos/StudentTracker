import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: [
    { id: 1, fullName: "George Drakoulakos" },
    { id: 2, fullName: "John Smith" },
  ],
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const newStudent = {
        id: state.students[state.students.length - 1] + 1,
        fullName: action.payload,
      };
      state.students.push(newStudent);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export const { addStudent, removeStudent } = studentSlice.actions;
export default studentSlice.reducer;
