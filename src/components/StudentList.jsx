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
      {students.map((student) => (
        <div key={student.id} style={{display:"flex", marginTop: "5px"}}>
          <div style={{width: "200px"}}>{student.fullName}</div>
          <button onClick={() => handleDeleteStudent(student.id)}>
            Delete Student
          </button>
        </div>
      ))}
    </div>
  );
};
