import { useAppSelector } from "../../../../hooks";
import { Link } from "react-router-dom";

const LessonsList = () => {
  const lessons = useAppSelector((state) => state.lessons.lessons);

  return (
    <ul className="grid grid-cols-4 gap-5 flex-1 h-fit">
      {lessons.map((lesson) => (
        <li key={lesson.id}>
          <Link
            to={`:${lesson.id}`}
            className="flex flex-col items-start gap-3 h-full px-5 py-3 bg-neutral-600 rounded-lg shadow-xl cursor-pointer transition ease-in-out duration-300 hover:scale-110 hover:drop-shadow-xl"
          >
            <span className="text-neutral-300">{lesson.date}</span>

            <span className="text-lg font-semibold">{lesson.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LessonsList;
