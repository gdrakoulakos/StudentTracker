import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roster: [
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
        id: state.roster[state.roster.length - 1] + 1,
        fullName: action.payload,
      };
      state.roster.push(newStudent);
    },
    removeStudent: (state, action) => {},
  },
});

export const { addStudent, removeStudent } = studentSlice.actions;
export default studentSlice.reducer;
