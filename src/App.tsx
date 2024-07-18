import { Outlet } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { PermissionContext } from "./contexts/PermissionContext";

const App = () => {
  const testUser = {
    role: "admin",
  };

  const testPerm = [
    {
      perm: "adminpanel",
      roles: ["admin"],
    },
  ];

  return (
    <UserContext.Provider value={testUser}>
      <PermissionContext.Provider value={testPerm}>
        <div className="min-h-screen flex flex-col dark:bg-neutral-800 dark:text-white">
          <main className="flex flex-col flex-1">
            <Outlet />
          </main>
          <footer />
        </div>
      </PermissionContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
