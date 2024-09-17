import { createBrowserRouter, Navigate } from "react-router-dom";
import { ADMIN } from "./constants/roles";
import { ProtectedRoute } from "./components/ProtectedRoute";
import App from "./App";
import Admin from "./pages/Admin/Admin";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Students from "./pages/Admin/Students/Students";
import Lessons from "./pages/Admin/Lessons/Lessons";
import Tasks from "./pages/Admin/Tasks/Tasks";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import General from "./pages/Profile/General/General";
import Achievements from "./pages/Profile/Achievements/Achievements";
import Payment from "./pages/Profile/Payment/Payment";
import Settings from "./pages/Profile/Settings/Settings";
import Lesson from "./pages/Admin/Lessons/Lesson/Lesson";
import LessonsList from "./pages/Admin/Lessons/LessonsList/LessonsList";
import TasksList from "./pages/Admin/Tasks/TasksList/TasksList";
import Task from "./pages/Admin/Tasks/Task/Task";

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
            element: <General />,
          },
          {
            element: <Lessons />,
            children: [
              {
                path: "lessons",
                element: <LessonsList />,
              },
              {
                path: "lessons/:id",
                element: <Lesson />,
              },
            ],
          },
          {
            element: <Tasks />,
            children: [
              {
                path: "issues",
                element: <TasksList />,
              },
              {
                path: "issues/:id",
                element: <Task />,
              },
            ],
          },
          {
            path: "achievements",
            element: <Achievements />,
          },
          {
            path: "payment",
            element: <Payment />,
          },
          {
            path: "settings",
            element: <Settings />,
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
            element: <Lessons />,
            children: [
              {
                path: "lessons",
                element: <LessonsList />,
              },
              {
                path: "lessons/:id",
                element: <Lesson />,
              },
            ],
          },
          {
            element: <Tasks />,
            children: [
              {
                path: "issues",
                element: <TasksList />,
              },
              {
                path: "issues/:id",
                element: <Task />,
              },
            ],
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
