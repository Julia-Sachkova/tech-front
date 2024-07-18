import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Admin from "./pages/Admin/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Admin />,
      },
    ],
    errorElement: <div>Error 404 Not found</div>,
  },
]);
