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
        <h2>New Student</h2>
        
      <input onChange={(event) => setNewStudent(event.target.value)} />{" "}
      <button style={{marginLeft:"25px"}} onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};
