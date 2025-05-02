import { useSelector } from "react-redux";

export const StudentList = () => {
  const students = useSelector((state) => state.students.roster);
  return (
    <div>
      <h2>Student List</h2>
      {students.map((student) => (
        <div key={student.id}>{student.fullName}</div>
      ))}
    </div>
  );
};
