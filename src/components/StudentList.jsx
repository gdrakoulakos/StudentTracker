import { useSelector, useDispatch } from "react-redux";
import { removeStudent } from "../studentSlice";

export const StudentList = () => {
  const students = useSelector((state) => state.classroom.students);
  const dispatch = useDispatch();

  const handleDeleteStudent = (id) => {
    dispatch(removeStudent(id));
  };

  return (
    <div>
      <h2>Student List</h2>
      <div style={{ display: "flex" }}>
        <h4 style={{ width: "200px" }}>Name</h4> <h4>Grade</h4>
      </div>
      {students.map((student) => (
        <div key={student.id} style={{ display: "flex", marginTop: "5px" }}>
          <div style={{ width: "200px" }}>{student.fullName}</div>
          <div style={{ width: "50px" }}>{student.grade}</div>
          <button
            style={{ marginLeft: "35px" }}
            onClick={() => handleDeleteStudent(student.id)}
          >
            Delete Student
          </button>
        </div>
      ))}
    </div>
  );
};
