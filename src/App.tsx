import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { getCurrentUser } from "./store/reducers/userSlice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem("token", "token");

    dispatch(getCurrentUser());
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col flex-1 px-8 py-5 ">
        <Outlet />
      </main>
      <footer />
    </div>
  );
};

export default App;
