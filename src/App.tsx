import { Outlet } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";
import { useAppSelector } from "./hooks";

const App = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <UserContext.Provider value={user}>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex flex-col flex-1">
          <Outlet />
        </main>
        <footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
