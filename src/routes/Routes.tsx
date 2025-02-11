import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths, adminRoutes } from "./AdminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/faculty",
    element: <App />,
    children: adminPaths,
  },
  {
    path: "/student",
    element: <App />,
    children: adminPaths,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
