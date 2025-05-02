import { useState } from "react";
import { addStudent } from "../studentSlice";
import { useDispatch } from "react-redux";

export const StudentInput = () => {
  const [newStudent, setNewStudent] = useState("");
  const dispatch = useDispatch();
  const handleAddStudent = () => {
    if (newStudent) {
      dispatch(addStudent(newStudent));
      setNewStudent("")
    }
  };

  return (
    <div>
      <input onChange={(event) => setNewStudent(event.target.value)} />{" "}
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};
