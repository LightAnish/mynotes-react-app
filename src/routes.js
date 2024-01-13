import { createBrowserRouter, Route } from "react-router-dom";
import MyNotes from "./pages/mynotes/MyNotes";
import Users from "./pages/users/Users";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MyNotes />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);

export default routes;
