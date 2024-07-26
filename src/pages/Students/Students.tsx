import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getStudents } from "../../store/reducers/studentSlice";

const Students = () => {
  const dispatch = useAppDispatch();

  const students = useAppSelector((state) => state.student.students);

  useEffect(() => {
    dispatch(getStudents());
  }, []);

  return (
    <ul className="grid grid-cols-4 gap-5 flex-1 h-fit">
      {students.map((student) => (
        <li
          className="flex flex-col items-center gap-3 h-fit px-5 py-3 bg-neutral-600 rounded-lg cursor-pointer"
          key={student.name}
        >
          {student.photo ? (
            <img src={student.photo} className="w-12 h-12 rounded-full" />
          ) : (
            <div className="bg-teal-300 w-12 h-12 rounded-full" />
          )}

          <span className="text-lg line-clamp-1">{student.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Students;
