import { Outlet } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";
import { useAppSelector } from "./hooks";
import { useEffect } from "react";

const App = () => {
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    localStorage.setItem("token", "token");
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
