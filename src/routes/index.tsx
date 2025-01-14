import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/mainLayout";
import { Archive, Flashcard, Library, Mypage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/archive",
        element: <Archive />,
      },
      {
        path: "/flashcard",
        element: <Flashcard />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
    ],
  },
]);

export default router;
