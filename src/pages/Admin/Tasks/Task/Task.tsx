import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../../hooks";
import { TaskType } from "../../../../types/Tasks";
import { Icon } from "@iconify/react";
import Preloader from "../../../../components/Preloader";
import Chip from "@mui/material/Chip";
import { ShowForPermission } from "../../../../components/ShowForPermission";
import { ADMIN } from "../../../../constants/roles";
import Comments from "./Comments/Comments";
import { Button } from "@mui/material";

const Task = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [task, setTask] = useState<TaskType>({} as TaskType);
  const [showComments, setShowComments] = useState(false);

  const tasks = useAppSelector((state) => state.tasks.tasks);

  useEffect(() => {
    const curTask = tasks.find((l) => l.id === id?.substring(1));

    setTask(curTask || ({} as TaskType));
  }, []);

  return (
    <>
      {task.id ? (
        <div className="flex flex-1 flex-col">
          <button onClick={() => navigate(-1)} className="text-lg w-fit mb-5">
            ← К заданиям
          </button>

          <div className="flex flex-col flex-1 gap-12 bg-neutral-600 p-5 rounded-xl drop-shadow-xl">
            <div className="flex flex-row items-center gap-5">
              <h3 className="text-4xl">{task.name}</h3>

              <ShowForPermission roles={[ADMIN]}>
                <Link to="/">
                  <Icon
                    icon="lucide:edit"
                    width="30"
                    height="30"
                    className="transition ease-in-out duration-300 hover:scale-110 text-neutral-300"
                  />
                </Link>
              </ShowForPermission>
            </div>

            <ul className="flex flex-col gap-2">
              <li className="flex flex-row gap-2">
                <span className="w-52 flex flex-row gap-1 items-center">
                  <Icon
                    icon="material-symbols:date-range"
                    width="20"
                    height="20"
                  />{" "}
                  Дата добавления:
                </span>
                <span>19.09.2024</span>
              </li>
              <li className="flex flex-row gap-2">
                <span className="w-52 flex flex-row gap-1 items-center">
                  <Icon icon="mdi:tag-outline" width="20" height="20" /> Тэги:
                </span>
                <ul className="flex flex-row gap-1">
                  {task.tags.map((tag) => (
                    <li key={tag.id}>
                      <Chip
                        label={tag.name}
                        color="primary"
                        variant="outlined"
                      />
                    </li>
                  ))}
                </ul>
              </li>
              <li className="flex flex-row gap-2">
                <span className="w-52 flex flex-row gap-1 items-center">
                  <Icon icon="ph:star-four-bold" width="20" height="20" /> Очки
                  опыта:
                </span>
                <span>{task.experience}</span>
              </li>
              <li className="flex flex-row gap-2">
                <span className="w-52 flex flex-row gap-1 items-center">
                  <Icon icon="ion:attach" width="20" height="20" />{" "}
                  Прикрепленный урок:
                </span>
                <span>{task.attachLesson ? task.attachLesson : "Нет"}</span>
              </li>
            </ul>

            <div className="flex flex-col">
              <span className="text-neutral-300 text-lg">Описание задачи</span>
              <p className="border-l  border-neutral-500 pl-2">
                {task.description}
              </p>
            </div>

            {showComments ? (
              <Button
                variant="outlined"
                onClick={() => setShowComments(!showComments)}
              >
                СКРЫТЬ КОММЕНТАРИИ
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => setShowComments(!showComments)}
              >
                ПОКАЗАТЬ КОММЕНТАРИИ
              </Button>
            )}

            {showComments && <Comments comments={task.comments} />}
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default Task;
