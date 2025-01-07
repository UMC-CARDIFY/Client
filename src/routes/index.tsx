import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Archive } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/archive",
    element: <Archive />,
  },
]);

export default router;
