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
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

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
        element: <Profile />,
        children: [
          {
            index: true,
            element: <Navigate replace to="general" />,
          },
          {
            path: "general",
            element: <div>home</div>,
          },
          {
            path: "achievements",
            element: <div>achievements</div>,
          },
          {
            path: "payment",
            element: <div>payment</div>,
          },
        ],
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
    errorElement: <NotFound />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
