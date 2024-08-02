import { Outlet } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";
import { useAppSelector, useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { getCurrentUser } from "./store/reducers/userSlice";

const App = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    localStorage.setItem("token", "token");

    const testUser = {
      name: "Test",
      github: "https://github.com/Julia-Sachkova",
      photo: "",
      contacts: "+79000000000",
      role: "user",
      level: 10,
    };

    dispatch(getCurrentUser(testUser));
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex flex-col flex-1 px-8 py-5 ">
          <Outlet />
        </main>
        <footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
