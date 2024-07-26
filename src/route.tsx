import { createBrowserRouter, Navigate } from "react-router-dom";
import { ADMIN } from "./constants/roles";
import { ProtectedRoute } from "./components/ProtectedRoute";
import App from "./App";
import Admin from "./pages/Admin/Admin";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Students from "./pages/Students/Students";
import Lessons from "./pages/Lessons/Lessons";
import Tasks from "./pages/Tasks/Tasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/profile",
        element: <div>profile</div>,
      },
      {
        path: "/adminpanel",
        element: (
          <ProtectedRoute roles={[ADMIN]}>
            <Admin />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Navigate replace to="students" />,
          },
          {
            path: "students",
            element: <Students />,
          },
          {
            path: "lessons",
            element: <Lessons />,
          },
          {
            path: "tasks",
            element: <Tasks />,
          },
        ],
      },
    ],
    errorElement: <div>Error 404 Not found</div>,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
