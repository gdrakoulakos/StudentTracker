import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action) => {},
  },
});

export const { addStudent, removeStudent } = studentSlice.actions;
export default studentSlice.reducer;
