import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { useEffect } from "react";
import { getTasks } from "../../../store/reducers/tasksSlice";

const Tasks = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return <Outlet />;
};

export default Tasks;
