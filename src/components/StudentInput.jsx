import { useState } from "react";
import { addStudent } from "../studentSlice";
import { useDispatch } from "react-redux";

export const StudentInput = () => {
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentGrade, setNewStudentGrade] = useState(null);
  const dispatch = useDispatch();
  const handleAddStudent = () => {
    if (newStudentName && newStudentGrade !== null) {
      dispatch(
        addStudent({ fullName: newStudentName, grade: Number(newStudentGrade) })
      );
      setNewStudentName("");
      setNewStudentGrade(null);
    }
  };

  return (
    <div>
      <h2>New Student</h2>
      <div style={{ display: "flex" }}>
        <h4 style={{ width: "200px" }}>Name</h4> <h4>Grade</h4>
      </div>
      <input
        style={{ width: "185px" }}
        onChange={(event) => setNewStudentName(event.target.value)}
      />{" "}
      <input
        style={{ width: "50px" }}
        onChange={(event) => setNewStudentGrade(event.target.value)}
      />{" "}
      <button style={{ marginLeft: "25px" }} onClick={handleAddStudent}>
        Add Student
      </button>
    </div>
  );
};
