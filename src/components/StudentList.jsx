import { useSelector, useDispatch } from "react-redux";
import { removeStudent, increaseGrade, decreaseGrade } from "../studentSlice";

export const StudentList = () => {
  const students = useSelector((state) => state.classroom.students);
  const dispatch = useDispatch();

  const handleDeleteStudent = (id) => {
    dispatch(removeStudent(id));
  };

  const handleIncreaseGrade = (id) => {
    dispatch(increaseGrade(id));
  };

  const handleDecreaseGrade = (id) => {
    dispatch(decreaseGrade(id));
  };

  return (
    <div>
      <h2>Student List</h2>
      <div style={{ display: "flex" }}>
        <h4 style={{ width: "200px" }}>Name</h4> <h4>Grade</h4>
      </div>
      {students.map((student) => (
        <div
          key={student.id}
          style={{ display: "flex", marginTop: "5px", height: "40px" }}
        >
          <div style={{ width: "200px" }}>{student.fullName}</div>
          <button onClick={() => handleDecreaseGrade(student.id)}>-</button>
          <div
            style={{
              width: "50px",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            {student.grade}
          </div>
          <button onClick={() => handleIncreaseGrade(student.id)}>+</button>
          <div
            style={{
              width: "70px",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            {student.grade > 10 ? "Passed" : "Failed"}
          </div>
          <button
            style={{ marginLeft: "30px" }}
            onClick={() => handleDeleteStudent(student.id)}
          >
            Delete Student
          </button>
        </div>
      ))}
    </div>
  );
};
