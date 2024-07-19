import { createBrowserRouter } from "react-router-dom";
import { ADMIN } from "./constants/roles";
import { ProtectedRoute } from "./components/ProtectedRoute";
import App from "./App";
import Admin from "./pages/Admin/Admin";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";

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
      },
    ],
    errorElement: <div>Error 404 Not found</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
