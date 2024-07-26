import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { getCurrentUser } from "../../store/reducers/userSlice";

const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const testUser = {
      name: "Test",
      github: "https://github.com/Julia-Sachkova",
      photo: "",
      contacts: "+79000000000",
      role: "admin",
      level: 10,
    };

    dispatch(getCurrentUser(testUser));
  }, []);

  return (
    <section>
      <span>main</span>
    </section>
  );
};

export default Main;
