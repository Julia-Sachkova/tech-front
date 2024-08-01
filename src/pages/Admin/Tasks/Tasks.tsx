import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getTasks } from "../../../store/reducers/tasksSlice";

const Tasks = () => {
  const dispatch = useAppDispatch();

  const tasks = useAppSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <ul className="grid grid-cols-4 gap-5 flex-1 h-fit">
      {tasks.map((task) => (
        <li
          className="flex flex-col items-start gap-3 h-full px-5 py-3 bg-neutral-600 rounded-lg shadow-xl cursor-pointer transition ease-in-out duration-300 hover:scale-110 hover:drop-shadow-xl"
          key={task.id}
        >
          <span className="text-lg font-semibold">{task.name}</span>

          <p className="line-clamp-2">{task.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
