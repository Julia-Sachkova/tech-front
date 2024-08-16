import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { useEffect } from "react";
import { getLessons } from "../../../store/reducers/lessonsSlice";

const Lessons = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLessons());
  }, []);

  return <Outlet />;
};

export default Lessons;
