import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    { id: 1, fullName: "George Drakoulakos", grade: 17 },
    { id: 2, fullName: "John Smith", grade: 19 },
    { id: 3, fullName: "Mike Ford", grade: 16 },
  ],
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const lastStudent = state.students[state.students.length - 1];
      const newId = lastStudent ? lastStudent.id + 1 : 1;
      const newStudent = {
        id: newId,
        fullName: action.payload.fullName,
        grade: action.payload.grade,
      };
      state.students.push(newStudent);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    increaseGrade: (state, action) => {
      const student = state.students.find(
        (student) => student.id === action.payload
      );
      if (student) {
        student.grade += 1;
      }
    },
    decreaseGrade: (state, action) => {
      const student = state.students.find(
        (student) => student.id === action.payload
      );
      if (student) {
        student.grade -= 1;
      }
    },
  },
});

export const { addStudent, removeStudent, increaseGrade, decreaseGrade } =
  studentSlice.actions;
export default studentSlice.reducer;
