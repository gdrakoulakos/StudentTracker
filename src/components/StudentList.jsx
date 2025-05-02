import { useSelector, useDispatch } from "react-redux";
import { removeStudent } from "../studentSlice";

export const StudentList = () => {
  const students = useSelector((state) => state.students.roster);
  const dispatch = useDispatch();

  const handleDeleteStudent = (id) => {
    dispatch(removeStudent(id));
  };

  return (
    <div>
      <h2>Student List</h2>
      {students.map((student) => (
        <div key={student.id}>
          {student.fullName}
          <button onClick={() => handleDeleteStudent(student.id)}>
            Delete Student
          </button>
        </div>
      ))}
    </div>
  );
};
