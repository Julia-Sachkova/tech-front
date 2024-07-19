import { Outlet } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

const App = () => {
  const testUser = {
    role: "admin",
  };

  return (
    <UserContext.Provider value={testUser}>
      <div className="min-h-screen flex flex-col dark:bg-neutral-800 dark:text-white">
        <main className="flex flex-col flex-1">
          <Outlet />
        </main>
        <footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
