import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { getUser } from "../../store/reducers/userSlice";

const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const testUser = {
      role: "admin",
    };

    dispatch(getUser(testUser));
  }, []);

  return (
    <section>
      <span>main</span>
    </section>
  );
};

export default Main;
