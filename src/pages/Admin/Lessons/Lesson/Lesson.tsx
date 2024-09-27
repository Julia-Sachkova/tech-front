import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../../hooks";
import { LessonType } from "../../../../types/Lesson";
import Preloader from "../../../../components/Preloader";

const Lesson = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [lesson, setlesson] = useState<LessonType>({} as LessonType);

  const lessons = useAppSelector((state) => state.lessons.lessons);

  useEffect(() => {
    const curLesson = lessons.find((l) => l.id === id?.substring(1));

    setlesson(curLesson || ({} as LessonType));
  }, []);

  return (
    <>
      {lesson.id ? (
        <div className="flex flex-1 flex-col">
          <button onClick={() => navigate(-1)} className="text-lg w-fit mb-10">
            ← К занятиям
          </button>

          <div className="flex flex-col gap-2 mb-4">
            <h3 className="text-5xl">{lesson.title}</h3>
            <span className="text-neutral-400">{lesson.date}</span>
          </div>

          <video controls className="w-full" src={lesson.link} />
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default Lesson;
